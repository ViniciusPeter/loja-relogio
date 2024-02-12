import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

type FormUserRegister = {
  name: string;
  email: string;
  cpf: string;
  gender: "Masculino" | "Feminino";
  cell: string;
  birthdate: Date;
  password: string;
};

function UserRegister() {
  return (
    <form>
      <div className={styles["container-step"]}>
        <h1>Cadastrar endereço</h1>
        <div className={styles["container-inputs"]}>
          <label htmlFor="cpf">CPF</label>
          <input type="text" id="cpf" placeholder="xxx-xxx-xxx-xx" />
        </div>

        <div className={styles["container-inputs"]}>
          <label htmlFor="name ">Nome completo</label>
          <input
            type="text"
            id="name"
            placeholder="Digite seu nome completo..."
          />
        </div>

        <div className={styles["container-inputs"]}>
          <label htmlFor="E-mail">E-mail</label>
          <input type="text" id="E-mail" placeholder="Digite seu email..." />
        </div>

        <div className={styles["container-inputs"]}>
          <label>Gênero</label>
          <div className={styles.genres}>
            <div className={styles["input-radio"]}>
              <label htmlFor="gender">Masculino</label>
              <input
                type="radio"
                name="gender"
                id="man"
                value="Masnulino"
                defaultChecked
              />
            </div>

            <div className={styles["gender-separator"]}></div>

            <div className={styles["input-radio"]}>
              <label htmlFor="gender">Feminino</label>
              <input type="radio" name="gender" id="woman" value="Feminino" />
            </div>
          </div>
        </div>

        <div className={styles["container-inputs"]}>
          <label htmlFor="birthday">Data de nascimento</label>
          <input type="date" id="birthday" />
        </div>
        <div className={styles["container-inputs"]}>
          <label htmlFor="cell">Calular (DDD + número)</label>
          <input type="text" id="cell" />
        </div>

        <button type="button">
          Finalizar
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </button>
        <p>
          Você tem conta?
          <Link to="/login">Faça login.</Link>
        </p>
      </div>
    </form>
  );
}

export default UserRegister;
