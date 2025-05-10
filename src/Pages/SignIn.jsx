import React, { useState } from 'react';
import  axios  from "axios";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";

const SignIn = () => {

  const [name, setname] = useState();
  const [password, setpassword] = useState();
    const Navigate = useNavigate()
    const handelSubmit = (e) => {
      e.preventDefalt()
      axios
        .post("http://localhost:1000/users/login", {
          name,
         
          password,
         
        })
        .then(result => {
          console.log(result) 
          Navigate('/home')
        })
        .catch((err) => console.log(err));
    }
  return (
    <div className="text-neutral-content min-h-screen flex items-center justify-center p-4 bg-black">
      <Card color="white" shadow={true} className="w-full max-w-md p-8">
        <Typography variant="h4" color="blue-gray" className="text-center">
          SignIn
        </Typography>
        <form className="mt-8 mb-2" onSubmit={{ handelSubmit }}>
          <div className="mb-1 flex flex-col gap-6">
            <div className="flex flex-col">
              <input
                size="lg"
                placeholder="UserName"
                className="border border-blue-gray-200 rounded-md focus:border-gray-900 placeholder-neutral-500 p-2.5"
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <input
                size="lg"
                placeholder="Password"
                className="border border-blue-gray-200 rounded-md focus:border-gray-900 placeholder-neutral-500 p-2.5"
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
          </div>
          <Button className="bg-black mt-6" fullWidth>
            SignIn
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default SignIn;
