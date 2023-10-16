import ItemList from "@/module/ItemList";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { BiCalendarCheck } from "react-icons/bi";
import { icons } from "@/constants/icons";
import { categoriesList } from "@/constants/strings";
import { sp } from "@/utilities/replaceNumber";
import ShareButton from "@/module/ShareButton";
import styles from "@/templates/DetailsPage.module.css";
import { Toaster } from "react-hot-toast";

function DetailsPage({
  profile: {
    title,
    location,
    description,
    amenities,
    rules,
    realState,
    phone,
    price,
    constructionDate,
    categories,
  },
}) {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>{title}</h1>
        <span>
          <HiOutlineLocationMarker />
          {location}
        </span>
        <h3 className={styles.title}>توضیحات</h3>
        <p>{description}</p>
        <h3 className={styles.title}>امکانات رفاهی</h3>
        <ItemList data={amenities} />
        <h3 className={styles.title}>قوانین</h3>
        <ItemList data={rules} />
      </div>
      <div className={styles.sidebar}>
        <div className={styles.realState}>
          <SiHomebridge />
          <p>املاک {realState}</p>
          <span>
            <AiOutlinePhone />
            {phone}
          </span>
        </div>

        <ShareButton />

        <div className={styles.price}>
          <p>
            {icons[categories]}
            {categoriesList[categories]}
          </p>
          <p>{sp(price)} تومان</p>
          <p>
            <BiCalendarCheck />
            {constructionDate.toLocaleDateString("fa-ir")}
          </p>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default DetailsPage;
