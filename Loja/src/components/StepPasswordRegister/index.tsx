import { useForm } from "react-hook-form";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateStepPasswordRegisterFormData,
  createStepPasswordResgiterSchema,
} from "../../validations/stepPasswordRegister";
import { useState } from "react";
import useStepRegistrationContext from "../../hooks/useStepRegistrationContext";

function StepPasswordRegister() {
  const { handleStepOne, handleStepThree, step } = useStepRegistrationContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateStepPasswordRegisterFormData>({
    resolver: zodResolver(createStepPasswordResgiterSchema),
  });
  const [showPassword, setShowPassword] = useState<Boolean>(true);
  const [showConfirmPassword, setConfirmShowPassword] = useState<Boolean>(true);

  function handleStepTwoForm(data: CreateStepPasswordRegisterFormData) {
    console.log(data);
    handleStepThree();
  }

  return (
    <>
      {step === 2 && (
        <form onSubmit={handleSubmit(handleStepTwoForm)}>
          <div className={styles["container-step"]}>
            <h1>Cadastrar senha</h1>
            <div className={styles["container-inputs"]}>
              <label htmlFor="password">Definir senha</label>
              <input
                className={errors.password ? styles["input-error"] : ""}
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Digite sua senha..."
                style={{}}
                {...register("password")}
              />
              {!showPassword && (
                <div
                  className={styles["eyes-password"]}
                  onClick={() => setShowPassword(true)}
                >
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
                <div
                  className={styles["eyes-password"]}
                  onClick={() => setShowPassword(false)}
                >
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

            <div className={styles["container-inputs"]}>
              <label htmlFor="confirm-password">Confirme sua senha</label>
              <input
                className={errors.confirmPassword ? styles["input-error"] : ""}
                type={showConfirmPassword ? "text" : "password"}
                id="confirm-password"
                placeholder="Digite sua senha novamente..."
                {...register("confirmPassword")}
              />
              {!showConfirmPassword && (
                <div
                  className={styles["eyes-password"]}
                  onClick={() => setConfirmShowPassword(true)}
                >
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

              {showConfirmPassword && (
                <div
                  className={styles["eyes-password"]}
                  onClick={() => setConfirmShowPassword(false)}
                >
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
            {errors.confirmPassword && (
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
                <p>{errors.confirmPassword.message}</p>
              </span>
            )}

            <div className={styles["container-buttons-step"]}>
              <button
                className={styles["btn-white"]}
                type="submit"
                onClick={handleStepOne}
              >
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
                    d="M5 12h14M5 12l4-4m-4 4 4 4"
                  />
                </svg>
                Voltar
              </button>
              <button className={styles["btn-black"]} type="submit">
                Próximo
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
            </div>
            <p>
              Você tem conta?
              <Link to="/login">Faça login.</Link>
            </p>
          </div>
        </form>
      )}
    </>
  );
}

export default StepPasswordRegister;
