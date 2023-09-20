import { useState } from "react";
import "./reply.scss";
import profilePhoto from "../../assets/Person.png";

import { useQuery, useMutation, useQueryClient } from "react-query";
import { makeRequest } from "../../axios";
import moment from "moment";
import Subreply from "../subreply/subreply";

const Comments = ({ postId }) => {
  const [replyOpen, setReplyOpen] = useState(false);

  const [desc, setDesc] = useState("");

  const { isLoading, error, data } = useQuery(["comments"], () =>
    makeRequest.get("/comments?postId=" + postId).then((res) => {
      return res.data;
    })
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newComment) => {
      return makeRequest.post("/comments", newComment);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["comments"]);
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ desc, postId });
    setDesc("");
  };

  return (
    <div className="reply">
      <div className="write">
        <img src={profilePhoto} alt="" />
        <input
          type="text"
          placeholder="write a reply"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button onClick={handleClick}>Send</button>
      </div>
      {error
        ? "Something went wrong"
        : isLoading
        ? "loading"
        : data.map((comment, index) => (
            <div key={index}>
              <div className="comment">
                
                <div className="info">
                  <b>
                    <span>{comment.name}</span>
                  </b>
                  <p>{comment.desc}</p>
                </div>
                <button
                  className="subreplybutton"
                  onClick={() => setReplyOpen(!replyOpen)}
                >
                  Reply
                </button>
              </div>
              {replyOpen && <Subreply replyCommentId={comment.id} />}
            </div>
          ))}
    </div>
  );
};

export default Comments;
