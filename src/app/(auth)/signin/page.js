import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SignInPage from "@/templates/SignInPage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import React from "react";

async function SignIn(props) {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/dashboard");
  }

  return <SignInPage />;
}

export default SignIn;
