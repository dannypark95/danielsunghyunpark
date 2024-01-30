import React, { useState } from "react";
import TitleInput from "./TitleInput";
import TagsInput from "./TagsInput";
import ProjectsInput from "./ProjectsInput";
import ContentEditor from "./ContentEditor";

const AdminPost: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState({});
  const [tags, setTags] = useState<string[]>([]);
  const [project, setProject] = useState("");

  // Dummy function to load tags/projects, replace with real data fetching logic
  const loadOptions = async (inputValue: string) => {
    return [{ value: inputValue, label: inputValue }];
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ title, content, tags, project });
    // Submit logic here
  };

  // Function to handle slug changes
  const handleSlugChange = (newSlug: string) => {
    // Handle slug state if needed
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#15171A] text-[#15171A] px-4">
      <div className="w-full max-w-4xl mx-auto p-6 space-y-6 bg-white rounded shadow">
        <form onSubmit={handleSubmit} className="space-y-6">
          <TitleInput
            initialTitle={title}
            onTitleChange={setTitle}
            onSlugChange={handleSlugChange}
          />
          <TagsInput tags={tags} setTags={setTags} loadTags={loadOptions} />
          <ProjectsInput
            project={project}
            setProject={setProject}
            loadProjects={loadOptions}
          />
          <ContentEditor setContent={setContent} />
          <div className="flex justify-end gap-4">
            {/* TODO: 
              - When you are editing current
                - 'Save as Draft' will save new copy as Draft and will keep the current one.
                - 'Post' will save new verion and display new version
              - When you are posting new
                - 'Save as Draft' will save new draft
                - 'Post' will create new post */}
            <button
              type="button"
              className="px-6 py-2 text-sm text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
            >
              Save as Draft
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminPost;
