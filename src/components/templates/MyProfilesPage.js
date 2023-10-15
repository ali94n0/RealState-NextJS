import DashboardCard from "@/module/DashboardCard";

function MyProfilesPage({ profiles }) {
  return (
    <div>
      {profiles.length ? null : <p>هیچ آگهی ثبت نشده است</p>}
      {profiles.map((item) => (
        <DashboardCard key={item._Id} data={JSON.parse(JSON.stringify(item))} />
      ))}
    </div>
  );
}

export default MyProfilesPage;
