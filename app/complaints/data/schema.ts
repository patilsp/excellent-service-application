import { z } from "zod";

export const complaintsSchema = z.object({
  id: z.string(),
  name: z.string(),
  phone: z.string().optional().default(""),
  note: z.string(),
});

export type Complaint = z.infer<typeof complaintsSchema>;
