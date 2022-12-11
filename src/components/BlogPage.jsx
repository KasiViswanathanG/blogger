import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  styled,
  TextField,
  TextareaAutosize,
  IconButton,
  Typography,
} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Basic from "./template/Basic";
import { ArrowBack, Close, VideoCall } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  boxShadow: "0px 0px 26px rgba(233, 232, 237, 0.5)",
  background: "#FFFFFF",
  width: "50%",
  height: "85%",
  borderRadius: "8px",
});

const ContinueButton = styled(Button)({
  height: "10%",
  width: "69%",
  padding: "16px 8px",
  borderRadius: "8px",
  margin: "3% 0%",
});

const BackButton = styled(Button)({
  padding: "1em",
  borderRadius: "8px",
});

const BlogPage = () => {
  const { user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
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
  const blogDate = () => {
    let newDate = new Date();
    let today = `${newDate.getDate()}-${
      newDate.getMonth() + 1
    }-${newDate.getFullYear()}`;
    setBlog(() => {
      return {
        ...blog,
        date: today,
      };
    });
  };
  const blogEmail = () => {
    if (isAuthenticated) {
      setBlog(() => {
        return {
          ...blog,
          userEmail: user.email,
        };
      });
    }
  };
  const postBlog = async () => {
    const devEnv = process.env.NODE_ENV !== "production";
    const { REACT_APP_DEV_URL, REACT_APP_PROD_URL } = process.env;
    await axios.post(
      `${devEnv ? REACT_APP_DEV_URL : REACT_APP_PROD_URL}blogs`,
      blog
    );
  };
  useEffect(() => {
    blogDate();
    blogEmail();
    // eslint-disable-next-line
  }, [blog]);
  const [stage, setStage] = useState(1);
  if (stage === 1) {
    return (
      <Basic>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "84.5vh",
          }}
        >
          <Container>
            <Typography variant="h4" color="#28b8e2" marginTop="3%">
              Blog Details
            </Typography>

            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-around",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <TextField
                  label="Author"
                  variant="outlined"
                  sx={{
                    width: "100%",
                    marginBottom: "1rem",
                    input: {
                      fontSize: "1.1rem",
                    },
                  }}
                  value={blog.author}
                  onChange={(e) => {
                    setBlog(() => {
                      return {
                        ...blog,
                        author: e.target.value,
                      };
                    });
                  }}
                />
                <TextField
                  label="Title"
                  variant="outlined"
                  sx={{
                    width: "100%",
                    marginBottom: "1rem",
                    input: {
                      fontSize: "1.1rem",
                    },
                  }}
                  value={blog.title}
                  onChange={(e) => {
                    setBlog(() => {
                      return {
                        ...blog,
                        title: e.target.value,
                      };
                    });
                  }}
                />

                <TextareaAutosize
                  minRows={3}
                  maxRows={3}
                  placeholder="Describe Your Blog"
                  style={{
                    width: "85%",
                    background: "none",
                    borderRadius: "0.2rem",
                    border: "1px solid #c7c7c7",
                    fontSize: "1.1rem",
                    padding: "1em",
                    whiteSpace: "pre-wrap",
                  }}
                  value={blog.description}
                  onChange={(e) => {
                    setBlog(() => {
                      return {
                        ...blog,
                        description: e.target.value,
                      };
                    });
                  }}
                />
              </div>
              <div>
                <div>
                  <input
                    type="file"
                    name="upload"
                    accept="image/*"
                    onChange={(e) => {
                      let image = e.target.files[0];
                      let imageReader = new FileReader();
                      imageReader.readAsDataURL(image);
                      imageReader.onload = () => {
                        setBlog(() => {
                          return {
                            ...blog,
                            pic: imageReader.result,
                          };
                        });
                      };
                    }}
                    style={{
                      display: "none",
                    }}
                    id="button-file"
                  />
                </div>
                <div
                  style={{
                    width: "15em",
                    height: "15em",
                    border: "1.5px dashed #c7c7c7",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  {blog.pic === "" ? (
                    <label htmlFor="button-file">
                      <IconButton color="primary" component="span">
                        <AddPhotoAlternateIcon />
                      </IconButton>
                    </label>
                  ) : (
                    <>
                      <IconButton
                        style={{
                          position: "absolute",
                          top: "2%",
                          right: "2%",
                          color: "red",
                        }}
                        onClick={() => {
                          setBlog(() => {
                            return {
                              ...blog,
                              pic: "",
                            };
                          });
                        }}
                      >
                        <Close />
                      </IconButton>
                      <img
                        style={{
                          height: "15em",
                          width: "15em",
                        }}
                        src={blog.pic}
                        alt="blogImg"
                      ></img>
                    </>
                  )}
                </div>
              </div>
            </div>
            <ContinueButton
              variant="contained"
              onClick={() => {
                setStage(2);
              }}
            >
              Continue
            </ContinueButton>
          </Container>
        </div>
      </Basic>
    );
  } else if (stage === 2) {
    return (
      <Basic>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "84.5vh",
          }}
        >
          <Container>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                width: "87%",
                marginTop: "3%",
              }}
            >
              <BackButton
                color="secondary"
                startIcon={<ArrowBack />}
                onClick={() => {
                  setStage(1);
                }}
              >
                Back
              </BackButton>
              <Typography variant="h4" color="#28b8e2" marginLeft="15%">
                Make Your Blog
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-around",
              }}
            >
              <TextareaAutosize
                minRows={10}
                maxRows={10}
                placeholder="Blog here..."
                style={{
                  width: "80%",
                  padding: "1rem",
                  background: "none",
                  borderRadius: "0.5rem",
                  border: "1px solid #c7c7c7",
                  fontSize: "1.1rem",
                  margin: "1rem 1rem 0rem 1rem",
                  whiteSpace: "pre-wrap",
                }}
                value={blog.content}
                onChange={(e) => {
                  setBlog(() => {
                    return {
                      ...blog,
                      content: e.target.value,
                    };
                  });
                }}
              />
            </div>
            <ContinueButton
              variant="contained"
              onClick={() => {
                setStage(3);
              }}
            >
              Continue
            </ContinueButton>
          </Container>
        </div>
      </Basic>
    );
  } else if (stage === 3) {
    return (
      <Basic>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "84.5vh",
          }}
        >
          <Container>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                width: "87%",
                marginTop: "3%",
              }}
            >
              <BackButton
                color="secondary"
                startIcon={<ArrowBack />}
                onClick={() => {
                  setStage(2);
                }}
              >
                Back
              </BackButton>
              <Typography variant="h4" color="#28b8e2" marginLeft="13%">
                Additional Details
              </Typography>
            </div>

            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-around",
              }}
            >
              <div>
                <div
                  style={{
                    width: "35em",
                    height: "15em",
                    display: "flex",
                    justifyContent: "space-around",
                    position: "relative",
                  }}
                >
                  {blog.otherMedia === "" ? (
                    <div
                      style={{
                        width: "15em",
                        height: "15em",
                        border: "1.5px dashed #c7c7c7",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <IconButton component="label" variant="contained">
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <AddPhotoAlternateIcon color="primary" />
                          <Typography variant="body2" color="primary">
                            Upload Image
                          </Typography>
                        </div>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            let image = e.target.files[0];
                            let imageReader = new FileReader();
                            imageReader.readAsDataURL(image);
                            imageReader.onload = () => {
                              setBlog(() => {
                                return {
                                  ...blog,
                                  otherMedia: imageReader.result,
                                };
                              });
                            };
                          }}
                          hidden
                          id="button-file"
                        />
                      </IconButton>
                    </div>
                  ) : (
                    <>
                      <IconButton
                        style={{
                          position: "absolute",
                          top: "2%",
                          left: "38%",
                          color: "red",
                        }}
                        onClick={() => {
                          setBlog(() => {
                            return {
                              ...blog,
                              otherMedia: "",
                            };
                          });
                        }}
                      >
                        <Close />
                      </IconButton>
                      <img
                        style={{
                          height: "15em",
                          width: "15em",
                        }}
                        src={blog.otherMedia}
                        alt="blogImg"
                      ></img>
                    </>
                  )}
                  {blog.otherMedia2 === "" ? (
                    <div
                      style={{
                        width: "15em",
                        height: "15em",
                        border: "1.5px dashed #c7c7c7",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <IconButton component="label" variant="contained">
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <VideoCall color="primary" />
                          <Typography variant="body2" color="primary">
                            Upload video / audio
                          </Typography>
                        </div>
                        <input
                          type="file"
                          accept="video/*"
                          onChange={(e) => {
                            let image = e.target.files[0];
                            let imageReader = new FileReader();
                            imageReader.readAsDataURL(image);
                            imageReader.onload = () => {
                              setBlog(() => {
                                return {
                                  ...blog,
                                  otherMedia2: imageReader.result,
                                };
                              });
                            };
                          }}
                          hidden
                          id="button-file"
                        />
                      </IconButton>
                    </div>
                  ) : (
                    <>
                      <IconButton
                        style={{
                          position: "absolute",
                          top: "2%",
                          right: "0%",
                          color: "red",
                        }}
                        onClick={() => {
                          setBlog(() => {
                            return {
                              ...blog,
                              otherMedia2: "",
                            };
                          });
                        }}
                      >
                        <Close />
                      </IconButton>
                      <video
                        controls
                        style={{
                          height: "15em",
                          width: "15em",
                        }}
                        src={blog.otherMedia2}
                      ></video>
                    </>
                  )}
                </div>
              </div>
            </div>
            <TextField
              label="link"
              variant="outlined"
              sx={{
                width: "60%",
                marginTop: "1.5rem",
                input: {
                  fontSize: "1.1rem",
                },
              }}
              value={blog.url}
              onChange={(e) => {
                setBlog(() => {
                  return {
                    ...blog,
                    url: e.target.value,
                  };
                });
              }}
            />
            <ContinueButton
              onClick={() => {
                postBlog();
                navigate(`/myblogs`);
              }}
              color="secondary"
              variant="contained"
            >
              Add Blog
            </ContinueButton>
          </Container>
        </div>
      </Basic>
    );
  }
};

export default BlogPage;
