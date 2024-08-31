import React, { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Input,
} from "@nextui-org/react";
import { HeartFilledIcon } from "./icons";
import './App.css'; // Assuming you're using this CSS file for the blur effect
import { link } from "fs";
import { Link } from "@nextui-org/link";

export function PopOver() {
  const [showLogin, setShowLogin] = useState(true);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  return (
    <div>
      <Popover
        placement="top"
        isOpen={isPopoverOpen}
        onOpenChange={togglePopover}
      >
        <PopoverTrigger>
          <Button  as={Link}
              className="text-sm font-normal text-default-600 bg-default-100 p-3 m-4 hover:bg-red-200 border-red-400 border-2"
              href="#"
              startContent={<HeartFilledIcon className="text-danger" />}
              variant="flat">
            Donate Blood
          </Button>

        </PopoverTrigger>
        <PopoverContent>
          <div className="px-4 py-4">
            {showLogin ? (
              <LoginForm toggleForm={() => setShowLogin(false)} />
            ) : (
              <SignUpForm toggleForm={() => setShowLogin(true)} />
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

function LoginForm({ toggleForm }) {
  return (
    <div className="text-small font-bold">
      <h3 className="text-center text-lg mb-4 text-red-600">Login</h3>
      <Input
        className="mb-3"
        clearable
        bordered
        fullWidth
        color="error"
        size="lg"
        placeholder="Username"
      />
      <Input
        className="mb-3"
        clearable
        bordered
        fullWidth
        color="error"
        size="lg"
        placeholder="Password"
        type="password"
      />
      <Button className="w-full mt-2 bg-gradient-to-b from-red-400 to-red-600 text-white">
        Login
      </Button>
      <div className="mt-2 text-center">
        <span className="text-sm">Don't have an account? </span>
        <Button light auto onClick={toggleForm} className="text-red-600">
          Sign Up
        </Button>
      </div>
    </div>
  );
}

function SignUpForm({ toggleForm }) {
  return (
    <div className="text-small font-bold">
      <h3 className="text-center text-lg mb-4 text-red-600">Sign Up</h3>
      <Input
        className="mb-3"
        clearable
        bordered
        fullWidth
        color="error"
        size="lg"
        placeholder="Username"
      />
      <Input
        className="mb-3"
        clearable
        bordered
        fullWidth
        color="error"
        size="lg"
        placeholder="Email"
        type="email"
      />
      <Input
        className="mb-3"
        clearable
        bordered
        fullWidth
        color="error"
        size="lg"
        placeholder="Password"
        type="password"
      />
      <Button className="w-full mt-2 bg-gradient-to-b from-red-400 to-red-600 text-white">
        Sign Up
      </Button>
      <div className="mt-2 text-center">
        <span className="text-sm">Already have an account? </span>
        <Button light auto onClick={toggleForm} className="text-red-600">
          Login
        </Button>
      </div>
    </div>
  );
}
