import styles from "@/module/RadioList.module.css";

function RadioList({ profileData, setProfileData }) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };
  return (
    <div className={styles.container}>
      <p>دسته بندی</p>
      <div className={styles.main}>
        <div>
          <label htmlFor="villa">ویلا</label>
          <input
            type="radio"
            value={"villa"}
            name="categories"
            id="villa"
            onChange={changeHandler}
            checked={profileData.categories === "villa"}
          />
        </div>
        <div>
          <label htmlFor="apartment">آپارتمان</label>
          <input
            type="radio"
            value={"apartment"}
            name="categories"
            id="apartment"
            onChange={changeHandler}
            checked={profileData.categories === "apartment"}
          />
        </div>
        <div>
          <label htmlFor="store">مغازه</label>
          <input
            type="radio"
            value={"store"}
            name="categories"
            id="store"
            onChange={changeHandler}
            checked={profileData.categories === "store"}
          />
        </div>
        <div>
          <label htmlFor="office">دفتر</label>
          <input
            type="radio"
            value={"office"}
            name="categories"
            id="office"
            onChange={changeHandler}
            checked={profileData.categories === "office"}
          />
        </div>
      </div>
    </div>
  );
}

export default RadioList;
