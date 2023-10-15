"use client";
import CustomDatePicker from "@/module/CustomDatePicker";
import Loader from "@/module/Loader";
import RadioList from "@/module/RadioList";
import TextInput from "@/module/TextInput";
import TextList from "@/module/TextList";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "@/templates/AddProfilePage.module.css";
import { useRouter } from "next/navigation";

function AddProfilePage({ data }) {
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

  useEffect(() => {
    if (data) {
      setProfileData(data);
    }
  }, []);

  const submitHandler = async () => {
    setLoading(true);
    const res = await fetch("/api/profiles", {
      method: "POST",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();
    setLoading(false);
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.message);
      router.refresh();
      if (!data) {
        setProfileData(initialData);
      }
    }
  };

  const editHandler = async () => {
    const res = await fetch("/api/profiles", {
      method: "PATCH",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" },
    });

    const result = await res.json();

    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.message);
      router.refresh;
    }
  };
  return (
    <div className={styles.container}>
      <h3>{data ? "ویرایش آگهی" : "ثبت آگهی"}</h3>
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
      ) : data ? (
        <button className={styles.submit} onClick={editHandler}>
          ویرایش آگهی
        </button>
      ) : (
        <button className={styles.submit} onClick={submitHandler}>
          ثبت آگهی
        </button>
      )}
    </div>
  );
}

export default AddProfilePage;
