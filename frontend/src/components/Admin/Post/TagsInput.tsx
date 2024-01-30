import React from "react";
// import Select, { ActionMeta, MultiValue } from "react-select/async";

interface TagsInputProps {
  tags: string[];
  setTags: (tags: string[]) => void;
  loadTags: (inputValue: string) => Promise<any>;
}

const TagsInput: React.FC<TagsInputProps> = ({ tags, setTags, loadTags }) => {
  //   const tagOptions = tags.map((tag) => ({ label: tag, value: tag }));

  //   const handleChange = (
  //     newValue: MultiValue<{ label: string; value: string }>,
  //     actionMeta: ActionMeta<{ label: string; value: string }>
  //   ) => {
  //     if (
  //       actionMeta.action === "remove-value" ||
  //       actionMeta.action === "pop-value"
  //     ) {
  //       setTags(newValue.map((option) => option.value));
  //     } else if (actionMeta.action === "select-option" && actionMeta.option) {
  //       setTags([...tags, actionMeta.option.value]);
  //     }
  //   };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">Tags</label>
      {/* <Select
        isMulti
        loadOptions={loadTags}
        onChange={handleChange}
        value={tagOptions}
      /> */}
    </div>
  );
};

export default TagsInput;
