import React from "react";
import { Typography } from "@mui/material";
import business from "../../static/images/business.jpeg";
import science from "../../static/images/science.jpg";
import culture from "../../static/images/culture.jpg";
import music from "../../static/images/music.jpg";
import Basic from "../template/Basic";

function BusinessPage() {
  return (
    <Basic>
      <div
        style={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "3rem",
        }}
      >
        <Typography variant="h2" textAlign="center">
          Get Instant Updates On Everything Around You
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "90%",
          }}
        >
          <div style={{ width: "30rem" }}>
            <Typography fontWeight="700">
              Checkout Recent Business Ideas around the world
            </Typography>
            <Typography variant="body2" marginLeft="1rem">
              A marketing tactic designed not only to inform readers, but to
              increase visibility of your organization and, ultimately, to push
              readers towards buying your products or services.
            </Typography>
          </div>
          <img src={business} alt="business" width="40%" height="40%" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "90%",
          }}
        >
          <img src={culture} alt="culture" width="40%" height="40%" />
          <div style={{ width: "30rem" }}>
            <Typography fontWeight="700">
              Dive into facinating cultures
            </Typography>
            <Typography variant="body2" marginLeft="1rem">
              Popular culture sums up the experiences of individuals and
              communities across the globe and can be a powerful force for
              social change. Our blogs are written by experts whose research
              covers cultural fields including film, theatre, television,
              animation, print media, comics, fashion, design, music and video
              games.
            </Typography>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "90%",
          }}
        >
          <div style={{ width: "30rem" }}>
            <Typography fontWeight="700">
              Connect with scientists from every cornor
            </Typography>
            <Typography variant="body2" marginLeft="1rem">
              ScienceBlogs is where scientists communicate directly with the
              public. We are part of Science 2.0, a science education nonprofit
              operating.
            </Typography>
          </div>
          <img src={science} alt="science" width="40%" height="40%" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "90%",
          }}
        >
          <img src={music} alt="music" width="40%" height="40%" />
          <div style={{ width: "30rem" }}>
            <Typography fontWeight="700">
              Connect with music lovers across the globe
            </Typography>
            <Typography variant="body2" marginLeft="1rem">
              one of the best music blogs to hear about the latest music news
              and rumours for festivals worldwide, they also have news
              editorials and reviews of music, film and TV.
            </Typography>
          </div>
        </div>
      </div>
    </Basic>
  );
}

export default BusinessPage;
