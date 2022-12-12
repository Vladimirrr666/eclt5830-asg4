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

import { Link } from "react-router-dom";
import "./index.css";

const PostThumbnail = (props) => {
  return (
    <Link to={`/posts/${props._id}`}>
      <div className="card">
        <img className="img" src={props.poster} alt="" />
        <h5 className="title">{props.title}</h5>
        <p className="text">{props.description}</p>
      </div>
    </Link>
  );
};

export default PostThumbnail;
