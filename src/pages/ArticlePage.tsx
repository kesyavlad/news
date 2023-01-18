import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { ArticlePageInterface } from "../components/types";
import "./styleArticle.scss";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import WestIcon from "@mui/icons-material/West";

const ArticlePage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<ArticlePageInterface>({
    imageUrl: "",
    summary: "",
    title: "",
  });

  useEffect(() => {
    const getPage = () => {
      axios
        .get(`https://api.spaceflightnewsapi.net/v3/articles/${id}`)
        .then(({ data }) => {
          setPost(data);
        });
    };
    getPage();
  }, [id]);

  return (
    <div className="wrapper">
      <div className="boxIMG">
        <img src={post.imageUrl} className="img" alt="logo" />
      </div>
      <Container maxWidth="xl">
        <div className="boxText">
          <Typography
            fontSize={"24px"}
            textAlign={"center"}
            marginBottom={"50px"}
            fontStyle={"Montserrat"}
          >
            {post.title}
          </Typography>
          <Typography fontSize={"14px"} fontStyle={"Montserrat"}>
            {post.summary}
          </Typography>
        </div>
        <Button
          size="small"
          color="primary"
          sx={{ textTransform: "none", fontSize: "16px" }}
        >
          <WestIcon fontSize={"small"} sx={{ color: "black" }} />
          <Link to={`/`} className="link">
            Back to homepage
          </Link>
        </Button>
      </Container>
    </div>
  );
};

export default ArticlePage;
