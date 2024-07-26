import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import HeaderComponent from "../components/HeaderComponent";

function Blog() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const postCards = posts.map((post) => {
    return (
      <li key={post.id}>
        <PostCard post={post}></PostCard>
      </li>
    );
  });

  return (
    <>
      <HeaderComponent></HeaderComponent>

      <section>
        <h2>Blog</h2>

        <ul>{postCards}</ul>
      </section>
    </>
  );
}

export default Blog;
