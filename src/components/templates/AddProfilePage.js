"use client";
import CustomDatePicker from "@/module/CustomDatePicker";
import Loader from "@/module/Loader";
import RadioList from "@/module/RadioList";
import TextInput from "@/module/TextInput";
import TextList from "@/module/TextList";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "@/templates/AddProfilePage.module.css";
import { useRouter } from "next/navigation";

function AddProfilePage(props) {
  const initialData = {
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    categories: "",
    rules: [],
    amenities: [],
    constructionDate: new Date(),
  };
  const [profileData, setProfileData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const submitHandler = async () => {
    setLoading(true);
    const res = await fetch("/api/profiles", {
      method: "POST",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      router.refresh();
      setProfileData(initialData);
    }
  };
  return (
    <div className={styles.container}>
      <h3>ثبت اگهی</h3>
      <TextInput
        title={"عنوان آگهی"}
        name={"title"}
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title={"عنوان توضیحات"}
        name={"description"}
        profileData={profileData}
        setProfileData={setProfileData}
        textarea={true}
      />
      <TextInput
        title={"آدرس"}
        name={"location"}
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title={"شماره تماس"}
        name={"phone"}
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title={"قیمت(تومان)"}
        name={"price"}
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title={"بنگاه"}
        name={"realState"}
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <RadioList profileData={profileData} setProfileData={setProfileData} />
      <TextList
        title={"امکانات رفاهی"}
        profileData={profileData}
        setProfileData={setProfileData}
        type={"amenities"}
      />
      <TextList
        title={"قوانین"}
        profileData={profileData}
        setProfileData={setProfileData}
        type={"rules"}
      />
      <CustomDatePicker
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <Toaster />
      {loading ? (
        <Loader />
      ) : (
        <button className={styles.submit} onClick={submitHandler}>
          ثبت آگهی
        </button>
      )}
    </div>
  );
}

export default AddProfilePage;
