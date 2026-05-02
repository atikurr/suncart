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
import { useRouter } from "next/navigation";
import { GrGoogle } from "react-icons/gr";
import toast from "react-hot-toast"; 

export default function SignUpPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const loadingToast = toast.loading("Creating account..."); 

    const { data, error } = await authClient.signUp.email({
      name,
      image,
      email,
      password,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "Signup failed", {
        id: loadingToast,
      });
    } else {
      toast.success("Account created successfully", {
        id: loadingToast,
      });

      router.push("/");
    }
  };

  const handleGoogleSignUp = async () => {
    const loadingToast = toast.loading("Redirecting...");

    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });

      toast.success("Redirecting to Google...", {
        id: loadingToast,
      });
    } catch (err) {
      toast.error("Google signup failed", {
        id: loadingToast,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <Card className="w-full py-10 px-6 rounded-3xl bg-white">
          <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">
            Sign Up
          </h1>

          <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
            {/* Name */}
            <TextField isRequired name="name" type="text" className="w-full">
              <Label>Name</Label>
              <Input className="w-full" placeholder="Enter your name" />
              <FieldError />
            </TextField>

            {/* Image */}
            <TextField name="image" type="text" className="w-full">
              <Label>Image URL</Label>
              <Input
                className="w-full"
                placeholder="Optional profile image URL"
              />
              <FieldError />
            </TextField>

            {/* Email */}
            <TextField isRequired name="email" type="email" className="w-full">
              <Label>Email</Label>
              <Input className="w-full" placeholder="Enter your email" />
              <FieldError />
            </TextField>

            {/* Password */}
            <TextField
              isRequired
              name="password"
              type="password"
              minLength={8}
              className="w-full"
            >
              <Label>Password</Label>
              <Input className="w-full" placeholder="Enter your password" />
              <Description>Minimum 8 chars, 1 uppercase, 1 number</Description>
              <FieldError />
            </TextField>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl py-2.5 flex items-center justify-center gap-2"
            >
              <Check />
              Sign Up
            </Button>
          </Form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-gray-200" />
            <p className="text-xs text-gray-400">Or</p>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Google Button */}
          <Button
            onClick={handleGoogleSignUp}
            variant="outline"
            className="w-full flex items-center justify-center gap-2 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-xl py-3"
          >
            <GrGoogle />
            Continue with Google
          </Button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <a
              href="/signin"
              className="text-orange-500 font-semibold hover:underline"
            >
              Sign in here
            </a>
          </p>
        </Card>
      </div>
    </div>
  );
}
