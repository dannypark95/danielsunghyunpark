import React from "react";
import Select from "react-select/async";
import { SingleValue } from "react-select";

interface ProjectsInputProps {
  project: string;
  setProject: (project: string) => void;
  loadProjects: (inputValue: string) => Promise<any>;
}

const ProjectsInput: React.FC<ProjectsInputProps> = ({
  project,
  setProject,
  loadProjects,
}) => {
  const handleChange = (
    newValue: SingleValue<{ label: string; value: string }>
  ) => {
    setProject(newValue ? newValue.value : ""); // Update the project state with the value
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Project
      </label>
      <Select
        cacheOptions
        defaultOptions
        loadOptions={loadProjects}
        onChange={handleChange}
        value={{ label: project, value: project }}
      />
    </div>
  );
};

export default ProjectsInput;
