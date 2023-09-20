import Post from "../chat/chat_build";
import "./post_build.scss";
import { useQuery } from "react-query";
import { makeRequest } from "../../axios";

const Posts = () => {
  const { isLoading, error, data } = useQuery("posts", () =>
    makeRequest.get("/posts").then((res) => {
      return res.data;
    })
  );
  return (
    <div className="chats">
      {error
        ? "Oops !!"
        : isLoading
        ? "Wait Please. It is loading."
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
};

export default Posts;
