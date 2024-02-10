import styles from "./styles.module.scss";
import { FormEvent, useState } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(true);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert("Login efetuado com sucesso!");
  }

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo" />
      </div>
      <h1 className="">Faça login na sua conta</h1>
      <form className="" onSubmit={handleSubmit}>
        <div className={styles["container-inputs"]}>
          <label htmlFor="email" className="">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu email..."
          />
        </div>
        <div className={styles["container-inputs"]}>
          <label htmlFor="password" className="">
            Senha
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="••••••••"
          />
          {!showPassword && (
            <div className={styles.eyes} onClick={() => setShowPassword(true)}>
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
                  d="M4 14c-.5-.6-.9-1.3-1-2 0-1 4-6 9-6m7.6 3.8A5 5 0 0 1 21 12c0 1-3 6-9 6h-1m-6 1L19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
          )}

          {showPassword && (
            <div className={styles.eyes} onClick={() => setShowPassword(false)}>
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-width="2"
                  d="M21 12c0 1.2-4 6-9 6s-9-4.8-9-6c0-1.2 4-6 9-6s9 4.8 9 6Z"
                />
                <path
                  stroke="currentColor"
                  stroke-width="2"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
          )}
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
          <Link to="/sign-up">Cadastre-se.</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
