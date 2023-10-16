import DashboardCard from "@/module/DashboardCard";
import styles from "@/templates/MyProfilesPage.module.css";

function MyProfilesPage({ profiles }) {
  return (
    <div>
      {profiles.length ? null : (
        <p className={styles.text}>هیچ آگهی ثبت نشده است</p>
      )}
      {profiles.map((item) => (
        <DashboardCard key={item._Id} data={JSON.parse(JSON.stringify(item))} />
      ))}
    </div>
  );
}

export default MyProfilesPage;
