import { useForm } from "react-hook-form";
import {
  CreateStepUserRegisterFormData,
  createStepUserResgiterSchema,
} from "../../validations/stepUserRegister";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import useStepRegistrationContext from "../../hooks/useStepRegistrationContext";
import InputMask from "react-input-mask";

function StepUserRegister() {
  const { handleStepTwo, step } = useStepRegistrationContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateStepUserRegisterFormData>({
    resolver: zodResolver(createStepUserResgiterSchema),
  });

  function handleStepOneForm(data: CreateStepUserRegisterFormData) {
    handleStepTwo();
    console.log(data);
    console.log(data.cell.length);
  }

  return (
    <>
      {step === 1 && (
        <form onSubmit={handleSubmit(handleStepOneForm)} noValidate>
          <div className={styles["container-step"]}>
            <h1>Faça seu cadastro</h1>

            <div className={styles["container-inputs"]}>
              <label htmlFor="name">Nome completo</label>
              <input
                className={errors.name ? styles["input-error"] : ""}
                type="text"
                id="name"
                placeholder="Digite seu nome completo"
                {...register("name")}
              />
            </div>
            {errors.name && (
              <span className={styles["message-form-error"]}>
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
                <p>{errors.name.message}</p>
              </span>
            )}

            <div className={styles["container-inputs"]}>
              <label htmlFor="email">E-mail</label>
              <input
                className={errors.email ? styles["input-error"] : ""}
                type="email"
                id="email"
                placeholder="exemplo@email.com"
                {...register("email")}
              />
            </div>
            {errors.email && (
              <span className={styles["message-form-error"]}>
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
              <label htmlFor="cpf">CPF</label>
              <InputMask
                className={errors.cpf ? styles["input-error"] : ""}
                mask="999.999.999-99"
                placeholder="Digite seu CPF..."
                id="cpf"
                type="text"
                {...register("cpf")}
              />
            </div>
            {errors.cpf && (
              <span className={styles["message-form-error"]}>
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
                <p>{errors.cpf.message}</p>
              </span>
            )}

            <div
              className={`${styles["container-inputs"]} ${
                errors.genres ? styles["input-error"] : ""
              }`}
            >
              <label>Gênero</label>
              <div className={styles.genres}>
                <div className={styles["input-radio"]}>
                  <label htmlFor="man">Masculino</label>
                  <input
                    type="radio"
                    id="man"
                    value="Masculino"
                    {...register("genres")}
                    defaultChecked
                  />
                </div>
                <div className={styles["gender-separator"]}></div>
                <div className={styles["input-radio"]}>
                  <label htmlFor="woman">Feminino</label>
                  <input
                    type="radio"
                    id="woman"
                    value="Feminino"
                    {...register("genres")}
                  />
                </div>
              </div>
            </div>
            {errors.genres && (
              <span className={styles["message-form-error"]}>
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
                <p>{errors.genres.message}</p>
              </span>
            )}

            <div className={styles["container-inputs"]}>
              <label htmlFor="birthday">Data de nascimento</label>
              <input
                className={errors.birthday ? styles["input-error"] : ""}
                type="date"
                id="birthdate"
                placeholder="dd/mm/aaaa"
                {...register("birthday")}
              />
            </div>
            {errors.birthday && (
              <span className={styles["message-form-error"]}>
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
                <p>{errors.birthday.message}</p>
              </span>
            )}

            <div className={styles["container-inputs"]}>
              <label htmlFor="cell">Celular (DDD + número)</label>
              <InputMask
                className={errors.cell ? styles["input-error"] : ""}
                mask="(99) 99999-9999"
                placeholder="Digite seu celular..."
                id="cell"
                type="text"
                {...register("cell")}
              />
            </div>
            {errors.cell && (
              <span className={styles["message-form-error"]}>
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
                <p>{errors.cell.message}</p>
              </span>
            )}

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

export default StepUserRegister;
