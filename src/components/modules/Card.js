import { RiHome3Line } from "react-icons/ri";
import { MdApartment } from "react-icons/md";
import { BiStore } from "react-icons/bi";
import { GiOfficeChair } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { sp } from "@/utilities/replaceNumber";
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from "next/link";
import styles from "@/module/Card.module.css";

function Card({ data: { _id, title, categories, price, location } }) {
  const icons = {
    villa: <RiHome3Line />,
    apartment: <MdApartment />,
    store: <BiStore />,
    office: <GiOfficeChair />,
  };
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icons[categories]}</div>
      <p className={styles.title}>{title}</p>
      <p className={styles.location}>
        <HiOutlineLocationMarker />
        {location}
      </p>
      <span>{sp(price)} تومان</span>
      <Link href={`/dashboard/my-profile/${_id}`}>
        مشاهده آگهی
        <BiLeftArrowAlt />
      </Link>
    </div>
  );
}

export default Card;
