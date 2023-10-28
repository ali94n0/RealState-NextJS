import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import styles from "@/layout/DashboardSidebar.module.css";
import LogoutBtn from "@/module/LogoutBtn";

function DashboardSidebar({ children, email, rule }) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <CgProfile />
        {rule === "ADMIN" ? "Admin" : "user"}
        <p>{email}</p>
        <span></span>
        <Link href={"/dashboard"}>حساب کاربری</Link>
        <Link href={"/dashboard/my-profiles"}>آگهی های من</Link>
        <Link href={"/dashboard/add"}>ثبت آگهی</Link>
        {rule === "ADMIN" ? <Link href={"/admin"}>در انتظار تایید</Link> : null}
        {rule === "ADMIN" ? <Link href={"/admin/users"}>کاربران</Link> : null}

        <LogoutBtn />
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
}

export default DashboardSidebar;
