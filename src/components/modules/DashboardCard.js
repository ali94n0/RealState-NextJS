"use client";

import Card from "./Card";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import styles from "@/module/DashboardCard.module.css";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

function DashboardCard({ data }) {
  const router = useRouter();

  const editHandler = () => {
    router.push(`/dashboard/my-profiles/${data._id}`);
  };

  const deleteHandler = async () => {
    const res = await fetch(`/api/profiles/delete/${data._id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.message);
      router.refresh();
    }
  };
  return (
    <div className={styles.container}>
      <Card data={data} />
      <div className={styles.main}>
        <span
          className={data.published ? styles.confirmBadge : styles.waitngBadge}
        >
          {data.published ? "منتشر شده" : "در انتظار تایید"}
        </span>
        <button onClick={editHandler}>
          ویرایش
          <FiEdit />
        </button>
        <button onClick={deleteHandler}>
          حذف آگهی
          <AiOutlineDelete />
        </button>
      </div>
      <Toaster />
    </div>
  );
}

export default DashboardCard;
