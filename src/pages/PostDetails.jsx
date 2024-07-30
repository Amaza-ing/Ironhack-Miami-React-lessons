import { useParams } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import { useContext, useEffect, useState } from "react";
import { BlogContext } from "../context/blog.context";

function PostDetails() {
  const { id } = useParams();

  const { getPost } = useContext(BlogContext);

  const [post, setPost] = useState();

  const obtainPost = async (id) => {
    const data = await getPost(id);
    setPost(data);    
  }

  useEffect(() => {
    obtainPost(id);
  }, [id]);

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
