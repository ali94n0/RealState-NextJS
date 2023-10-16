import Profile from "@/models/Profile";
import DetailsPage from "@/templates/DetailsPage";
import ConnectDB from "@/utilities/ConnectDB";

async function Details({ params: { profileId } }) {
  await ConnectDB();

  const profile = await Profile.findOne({ _id: profileId }).select("-userId");

  if (!profile) {
    return <h3>مشکلی پیش آمده است</h3>;
  }

  return <DetailsPage profile={profile} />;
}

export default Details;
