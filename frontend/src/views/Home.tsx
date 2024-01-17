import React from "react";
import Profile from "../components/Profile/Profile";
import PostsList from "../components/PostsList/PostsList";
import TagList from "../components/TagList/TagList";

const Home: React.FC = () => {
  return (
    <div className="flex justify-center min-h-screen pt-4 lg:pt-0">
      <div className="flex flex-col lg:flex-row items-center lg:items-start max-w-7xl mx-auto">
        <div className="flex flex-col items-center lg:flex-grow lg:pl-[103px]">
          <Profile />
          <PostsList />
        </div>
        <div className="hidden lg:block ml-[20px] mt-[340px]">
          <TagList />
        </div>
      </div>
    </div>
  );
};

export default Home;
