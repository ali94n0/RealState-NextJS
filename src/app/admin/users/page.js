import User from "@/models/User";
import AllUsersPage from "@/templates/AllUsersPage";
import ConnectDB from "@/utilities/ConnectDB";

import React from "react";

async function AllUsers(props) {
  await ConnectDB();

  const users = await User.find();

  if (!users) {
    return <p>مشکلی پیش آمده است</p>;
  }

  return (
    <AllUsersPage users={JSON.parse(JSON.stringify(users))}></AllUsersPage>
  );
}

export default AllUsers;
