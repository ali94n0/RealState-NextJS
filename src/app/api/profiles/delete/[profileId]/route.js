import Profile from "@/models/Profile";
import User from "@/models/User";
import ConnectDB from "@/utilities/ConnectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE(req, context) {
  try {
    await ConnectDB();
    const id = context.params.profileId;

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
    const profile = await Profile.findOne({ _id: id });

    if (!profile.userId.equals(user._id)) {
      return NextResponse.json({
        error: "دستری شما به این آگهی محدود شده است",
        status: 403,
      });
    }

    await Profile.deleteOne({ _id: id });
    return NextResponse.json({
      message: "آگهی موردنظر حذف شد",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      error: "مشکلی در سرور رخ داده است",
      statue: 500,
    });
  }
}
