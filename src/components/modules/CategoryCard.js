import Image from "next/image";
import Link from "next/link";
import styles from "@/module/CategoryCard.module.css";

function CategoryCard({ title, name }) {
  return (
    <div className={styles.card}>
      <Link href={`/buy-residentials?categories=${name}`}>
        <Image
          src={`/images/${name}.png`}
          alt={title}
          width={240}
          height={144}
          priority={true}
        />
        <p>{title}</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
