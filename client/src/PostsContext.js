import { createContext, useState } from "react";

const PostsContext = createContext([]);

export function PostsProvider({ children }) {
  const [postsContext, setPostsContext] = useState([]);

  return (
    <PostsContext.Provider value={{ postsContext, setPostsContext }}>
      {children}
    </PostsContext.Provider>
  );
}

export default PostsContext;
