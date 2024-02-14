import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useGlobalContext from "../../hooks/useGlobalContext";
import useStepRegistrationContext from "../../hooks/useStepRegistrationContext";
import notify from "../../utils/notify";
import {
  CreateStepAddressRegisterFormData,
  createStepAddressResgiterSchema,
} from "../../validations/stepAddressRegister ";
import styles from "./styles.module.scss";

type FormUserAddress = {
  zipcode: string;
  street: string;
  number: number | null;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  reference: string;
  type: string;
  recipient: string;
};

function StepAddressRegister() {
  const { setOpenLoadingPage } = useGlobalContext();
  const { handleStepTwo, step, handleStepOne } = useStepRegistrationContext();
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<CreateStepAddressRegisterFormData>({
    resolver: zodResolver(createStepAddressResgiterSchema),
  });

  function handleStepThreeForm(data: CreateStepAddressRegisterFormData) {
    console.log(data);
    console.log(errors);
    handleStepOne();
  }

  async function handleBlur() {
    const zipcode = getValues("zipcode");

    if (zipcode.trim().length === 8) {
      await shearchCep(zipcode);
    }
  }

  async function shearchCep(zipcode: string) {
    if (!zipcode.trim()) {
      return;
    }

    try {
      setOpenLoadingPage(true);

      const data = await fetch(
        `https://viacep.com.br/ws/${zipcode}/json/`
      ).then((response) => response.json());

      if (data.erro) {
        return notify("CEP Inválido", "error", "dark");
      }

      setValueZipcode(data);
    } catch (error) {
      notify("Ops! erro inesperado!", "info", "dark");
      console.log(error);
    } finally {
      setOpenLoadingPage(false);
    }
  }

  function setValueZipcode(data: any) {
    const options = {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    };
    setValue("street", data.logradouro, options);
    setValue("neighborhood", data.bairro, options);
    setValue("city", data.localidade, options);
    setValue("state", data.uf, options);
  }

  return (
    <>
      {step === 3 && (
        <form onSubmit={handleSubmit(handleStepThreeForm)}>
          <div className={styles["container-step"]}>
            <h1>Cadastrar endereço</h1>

            <div className={styles["container-inputs"]}>
              <label htmlFor="zipcode">CEP</label>
              <input
                className={errors.zipcode ? styles["input-error"] : ""}
                type="text"
                id="zipcode"
                placeholder="Digite somente números"
                {...register("zipcode")}
                onBlur={handleBlur}
              />
            </div>
            {errors.zipcode && (
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
                <p>{errors.zipcode.message}</p>
              </span>
            )}

            <div className={styles.forgot}>
              <a
                href="https://buscacepinter.correios.com.br/app/endereco/index.php"
                target="_blanck"
              >
                Não sabe o CEP?
              </a>
            </div>

            <div className={styles["container-street-number"]}>
              <div className={styles["container-inputs"]}>
                <label htmlFor="street">Rua/Avenida</label>
                <input
                  className={errors.street ? styles["input-error"] : ""}
                  type="text"
                  id="street"
                  {...register("street")}
                />
              </div>

              <div className={styles["container-inputs"]}>
                <label htmlFor="number">Número</label>
                <input
                  className={errors.number ? styles["input-error"] : ""}
                  type="number"
                  id="number"
                  {...(register("number"), { valueAsNumber: true })}
                />
              </div>
            </div>
            {errors.street && (
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
                <p>{errors.street.message}</p>
              </span>
            )}
            {errors.number && (
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
                <p>{errors.number.message}</p>
              </span>
            )}

            <div className={styles["container-inputs"]}>
              <label htmlFor="complement">Complemento (opcional)</label>
              <input
                className={errors.complement ? styles["input-error"] : ""}
                type="text"
                id="complement"
                {...register("complement")}
              />
            </div>
            {errors.complement && (
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
                <p>{errors.complement.message}</p>
              </span>
            )}

            <div className={styles["container-inputs"]}>
              <label htmlFor="neighborhood">Bairro</label>
              <input
                className={errors.neighborhood ? styles["input-error"] : ""}
                type="text"
                id="neighborhood"
                {...register("neighborhood")}
              />
            </div>
            {errors.neighborhood && (
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
                <p>{errors.neighborhood.message}</p>
              </span>
            )}

            <div className={styles["container-city-state"]}>
              <div className={styles["container-inputs"]}>
                <label htmlFor="city">cidade</label>
                <input
                  className={errors.neighborhood ? styles["input-error"] : ""}
                  type="text"
                  id="city"
                  {...register("city")}
                />
              </div>

              <div className={styles["container-inputs"]}>
                <label htmlFor="state">Estado</label>
                <select
                  className={errors.state ? styles["input-error"] : ""}
                  id="state"
                  {...register("state")}
                >
                  <option value="">XX</option>
                  <option value="AC">AC</option>
                  <option value="AL">AL</option>
                  <option value="AP">AP</option>
                  <option value="AM">AM</option>
                  <option value="BA">BA</option>
                  <option value="CE">CE</option>
                  <option value="DF">DF</option>
                  <option value="ES">ES</option>
                  <option value="GO">GO</option>
                  <option value="MA">MA</option>
                  <option value="MT">MT</option>
                  <option value="MS">MS</option>
                  <option value="MG">MG</option>
                  <option value="PA">PA</option>
                  <option value="PB">PB</option>
                  <option value="PR">PR</option>
                  <option value="PE">PE</option>
                  <option value="PI">PI</option>
                  <option value="RJ">RJ</option>
                  <option value="RN">RN</option>
                  <option value="RS">RS</option>
                  <option value="RO">RO</option>
                  <option value="RR">RR</option>
                  <option value="SC">SC</option>
                  <option value="SP">SP</option>
                  <option value="SE">SE</option>
                  <option value="TO">TO</option>
                </select>
              </div>
            </div>
            {errors.city && (
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
                <p>{errors.city.message}</p>
              </span>
            )}
            {errors.state && (
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
                <p>{errors.state.message}</p>
              </span>
            )}

            <div className={styles["container-inputs"]}>
              <label htmlFor="reference">Ponto de referência (opcional)</label>
              <input
                className={errors.reference ? styles["input-error"] : ""}
                type="text"
                id="reference"
                {...register("reference")}
              />
            </div>
            {errors.reference && (
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
                <p>{errors.reference.message}</p>
              </span>
            )}

            <div className={styles["container-inputs"]}>
              <label htmlFor="type">Título do endereço</label>
              <input
                className={errors.type ? styles["input-error"] : ""}
                type="text"
                id="type"
                {...register("type")}
              />
            </div>
            {errors.type && (
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
                <p>{errors.type.message}</p>
              </span>
            )}

            <div className={styles["container-inputs"]}>
              <label htmlFor="recipient">Destinatário</label>
              <input
                className={errors.recipient ? styles["input-error"] : ""}
                type="text"
                id="recipient"
                {...register("recipient")}
              />
            </div>
            {errors.recipient && (
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
                <p>{errors.recipient.message}</p>
              </span>
            )}

            <div className={styles["container-buttons-step"]}>
              <button type="button" onClick={handleStepTwo}>
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
              <button type="submit">
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

export default StepAddressRegister;
