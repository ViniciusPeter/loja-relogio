import { z } from "zod";

const passwordContainsLetterOrNumber = (password: string) => {
  const letterOrNumberRegex = /[a-zA-Z0-9]/;
  return letterOrNumberRegex.test(password);
};

export const createStepPasswordResgiterSchema = z
  .object({
    password: z
      .string()
      .min(8, "A senha precisa ter no mínimo 8 dígitos")
      .refine(passwordContainsLetterOrNumber, {
        message: "A senha precisa conter ao menos letras e números",
      }),
    confirmPassword: z
      .string()
      .min(8, "A senha precisa ter no mínimo 8 dígitos"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "A senhas precisam ser iguais",
    path: ["confirmPassword"],
  });

export type CreateStepPasswordRegisterFormData = z.infer<
  typeof createStepPasswordResgiterSchema
>;
