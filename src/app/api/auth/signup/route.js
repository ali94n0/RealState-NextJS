import User from "@/models/User";
import ConnectDB from "@/utilities/ConnectDB";
import { hashPassword } from "@/utilities/auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await ConnectDB();

    const { email, password } = await req.json();
    console.log(email, password);

    if (!email || !password) {
      return NextResponse.json({
        error: "لطفا اطلاعات معتبر وارد کنید",
        status: 422,
      });
    }

    const existedUser = await User.findOne({ email });

    if (existedUser) {
      return NextResponse.json({
        error: "این حساب کاربری وجود دارد",
        status: 422,
      });
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await User.create({
      email,
      password: hashedPassword,
    });
    console.log(newUser);

    return NextResponse.json({ message: "حساب کاربری ایجاد شد", status: 201 });
  } catch (error) {
    return NextResponse.json({
      error: "مشکلی در سرور رخ داده است",
      status: 500,
    });
  }
}
