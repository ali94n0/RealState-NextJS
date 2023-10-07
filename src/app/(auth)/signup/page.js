import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SignUpPage from "@/templates/SignUpPage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

async function SignUp(props) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }
  return <SignUpPage />;
}

export default SignUp;
