/**
 * ECLT5830 Network and Web Programming
 *
 * I declare that the assignment here submitted is original
 * except for source material explicitly acknowledged,
 * and that the same or closely related material has not been
 * previously submitted for another course.
 * I also acknowledge that I am aware of University policy and
 * regulations on honesty in academic work, and of the disciplinary
 * guidelines and procedures applicable to breaches of such
 * policy and regulations, as contained in the website.
 *
 * University Guideline on Academic Honesty:
 * http://www.cuhk.edu.hk/policy/academichonesty/
 *
 * Student Name : LinQiao
 * Student ID : 1155185447
 * Date : 2022/12/02
 */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./index.css";

const Post = () => {
  const [post, setPost] = useState();
  const { postId } = useParams();
  const queryDetail = () => {
    fetch("/.netlify/functions/posts", {
      method: "POST",
      body: JSON.stringify({ postId }),
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json);
        setPost(json);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    queryDetail();
  }, []);
  return (
    <div className="Post">
      <Link to="/">
        <button className="btn btn-primary back-btn">Back</button>
      </Link>
      {post && (
        <div>
          <h1>{post.title}</h1>
          <p>{post.contents}</p>
        </div>
      )}
    </div>
  );
};

export default Post;
