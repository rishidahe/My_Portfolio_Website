import React from "react";

function Footer() {
  return (
    <footer>
      <div
        className="container-fluid text-center"
        style={{ backgroundColor: "black" }}
      >
        <div className="row py-5">
          <div className="col-12">
            <h2 className="text-light">Interested working with Me ?</h2>
            <button className="btn btn-outline-light btn-lg">Let's Talk</button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 py-3">
            <h5 className="text-info pb-3">More Links</h5>
            <a href="/" className="text-light d-block">
              Home
            </a>
            <a href="/" className="text-light d-block">
              Blogs
            </a>
            <a href="/" className="text-light d-block">
              Projects
            </a>
            <a href="/" className="text-light d-block">
              Contact Me
            </a>
            <a href="/" className="text-light d-block">
              Write a Recommendation .
              <i className="fas fa-heart fa-beat text-light"></i>
            </a>
          </div>
          <div className="col-12 col-md-4 text-light text-justify py-3">
            <p>
              This architecture portfolio offers a simple yet powerful
              representation of Mathias Holmberg's work. Vertical and horizontal
              images are pieced together in a grid with white space between each
              to display the range of his capabilities. The color palette used
              on both the website design and the images emcompasses soft neutral
              tones, offering an inviting, approachable online space.
            </p>
          </div>
          <div className="col-12 col-md-4 py-3">
            <h5 className="text-info pb-3">Social</h5>
            <a href="/">
              <i className="fab fa-linkedin text-light h1 d-block"></i>
            </a>
            <a href="/">
              <i className="fab fa-github text-light h1 d-block"></i>
            </a>
            <a href="/">
              <i className="fas fa-envelope text-light h1 d-block"></i>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-muted">
            <p>Copyright © Rishikesh Dahe 2022</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
