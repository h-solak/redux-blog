import React from "react";
import {
  Form,
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

import moment from "moment";

/* Forms and... */
import { nanoid } from "nanoid";
import { useFormik } from "formik";
import * as Yup from "yup";
import { RqErrorMessage } from "./ErrorMessage";

/* Redux */
import { useSelector, useDispatch } from "react-redux";
import { addNewPost } from "./postsSlice";
import { selectAllPosts } from "./postsSlice";

const AddPost = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);

  const validationSchema = Yup.object({
    title: Yup.string().required("Required!"),
    content: Yup.string()
      .min(5, "Your content has to have at least 5 characters!")
      .required("Required!"),
  });

  const { handleSubmit, values, errors, touched, resetForm, setFieldValue } =
    useFormik({
      initialValues: {
        id: "",
        title: "",
        content: "",
      },
      validationSchema,
      onSubmit: (values) => {
        console.log(posts);
        dispatch(
          addNewPost({
            id: nanoid(),
            title: values.title,
            content: values.content,
            date: moment().startOf("hour").fromNow(),
          })
        );
        resetForm();
      },
    });

  return (
    <Col sm="12" lg="4" className="border rounded p-2 mb-3">
      <Form onSubmit={handleSubmit}>
        <h3>New Post</h3>
        <div>
          <Label className="mt-3">Title</Label>
          <Input
            value={values.title}
            onChange={(e) =>
              setFieldValue("title", e.target.value, values.title)
            }
          />
          {RqErrorMessage(errors.title, touched.title)}
        </div>
        <div>
          <Label className="mt-3">What do you want to say?</Label>
          <textarea
            rows={3}
            value={values.content}
            className="w-100 border rounded"
            onChange={(e) =>
              setFieldValue("content", e.target.value, values.content)
            }
            style={{ resize: "none" }}
          />
          {RqErrorMessage(errors.content, touched.content)}
        </div>

        <Button
          type="submit"
          color={
            values.content.length > 5 && values.title.length > 0
              ? "primary"
              : "secondary"
          }
          className="mt-3"
        >
          Add
        </Button>
      </Form>
    </Col>
  );
};

export default AddPost;
