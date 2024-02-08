import { useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import products from "../data/products";
import ProductType from "../types/ProductType";

function useGlobalContextProvider() {
  const [openModal, setOpenModal] = useState(false);
  const [currentIdProduct, setCurrentIdProduct] = useState(0);
  const [allProducts, setAllProducts] = useLocalStorage<ProductType[]>(
    "products",
    [...products]
  );
  const [openSearch, setOpenSearch] = useState<boolean>(true);

  function handleConfirmModal() {
    const localProducts = [...allProducts];

    const currentProductIndex = localProducts.findIndex(
      (product) => product.id === currentIdProduct
    );

    localProducts.splice(currentProductIndex, 1);

    setAllProducts([...localProducts]);

    setOpenModal(false);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  function handleOpenModal(productId: number) {
    setCurrentIdProduct(productId);
    setOpenModal(true);
  }

  return {
    openModal,
    handleConfirmModal,
    handleCloseModal,
    handleOpenModal,
    allProducts,
    setAllProducts,
    openSearch,
    setOpenSearch,
  };
}

export default useGlobalContextProvider;
