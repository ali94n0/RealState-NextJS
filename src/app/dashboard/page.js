import DashboardPage from "@/templates/DashboardPage";
import ConnectDB from "@/utilities/ConnectDB";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import User from "@/models/User";

async function Dashboard(props) {
  const session = await getServerSession(authOptions);
  await ConnectDB();

  const user = await User.findOne({ email: session.user.email });

  return <DashboardPage createdAt={user.createdAt} />;
}

export default Dashboard;
