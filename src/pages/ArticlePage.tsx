import React, { useState } from "react";
import Header from "../components/Header/Header";
import { Container } from "@mui/material";
import Main from "../components/Main/Main";

const ArticlePage = () => {
  const url =
    "https://api.spaceflightnewsapi.net/v3/articles?title_containss=Nasa";
  const [input, setInput] = useState("");

  return (
    <div>
      <Container maxWidth="xl">
        <Header setInput={setInput} />
        <Main />
      </Container>
    </div>
  );
};

export default ArticlePage;
