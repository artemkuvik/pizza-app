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
  const getMenu = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
      setProducts(data);
      setLoading(false);
    } catch (e) {
      console.error(e);
      if (e instanceof AxiosError) {
        setError(e.message);
      }

      setLoading(false);
      return;
    }

    // try {
    //   const res = await fetch(`${PREFIX}/products`);
    //   if (!res.ok) {
    //     return;
    //   }
    //   const data = (await res.json()) as Product[];
    //   setProducts(data);
    // } catch (e) {
    //   console.error(e);
    //   return;
    // }
  };

  useEffect(() => {
    getMenu();
  }, []);

  console.log(products);

  const [value, setValue] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (e.target.value.length > 0) {
      setIsActive(true);
    }
    if (e.target.value.length === 0) {
      setIsActive(false);
    }
    console.log(isActive);
  };

  return (
    <>
      <div className={styles.header}>
        <Title>Меню</Title>
        <Search value={value} onChange={handleChange} isActive={isActive} />
      </div>
      {error && <div>{error}</div>}
      {!isLoading && <MenuList products={products} />}
      {isLoading && <div>Загружаем продукт</div>}
    </>
  );
}

export default Menu;
