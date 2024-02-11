import styles from "./styles.module.scss";
import { useState } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import notify from "../../utils/notify";

const createLoginSchema = z.object({
  email: z
    .string()
    .min(1, "O e-mail é obrigatório")
    .email("Formato de email inválido"),
  password: z
    .string()
    .trim()
    .min(6, "A senha precisa ter no mínimo 6 caracteres"),
});

type CreateLoginFormData = z.infer<typeof createLoginSchema>;

function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateLoginFormData>({
    resolver: zodResolver(createLoginSchema),
  });

  function handleLogin(data: any) {
    notify("Login efetuado com sucesso!", "success", "dark");
    console.log(data);
  }

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo" />
      </div>
      <h1 className="">Faça login na sua conta</h1>
      <form className="" onSubmit={handleSubmit(handleLogin)}>
        <div className={styles["container-inputs"]}>
          <label htmlFor="email" className="">
            E-mail
          </label>
          <input
            className={errors.email ? styles["input-error"] : ""}
            type="email"
            placeholder="Digite seu email..."
            {...register("email")}
          />
        </div>
        {errors.email && (
          <span>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm9.4-5.5a1 1 0 1 0 0 2 1 1 0 1 0 0-2ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4c0-.6-.4-1-1-1h-2Z"
                clip-rule="evenodd"
              />
            </svg>
            <p>{errors.email.message}</p>
          </span>
        )}

        <div className={styles["container-inputs"]}>
          <label htmlFor="password" className="">
            Senha
          </label>
          <input
            className={errors.password ? styles["input-error"] : ""}
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            {...register("password")}
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
        {errors.password && (
          <span>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm9.4-5.5a1 1 0 1 0 0 2 1 1 0 1 0 0-2ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4c0-.6-.4-1-1-1h-2Z"
                clip-rule="evenodd"
              />
            </svg>
            <p>{errors.password.message}</p>
          </span>
        )}
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
