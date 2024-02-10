import { ChangeEvent, useState } from "react";
import styles from "./styles.module.scss";
import useStepRegistrationContext from "../../hooks/useStepRegistrationContext";
import { Link } from "react-router-dom";
import LoadingBtn from "../LoadingBtn";
import useGlobalContextProvider from "../../hooks/useGlobalContextProvider";

type FormUserRegister = {
  name: string;
  email: string;
  cpf: string;
  gender: "Masculino" | "Feminino";
  cell: string;
  birthdate: Date;
  password: string;
};

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
  const [formCadastro, setFormCadastro] = useState<FormUserRegister>({
    email: "",
    cpf: "",
    name: "",
    gender: "Masculino",
    cell: "",
    birthdate: new Date(),
    password: "",
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

  function handleChange({ target }: ChangeEvent<HTMLInputElement>) {
    const key = target.name;
    const value = target.value;
    setFormCadastro({ ...formCadastro, [key]: value });
    // console.log(formCadastro);
    if (key === "zipcode" && value.trim().length === 8) {
      shearchCep(value);
    }
  }

  function handleChangeState({ target }: ChangeEvent<HTMLSelectElement>) {
    const key = target.name;
    const value = target.value;
    setFormCadastro({ ...formCadastro, [key]: value });
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
    <form>
      {step === 1 && (
        <div className={styles["container-step"]}>
          <h1>Faça seu cadastro</h1>
          <div className={styles["container-inputs"]}>
            <label htmlFor="text">Nome completo</label>
            <input
              type="text"
              name="name"
              id="text"
              placeholder="Digite seu nome completo"
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles["container-inputs"]}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="exemplo@email.com"
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles["container-inputs"]}>
            <label htmlFor="cpf">CPF</label>
            <input
              type="text"
              name="cpf"
              id="cpf"
              placeholder="xxx.xxx.xxx-xx"
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles["container-inputs"]}>
            <label>Gênero</label>
            <div className={styles.genres}>
              <div className={styles["input-radio"]}>
                <label htmlFor="man">Masculino</label>
                <input
                  type="radio"
                  name="gender"
                  id="man"
                  value="Masculino"
                  onChange={handleChange}
                  defaultChecked
                />
              </div>
              <div className={styles["input-radio"]}>
                <label htmlFor="woman">Feminino</label>
                <input
                  type="radio"
                  name="gender"
                  id="woman"
                  value="Feminino"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className={styles["container-inputs"]}>
            <label htmlFor="text">Data de nascimento</label>
            <input
              type="date"
              name="birthdate"
              id="birthdate"
              placeholder="dd/mm/aaaa"
              onChange={handleChange}
            />
          </div>
          <div className={styles["container-inputs"]}>
            <label htmlFor="cell">Celular (DDD + número)</label>
            <input
              type="text"
              name="cell"
              id="cell"
              placeholder="(00) 00000-0000"
              onChange={handleChange}
            />
          </div>

          <button type="button" onClick={handleStepOne}>
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
      )}

      {step === 2 && (
        <div className={styles["container-step"]}>
          <h1>Cadastrar senha</h1>
          <div className={styles["container-inputs"]}>
            <label htmlFor="password">Senha</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="••••••••"
              onChange={handleChange}
              required
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
              onChange={handleChange}
              required
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
      )}

      {step === 3 && (
        <div className={styles["container-step"]}>
          <h1>Cadastrar endereço</h1>
          <div className={styles["container-inputs"]}>
            <label htmlFor="zipcode">CEP</label>
            <input
              type="text"
              name="zipcode"
              id="zipcode"
              placeholder=" 99999-999"
              onChange={handleChange}
              required
            />
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
              <input
                type="text"
                name="street"
                id="street"
                placeholder=""
                value={formAddress.street}
                onChange={handleChange}
              />
              {/* <LoadingBtn /> */}
            </div>
            <div className={styles["container-inputs"]}>
              <label htmlFor="number">Número</label>
              <input
                type="number"
                name="number"
                id="number"
                placeholder=""
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles["container-inputs"]}>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input
              type="text"
              name="complement"
              id="complement"
              placeholder=""
              onChange={handleChange}
            />
          </div>
          <div className={styles["container-inputs"]}>
            <label htmlFor="neighborhood">Bairro</label>
            <input
              type="text"
              name="neighborhood"
              id="neighborhood"
              placeholder=""
              value={formAddress.neighborhood}
              onChange={handleChange}
            />
          </div>
          <div className={styles["container-city-state"]}>
            <div className={styles["container-inputs"]}>
              <label htmlFor="city">cidade</label>
              <input
                type="text"
                name="city"
                id="city"
                placeholder=""
                value={formAddress.city}
                onChange={handleChange}
              />
            </div>

            <div className={styles["container-inputs"]}>
              <label htmlFor="state">Estado</label>
              <select
                name="state"
                id="state"
                value={formAddress.state.toUpperCase()}
                onChange={handleChangeState}
                required
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
          <div className={styles["container-inputs"]}>
            <label htmlFor="reference">Ponto de referência (opcional)</label>
            <input
              type="text"
              name="reference"
              id="reference"
              placeholder=""
              onChange={handleChange}
            />
          </div>
          <div className={styles["container-inputs"]}>
            <label htmlFor="type">Título do endereço</label>
            <input
              type="text"
              name="type"
              id="type"
              placeholder=""
              onChange={handleChange}
            />
          </div>
          <div className={styles["container-inputs"]}>
            <label htmlFor="recipient">Destinatário</label>
            <input
              type="text"
              name="recipient"
              id="recipient"
              placeholder=""
              onChange={handleChange}
            />
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
    </form>
  );
}

export default StepUserRegistration;
