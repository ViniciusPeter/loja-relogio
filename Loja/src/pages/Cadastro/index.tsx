import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { ChangeEvent, useState } from "react";

type StepType = 1 | 2 | 3;

type FormCadastro = {
  name: string;
  email: string;
  cpf: string;
  cell: string;
};

function Cadastro() {
  const [step, setStep] = useState<StepType>(1);
  const [formCadastro, setFormCadastro] = useState<FormCadastro>({
    email: "",
    cpf: "",
    name: "",
    cell: "",
  });

  // function handleSubmit(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  // }

  function handleChange({ target }: ChangeEvent<HTMLInputElement>) {
    const key = target.name;
    const value = target.value;
    setFormCadastro({ ...formCadastro, [key]: value });
    console.log(formCadastro);
  }

  function handleStepOne() {
    setStep(2);
  }
  function handleStepTwo() {
    setStep(3);
  }
  function handleStepThree() {
    setStep(1);
  }

  return (
    <div className={styles.container}>
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
                placeholder="José Martelo da Silva"
                onChange={handleChange}
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
              />
            </div>

            <div className={styles["container-inputs"]}>
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                name="cpf"
                id="cpf"
                placeholder="XXX.XXX.XXX-XX"
                onChange={handleChange}
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
                    value="man"
                    onChange={handleChange}
                  />
                </div>
                <div className={styles["input-radio"]}>
                  <label htmlFor="woman">Feminino</label>
                  <input
                    type="radio"
                    name="gender"
                    id="woman"
                    value="woman"
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
          </div>
        )}

        {step === 2 && (
          <div className={styles["container-step"]}>
            <h1>Cadastrar senha</h1>
            <div className={styles["container-inputs"]}>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                onChange={handleChange}
              />
            </div>

            <div className={styles["container-inputs"]}>
              <label htmlFor="confirm-password">Confirma senha</label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="••••••••"
                onChange={handleChange}
              />
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
          </div>
        )}

        {step === 3 && (
          <div className={styles["container-step"]}>
            <h1>Cadastrar endereço</h1>
            <div className={styles["container-inputs"]}>
              <label htmlFor="email">CEP</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder=" 99999-999"
                onChange={handleChange}
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
            <div className={styles["container-inputs"]}>
              <label htmlFor="email">Rua/Avenida</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder=""
                onChange={handleChange}
              />
            </div>
            <div className={styles["container-inputs"]}>
              <label htmlFor="password">Número</label>
              <input
                type="text"
                name="password"
                id="password"
                placeholder=""
                onChange={handleChange}
              />
            </div>
            <div className={styles["container-inputs"]}>
              <label htmlFor="confirm-password">Complemento (opcional)</label>
              <input
                type="text"
                name="confirm-password"
                id="confirm-password"
                placeholder=""
                onChange={handleChange}
              />
            </div>
            <div className={styles["container-inputs"]}>
              <label htmlFor="confirm-password">cidade</label>
              <input
                type="text"
                name="confirm-password"
                id="confirm-password"
                placeholder=""
                onChange={handleChange}
              />
            </div>
            <div className={styles["container-inputs"]}>
              <label htmlFor="confirm-password">Estado</label>
              <input
                type="text"
                name="confirm-password"
                id="confirm-password"
                placeholder=""
                onChange={handleChange}
              />
            </div>
            <div className={styles["container-inputs"]}>
              <label htmlFor="confirm-password">
                Ponto de referência (opcional)
              </label>
              <input
                type="text"
                name="confirm-password"
                id="confirm-password"
                placeholder=""
                onChange={handleChange}
              />
            </div>
            <div className={styles["container-inputs"]}>
              <label htmlFor="confirm-password">Título do endereço</label>
              <input
                type="text"
                name="confirm-password"
                id="confirm-password"
                placeholder=""
                onChange={handleChange}
              />
            </div>
            <div className={styles["container-inputs"]}>
              <label htmlFor="confirm-password">Destinatário</label>
              <input
                type="text"
                name="confirm-password"
                id="confirm-password"
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
          </div>
        )}
      </form>
      <p>
        Você tem conta?
        <Link to="/login">Faça login.</Link>
      </p>
    </div>
  );
}

export default Cadastro;
