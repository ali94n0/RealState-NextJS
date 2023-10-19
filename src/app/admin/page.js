import DashboardSidebar from "@/layout/DashboardSidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import ConnectDB from "@/utilities/ConnectDB";
import User from "@/models/User";
import Profile from "@/models/Profile";
import AdminPage from "@/templates/AdminPage";

async function Admin(props) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin");
  }
  await ConnectDB();

  const user = await User.findOne({ email: session.user.email });

  if (!user) {
    return <p>مشکلی پیش آمده است</p>;
  }

  if (user.rule !== "ADMIN") {
    redirect("/dashboard");
  }
  const profiles = await Profile.find({ published: false });

  return (
    <DashboardSidebar email={user.email} rule={user.rule}>
      <AdminPage profiles={JSON.parse(JSON.stringify(profiles))} />
    </DashboardSidebar>
  );
}

export default Admin;
