import z from 'zod';

export const formSchema = z.object({
  Email: z
    .string()
    .email("El email debe ser válido.")
    .min(5, "El email debe tener al menos 5 caracteres."),
  
  Name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres.")
    .max(50, "El nombre no debe exceder los 50 caracteres.")
    .regex(/^[a-zA-Z\s]+$/, "El nombre solo puede contener letras y espacios."),
  
  LastName: z
    .string()
    .min(2, "El apellido debe tener al menos 2 caracteres.")
    .max(50, "El apellido no debe exceder los 50 caracteres.")
    .regex(/^[a-zA-Z\s]+$/, "El apellido solo puede contener letras y espacios."),
  
  Number: z
    .string()
    .min(7, "El número de teléfono debe tener al menos 7 dígitos.")
    .max(15, "El número de teléfono no debe exceder los 15 dígitos.")
    .regex(/^\d+$/, "El número de teléfono solo puede contener dígitos."),
  
  Query: z
    .string()
    .min(10, "La consulta debe tener al menos 10 caracteres.")
    .max(500, "La consulta no debe exceder los 500 caracteres."),
});
