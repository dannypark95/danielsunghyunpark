import React from "react";
import Giscus from "@giscus/react";

const CommentsSection: React.FC = () => (
  <div className="mt-8 mb-10">
    <Giscus
      repo="dannypark95/danielsunghyunpark"
      repoId="R_kgDOLEUA2w"
      category="Announcements"
      categoryId="DIC_kwDOLEUA284CcfzW"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="preferred_color_scheme"
      lang="en"
    />
  </div>
);

export default CommentsSection;
