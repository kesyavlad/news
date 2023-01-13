import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material";

const CardNews = () => {
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
            image="/static/images/cards/contemplative-reptile.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
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
