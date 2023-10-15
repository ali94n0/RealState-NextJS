import Profile from "@/models/Profile";
import AddProfilePage from "@/templates/AddProfilePage";
import ConnectDB from "@/utilities/ConnectDB";
import React from "react";

async function Edit({ params: { profileId } }) {
  await ConnectDB();
  const profile = await Profile.findOne({ _id: profileId });

  if (!profile) {
    return <h3>مشکلی پیش آمده است. لطفا دوباره امتحان کنید ...</h3>;
  }
  return <AddProfilePage data={profile} />;
}

export default Edit;
