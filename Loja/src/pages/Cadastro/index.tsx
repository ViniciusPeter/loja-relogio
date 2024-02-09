import styles from "./styles.module.scss";
import { FormEvent } from "react";

function Cadastro() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert("Login efetuado com sucesso!");
  }

  return (
    <div className={styles.container}>
      <h1 className="">Faça login na sua conta</h1>
      <form className="" onSubmit={handleSubmit}>
        <div className={styles["container-inputs"]}>
          <label htmlFor="email" className="">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className=""
            placeholder="name@company.com"
          />
        </div>
        <div className={styles["container-inputs"]}>
          <label htmlFor="password" className="">
            Senha
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className=""
          />
        </div>
        <div className={styles.forgot}>
          <a href="#" className="">
            Esqueceu a senha?
          </a>
        </div>

        <button type="submit" className="">
          Entrar
        </button>
        <p className="">
          Você ainda não tem conta?
          <a href="#" className="">
            Cadastre-se
          </a>
        </p>
      </form>
    </div>
  );
}

export default Cadastro;
