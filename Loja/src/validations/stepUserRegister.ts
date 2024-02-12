import { z } from "zod";

export const createStepUserResgiterSchema = z.object({
  name: z.string().trim().min(10, "Escreva seu nome completo"),
  email: z.string().trim().email("Escreva um email válido"),
  cpf: z.string().trim().min(11, "O CPF precisa ter 11 caracteres"),
  genres: z.enum(["Masculino", "Feminino"]),
  birthday: z.date(),
  cell: z.string().min(1, "O celular é obrigatório"),
});

export type CreateStepUserRegisterFormData = z.infer<
  typeof createStepUserResgiterSchema
>;
