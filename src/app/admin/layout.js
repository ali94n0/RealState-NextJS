import DashboardSidebar from "@/layout/DashboardSidebar";
import User from "@/models/User";
import ConnectDB from "@/utilities/ConnectDB";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
  title: "پنل ادمین | مشاور املاک",
};
async function Layout({ children }) {
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
  return (
    <DashboardSidebar email={user.email} rule={user.rule}>
      {children}
    </DashboardSidebar>
  );
}

export default Layout;
