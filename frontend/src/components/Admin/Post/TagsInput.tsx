import React, { useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";
import api from "../../../utils/api";

interface TagOption {
  value: string;
  label: string;
}

interface TagsInputProps {
  tags: TagOption[];
  setTags: (tags: TagOption[]) => void;
}

const TagsInput: React.FC<TagsInputProps> = ({ tags, setTags }) => {
  const [options, setOptions] = useState<TagOption[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadTags = async () => {
      try {
        const fetchedTags = await api.fetchTags();
        const tagOptions: TagOption[] = fetchedTags.map((tag: any) => ({
          value: tag.id.toString(),
          label: tag.name,
        }));
        setOptions(tagOptions);
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };

    loadTags();
  }, []);

  const handleChange = (selectedOptions: any) => {
    const newTags: TagOption[] = selectedOptions
      ? selectedOptions.map((option: any) => ({
          value: option.value,
          label: option.label,
        }))
      : [];
    setTags(newTags);
  };

  const handleCreate = (inputValue: string) => {
    setIsLoading(true);
    setTimeout(() => {
      const newOption = {
        label: inputValue,
        value: inputValue,
      };
      setIsLoading(false);
      setTags([...tags, newOption]);
    }, 1000);
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Tags
        </label>
        <CreatableSelect
          isMulti
          options={options}
          onChange={handleChange}
          onCreateOption={handleCreate}
          isLoading={isLoading}
          isDisabled={isLoading}
          value={tags}
        />
      </div>
    </div>
  );
};

export default TagsInput;
