import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "A senha precisa ter no mínimo 6 dígitos"),
});

type LoginSchema = z.infer<typeof loginSchema>;

const result = loginSchema;
