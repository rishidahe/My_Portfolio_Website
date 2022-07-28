import React from "react";
import BlogCard from "./BlogCard";

function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      imageUrl: "https://i.imgur.com/7sbIzMt.jpg",
      excerpt: "This is my Blog about....",
    },
    {
      id: 2,
      title: "Blog 2",
      imageUrl: "https://i.imgur.com/Pl5HzBg.jpg",
      excerpt: "This is my Blog about....",
    },
    {
      id: 3,
      title: "Blog 3",
      imageUrl: "https://i.imgur.com/0gnwYvx.jpg",
      excerpt: "This is my Blog about....",
    },
  ];
  return (
    <div className="bg-white w-100 pt-3 pb-3">
      <div className="container text-center my-5 pt-3">
        <h1 className="font-weight-light">
          My <span className="text-info"> Blogs</span>
        </h1>
        <div className="lead">I Share my views on Technologies in these Blogs.</div>
        <div className="row my-5 pt-3">
          {blogs.map((blog) => (
            <div key={blog.id} className="col-12 col-md-4 my-2">
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
        <div className="my-5">
          <a href="/" className="text-dark text-right">
            <h5>
              See My Blogs..
              <i className="fas fa-solid fa-circle-arrow-right align-middle"></i>
            </h5>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
