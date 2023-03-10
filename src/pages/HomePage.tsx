import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Container } from "@mui/material";
import Main from "../components/Main";
import axios from "axios";
import { News } from "../components/types";
import useDebonce from "../components/hooks/useDebonce";

const HomePage = () => {
  const [dataNews, setDataNews] = useState<News[]>([]);
  const [input, setInput] = useState("");
  const deboncedValue = useDebonce(input, 500);

  useEffect(() => {
    const getPage = () => {
      axios
        .get(
          `https://api.spaceflightnewsapi.net/v3/articles?&title_containss=${input}`
        )
        .then(({ data }) => {
          setDataNews(data);
        })
        .catch(() => {
          setDataNews([]);
        });
    };
    getPage();
  }, [deboncedValue, input]);
  return (
    <div>
      <Container maxWidth="xl">
        <Header setInput={setInput} />
        <Main data={dataNews} input={input} />
      </Container>
    </div>
  );
};

export default HomePage;
