import styles from "@/layout/Footer.module.css";

function Footer(props) {
  return (
    <footer className={styles.footer}>
      <div className={styles.desc}>
        <h3>سامانه خرید و اجاره ملک</h3>
        <p>
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است.
        </p>
      </div>
      <div>
        <ul>
          <li>تعرفه قانونی</li>
          <li>دسترسی سریع</li>
          <li>مشاورین خبره</li>
          <li>قولنامه محضری</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
