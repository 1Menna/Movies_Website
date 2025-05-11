import React from "react";
import { useState } from "react";
import  axios  from "axios";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";

const Signup = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [number, setnumber] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    const url = import.meta.env.VITE_URL;
    e.preventDefault();
    axios
      .post(`${url}/users/signup`, {
       
        name,
        email,
        password,
        number,
      })
      .then((result) => {
        console.log(result);
        // Only store token if it exists in response
        if (result.data.token) {
          localStorage.setItem("token", result.data.token);
        }
        navigate("/signIn");
      })
      .catch((err) => {
        console.error("Signup error:", err.response?.data || err.message);
        alert(
          err.response?.data?.message
        );
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-black text-neutral-content">
      <Card color="white" shadow={true} className="w-full max-w-md p-8">
        <Typography variant="h4" color="blue-gray" className="text-center">
          Sign Up
        </Typography>
        <form className="mt-8 mb-2" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6 mb-1">
            <div className="flex flex-col">
              <input
                size="lg"
                placeholder="Username"
                className="border border-blue-gray-200 rounded-md focus:border-gray-900 placeholder-neutral-500 p-2.5"
                onChange={(e) => setname(e.target.value)}
                required
                value={name}
              />
            </div>
            <div className="flex flex-col">
              <input
                type="password"
                size="lg"
                placeholder="Password"
                className="border border-blue-gray-200 rounded-md focus:border-gray-900 placeholder-neutral-500 p-2.5"
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <input
                type="email"
                size="lg"
                placeholder="Email"
                className="border border-blue-gray-200 rounded-md focus:border-gray-900 placeholder-neutral-500 p-2.5"
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <input
                type="tel"
                size="lg"
                placeholder="Phone Number"
                className="border border-blue-gray-200 rounded-md focus:border-gray-900 placeholder-neutral-500 p-2.5"
                onChange={(e) => setnumber(e.target.value)}
              />
            </div>
          </div>
          <Button className="mt-6 bg-black" fullWidth type="submit">
            Sign Up
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Signup;