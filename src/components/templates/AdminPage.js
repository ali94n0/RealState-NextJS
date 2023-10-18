import AdminCard from "@/module/AdminCard";
import { Toaster } from "react-hot-toast";
import styles from "@/templates/AdminPage.module.css";

function AdminPage({ profiles }) {
  return (
    <div className={styles.text}>
      {!profiles.length && <p>هیچ آگهی در انتظار تاییدی وجود ندارد</p>}

      {profiles.map((profile) => (
        <AdminCard data={profile} key={profile._id} />
      ))}
      <Toaster />
    </div>
  );
}

export default AdminPage;
