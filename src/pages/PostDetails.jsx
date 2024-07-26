import { useParams } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import { useEffect, useState } from "react";

function PostDetails() {
  const { id } = useParams();

  const [post, setPost] = useState();

  const getPost = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
    console.log(data);
    setPost(data);
  };

  useEffect(() => {
    getPost(id);
  }, [id])

  return (
    <>
      <HeaderComponent></HeaderComponent>

      {!post && <h2>Loading...</h2>}
      {post && (
        <section>
          <h2>{post.title}</h2>
          <h3>{post.body}</h3>
        </section>
      )}
    </>
  );
}

export default PostDetails;
