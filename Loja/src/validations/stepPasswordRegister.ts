import { z } from "zod";

function passwordContainsLetter(password: string) {
  let letter = false;

  password.split("").forEach((caracter) => {
    const validCaracter = Number(caracter);

    if (isNaN(validCaracter)) {
      return (letter = true);
    }
  });

  return letter;
}

function passwordContainsNumber(password: string) {
  let number = false;

  password.split("").forEach((caracter) => {
    const validCaracter = Number(caracter);

    if (!isNaN(validCaracter)) {
      return (number = true);
    }
  });

  return number;
}

export const createStepPasswordResgiterSchema = z
  .object({
    password: z
      .string()
      .min(8, "A senha precisa ter no mínimo 8 dígitos")
      .refine(passwordContainsLetter, {
        message: "A senha precisa conter ao menos uma letra",
      })
      .refine(passwordContainsNumber, {
        message: "A senha precisa conter ao menos um número",
      }),
    confirmPassword: z
      .string()
      .min(8, "A senha precisa ter no mínimo 8 dígitos")
      .refine(passwordContainsLetter, {
        message: "A senha precisa conter ao menos uma letra",
      })
      .refine(passwordContainsNumber, {
        message: "A senha precisa conter ao menos um número",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "A senhas precisam ser iguais",
    path: ["confirmPassword"],
  });

export type CreateStepPasswordRegisterFormData = z.infer<
  typeof createStepPasswordResgiterSchema
>;
