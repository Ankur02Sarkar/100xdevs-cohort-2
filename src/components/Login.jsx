import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import LoginForm from "./example/signup-form-demo";

const Login = () => {
  return (
    <BackgroundBeamsWithCollision className="flex flex-col">
      <div className="text-2xl md:text-4xl font-bold lg:text-5xl relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
        <span className="">Login Form</span>
      </div>
      <LoginForm />
    </BackgroundBeamsWithCollision>
  );
};

export default Login;
