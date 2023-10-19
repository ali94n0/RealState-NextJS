import ConnectDB from "@/utilities/ConnectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import User from "@/models/User";
import Profile from "@/models/Profile";
import { Types } from "mongoose";

export async function POST(req) {
  try {
    await ConnectDB();

    const {
      title,
      description,
      location,
      phone,
      price,
      rules,
      amenities,
      categories,
      realState,
      constructionDate,
    } = await req.json();

    if (
      !title ||
      !description ||
      !location ||
      !price ||
      !phone ||
      !realState ||
      !categories ||
      !constructionDate
    ) {
      return NextResponse.json({
        error: "لطفا اطلاعات معتبر وارد کنید",
        status: 400,
      });
    }

    const session = await getServerSession(authOptions);
    console.log(session);

    if (!session) {
      return NextResponse.json({
        error: "لطفا وارد حساب کاربری خود شوید",
        status: 401,
      });
    }

    const user = await User.findOne({ email: session.user.email });
    console.log(user);

    if (!user) {
      return NextResponse.json({
        error: "حساب کاربری یافت نشد",
        status: 404,
      });
    }

    const newProfile = await Profile.create({
      title,
      description,
      location,
      phone,
      price: +price,
      rules,
      amenities,
      categories,
      realState,
      constructionDate,
      userId: new Types.ObjectId(user._id),
    });
    console.log(newProfile);

    return NextResponse.json({
      message: "آگهی جدید اضافه شد",
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      error: "مشکلی در سرور رخ داده است",
      status: 500,
    });
  }
}

export async function PATCH(req) {
  const {
    _id,
    title,
    description,
    location,
    phone,
    price,
    rules,
    amenities,
    categories,
    realState,
    constructionDate,
  } = await req.json();

  try {
    await ConnectDB();

    if (
      !_id ||
      !title ||
      !description ||
      !location ||
      !phone ||
      !price ||
      !categories ||
      !realState ||
      !constructionDate
    ) {
      return NextResponse.json({
        error: "لطفا اطلاعات معتبر وارد کنید",
        statue: 400,
      });
    }

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

    const profile = await Profile.findOne({ _id });
    if (!profile.userId.equals(user._id)) {
      return NextResponse.json({
        error: "دستری شما به این آگهی محدود شده است",
        status: 403,
      });
    }

    profile.title = title;
    profile.description = description;
    profile.location = location;
    profile.price = price;
    profile.phone = phone;
    profile.rules = rules;
    profile.realState = realState;
    profile.amenities = amenities;
    profile.constructionDate = constructionDate;
    profile.categories = categories;
    profile.published = false;
    profile.save();

    return NextResponse.json({
      message: "آگهی با موفقیت ویرایش شد",
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      error: "مشکلی در سرور رخ داده است",
      ststue: 500,
    });
  }
}
