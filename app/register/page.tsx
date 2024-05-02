import React from "react";

const Register = () => {
  return (
    <section className="">
      <h1 className="text-center text-primary mt-8 text-4xl font-semibold">
        Register
      </h1>
      <form action="">
        <input type="text" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />
        <button type="submit">Register</button>
      </form>
    </section>
  );
};

export default Register;
