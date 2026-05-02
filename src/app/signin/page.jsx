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

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "Login failed");
    } else {
      toast.success("Login successful");
    }

    console.log({ data, error });
  };

  const handlGoogleSignIn = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
      });
      toast.success("Redirecting to Google...");
    } catch (err) {
      toast.error("Google login failed ❌");
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
              <Label>Email</Label>
              <Input placeholder="Enter your email" />
              <FieldError />
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
              <Label>Password</Label>
              <Input placeholder="Enter your password" />
              <Description>
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
              <FieldError />
            </TextField>

            <div className="flex gap-2 mt-2">
              <Button type="submit">
                <Check /> Sign In
              </Button>
              <Button type="reset" variant="secondary">
                Reset
              </Button>
            </div>
          </Form>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-gray-200" />
            <p className="text-xs text-gray-400">Or</p>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <Button onClick={handlGoogleSignIn}>
            <GrGoogle /> Sign In With Google
          </Button>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="text-orange-500">
              Sign Up
            </a>
          </p>
        </Card>
      </div>
    </div>
  );
}
