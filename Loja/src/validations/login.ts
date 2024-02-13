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

export const createLoginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "O e-mail é obrigatório")
    .email("Formato de email inválido"),
  password: z
    .string()
    .trim()
    .min(8, "A senha precisa ter no mínimo 8 caracteres")
    .refine(passwordContainsLetter, {
      message: "A senha precisa conter ao menos uma letra",
    })
    .refine(passwordContainsNumber, {
      message: "A senha precisa conter ao menos um número",
    }),
});

export type CreateLoginFormData = z.infer<typeof createLoginSchema>;
