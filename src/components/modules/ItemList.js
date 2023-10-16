import styles from "@/module/ItemList.module.css";

function ItemList({ data }) {
  return (
    <div className={styles.container}>
      {data.length ? (
        <ul>
          {data.map((i, index) => (
            <li key={index}>{i}</li>
          ))}
        </ul>
      ) : (
        <p>هیچ موردی ذکر نشده است</p>
      )}
    </div>
  );
}

export default ItemList;
