"use client";

// import SearchUsers from "@/module/SearchUsers";
import UserCard from "@/module/UserCard";
import { useState } from "react";
import styles from "@/templates/AllUsersPage.module.css";
import { Toaster } from "react-hot-toast";

function AllUsersPage({ users }) {
  const [searchUser, setSearchUser] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);
  let filteredUser = users;

  const changeHandler = (e) => {
    setSearchUser(e.target.value);
    const searched = e.target.value;

    if (searched !== "") {
      filteredUser = users.filter((user) =>
        user.email.toLowerCase().includes(searched.toLowerCase())
      );
      setFilteredUsers(filteredUser);
    } else {
      setFilteredUsers(users);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.searchbar}>
        <input
          type="text"
          placeholder="ایمیل کاربر را وارد کنید..."
          value={searchUser}
          onChange={changeHandler}
        />
      </div>
      {filteredUsers.length ? (
        <div className={styles.main}>
          {filteredUsers.map((user) => (
            <UserCard data={user} key={user._id} />
          ))}
        </div>
      ) : (
        <p className={styles.text}>کاربری ایجاد نشده...</p>
      )}
      <Toaster />
    </div>
  );
}

export default AllUsersPage;
