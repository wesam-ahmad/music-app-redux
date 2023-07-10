import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FiArrowLeft, FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegComment } from "react-icons/fa";

import { useSelector } from "react-redux";

import { Avatar, Button, Input, Modal, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import Filter from "bad-words";

function PostDetails() {
  const user = useSelector((state) => state.user);

  const [commentModal, { open, close }] = useDisclosure(false);
  const [formModal, { toggle }] = useDisclosure(false);
  const [commentForm, setCommentForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [postData, setPostData] = useState({});
  const [authorData, setAuthorData] = useState({});
  const [currentComment, setCurrentComment] = useState("");

  const { title } = useParams();

  const [updatePostData, setUpdatePostData] = useState({
    title: "",
    description: "",
    image: "",
  });

  const [updateCommentData, setUpdateCommentData] = useState({
    title: "",
    description: "",
  });

  const [commentData, setCommentData] = useState({
    title: "",
    description: "",
    authorName: "",
    authorEmail: "",
  });

  const filter = new Filter();
  filter.addWords("ugly");

  async function getPostData() {
    try {
      const response = await axios.get(
        `http://localhost:5000/posts/post/${title}`
      );
      console.log(response.data.data);
      setPostData(response.data.data);
      const authorDataResponse = await axios.get(
        "http://localhost:5000/users/" + response.data.data.author
      );
      console.log(authorDataResponse.data.data);
      setAuthorData(authorDataResponse.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPostData();
  }, []);

  const handleToggleForm = () => {
    setCommentForm((prevState) => !prevState);
  };

  const handlePostDelete = async (_, id) => {
    try {
      const response = await axios.delete("http://localhost:5000/posts/" + id);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateComment = async (event, id) => {
    if (updateCommentData.title && updateCommentData.description) {
      try {
        const response = await axios.put(
          `http://localhost:5000/comments/${currentComment}`,
          {
            title: updateCommentData.title,
            description: updateCommentData.description,
          }
        );
        console.log(response);
      } catch (error) {}

      updateCommentData.title = "";
      updateCommentData.description = "";

      close();
    } else {
      return;
    }
  };

  const handleAddComment = async (event) => {
    if (
      commentData.title &&
      commentData.description &&
      commentData.authorName &&
      commentData.authorEmail
    ) {
      try {
        const response = await axios.post(`http://localhost:5000/comments`, {
          postId: postData._id,
          title: filter.clean(commentData.title),
          description: filter.clean(commentData.description),
          authorName: commentData.authorName,
          authorEmail: commentData.authorEmail,
        });

        console.log(response);
      } catch (error) {
        console.log(error);
      }

      commentData.title = "";
      commentData.description = "";
      commentData.authorName = "";
      commentData.authorEmail = "";

      getPostData();
    } else {
      return;
    }
  };

  console.log(user.user, postData.author);

  return (
    <section className=" max-w-sm md:max-w-lg lg:max-w-3xl xl:max-w-5xl mx-auto flex flex-col mt-12">
      <Modal opened={commentModal} onClose={close} withCloseButton={true}>
        <form className="flex flex-col gap-3 border border-gray-300 p-2 rounded-md mb-4">
          <Input.Wrapper
            id="title"
            withAsterisk
            label="Title"
            error={updateCommentData.title ? false : "Title Cannot be empty"}
          >
            <Input
              id="title"
              placeholder="Title"
              value={updateCommentData.title}
              onChange={(e) =>
                setUpdateCommentData((prevState) => {
                  console.log(e.target.value);
                  console.log(updateCommentData);
                  return {
                    ...prevState,
                    title: e.target.value,
                  };
                })
              }
            />
          </Input.Wrapper>
          <Input.Wrapper
            id="description"
            withAsterisk
            label="Description"
            error={
              updateCommentData.description
                ? false
                : "Description Cannot be empty"
            }
          >
            <Input
              id="description"
              placeholder="Description"
              value={updateCommentData.description}
              onChange={(e) =>
                setUpdateCommentData((prevState) => {
                  console.log(e.target.value);
                  console.log(updateCommentData);
                  return {
                    ...prevState,
                    description: e.target.value,
                  };
                })
              }
            />
          </Input.Wrapper>
          <Button
            color="cyan"
            radius="md"
            className="bg-purple-600"
            onClick={handleUpdateComment}
          >
            Update
          </Button>
        </form>
      </Modal>
      <Modal opened={formModal} onClose={toggle} withCloseButton={true}>
        <form className="flex flex-col gap-3 border border-gray-300 p-2 rounded-md mb-4">
          <Input.Wrapper
            id="title"
            withAsterisk
            label="Title"
            error={updatePostData.title ? false : "Title Cannot be empty"}
          >
            <Input
              id="title"
              placeholder="Title"
              value={updatePostData.title}
              onChange={(e) =>
                setUpdatePostData((prevState) => {
                  console.log(e.target.value);
                  console.log(updatePostData);
                  return {
                    ...prevState,
                    title: e.target.value,
                  };
                })
              }
            />
          </Input.Wrapper>
          <Input.Wrapper
            id="description"
            withAsterisk
            label="Description"
            error={
              updatePostData.description ? false : "Description Cannot be empty"
            }
          >
            <Input
              id="description"
              placeholder="Description"
              value={updatePostData.description}
              onChange={(e) =>
                setUpdatePostData((prevState) => {
                  console.log(e.target.value);
                  console.log(updatePostData);
                  return {
                    ...prevState,
                    description: e.target.value,
                  };
                })
              }
            />
          </Input.Wrapper>
          <Input.Wrapper
            id="image"
            withAsterisk
            label="Image"
            error={updatePostData.image ? false : "Image Cannot be empty"}
          >
            <Input
              id="image"
              placeholder="Image"
              value={updatePostData.image}
              onChange={(e) =>
                setUpdatePostData((prevState) => {
                  console.log(e.target.value);
                  console.log(updatePostData);
                  return {
                    ...prevState,
                    image: e.target.value,
                  };
                })
              }
            />
          </Input.Wrapper>
          <Button color="cyan" radius="md" className="bg-purple-600">
            Update
          </Button>
        </form>
      </Modal>
      <Link to={"/posts"} className="text-sky-500 my-2">
        <FiArrowLeft />
      </Link>
      <div className="text-3xl font-bold my-2">{postData.title}</div>
      <div className="w-full bg-gray-200 h-14 flex items-center px-2 justify-between rounded-md">
        <div className="flex items-center gap-4">
          <Avatar src={authorData.avatar} radius={"xl"} />
          <span className="font-bold text-purple-700">
            {authorData.username}
          </span>
          <span className="text-sm">
            {new Date(postData.createdAt).toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>
        {user?.user?._id == postData?.author ? (
          <div className="flex text-xl gap-2">
            <button className="text-purple-700" onClick={toggle}>
              <FiEdit />
            </button>
            <button className="text-red-700" onClick={handlePostDelete}>
              <RiDeleteBin6Line />
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      <img
        className="w-full object-cover h-96 p-4"
        src={
          postData
            ? postData.image
            : "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
        }
        alt="post image"
      />
      <div className="leading-6 p-4">
        <span className="font-bold italic">{authorData.username} ~ </span>
        <span className="text leading-6 text-lg">{postData.description}</span>
      </div>
      <span className="w-full border-b border-gray-300 my-4"></span>
      <div className="flex items-center justify-between pb-4">
        <div className="flex items-center gap-2  h-fit">
          <span className="font-bold">
            {postData.comments ? postData.comments.length : "no comments"}
          </span>
          <button className="text-lg">
            <FaRegComment />
          </button>
        </div>
        <Button
          color="cyan"
          radius="md"
          className="bg-purple-600"
          onClick={handleToggleForm}
        >
          Comment
        </Button>
      </div>
      {commentForm && (
        <form className="flex flex-col gap-3 border border-gray-300 p-2 rounded-md mb-4">
          <Input.Wrapper
            id="authorName"
            withAsterisk
            label="Name"
            error={commentData.authorName ? false : "Name Cannot be empty"}
          >
            <Input
              id="authorName"
              placeholder="AuthorName"
              onChange={(e) =>
                setCommentData((prevState) => {
                  console.log(e.target.value);
                  console.log(commentData);
                  return {
                    ...prevState,
                    authorName: e.target.value,
                  };
                })
              }
            />
          </Input.Wrapper>
          <Input.Wrapper
            id="authorEmail"
            withAsterisk
            label="Email"
            error={commentData.authorEmail ? false : "Email Cannot be empty"}
          >
            <Input
              id="authorEmail"
              placeholder="AuthorEmail"
              onChange={(e) =>
                setCommentData((prevState) => {
                  console.log(e.target.value);
                  console.log(commentData);
                  return {
                    ...prevState,
                    authorEmail: e.target.value,
                  };
                })
              }
            />
          </Input.Wrapper>
          <Input.Wrapper
            id="title"
            withAsterisk
            label="Title"
            error={commentData.title ? false : "Title Cannot be empty"}
          >
            <Input
              id="title"
              placeholder="Title"
              onChange={(e) =>
                setCommentData((prevState) => {
                  console.log(e.target.value);
                  console.log(commentData);
                  return {
                    ...prevState,
                    title: e.target.value,
                  };
                })
              }
            />
          </Input.Wrapper>
          <Input.Wrapper
            id="description"
            withAsterisk
            label="Description"
            error={
              commentData.description ? false : "Description Cannot be empty"
            }
          >
            <Input
              id="description"
              placeholder="Description"
              value={commentData.description}
              onChange={(e) =>
                setCommentData((prevState) => {
                  console.log(e.target.value);
                  console.log(commentData);
                  return {
                    ...prevState,
                    description: e.target.value,
                  };
                })
              }
            />
          </Input.Wrapper>
          <Button
            color="cyan"
            radius="md"
            className="bg-purple-600"
            onClick={handleAddComment}
          >
            Submit
          </Button>
        </form>
      )}

      <div className="flex flex-col gap-3 ">
        {postData.comments &&
          postData.comments.map((comment) => {
            return (
              <div
                key={Math.random()}
                className="border-b border-gray-300 w-full py-4 px-4 bg-gray-100 rounded-md flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar src={null} radius={"xl"} />
                    <span className="font-semibold">{comment.authorName}</span>
                  </div>
                  <div>
                    <div className="flex text-xl gap-2">
                      {/* <button
                        className="text-purple-700"
                        onClick={() => {
                          setCurrentComment(comment._id);
                          console.log(comment._id);
                          open();
                        }}
                      >
                        <FiEdit />
                      </button>
                      <button className="text-red-700">
                        <RiDeleteBin6Line />
                      </button> */}
                    </div>
                    <span className="italic font-thin">
                      {new Date(comment.createdAt).toLocaleString("default", {
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
                <p>{comment.description}</p>
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default PostDetails;
