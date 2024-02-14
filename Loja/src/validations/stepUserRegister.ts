import { z } from "zod";
import { cpf } from "cpf-cnpj-validator";

export const createStepUserResgiterSchema = z.object({
  name: z.string().trim().min(10, "Escreva seu nome completo"),
  email: z.string().trim().email("Escreva um email válido"),
  cpf: z
    .string()
    .trim()
    .refine((value) => {
      return cpf.isValid(value);
    }, "Informe um CPF válido"),
  genres: z.enum(["Masculino", "Feminino"]),
  birthday: z
    .string()
    .refine((date) => new Date(date).toString() !== "Invalid Date", {
      message: "A data de nascimento é obrigatória",
    })
    .refine((date) => new Date(date) < new Date(), {
      message: "A data tem que ser menor que a atual",
    }),
  cell: z
    .string()
    .trim()
    .refine(
      (cell) => {
        const numberCell = cell.split("").filter((caracter) => {
          return Number(caracter);
        });
        return numberCell.length > 11;
      },
      { message: "Digite um celular válido" }
    ),
});

export type CreateStepUserRegisterFormData = z.infer<
  typeof createStepUserResgiterSchema
>;
