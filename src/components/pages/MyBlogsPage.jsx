import React, { useState, useEffect } from "react";
import { Grid, Card, Typography } from "@mui/material";
import axios from "axios";
import BlogCard from "../BlogCard";
import Basic from "../template/Basic";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function MyBlogsPage() {
  const { user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([
    {
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
      id: 1,
    },
  ]);

  useEffect(() => {
    const getBlogs = async () => {
      const devEnv = process.env.NODE_ENV !== "production";
      const { REACT_APP_DEV_URL, REACT_APP_PROD_URL } = process.env;
      await axios
        .get(`${devEnv ? REACT_APP_DEV_URL : REACT_APP_PROD_URL}blogs`)
        .then((response) => {
          setBlogs(response.data);
        });
    };
    getBlogs();
  }, []);
  return (
    <Basic>
      <Card
        sx={{
          height: "30rem",
          overflow: "auto",
          "&::-webkit-scrollbar": { display: "none" },
          boxShadow: "none",
          padding: "3em 8em",
          background: "#e5e5e5",
        }}
      >
        {isAuthenticated ? (
          <>
            <Typography variant="h3" color="#274472" marginBottom="2rem">
              {user.name}
            </Typography>
            <Grid
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              container
              spacing={2}
            >
              {blogs.map((blog) => {
                if (blog.userEmail === user.email) {
                  return (
                    <Grid item key={blog.id} lg={4} xs={12} sm={12} md={6}>
                      <BlogCard
                        author={blog.author}
                        date={blog.date}
                        title={blog.title}
                        pic={blog.pic}
                        onClick={() => {
                          navigate(`/myblogsarticle${blog.id}`);
                        }}
                        description={blog.description}
                      />
                    </Grid>
                  );
                } else {
                  return <></>;
                }
              })}
            </Grid>
          </>
        ) : (
          <Typography variant="h1" color="red">
            YOU'RE NOT ALLOWED
          </Typography>
        )}
      </Card>
    </Basic>
  );
}

export default MyBlogsPage;
