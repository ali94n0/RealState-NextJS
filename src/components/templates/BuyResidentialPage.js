import Card from "@/module/Card";
import Sidebar from "@/module/Sidebar";
import styles from "@/templates/BuyResidentialPage.module.css";

function BuyResidentialPage({ profiles }) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.main}>
        {profiles.length ? null : (
          <p className={styles.text}>هیچ آگهی ثبت نشده است</p>
        )}
        {profiles.map((profile) => (
          <Card key={profile._id} data={profile} />
        ))}
      </div>
    </div>
  );
}

export default BuyResidentialPage;
