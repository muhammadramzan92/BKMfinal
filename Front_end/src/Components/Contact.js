
import React, { useState } from "react";
import { TextField, Button, Container, Paper, Typography } from "@mui/material";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    details: "",
  });

  const [agreed, setAgreed] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleButtonClick = () => {
    if (agreed) {
      axios
        .post("http://localhost:5000/api/send-email", formData)
        .then((response) => {
          console.log(response.data.message);
          setIsEmailSent(true);
          // You can display a success message to the user here
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          // Handle the error and display an error message to the user
        });
    } else {
      // Display an error message or take appropriate action if the user hasn't agreed to the terms
      console.log("Please agree to the terms before submitting.");
    }
  };

  return (
    <div
      className="contact-page-wrapper"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container component={Paper} sx={{ p: 4, maxWidth: 400 }}>
        <Typography align="center">
          <h2 style={{ color: "#28b5c6", margin: 0 }}>
            Bazm-e-Khizar-e-Millat
          </h2>
          <h3 style={{ color: "#0b64e3", margin: 0 }}>MEMBERSHIP FORM</h3>
        </Typography>

        <div className="contact-form-container">
          <TextField
            label="Name"
            variant="outlined"
            name="name"
            fullWidth
            margin="normal"
            value={formData.name}
            onChange={handleInputChange}
          />
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleInputChange}
          />
          <TextField
            label="Phone"
            variant="outlined"
            name="phone"
            fullWidth
            margin="normal"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <TextField
            label="Enter your message..."
            variant="outlined"
            name="details"
            multiline
            rows={4}
            fullWidth
            margin="normal"
            value={formData.details}
            onChange={handleInputChange}
          />
          <div style={{ display: "flex", alignItems: "center" }}>
            
            
            <label style={{ marginLeft: "8px" }}>
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              style={{
               width: "20px", // Adjust the width of the checkbox
               height: "20px", // Adjust the height of the checkbox
              transform: "scale(1.5)", // Scale the checkbox to increase its size
                  }}
             />
              I Confirm and Understand that:
              <ul>
                <li>a) I am aged 16 or over</li>
                <li>b) I am a resident of Greater Manchester.</li>
                <li>c) All information supplied is true and correct</li>
                <li>
                  d) If any of the supplied information is False or Misleading, or if I do anything that is deemed to be not in the best interests of the B.K.M.that my membership can be terminated
                </li>
                <li>
                  e) By signing this document, that I agree to abide by the conditions of membership as laid out in the Constitution of Bazm-e-Khizar-e-Millat. (A copy will provided to all members)
                </li>
                <li>
                  f) Attendance at meetings is by personal choice; I'm under no obligation to BKM what so ever & if I wish just receive or submit information, comments or ideas.
                </li>
                <li>
                  g) I can opt out of being a member, receiving emails, newsletters and phone calls about the group or request that my details are not distributed outside of the BKM at any time
                </li>
              </ul>
            </label>
          </div>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleButtonClick}
            disabled={!agreed} // Disable the button if the checkbox is not checked
          >
            Contact via Email
          </Button>
        </div>
        {isEmailSent && (
        <Typography variant="subtitle1" align="center" style={{ color: "green" }}>
          Email sent successfully!
        </Typography>
      )}
      </Container>
    </div>
  );
};

export default Contact;
