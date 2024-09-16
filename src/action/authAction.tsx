"use server";

import { z } from "zod";
import { signInSchema } from "@/lib/zod";
import { signIn as authSignIn, signOut } from "@/auth";
import { signInObjectType } from "@/lib/types";
import { AuthError } from "next-auth";

export async function signInAction(params: signInObjectType) {
  try {
    await authSignIn("credentials", { ...params ,redirect:false});
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            message: "Invalid credentials",
          };
        default:
          return {
            message: "Something went wrong.",
          };
      }
    }
    throw error;
  }
}

export async function signOutAction() {
  await signOut();
}