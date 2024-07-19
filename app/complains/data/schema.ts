import { z } from "zod"

export const customersSchema = z.object({
  id: z.string(),
  name: z.string(),
  phone: z.string(),
  note: z.string(),
})

export type Customer = z.infer<typeof customersSchema>
