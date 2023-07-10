import React, { useEffect, useState } from "react";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Modal,
  Input,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, addPost } from "../actions/postActions";
import { Link } from "react-router-dom";

function Home() {
  const [opened, { open, close }] = useDisclosure(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const posts = useSelector((state) => state.posts.posts);
  const user = useSelector((state) => state.user);

  const handleSubmit = (event) => {
    console.log(user.user);

    if (formData.title && formData.description && formData.image) {
      dispatch(
        addPost(
          user.user._id,
          formData.title,
          formData.description,
          formData.image
        )
      );

      formData.title = "";
      formData.description = "";
      formData.image = "";

      close();
    } else {
      return;
    }
  };

  return (
    <section className="flex flex-col gap-2 max-w-sm md:max-w-lg lg:max-w-3xl xl:max-w-5xl mx-auto py-12 mt-[8vh]">
      <Modal opened={opened} onClose={close} withCloseButton={true}>
        <form className="flex flex-col gap-3 border border-gray-300 p-2 rounded-md mb-4">
          <Input.Wrapper
            id="title"
            withAsterisk
            label="Title"
            error={formData.title ? false : "Title Cannot be empty"}
          >
            <Input
              id="title"
              placeholder="Title"
              value={formData.title}
              onChange={(e) =>
                setFormData((prevState) => {
                  console.log(e.target.value);
                  console.log(formData);
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
            error={formData.description ? false : "Description Cannot be empty"}
          >
            <Input
              id="description"
              placeholder="Description"
              value={formData.description}
              onChange={(e) =>
                setFormData((prevState) => {
                  console.log(e.target.value);
                  console.log(formData);
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
            label="Image URL"
            error={formData.image ? false : "Image Cannot be empty"}
          >
            <Input
              id="image"
              placeholder="Image URL"
              value={formData.image}
              onChange={(e) =>
                setFormData((prevState) => {
                  console.log(e.target.value);
                  console.log(formData);
                  return {
                    ...prevState,
                    image: e.target.value,
                  };
                })
              }
            />
          </Input.Wrapper>
          <Button
            color="cyan"
            radius="md"
            className="bg-purple-600"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </form>
      </Modal>
      <div className="w-full justify-self-end self-end flex  justify-end">
        {user.user && (
          <Button
            color="cyan"
            radius="md"
            className="bg-purple-700"
            onClick={open}
          >
            Add a Post
          </Button>
        )}
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-x-4 gap-y-4">
        {posts &&
          posts.map((post) => {
            return (
              <Card
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                key={Math.random()}
              >
                <Card.Section>
                  <Image src={post.image} height={160} alt="Norway" />
                </Card.Section>
                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>{post.title}</Text>
                  <Badge color="pink" variant="light">
                    NEW
                  </Badge>
                </Group>

                <Text size="sm" color="dimmed">
                  {post.description.slice(0, 50) + "..."}
                </Text>
                <Link to={`/posts/${post.title}`}>
                  <Button
                    variant="light"
                    color="violet"
                    fullWidth
                    mt="md"
                    radius="md"
                  >
                    More Details
                  </Button>
                </Link>
              </Card>
            );
          })}
      </div>
    </section>
  );
}

export default Home;
