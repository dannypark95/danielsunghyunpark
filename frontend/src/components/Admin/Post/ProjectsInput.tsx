import React, { useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";
import api from "../../../utils/api";

interface ProjectOption {
  value: string;
  label: string;
}

interface ProjectInputProps {
  project: ProjectOption | null;
  setProject: (project: ProjectOption | null) => void;
}

const ProjectsInput: React.FC<ProjectInputProps> = ({
  project,
  setProject,
}) => {
  const [options, setOptions] = useState<ProjectOption[]>([]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const fetchedProjects = await api.fetchProjects();
        const projectOptions: ProjectOption[] = fetchedProjects.map(
          (project: any) => ({
            value: project.id.toString(),
            label: project.name,
          })
        );
        setOptions(projectOptions);
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };

    loadProjects();
  }, []);

  const handleChange = (selectedOption: ProjectOption | null) => {
    setProject(selectedOption);
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Project
        </label>
        <CreatableSelect
          options={options}
          onChange={handleChange}
          value={project ? [project] : []}
        />
      </div>
    </div>
  );
};

export default ProjectsInput;
