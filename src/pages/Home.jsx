import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postUser } from "../slices/userSlice"; 
import "../index.css"

const Home = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    image: "",
    name: "",
    email: "",
    phone: "",
    enroll: "",
    birthday: ""
  });

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(postUser(user));   // 🔵 API ga yuboriladi

    setUser({
      image: "",
      name: "",
      email: "",
      phone: "",
      enroll: "",
      birthday: ""
    });
  }

  return (
    <div className="std-ret">
      <div className="user-div">
        <form className="add-user" onSubmit={handleSubmit}>
          <h2>Add users</h2>

          <input name="image" type="url" placeholder="Image link"
            value={user.image} onChange={handleChange} />

          <input name="name" type="text" placeholder="First name"
            value={user.name} onChange={handleChange} />

          <input name="email" type="email" placeholder="Email"
            value={user.email} onChange={handleChange} />

          <input name="phone" type="text" placeholder="Phone number"
            value={user.phone} onChange={handleChange} />

          <input name="enroll" type="number" placeholder="Enroll number"
            value={user.enroll} onChange={handleChange} />

          <input name="birthday" type="date"
            value={user.birthday} onChange={handleChange} />

          <button className="add-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Home;