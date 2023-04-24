import React from "react";
import "./post.css"
const Post = ({ele}) => {
  // console.log(ele);
  return (
    <div className="post">
      <h1>
        {/* Here show the title of the post  */
        ele.title}
      </h1>
      <h3>
        {/* Here show the body of the post  */
        ele.body}
      </h3>
    </div>
  );
};

export default Post;
