import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Pokeball from "../pokeball.png";

const Home = (props: any) => {
  // const [content, setContent] = useState<IContext[]>([]);
  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
  //     setContent(res.data);
  //   });
  // }, [props.match.params.post_id]);
  // console.log("props", props);
  return (
    <div className="container home">
      <h4 className="center">Home</h4>
      {props.posts.length ? (
        props.posts.map((post: any) => {
          return (
            <div className="post card" key={post.id}>
              <img src={Pokeball} alt="A pokeball" />
              <div className="card-content">
                <Link to={"/" + post.id}>
                  <span className="card-title red-text">{post.title}</span>
                </Link>
                <p>{post.body}</p>
              </div>
            </div>
          );
        })
      ) : (
        <div className="center">No posts yet</div>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Home);
