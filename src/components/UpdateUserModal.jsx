"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { BiEdit, BiUser } from "react-icons/bi";
import toast from "react-hot-toast"; 

export function UpdateUserModal() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;

    const loadingToast = toast.loading("Updating profile...");

    try {
      const { error } = await authClient.updateUser({
        name,
        image,
      });

      if (error) {
        toast.error(error.message || "Update failed", {
          id: loadingToast,
        });
      } else {
        toast.success("Profile updated successfully ", {
          id: loadingToast,
        });
      }
    } catch (err) {
      toast.error("Something went wrong", {
        id: loadingToast,
      });
    }
  };

  return (
    <Modal>
      {/* Trigger Button */}
      <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-5 py-2 flex items-center gap-2 shadow-md hover:shadow-lg transition">
        <BiEdit /> Update Profile
      </Button>

      <Modal.Backdrop className="bg-black/40 backdrop-blur-sm">
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md rounded-2xl shadow-2xl">
            <Modal.CloseTrigger />

            {/* Header */}
            <Modal.Header className="flex items-center gap-3 border-b pb-3">
              <Modal.Icon className="bg-orange-100 text-orange-500 p-2 rounded-full">
                <BiUser className="size-5" />
              </Modal.Icon>

              <Modal.Heading className="text-lg font-semibold text-gray-800">
                Update Profile
              </Modal.Heading>
            </Modal.Header>

            {/* Body */}
            <Modal.Body className="p-6">
              <Surface className="bg-gray-50 rounded-xl p-4">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  {/* Name */}
                  <TextField className="w-full" name="name" type="text">
                    <Label className="text-sm font-medium text-gray-700">
                      Name
                    </Label>
                    <Input
                      placeholder="Enter your name"
                      className="mt-1 rounded-lg border-gray-200 focus:ring-orange-400"
                    />
                  </TextField>

                  {/* Image */}
                  <TextField className="w-full" name="image" type="url">
                    <Label className="text-sm font-medium text-gray-700">
                      Image URL
                    </Label>
                    <Input
                      placeholder="Paste image URL"
                      className="mt-1 rounded-lg border-gray-200 focus:ring-orange-400"
                    />
                  </TextField>

                  {/* Footer Buttons */}
                  <Modal.Footer className="flex gap-3 mt-4">
                    <Button
                      slot="close"
                      variant="secondary"
                      className="flex-1 rounded-lg border border-gray-200 hover:bg-gray-100"
                    >
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      slot="close"
                      className="flex-1 bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow-md hover:shadow-lg transition"
                    >
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}