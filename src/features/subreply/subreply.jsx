import "./Subreply.scss";
import { useState } from "react";

import { useQuery, useMutation, useQueryClient } from "react-query";
import { makeRequest } from "../../axios";
import moment from "moment";

const Subreply = ({ replyCommentId }) => {
  console.log(replyCommentId);
  const [desc, setDesc] = useState("");

  const { isLoading, error, data } = useQuery(["subReply"], () =>
    makeRequest
      .get("/subreply?replyCommentId=" + replyCommentId)
      .then((res) => {
        return res.data;
      })
  );

  console.log(data);
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newComment) => {
      return makeRequest.post("/subreply", newComment);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["subReply"]);
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ desc, replyCommentId });
    setDesc("");
  };

  return (
    <div className="subReply">
      <div className="write">
        <input
          type="text"
          placeholder="Reply here."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button onClick={handleClick}>Nested Reply</button>
      </div>
      {error
        ? "Failed."
        : isLoading
        ? "Hold on. Its loading."
        : data.map((comment, index) => (
            <div key={index}>
              <div className="comment">
                <div className="info">
                  <b>

                  <span>{comment.name}</span>
                  </b>
                  <p>{comment.desc}</p>
                </div>
                
              </div>
            </div>
          ))}
    </div>
  );
};

export default Subreply;
