import { useContext, useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import HeaderComponent from "../components/HeaderComponent";
import { BlogContext } from "../context/blog.context";

function Blog() {
  const { posts, getPosts } = useContext(BlogContext);

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
