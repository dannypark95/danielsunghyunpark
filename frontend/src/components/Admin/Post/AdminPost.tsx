import React, { useState } from "react";
import { Link } from "react-router-dom";
import TitleInput from "./TitleInput";
import TagsInput from "./TagsInput";
import ProjectsInput from "./ProjectsInput";
import ContentEditor from "./ContentEditor";
import api from "../../../utils/api";

// Define the type for tag options to be used in the state
interface TagOption {
  value: string;
  label: string;
}

interface ProjectOption {
  value: string;
  label: string;
}

const AdminPost: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState({});
  const [tags, setTags] = useState<TagOption[]>([]);
  const [project, setProject] = useState<ProjectOption | null>(null);
  const [url, setURL] = useState(""); // Add this state

  const handleURLChange = (newURL: string) => {
    setURL(newURL); // Set the URL state
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let processedTagIds = [];

    for (const tag of tags) {
      if (tag.value === tag.label) {
        // Tag is new, create it
        try {
          const newTag = await api.createTag(tag.label); // Implement createTag in your API module
          processedTagIds.push(newTag.id); // Assuming the newTag object has an id property
        } catch (error) {
          console.error("Error creating new tag:", error);
          return;
        }
      } else {
        // Tag is existing, use its value as ID
        processedTagIds.push(tag.value);
      }
    }

    console.log(processedTagIds);

    try {
      const postData = {
        title,
        content,
        tags: processedTagIds,
        project: project?.value,
        status: "live",
        slug: url,
      };
      const response = await api.postBlogPost(postData); // Implement postBlogPost in your API module
      console.log("Blog post created successfully", response);
      // Handle success, e.g., clear the form or redirect
    } catch (error) {
      console.error("Error creating blog post:", error);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#15171A] text-[#15171A] px-4">
      <div className="w-full max-w-4xl mx-auto p-6 space-y-6 bg-white rounded shadow">
        <form onSubmit={handleSubmit} className="space-y-6">
          <TitleInput
            initialTitle={title}
            onTitleChange={setTitle}
            onURLChange={handleURLChange}
          />
          <TagsInput tags={tags} setTags={setTags} />
          <ProjectsInput project={project} setProject={setProject} />
          <hr></hr>
          <ContentEditor setContent={setContent} />
          <div className="flex justify-end gap-4">
            <Link
              to="/admin/dashboard"
              className="text-white bg-gray-500 hover:bg-gray-700 text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Back to Dashboard
            </Link>

            {/* TODO: Implement draft and post submission logic */}
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
