import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faGoogle,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen p-4">
      <div className="bg-black flex flex-col md:flex-row justify-center items-start shadow-lg rounded-lg w-full max-w-4xl">
        {/* Left side - Form */}
        <div className="flex flex-col justify-start items-center w-full md:w-[55%] p-6 rounded-t-lg md:rounded-tl-lg md:rounded-bl-lg">
          <div className="flex flex-col justify-center items-center pt-4">
            <h1 className="text-2xl font-bold">Welcome Back</h1>
            <span className="text-zinc-400 text-sm text-center">
              Login to your PocketPal account
            </span>
          </div>

          <div className="flex flex-col mt-5 gap-2 w-full">
            <label className="text-sm">Email</label>
            <Input type="email" placeholder="m@example.com" />
          </div>

          <div className="flex flex-col mt-5 gap-2 w-full">
            <div className="flex justify-between items-center">
              <label className="text-sm">Password</label>
              <a
                href="#"
                className="text-sm text-zinc-400 underline hover:text-zinc-200"
              >
                Forgot password?
              </a>
            </div>
            <Input type="password" />
          </div>

          <div className="w-full mt-6">
            <Button className="w-full bg-white text-black hover:bg-zinc-200 active:scale-95 transition">
              Login
            </Button>
          </div>

          <div className="flex items-center w-full mt-6">
            <div className="flex-grow border-t border-gray-600" />
            <span className="px-3 text-sm text-gray-400">Or continue with</span>
            <div className="flex-grow border-t border-gray-600" />
          </div>

          <div className="flex gap-4 justify-center mt-4">
            <Button
              variant="outline"
              size="icon"
              className="border border-gray-600 text-white hover:bg-gray-800"
            >
              <FontAwesomeIcon icon={faApple} size="lg" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border border-gray-600 text-white hover:bg-gray-800"
            >
              <FontAwesomeIcon icon={faGoogle} size="lg" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border border-gray-600 text-white hover:bg-gray-800"
            >
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </Button>
          </div>

          <p className="text-sm mt-5 text-center">
            Don't have an account?{" "}
            <a href="#" className="underline hover:text-zinc-200">
              Sign up
            </a>
          </p>
        </div>

        {/* Right side - Image */}
        <div className="hidden md:flex bg-zinc-900 h-120 justify-center items-center w-[45%] rounded-br-lg rounded-tr-lg p-6">
          <img
            src="character.png"
            alt="character"
            className="max-w-[90%] h-auto object-contain"
          />
        </div>
      </div>

      <span className="text-sm text-zinc-400 mt-5 text-center max-w-md">
        By clicking continue, you agree to our{" "}
        <a href="#" className="underline hover:text-zinc-200">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="underline hover:text-zinc-200">
          Privacy Policy
        </a>
        .
      </span>
    </div>
  );
};

export default LoginPage;
