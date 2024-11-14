import { z } from "zod";

export const schema = z
  .object({
    name: z.string().min(1, "El nombre es obligatorio"),
    email: z
      .string()
      .email("Formato de correo inválido")
      .min(1, "El correo es obligatorio"),
    password: z.string().min(6, "La contraseña es obligatorio"),
    confirmPassword: z.string().min(6, "La contraseña es obligatorio"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

export type FormValues = z.infer<typeof schema>;
