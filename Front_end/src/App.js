// import "./App.css";
// import Home from "./Components/Home";
// import About from "./Components/About";


// import Contact from "./Components/Contact";
// import Footer from "./Components/Footer";



// function App() {
//   return (
//     <div className="App">
//       <Home />
  
     
   
  
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles"; // Import ThemeProvider and createTheme
import "./App.css";
import Home from "./Components/Home";
import Books from "./Components/Books";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Gallery from "./Components/Gallery";
import Education from "./Components/Education";

// Define your theme
const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            {/* Add more routes for other components if needed */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
