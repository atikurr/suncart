"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { GrGoogle } from "react-icons/gr";
import toast from "react-hot-toast"; 

export default function SignInPage() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const loadingToast = toast.loading("Signing in..."); 
    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "Login failed", {
        id: loadingToast,
      });
    } else {
      toast.success("Login successful", {
        id: loadingToast,
        duration: 2000,
      });
    }

    console.log({ data, error });
  };

  const handlGoogleSignIn = async () => {
    const loadingToast = toast.loading("Redirecting...");

    try {
      await authClient.signIn.social({
        provider: "google",
      });

      toast.success("Redirecting to Google...", {
        id: loadingToast,
      });
    } catch (err) {
      toast.error("Google login failed", {
        id: loadingToast,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <Card className=" mx-auto w-full py-10 px-6  rounded-3xl bg-white">
          <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">
            Sign In
          </h1>

          <Form
            className="flex w-full mx-auto flex-col gap-4"
            onSubmit={onSubmit}
          >
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label className="text-sm font-medium text-gray-700">Email</Label>
              <Input
                placeholder="Enter your email"
                className="mt-1 w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 transition"
              />
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>

            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
                return null;
              }}
            >
              <Label className="text-sm font-medium text-gray-700">
                Password
              </Label>
              <Input
                placeholder="Enter your password"
                className="mt-1 w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              />
              <Description className="text-xs text-gray-400 mt-1">
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
              <FieldError className="text-xs text-red-500 mt-1" />
            </TextField>

            <div className="flex gap-2 mt-2">
              <Button
                type="submit"
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl py-2.5 transition-all duration-200 hover:shadow-lg hover:shadow-orange-300 flex items-center justify-center gap-2"
              >
                <Check />
                Sign In
              </Button>
              <Button
                type="reset"
                variant="secondary"
                className="px-5 rounded-xl border border-gray-200 hover:bg-gray-50 transition"
              >
                Reset
              </Button>
            </div>
          </Form>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-gray-200" />
            <p className="text-center text-xs text-gray-400 font-medium">Or</p>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <Button
            onClick={handlGoogleSignIn}
            variant="outline"
            className="w-full flex items-center justify-center gap-2 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-xl py-3 transition-all duration-200 hover:shadow-md"
          >
            <GrGoogle /> Sign In With Google
          </Button>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don&apos;t have an account?{" "}
            <a
              href="/signup"
              className="text-orange-500 font-semibold hover:underline"
            >
              Sign Up
            </a>
          </p>
        </Card>
      </div>
    </div>
  );
}
