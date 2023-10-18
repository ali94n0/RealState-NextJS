import Profile from "@/models/Profile";
import BuyResidentialPage from "@/templates/BuyResidentialPage";
import ConnectDB from "@/utilities/ConnectDB";
import React from "react";

async function BuyResidential({ searchParams }) {
  await ConnectDB();
  const profiles = await Profile.find({ published: true }).select("-userId");
  if (!profiles) {
    return <h3>مشکلی پیش آمده است</h3>;
  }
  let data = profiles;
  if (searchParams.categories) {
    data = profiles.filter(
      (profile) => profile.categories === searchParams.categories
    );
  }
  return <BuyResidentialPage profiles={data} />;
}

export default BuyResidential;
