import styles from "./styles.module.scss";
import { Link, useNavigate } from "react-router-dom";
import useGlobalContext from "../../hooks/useGlobalContext";
import { ChangeEvent, FormEvent, useState } from "react";
import ProductType from "../../types/ProductType";
import notify from "../../utils/notify";

const defaultForm = {
  id: 0,
  name: "",
  value: 0,
  stock: 0,
  description: "",
  image: "",
};

function AddProduct() {
  return (
    <div className={`${styles.container} flex-column-center`}>
      <div className="flex-column-center">
        <button className="btn-red">Red</button>
        <button className="btn-white">White</button>
        <button className="btn-black">Brack</button>
        <button className="btn-blue">Blue</button>
        <button className="btn-green">Green</button>
      </div>
    </div>
  );
}

export default AddProduct;
