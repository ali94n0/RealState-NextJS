"use client";

import { sp } from "@/utilities/replaceNumber";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import styles from "@/module/AdminCard.module.css";
import Link from "next/link";

function AdminCard({ data: { title, description, location, price, _id } }) {
  const router = useRouter();
  const publishedHandler = async () => {
    const res = await fetch(`/api/profiles/published/${_id}`, {
      method: "PATCH",
    });
    const result = await res.json();
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.message);
      router.refresh();
    }
  };
  const deleteHandler = async () => {
    const res = await fetch(`/api/profiles/delete/${_id}`, {
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
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.properties}>
        <span>{location}</span>
        <span>{sp(price)}</span>
      </div>
      <div className={styles.btnBox}>
        <button className={styles.green} onClick={publishedHandler}>
          انتشار
        </button>
        <Link href={`/buy-residentials/${_id}`}>
          <button className={styles.blue}>مشاهده</button>
        </Link>
        <button className={styles.red} onClick={deleteHandler}>
          حذف
        </button>
      </div>
    </div>
  );
}

export default AdminCard;
