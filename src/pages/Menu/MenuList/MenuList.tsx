import ProductCard from "../../../components/ProductCard/ProductCard";
import { MenuListProps } from "./MenuList.props";
import styles from "./MenuList.module.css";

function MenuList({ products }: MenuListProps) {
  return (
    <div className={styles.wrapper}>
      {products.map((p) => (
        <ProductCard
          key={p.id}
          id={p.id}
          price={p.price}
          rating={p.rating}
          name={p.name}
          img={p.image}
          description={p.ingredients.join(", ")}
        />
      ))}
      ;
    </div>
  );
}

export default MenuList;
