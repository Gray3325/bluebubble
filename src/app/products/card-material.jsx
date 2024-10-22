import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Image from "next/image";
import heartUrl from "../image/heart.png";
// import rabbitUrl from "../image/moonRabbit.jpg";

export default function MultiActionAreaCard() {
  function ButtonClick() {
    e.stopPropagation();
  }
  return (
    <Card sx={{ maxWidth: 345, position: "relative" }}>
      <button
        style={{
          position: "absolute",
          right: "1em",
          top: "1em",
          zIndex: 10,
          border: 0,
          borderRadius: "10em",
          background: "#ffffff",
          boxShadow: "0px 0px 0 2px #000000 ",
          width: "3em",
          height: "3em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={ButtonClick}
      >
        <Image alt='hreat' src={heartUrl} width={30} height={30} />
      </button>
      <CardActionArea>
        <CardMedia
          component='img' //圖片類型
          height='140'
          src='https://ih1.redbubble.net/image.5263652137.2942/ssrco,active_tshirt,mens,101010:01c5ca27c6,front,square_three_quarter,1000x1000.jpg' 
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
