import React, { useState } from "react";
import { Link } from "react-router-dom";
import { blogsData } from "../data";

const Blogs = () => {
  const [blogs, setBlogs] = useState(blogsData);
  //console.log(blogs);

// Method
const truncateString = (str , num) =>{
  if(str.length > num){
    return str.slice(0, num) + "..."
  } else{
    return str
  }
}


  console.log(blogs);
  return (
    <div>
      <h1>Blogs Page</h1>
      <section>
        {blogs.map((blog) => {
          const { id, title, body } = blog;
          return (
            <article key={id}>
              <h3>
                <strong>{title}</strong>
              </h3>
              <p>{truncateString(body, 100)}</p>
              <Link to={title} className= "link" state={{id, title, body}}>Learn More</Link>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Blogs;
