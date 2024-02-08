import { createContext, Dispatch, SetStateAction } from "react";
import ProductType from "../types/ProductType";

type GlobalContextType = {
  openModal: boolean;
  handleConfirmModal: () => void;
  handleCloseModal: () => void;
  handleOpenModal: (productId: number) => void;
  allProducts: ProductType[];
  setAllProducts: Dispatch<SetStateAction<ProductType[]>>;
  openSearch: boolean;
  setOpenSearch: Dispatch<SetStateAction<boolean>>;
};

const GlobalContext = createContext<GlobalContextType>({
  openModal: false,
  handleConfirmModal: () => {},
  handleCloseModal: () => {},
  handleOpenModal: (productId: number) => {},
  allProducts: [],
  setAllProducts: () => {},
  openSearch: false,
  setOpenSearch: () => {},
});

export default GlobalContext;
