// import Counter from "./features/counter/Counter";
import React from "react";
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

import PostsList from "./features/post/PostsList";

function App() {
  return (
    <Row className="w-100 p-5 d-flex justify-content-center">
      {/* <Counter /> */}
      <PostsList />
    </Row>
  );
}

export default App;
