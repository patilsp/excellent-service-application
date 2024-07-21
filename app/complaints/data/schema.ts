import { z } from "zod";

export const complaintsSchema = z.object({
  id: z.string(),
  name: z.string(),
  phone: z.string().optional().default(""),
  note: z.string(),
  complaintType: z.string().optional().default(""),
  model: z.string().optional().default(""),
});

export type Complaint = z.infer<typeof complaintsSchema>;
