import React from 'react';
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";

const Contact = () => {
  return (
    <div className="text-neutral-content min-h-screen flex items-center justify-center p-4 bg-black">
      <Card color="white" shadow={true} className="w-full max-w-md p-8">
        <Typography variant="h4" color="blue-gray" className="text-center">
          Contact Us
        </Typography>
        <form className="mt-8 mb-2">
          <div className="mb-1 flex flex-col gap-6">
            <div className="flex flex-col">
              <input
                size="lg"
                placeholder="Email"
                className="border border-blue-gray-200 rounded-md focus:border-gray-900 placeholder-neutral-500 p-2.5"
              />
            </div>
            <div className="flex flex-col">
              <input
                size="lg"
                placeholder="Phone Number"
                className="border border-blue-gray-200 rounded-md focus:border-gray-900 placeholder-neutral-500 p-2.5"
              />
            </div>
            <div className="flex flex-col">
              <Textarea
                size="lg"
                placeholder="Your Message"
                className="border border-blue-gray-200 rounded-md focus:border-gray-900 placeholder-neutral-500 min-h-[120px] p-2.5"
              />
            </div>
          </div>
          <Button className="bg-black mt-6" fullWidth>
            Send Message
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Contact;