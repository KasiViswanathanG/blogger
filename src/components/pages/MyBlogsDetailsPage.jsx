import { Typography } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Basic from "../template/Basic";
import { useAuth0 } from "@auth0/auth0-react";

const MyBlogsDetailsPage = () => {
  const { user, isAuthenticated } = useAuth0();
  const { id } = useParams();
  const [blog, setBlog] = useState({
    userEmail: "",
    author: "",
    date: "",
    title: "",
    pic: "",
    description: "",
    content: "",
    otherMedia: "",
    otherMedia2: "",
    url: "",
  });
  useEffect(() => {
    const devEnv = process.env.NODE_ENV !== "production";
    const { REACT_APP_DEV_URL, REACT_APP_PROD_URL } = process.env;
    const getBlog = async () => {
      await axios
        .get(`${devEnv ? REACT_APP_DEV_URL : REACT_APP_PROD_URL}blogs/${id}`)
        .then((response) => {
          setBlog(response.data);
        });
    };
    getBlog();
    // eslint-disable-next-line
  }, [id]);
  return (
    <Basic>
      {isAuthenticated && blog.userEmail === user.email ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography textAlign="center" variant="h3">
            {blog.title}
          </Typography>
          <Typography textAlign="center" variant="h6">
            {blog.author}
          </Typography>
          <Typography textAlign="center" variant="body2">
            {blog.date}
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <img src={blog.pic} alt="pic" width="69%" height="69%" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "1rem",
              width: "80%",
            }}
          >
            <Typography textAlign="center" variant="h6" fontWeight="700">
              {blog.description}
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1rem",
                width: "90%",
              }}
            >
              {blog.otherMedia && (
                <img
                  src={blog.otherMedia}
                  alt="pic"
                  width="400rem"
                  height="400rem"
                />
              )}
              {blog.otherMedia2 && (
                <video
                  controls
                  src={blog.otherMedia2}
                  width="400rem"
                  height="400rem"
                />
              )}
            </div>
            <Typography
              style={{ whiteSpace: "pre-line", margin: "3em 0em 1em 0em" }}
            >
              {blog.content}
            </Typography>
            <Typography
              textAlign="center"
              color="blue"
              variant="caption"
              width="50%"
            >
              know more - <a href={blog.url}>{blog.url}</a>
            </Typography>
          </div>
        </div>
      ) : (
        <Typography variant="h1" color="red">
          YOU'RE NOT ALLOWED
        </Typography>
      )}
    </Basic>
  );
};

export default MyBlogsDetailsPage;
