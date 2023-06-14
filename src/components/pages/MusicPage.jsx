import React, { useState, useEffect } from "react";
import { Grid, Card, Typography } from "@mui/material";
import axios from "axios";
import BlogCard from "../BlogCard";
import music from "../../static/images/music.jpg";
import Basic from "../template/Basic";
import { useNavigate } from "react-router-dom";
const newsApiKey = process.env.REACT_APP_NEWS_API_KEY;

function MusicPage() {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const getArticles = async () => {
    await axios
      .get(
        `https://newsapi.org/v2/everything?q=music&from=2022-11-16&sortBy=publishedAt&apiKey=${newsApiKey}`
      )
      .then((response) => {
        setArticles(response.data.articles);
      });
  };
  useEffect(() => {
    getArticles();
  }, []);
  return (
    <Basic>
      <div>
        <Typography variant="h4" textAlign="center" color="#62849f">
          Connect with music lovers across the globe
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <img width="50%" height="50%" src={music} alt="music" />
        </div>
        <Card
          sx={{
            height: "50rem",
            overflow: "auto",
            "&::-webkit-scrollbar": { display: "none" },
            boxShadow: "none",
            padding: "3em 8em",
            background: "#e5e5e5",
          }}
        >
          <Grid
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            container
            spacing={2}
          >
            {articles.map((blog, index) => {
              return (
                <Grid item key={index} lg={4} xs={12} sm={12} md={6}>
                  <BlogCard
                    author={blog.author}
                    date={blog.publishedAt}
                    title={blog.title}
                    pic={blog.urlToImage}
                    description={blog.description}
                    onClick={() => {
                      navigate(`/musicarticle${index}`);
                    }}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Card>
      </div>
    </Basic>
  );
}

export default MusicPage;
