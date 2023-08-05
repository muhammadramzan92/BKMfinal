import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";


import dasi1 from "../Assets/1.jpg";




const ImageCard = () => {
 

  const images = [
    {
      title: "Dasi foods",
      imageUrl: dasi1,
      description: "Desi Foods-A delightful blend of traditional flavors and culinary heritage, capturing the essence of authentic cuisine in a captivating card image.",
    },
    
  ];

  return (
    <div className="imageCardContainer">
      {images.map((image, index) => (
        <Card key={index} className="card">
          <CardMedia
            component="img"
            className="cardImage"
            image={image.imageUrl}
            alt={image.title}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {image.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {image.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};


export default ImageCard;
