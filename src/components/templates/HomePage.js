import CategoryCard from "@/module/CategoryCard";
import { FiCircle } from "react-icons/fi";
import { FaCity } from "react-icons/fa";
import { services, cities, categoriesList } from "@/constants/strings";
import styles from "@/templates/HomePage.module.css";

function HomePage(props) {
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.desc}>
          <h1>سامانه خرید و اجاره ملک</h1>
          <ul>
            {services.map((i) => (
              <li key={i}>
                <FiCircle />
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.categories}>
        {Object.keys(categoriesList).map((k) => (
          <CategoryCard key={k} name={k} title={categoriesList[k]} />
        ))}
      </div>
      <div className={styles.city}>
        <h3>شهر های پر بازدید</h3>
        <ul>
          {cities.map((c) => (
            <li>
              <FaCity />
              {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
