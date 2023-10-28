import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import ConnectDB from "@/utilities/ConnectDB";
import User from "@/models/User";
import Profile from "@/models/Profile";
import AdminPage from "@/templates/AdminPage";

async function Admin(props) {
  const profiles = await Profile.find({ published: false });

  return <AdminPage profiles={JSON.parse(JSON.stringify(profiles))} />;
}

export default Admin;
