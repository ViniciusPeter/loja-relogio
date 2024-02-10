import { createContext, Dispatch, SetStateAction } from "react";
import ProductType from "../types/ProductType";

type GlobalContextType = {
  openModal: boolean;
  handleConfirmModal: () => void;
  handleCloseModal: () => void;
  handleOpenModal: (productId: number) => void;
  allProducts: ProductType[];
  setAllProducts: Dispatch<SetStateAction<ProductType[]>>;
  //Aqui são os meus
  openSearch: boolean;
  setOpenSearch: Dispatch<SetStateAction<boolean>>;
  openLoadingPage: boolean;
  setOpenLoadingPage: Dispatch<SetStateAction<boolean>>;
};

const GlobalContext = createContext<GlobalContextType>({
  openModal: false,
  handleConfirmModal: () => {},
  handleCloseModal: () => {},
  handleOpenModal: (productId: number) => {},
  allProducts: [],
  setAllProducts: () => {},
  //Aqui são os meus
  openSearch: false,
  setOpenSearch: () => {},
  openLoadingPage: false,
  setOpenLoadingPage: () => {},
});

export default GlobalContext;
