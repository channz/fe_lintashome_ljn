import { z } from "zod";

export const addBulkpopSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  host: z.string().min(1, { message: "Host is required" }),
  user: z.string().min(1, { message: "User is required" }),
  password: z.string().min(1, { message: "Password is required" }),
  port: z.string().min(1, { message: "Port is required" }),
});

export const updateBulkpopSchema = z.object({
  // id: z.string().min(1, { message: "Name is required" }),
  name: z.string().min(1, { message: "Name is required" }),
  host: z.string().min(1, { message: "Host is required" }),
  user: z.string().min(1, { message: "User is required" }),
  password: z.string().min(1, { message: "Password is required" }),
  port: z.string().min(1, { message: "Port is required" }),
});

export interface Bulkpop {
  id: string;
  name: string;
  host: string;
  user: string;
  password: string;
  port: string;
  total: string;
  online: string;
  offline: string;
}

export type AddBulkpopSchema = z.infer<typeof addBulkpopSchema>;
export type UpdateBulkpopSchema = z.infer<typeof updateBulkpopSchema>;
