import React, { FC } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material";

interface cardInterface {
  id: number;
  imageUrl: string;
  publishedAt: string;
  title: string;
  summary: string;
  url?: string;
}
const CardNews: FC<cardInterface> = ({
  id,
  imageUrl,
  publishedAt,
  title,
  summary,
  url,
}) => {
  const date = new Date(Date.parse(publishedAt));
  let month = "";
  let ending = "";
  const searchMonth = () => {
    switch (date.getMonth()) {
      case 0:
        return (month = "January");
      case 1:
        return (month = "February");
      case 2:
        return (month = "March");
      case 3:
        return (month = "April");
      case 4:
        return (month = "May");
      case 5:
        return (month = "June");
      case 6:
        return (month = "July");
      case 7:
        return (month = "August");
      case 8:
        return (month = "September");
      case 9:
        return (month = "October");
      case 10:
        return (month = "November");
      case 11:
        return (month = "December");
    }
  };
  const endingAdd = () => {
    switch (date.getDay()) {
      case 1:
        return (ending = "st");
      case 2:
        return (ending = "nd");
      case 3:
        return (ending = "rd");
      default:
        return (ending = "th");
    }
  };
  searchMonth();
  endingAdd();

  const result = `${month} ${date.getDay()}${ending}, ${date.getFullYear()}`;
  const theme = createTheme({
    palette: {
      primary: {
        main: "#363636",
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={imageUrl}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {result}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {summary}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              sx={{ textTransform: "none", fontSize: "16px" }}
            >
              Read more
            </Button>
          </CardActions>
        </Card>
      </ThemeProvider>
    </div>
  );
};

export default CardNews;
