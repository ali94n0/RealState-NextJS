import User from "@/models/User";
import ConnectDB from "@/utilities/ConnectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(req) {
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
        eroor: "حساب کاربری یافت نشد",
        status: 404,
      });
    }
    if (user.rule !== "ADMIN") {
      return NextResponse.json({
        error: "دسترسی محدود",
        status: 403,
      });
    }
    const Alluser = await User.find();
    return NextResponse.json({
      message: "اطلاعات با موفقیت دریافت شد.",
      data: Alluser,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      error: "مشکلی در سرور رخ داده است",
      ststue: 500,
    });
  }
}
