import { z } from "zod";

type FormUserRegister = {
  name: string;
  email: string;
  cpf: string;
  gender: "Masculino" | "Feminino";
  cell: string;
  birthdate: Date;
  password: string;
};

const genders = ["Masculino", "Feminino"] as const;

export const createUserRegisterSchema = z.object({
  name: z.string().trim().min(1, "O nome é obrigatório"),
  email: z
    .string()
    .trim()
    .min(1, "O e-mail é obrigatório")
    .email("Formato de email inválido"),
  cpf: z.string().trim().min(11, "CPF inválido"),
  gender: z.enum(genders),
  cell: z.string().trim(),
  birthday: z.date(),
  password: z
    .string()
    .trim()
    .min(6, "A senha precisa ter no mínimo 6 caracteres"),
});

export type CreateUserRegisterFormdata = z.infer<
  typeof createUserRegisterSchema
>;
