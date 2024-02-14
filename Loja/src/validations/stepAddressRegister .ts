import { z } from "zod";

export const createStepAddressResgiterSchema = z.object({
  zipcode: z.string().trim().min(8, "O cep deve conter 8 dígitos"),
  street: z.string().trim().min(1, "A Rua é obrigatória"),
  number: z.number().default(0),
  complement: z.string().trim().min(1, "O complemeto é obrigatório"),
  neighborhood: z.string().trim().min(1, "O Bairro é obrigatório"),
  city: z.string().trim().min(1, "A Cidade é obrigatória"),
  state: z.string().trim().min(1, "O Estado é obrigatório"),
  reference: z.string().trim(),
  type: z.string().trim(),
  recipient: z.string().trim(),
});

export type CreateStepAddressRegisterFormData = z.infer<
  typeof createStepAddressResgiterSchema
>;
