import { z } from "zod";

export const createLoginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "O e-mail é obrigatório")
    .email("Formato de email inválido"),
  password: z
    .string()
    .trim()
    .min(6, "A senha precisa ter no mínimo 6 caracteres"),
});

export type CreateLoginFormData = z.infer<typeof createLoginSchema>;
