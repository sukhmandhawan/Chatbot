import "./chat_build.scss";
import { IoIosMore } from "react-icons/io";
import { AuthContext } from "../../context/authContext";
import { MdOutlineModeComment } from "react-icons/md";
import { Link } from "react-router-dom";
import profilePhoto from "../../assets/Person.png";
import { useContext, useState } from "react";
import Comments from "../reply/reply";
import moment from "moment";
import { QueryClient, useMutation } from "react-query";
import { makeRequest } from "../../axios";


const Post = ({ post }) => {

  const handleDelete = () => {
    deleteMutation.mutate(post.id);
  };
  
  const [commentOpen, setCommentOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const deleteMutation = useMutation(
    (postId) => {
      return makeRequest.delete("/posts/" + postId);
    },
    {
      onSuccess: () => {
        QueryClient.invalidateQueries(["posts"]);
      },
    }
  );
  
  return (
    <div className="chat">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={profilePhoto} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">{moment(post.createdAt).fromNow()}</span>
            </div>
          </div>
          <IoIosMore onClick={() => setMenuOpen(!menuOpen)} />

          {menuOpen && post.userId === currentUser.id && (
            <button onClick={handleDelete}>delete</button>
          )}
        </div>
        <div className="content">
        <p>{post.desc}</p>
          {post.img && (
          <img src={"/upload/" + post.img} alt="" />
          )}
        </div>
        <div className="info">
          <div className="item " onClick={() => setCommentOpen(!commentOpen)}>
            <MdOutlineModeComment />
            Replies  👍   👎
          </div>
        </div>
        {commentOpen  && <Comments postId={post.id} />}
      </div>
    </div>
  );
};

export default Post;
