

import React from 'react';
import './About.css'; // Import the CSS file

// Replace 'sample.pdf' with the actual name of your PDF file
import Book1Cover from '../Assets/const.JPG';
import Book2Cover from '../Assets/Ataa-e-Rasool .jpg';
import Book3Cover from '../Assets/gusal.JPG';
import Book4Cover from '../Assets/hage.JPG'; 
import Book5Cover from '../Assets/husane.JPG';
import Book6Cover from '../Assets/argman.JPG';
import Book7Cover from '../Assets/raza.JPG';

const books = [
  {
        title: 'Contitution of BKM Comunity',
        cover: Book1Cover,
        pdf: "https://bkmstore.s3.amazonaws.com/CONSTITUTION.pdf",
      },
      // Add more book objects for other PDF documents
      {
        title: 'Ataa-e-Rasool',
        cover: Book2Cover,
        pdf: 'https://bkmstore.s3.amazonaws.com/Ataa-e-Rasool.PDF',
      },
      {
        title: 'fazal-e-gusal',
        cover: Book3Cover,
        pdf: 'https://bkmstore.s3.amazonaws.com/fazal+e+gusal.PDF',
      },
      {
        title: 'fzail-e-haj',
        cover: Book4Cover,
        pdf: 'https://bkmstore.s3.amazonaws.com/fzaily+haj+0001.PDF',
      },
      {
        title: 'Husan-e-Rasool',
        cover: Book5Cover,
        pdf: 'https://bkmstore.s3.amazonaws.com/Husn-e-Rasoor.PDF',
      },
      {
        title: 'Argman-e-Khizar',
        cover: Book6Cover,
        pdf: 'https://bkmstore.s3.amazonaws.com/Kizar+e+Milat.pdf',
      },
      {
        title: 'Raza-e-Rasool',
        cover: Book7Cover,
        pdf: 'https://bkmstore.s3.amazonaws.com/raza+e+Rasool.PDF',
      },
  // Add more books as needed
];

const Books = () => {
 

  return (<div className="container">
  <div className="content">
    <h2>PDF Documents</h2>
    <p>Below are some downloadable PDF documents:</p>
    <div className="book-cards-container">
      {books.map((book, index) => (
        <div className="book-card" key={index}>
          <div onClick={() => window.open(book.pdf, '_blank')}>
            <img src={book.cover} alt={book.title} />
          </div>
          <div className="book-info">
            <h3>{book.title}</h3>
            <div className="download-links">
             
              <div>
                {/* The 'View PDF' link now directly points to the PDF file */}
                <a href={book.pdf} target="_blank" rel="noopener noreferrer">
                  View PDF
                </a>
                <span> / </span>
                <a href={book.pdf} download>
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  );
};

export default Books;

