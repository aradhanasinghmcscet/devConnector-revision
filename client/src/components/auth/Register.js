import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      console.log("Password do not match");
    } else {
      console.log("Success");
      //   try {
      //     const newUser = {
      //       name,
      //       email,
      //       password,
      //     };

      //     const config = {
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //     };
      //     const body = JSON.stringify(newUser);

      //     const res = await axios.post("/api/users", body, config);
      //     console.log(res.data);
      //   } catch (err) {
      //     console.error(err.response.data);
      //   }
    }
  };
  return (
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user"> Create your Account</i>
      </p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">
            This site uses Gravatar, so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            minLength="6"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            minLength="6"
            name="password2"
            value={password2}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input type="submit" value="Register" className="btn btn-primary" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/register">Sign In</Link>
      </p>
    </Fragment>
  );
};
export default Register;
