import React from "react";

function Projects() {
  return (
    <div className="container">
      <h1>My Projects</h1>

      <div className="card">
        <h3>E-Commerce App</h3>
        <p>Full stack shopping app using React & Node</p>
        <a href="https://github.com/your-username/ecommerce" target="_blank">
          GitHub Link
        </a>
      </div>

      <div className="card">
        <h3>Movie Recommendation System</h3>
        <p>AI-based movie suggestion platform</p>
        <a href="https://github.com/your-username/movie-app" target="_blank">
          GitHub Link
        </a>
      </div>

    </div>
  );
}

export default Projects;