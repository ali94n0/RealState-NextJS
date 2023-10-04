import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import styles from "@/layout/Header.module.css";

function Header(props) {
  return (
    <header className={styles.header}>
      <div>
        <ul>
          <li>
            <Link href={"/"}>صفحه اصلی</Link>
          </li>
          <li>
            <Link href={"/buy-residential"}>اگهی‌ها</Link>
          </li>
        </ul>
      </div>
      <div className={styles.login}>
        <Link href={"/signin"}>
          <FiLogIn />
          <span>ورود</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
