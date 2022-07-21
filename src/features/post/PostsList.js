import { useSelector, useDispatch } from "react-redux";
import {
  InputGroup,
  Input,
  Label,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  Badge,
} from "reactstrap";
import { selectAllPosts, deletePost } from "./postsSlice";
import AddPost from "./AddPost";

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);

  const handleDeletePost = (id) => {
    console.log(deletePost(id));
    dispatch(deletePost(id));
  };

  const renderedPosts = posts.map((post) => (
    <Col
      sm="12"
      lg="4"
      key={post.id}
      className="border rounded p-2"
      onClick={() => handleDeletePost(post.id)}
    >
      <h4 className="p-1">{post.title}</h4>
      <p className="p-1">{post.content.substring(0, 100)}</p>
      <p className="w-100 text-right">{post.date}</p>
    </Col>
  ));

  return (
    <>
      <h2 className="text-center">Posts</h2>
      <AddPost />

      <Col className="d-flex align-items-center flex-column gap-4" sm="12">
        {renderedPosts}
      </Col>
    </>
  );
};

export default PostsList;
