import React from 'react';
import './Education.css'; // Import the CSS file
import educationImage from '../Assets/education-promotion.avif'; // Import the education promotion image

function Education() {
  return (
    <div className="education-container">
      <div className="education-card">
        <div className="education-header">
          <img src={educationImage} style={{ width: '100%', height: '338px', objectFit: 'cover' }} alt="Education Promotion" />
          <div className="education-content">
            <h2>Education</h2>
            <p>Our Education offerings include:</p>
            <ul>
              <li>Monthly Quraan Lectures</li>
              <li>Quarterly main religious gatherings to support your religious beliefs</li>
              <li>Weekly online Quraan and Adees class</li>
              <li>Arabic and Urdu classes</li>
              <li>Free Maths, English, and Science tuition classes for GCSE students</li>
            </ul>
            <p>For more information, please email us or call us on 07727874307</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
