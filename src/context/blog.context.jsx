import { createContext, useState } from "react";

const BlogContext = createContext();

function BlogProviderWrapper(props) {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
    setPosts(data);
  };

  const getPost = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
    console.log(data);
    return data;
  };

  return (
    <BlogContext.Provider value={{ posts, setPosts, getPosts, getPost }}>
      {props.children}
    </BlogContext.Provider>
  );
}

export { BlogContext, BlogProviderWrapper };

