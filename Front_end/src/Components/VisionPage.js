import React from 'react';
import smallImage from '../Assets/ayat.png';
import thumbnailImage from '../Assets/peer.jpg';

const VisionPage = () => {
  return (
    <div className="vision-page">
    
    <div className='title'>
    <img src={thumbnailImage} alt="Thumbnail" className="thumbnail-image" />
    <div className='texthead'>
    <h1>Bazm e Khizar Millat</h1>
    <h3>Community Group</h3>
    </div>
    
    </div>
   <div className='visioncontent'>
      <h1>Our Vision</h1>
      <h2>Aims and Objectives:</h2>
      <ul>
        <li>The advancement of the Islamic faith in Manchester.</li>
        <li>To advance education, in particular Islamic education.</li>
        <li>
          To provide facilities in the interests of social welfare for recreation and other leisure-time occupation
          with the object of 'improving the conditions of life for the inhabitants of Manchester.'
        </li>
        <li>To assist Muslims in adopting the Islamic way of marriages.</li>
        <li>
          To promote religious goodwill and brotherly relations among Muslims and provide a social framework for
          Muslim unity and co-operation.
        </li>
        <li>
          To adopt all legitimate and honorable means in conformity with the principles of Islam to raise funds for
          maintaining the Mosque and establishing an Islamic Educational/Cultural center and a library in Manchester.
        </li>
        <li>To assist in proper burials of the deceased subject to the law of the land.</li>
      </ul>

      <h2>Our Motto:</h2>
      <blockquote>
        "A GOOD WORD IS LIKE A GOOD TREE' taken from the beautiful verse (14:24-25): “Have you not considered how
        Allah sets forth a parable: a good word is like a good tree, its root is firmly fixed, and its branches in the
        sky, yielding its fruit at all times by the leave of its Lord.”
      </blockquote>
      <img src={smallImage} alt="Small" className="small-image" />
      <h2>The Qur'an and Our Mission:</h2>
      <p>
        The Qur'an, the good word of Allah and the guidance for all mankind, is the ultimate path containing an
        established ideology for a successful society and a better humanity. It guides individual humans to become the
        best ambassadors and worshippers of Allah. The first command revealed to Prophet Muhammad ﷺ and all mankind was
        “Read, in the name of your Lord who created” (96:1). A Muslim is not only a seeker of true knowledge and a
        follower of Allah's guidance but also someone who implements the Sunnah (practice) of Prophet Muhammad ﷺ. He was
        described by his wife Aisha (RA) as 'a walking Qur'an,' devoted to delivering the message and spreading goodness
        on earth.
      </p>

      <h2>Our Aim:</h2>
      <p>
        We aim to make Manchester Central Mosque a place where this good word is taught to develop our children, youth,
        and adults to become firmer ambassadors of goodness in this world. Just like a tree that yields fruits to the
        surrounding environment and society in general, through divine moral and ethical values, our Muslim worshippers
        will bring positive improvements in this world.
      </p>
      </div>
    </div>
  );
};

export default VisionPage;
