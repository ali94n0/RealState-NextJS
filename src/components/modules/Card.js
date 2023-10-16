import { HiOutlineLocationMarker } from "react-icons/hi";
import { sp } from "@/utilities/replaceNumber";
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from "next/link";
import styles from "@/module/Card.module.css";
import { icons } from "@/constants/icons";

function Card({ data: { _id, title, categories, price, location } }) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icons[categories]}</div>
      <p className={styles.title}>{title}</p>
      <p className={styles.location}>
        <HiOutlineLocationMarker />
        {location}
      </p>
      <span>{sp(price)} تومان</span>
      <Link href={`/buy-residentials/${_id}`}>
        مشاهده آگهی
        <BiLeftArrowAlt />
      </Link>
    </div>
  );
}

export default Card;
