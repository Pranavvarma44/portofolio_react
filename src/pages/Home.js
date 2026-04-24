import React from "react";

function Home() {
  return (
    <div className="container">
      
      <img 
        src="https://via.placeholder.com/150" 
        alt="profile"
        className="profile"
      />

      <h1>Pranav Rudraraju</h1>

      <h2>About Me</h2>
      <p>I am a Full Stack and machine learning Developer passionate about building modern web apps with ml models .</p>

      <h2>Research Interests</h2>
      <p>Machine Learning, AI, Web Development</p>

      <h2>Personal Details</h2>
      <p>📞 Phone: 9876543210</p>
      <p>📧 Personal Email: pranav@gmail.com</p>
      <p>📧 College Email: pranav@college.edu</p>

      <h2>Skills</h2>
      <ul>
        <li>React</li>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>Python</li>
      </ul>

    </div>
  );
}

export default Home;