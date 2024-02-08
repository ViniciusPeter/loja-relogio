import { createContext, Dispatch, SetStateAction } from "react";
import ProductType from "../types/ProductType";

type GlobalContextType = {
  openModal: boolean;
  handleConfirmModal: () => void,
  handleCloseModal: () => void,
  handleOpenModal: (productId: number) => void;
  allProducts: ProductType[],
  setAllProducts: Dispatch<SetStateAction<ProductType[]>>;
}

const GlobalContext = createContext<GlobalContextType>({
  openModal: false,
  handleConfirmModal: () => { },
  handleCloseModal: () => { },
  handleOpenModal: (productId: number) => { },
  allProducts: [],
  setAllProducts: () => { }
});

export default GlobalContext;