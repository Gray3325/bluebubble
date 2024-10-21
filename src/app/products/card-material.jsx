import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function MultiActionAreaCard() {
    function ButtonClick() {
        e.stopPropagation();

    }
  return (
    <Card sx={{ maxWidth: 345, position: "relative" }}>
        <button style={{position:"absolute",right:"1em",top:"1em",zIndex:10}} onClick={ButtonClick}><img alt="hreat"/></button>
      <CardActionArea>
        <CardMedia
          component='img' //圖片類型
          height='140'
          image='image/moonRabbit.jpg'
          alt='rabbit on moon'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Happiness Magic Array
          </Typography>
          <Typography variant='body2' sx={{ color: "text.secondary" }}>
            $12.65
          </Typography>
          <Typography variant='body3' sx={{ color: "text.secondary" }}>
            Graycat
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
