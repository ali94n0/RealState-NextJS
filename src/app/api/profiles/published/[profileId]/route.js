import Profile from "@/models/Profile";
import User from "@/models/User";
import ConnectDB from "@/utilities/ConnectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PATCH(req, context) {
  const id = context.params.profileId;

  try {
    await ConnectDB();
    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json({
        error: "لطفا وارد حساب کاربری خود شوید",
        status: 401,
      });
    }
    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json({
        error: "حساب کاربری یافت نشد",
        status: 404,
      });
    }
    if (user.rule !== "ADMIN") {
      return NextResponse.json({
        error: "دسترسی محدود",
        status: 403,
      });
    }
    const profile = await Profile.findOne({ _id: id });
    profile.published = true;
    profile.save();

    return NextResponse.json({
      message: "آگهی منتشر شد",
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      error: "مشکلی در سرور رخ داده است",
      status: 500,
    });
  }
}
