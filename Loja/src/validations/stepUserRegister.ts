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
  birthday: z.string().trim().min(1, "A data de aniversário é obrigatória"),
  cell: z.string().trim().min(1, "O celular é obrigatório"),
});

export type CreateStepUserRegisterFormData = z.infer<
  typeof createStepUserResgiterSchema
>;
