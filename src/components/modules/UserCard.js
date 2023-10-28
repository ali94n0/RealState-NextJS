"use client";
import { useState } from "react";
import styles from "@/module/UserCard.module.css";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function UserCard({ data: { email, rule, _id } }) {
  const [userRule, setUserRule] = useState(rule);
  const router = useRouter();

  const changeHandler = (e) => {
    const { value } = e.target;
    setUserRule(value);
  };

  const submitHandler = async () => {
    const res = await fetch("/api/users", {
      method: "PATCH",
      body: JSON.stringify({ email, userRule }),
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();
    if (result.error) {
      toast.error(result.error);
    } else {
      router.refresh();
      toast.success(result.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <p>{email}</p>
        <div className={styles.rules}>
          <div>
            <div className={styles.admin}>
              <label htmlFor={`amdin-${_id}`}>ادمین</label>
              <input
                type="radio"
                value={"ADMIN"}
                id={`amdin-${_id}`}
                onChange={changeHandler}
                checked={userRule === "ADMIN"}
              />
            </div>
            <div className={styles.user}>
              <label htmlFor={`user-${_id}`}>کاربر</label>
              <input
                type="radio"
                value={"USER"}
                id={`user-${_id}`}
                onChange={changeHandler}
                checked={userRule === "USER"}
              />
            </div>
          </div>
          <button onClick={submitHandler}>تایید</button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
