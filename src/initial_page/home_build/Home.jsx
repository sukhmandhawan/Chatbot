import Posts from "../../features/posts/post_build";
import Share from "../../features/share/Share";
import "./home.scss";

const Home = () => {
  return (
    <div className="pagebody">
      <div className="home">
        <Share />
        <Posts />
      </div>
    </div>
  );
};

export default Home;
