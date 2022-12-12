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

import { useState, useEffect } from "react";
import "./index.css";

const MessageBoard = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    queryMessages();
  }, []);

  const queryMessages = () => {
    fetch("/.netlify/functions/messages")
      .then((res) => res.json())
      .then((json) => setMessages(json))
      .catch((ex) => console.error(ex));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    fetch("/.netlify/functions/messages", {
      method: "POST",
      body: JSON.stringify({ email, message }),
    })
      .then((res) => res.json())
      .then((json) => {
        queryMessages();
      })
      .catch((ex) => console.error(ex));
  };

  return (
    <div className="MessageBoard">
      <form>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <input
            type="text"
            className="form-control"
            id="message"
            placeholder="your message"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary submit-btn"
          onClick={onSubmit}
        >
          Submit
        </button>
      </form>
      <div className="list">
        {messages.map((item) => (
          <div className="card" key={item._id}>
            <div className="card-body">
              <h5 className="card-title">{item.email}</h5>
              <p className="card-text">{item.message}</p>
              <p className="card-subtitle">{item.createTime}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageBoard;
