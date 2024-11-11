import Title from "../../components/Title/Title";
import Search from "../../components/Search/Search";
import { useEffect, useState } from "react";
import { ChangeEvent } from "react";
import styles from "./Menu.module.css";
import { PREFIX } from "../../helpers/Api";
import { Product } from "../../interfaces/product.interface";
import axios, { AxiosError } from "axios";
import MenuList from "./MenuList/MenuList";

function Menu() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  const [filter, setFilter] = useState("");
  const [isActive, setIsActive] = useState(false);
  const getMenu = async (name?: string) => {
    try {
      setLoading(true);
      const { data } = await axios.get<Product[]>(`${PREFIX}/products`, {
        params: {
          name,
        },
      });
      setProducts(data);
      setLoading(false);
    } catch (e) {
      if (e instanceof AxiosError) {
        setError(e.message);
      }

      setLoading(false);
      return;
    }
  };

  useEffect(() => {
    getMenu(filter);
  }, [filter]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
    if (e.target.value.length > 0) {
      setIsActive(true);
    }
    if (e.target.value.length === 0) {
      setIsActive(false);
    }
  };

  return (
    <>
      <div className={styles.header}>
        <Title>Меню</Title>
        <Search value={filter} onChange={handleChange} isActive={isActive} />
      </div>
      {error && <div>{error}</div>}
      {!isLoading && products.length > 0 && <MenuList products={products} />}
      {isLoading && <div>Загружаем продукт</div>}
      {!isLoading && products.length === 0 && (
        <div>Не найдено блюд по запросу</div>
      )}
    </>
  );
}

export default Menu;
