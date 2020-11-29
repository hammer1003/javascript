import React from "react";
import { connect } from "react-redux";
import { deletePost } from "../actions/postActions";

const Post = (props: any) => {
  // const [content, setContent] = useState<IContext>({} as IContext);
  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://jsonplaceholder.typicode.com/posts/" +
  //         props.match.params.post_id
  //     )
  //     .then(res => {
  //       setContent(res.data);
  //     });
  // }, [props.match.params.post_id]);
  const handleClick = () => {
    props.delete(props.post.id);
    props.history.push("/");
  };
  return props.post ? (
    <div className="container post">
      <h4 className="center">{props.post.title}</h4>
      <p>{props.post.body}</p>
      <div className="center">
        <button className="center btn grey" onClick={handleClick}>
          Delete Post
        </button>
      </div>
    </div>
  ) : (
    <div className="center">loading post....</div>
  );
};

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    post: state.posts.find(
      (post: any) => post.id === ownProps.match.params.post_id
    )
  };
};

const mapDispatchToprops = (dispatch: any) => {
  return {
    delete: (id: string) => {
      dispatch(deletePost(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToprops
)(Post);
