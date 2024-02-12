import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useGlobalContextProvider from "../../hooks/useGlobalContextProvider";
import useStepRegistrationContext from "../../hooks/useStepRegistrationContext";
import {
  CreateUserRegisterFormdata,
  createUserRegisterSchema,
} from "../../validations/userRegister";
import styles from "./styles.module.scss";
import UserRegister from "../StepUserRegister";

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

function StepUserRegistration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserRegisterFormdata>({
    resolver: zodResolver(createUserRegisterSchema),
  });

  const [formAddress, setFormAddress] = useState<FormUserAddress>({
    zipcode: "",
    street: "",
    number: null,
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
    reference: "",
    type: "",
    recipient: "",
  });
  const [showPassword, setShowPassword] = useState<Boolean>(true);
  const [showConfirmPassword, setConfirmShowPassword] = useState<Boolean>(true);
  const { step, setStep, handleStepOne, handleStepTwo, handleStepThree } =
    useStepRegistrationContext();
  const { setOpenLoadingPage } = useGlobalContextProvider();

  function handleUserRegister(data: any) {
    console.log("ok");
    console.log(JSON.stringify(data));
    if (errors) {
      console.log("ok error");
      console.log("Erros: => ", JSON.stringify(errors));
    }
  }

  async function shearchCep(zipcode: string) {
    try {
      setOpenLoadingPage(true);

      const data = await fetch(
        `https://viacep.com.br/ws/${zipcode}/json/`
      ).then((response) => response.json());

      setFormAddress({
        ...formAddress,
        street: data.logradouro,
        neighborhood: data.bairro,
        city: data.localidade,
        state: data.uf,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setOpenLoadingPage(false);
    }
  }

  return (
    <>
      {step === 1 && <UserRegister />}

      {step === 2 && (
        <form>
          <div className={styles["container-step"]}>
            <h1>Cadastrar senha</h1>
            <div className={styles["container-inputs"]}>
              <label htmlFor="password">Senha</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="••••••••"
              />
              {!showPassword && (
                <div
                  className={styles.eyes}
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
                  className={styles.eyes}
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

            <div className={styles["container-inputs"]}>
              <label htmlFor="confirm-password">Confirma senha</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirm-password"
                id="confirm-password"
                placeholder="••••••••"
              />
              {!showConfirmPassword && (
                <div
                  className={styles.eyes}
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
                  className={styles.eyes}
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

            <button type="button" onClick={handleStepTwo}>
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

      {step === 3 && (
        <div className={styles["container-step"]}>
          <h1>Cadastrar endereço</h1>
          <div className={styles["container-inputs"]}>
            <label htmlFor="zipcode">CEP</label>
            <input type="text" id="zipcode" placeholder=" 99999-999" />
          </div>
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
              <input type="text" id="street" />
            </div>
            <div className={styles["container-inputs"]}>
              <label htmlFor="number">Número</label>
              <input type="number" id="number" />
            </div>
          </div>
          <div className={styles["container-inputs"]}>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input type="text" id="complement" />
          </div>
          <div className={styles["container-inputs"]}>
            <label htmlFor="neighborhood">Bairro</label>
            <input type="text" id="neighborhood" />
          </div>
          <div className={styles["container-city-state"]}>
            <div className={styles["container-inputs"]}>
              <label htmlFor="city">cidade</label>
              <input type="text" id="city" />
            </div>

            <div className={styles["container-inputs"]}>
              <label htmlFor="state">Estado</label>
              <select id="state" value={formAddress.state.toUpperCase()}>
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
          <div className={styles["container-inputs"]}>
            <label htmlFor="reference">Ponto de referência (opcional)</label>
            <input type="text" id="reference" />
          </div>
          <div className={styles["container-inputs"]}>
            <label htmlFor="type">Título do endereço</label>
            <input type="text" id="type" />
          </div>
          <div className={styles["container-inputs"]}>
            <label htmlFor="recipient">Destinatário</label>
            <input type="text" id="recipient" />
          </div>

          <button type="button" onClick={handleStepThree}>
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
      )}
    </>
  );
}

export default StepUserRegistration;
