import Link from "next/link";
import { HiFilter } from "react-icons/hi";
import { categoriesList } from "@/constants/strings";
import styles from "@/module/Sidebar.module.css";

function Sidebar(props) {
  return (
    <div className={styles.container}>
      <p>
        <HiFilter />
        دسته بندی
      </p>
      <Link href="/buy-residentials">همه</Link>
      {Object.keys(categoriesList).map((k) => (
        <Link
          href={{
            pathname: "/buy-residentials",
            query: { categories: k },
          }}
        >
          {categoriesList[k]}
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
<p></p>;
