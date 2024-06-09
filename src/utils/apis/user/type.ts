import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 character" }),
  email: z.string().min(3, { message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(3, { message: "Password must be at least 6 character" }),
});

export const loginSchema = z.object({
  email: z.string().min(3, { message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(3, { message: "Password must be at least 6 character" }),
});

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export type RegisterSchema = z.infer<typeof registerSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;
