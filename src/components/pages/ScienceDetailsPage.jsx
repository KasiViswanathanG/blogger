import { Typography } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Basic from "../template/Basic";
import { useParams } from "react-router-dom";

function ScienceDetailsPage() {
  const { id } = useParams();
  const [article, setArticle] = useState({
    source: {
      id: null,
      name: "HuffPost",
    },
    author: "AP",
    title: "Twitter Relaunching Subscriber Service After Debacle",
    description:
      "Twitter is once again attempting to launch its premium service a month after a previous attempt failed.",
    url: "https://www.huffpost.com/entry/twitter-relaunching-twitter-bluesubscriber-service_n_63951cace4b0804966ad26a1",
    urlToImage:
      "https://img.huffingtonpost.com/asset/63951dfa2200005f00aa8435.jpeg?cache=Y75xMGo8bZ&ops=1200_630",
    publishedAt: "2022-12-11T00:10:42Z",
    content:
      "NEW YORK (AP) Twitter is once again attempting to launch its premium service, a month after a previous attempt failed.\r\nThe social media company said Saturday it would let users buy subscriptions to … [+731 chars]",
  });
  const getArticle = async () => {
    await axios
      .get(
        "https://newsapi.org/v2/everything?q=science&from=2022-11-16&sortBy=publishedAt&apiKey=300be0372ce64ead840346911752051c"
      )
      .then((response) => {
        setArticle(response.data.articles[id]);
      });
  };
  useEffect(() => {
    getArticle();
    // eslint-disable-next-line
  }, [id]);
  return (
    <Basic>
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
          {article.title}
        </Typography>
        <Typography textAlign="center" variant="h6" marginTop="1rem">
          {article.author} - {article.source.name}
        </Typography>
        <Typography textAlign="center" variant="body2">
          {article.publishedAt}
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <img src={article.urlToImage} alt="pic" width="69%" height="69%" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <Typography
            textAlign="center"
            variant="h6"
            fontWeight="700"
            width="69%"
          >
            {article.description}
          </Typography>
          <Typography
            textAlign="justified"
            style={{ whiteSpace: "pre-line", marginTop: "1rem" }}
            width="50%"
          >
            {article.content}
          </Typography>
          <Typography
            textAlign="center"
            color="blue"
            variant="caption"
            width="50%"
            marginTop="1rem"
          >
            know more - <a href={article.url}>{article.url}</a>
          </Typography>
        </div>
      </div>
    </Basic>
  );
}

export default ScienceDetailsPage;
