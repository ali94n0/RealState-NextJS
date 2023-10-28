import DashboardSidebar from "@/layout/DashboardSidebar";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import ConnectDB from "@/utilities/ConnectDB";
import User from "@/models/User";

export const metadata = {
  title: "پنل کاربری | مشاور املاک",
};

async function DashboardLayout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin");
  }
  await ConnectDB();

  const user = await User.findOne({ email: session.user.email });

  if (!user) {
    return <h3>مشکلی پیش آمده است</h3>;
  }

  return (
    <DashboardSidebar email={user.email} rule={user.rule}>
      {children}
    </DashboardSidebar>
  );
}

export default DashboardLayout;
