import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";

const Login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate();
 
  const handelSubmit = (e) => {
    const url = import.meta.env.VITE_URL;

    e.preventDefault();

    axios
      .post(`${url}/users/login`, {
        email,

        password,
      })
      .then((result) => {
        const token = result.data.data.data;
        console.log(token)
        const decodeed = jwtDecode(token);
        
        console.log(decodeed);
        console.log(result);
        navigate("/#h");
      }) // Add proper error feedback to user
      .catch((err) => {
        console.log(err);
        alert("Login failed: " + (err.response?.data?.message || err.message));
      });
  }
      
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-black text-neutral-content">
      <Card color="white" shadow={true} className="w-full max-w-md p-8">
        <Typography variant="h4" color="blue-gray" className="text-center">
          Sign In
        </Typography>
        <form className="mt-8 mb-2" onSubmit={handelSubmit}>
          <div className="flex flex-col gap-6 mb-1">
            <div className="flex flex-col">
              <input
                size="lg"
                placeholder="email"
                className="border border-blue-gray-200 rounded-md focus:border-gray-900 placeholder-neutral-500 p-2.5"
                onChange={(e) => setemail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <input
                size="lg"
                placeholder="Password"
                className="border border-blue-gray-200 rounded-md focus:border-gray-900 placeholder-neutral-500 p-2.5"
                onChange={(e) => setpassword(e.target.value)}
                required
              />
            </div>
          </div>
          <Button className="mt-6 bg-black" fullWidth type="submit">
            SignIn
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;