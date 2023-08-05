import React from 'react';
import Grid from '@mui/material/Grid';
import './Gallery.css'; // Import the CSS file


const imageUrls = [
    "https://bkmstore.s3.amazonaws.com/peer.jpg",
    "https://bkmstore.s3.amazonaws.com/background.jpg", 
    "https://bkmstore.s3.amazonaws.com/kaba.jpg",
    "https://bkmstore.s3.amazonaws.com/masjid.jpg",
     "https://bkmstore.s3.amazonaws.com/quran.jpg"
    
  
];

function Gallery() {
  return (
    <div className="gallery-container">
      <Grid container spacing={2}>
        {imageUrls.map((imageUrl, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <img

              src={imageUrl}
              alt={`${index + 1}`}
              className="gallery-image"
              loading="lazy"
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Gallery;
