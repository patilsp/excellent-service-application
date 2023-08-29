import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import Image from "next/image"
import { z } from "zod"
import { PlusCircledIcon } from "@radix-ui/react-icons"
import { Button } from "@/registry/new-york/ui/button"
import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { customersSchema } from "./data/schema"

export const metadata: Metadata = {
  title: "customers",
  description: "A customers and issue tracker build using Tanstack Table.",
}

async function getCustomers() {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/customers/data/customers.json")
  )

  const customers = JSON.parse(data.toString())

  return z.array(customersSchema).parse(customers)
}

export default async function CustomerPage() {
  const customers = await getCustomers()

  return (
    <>
  
      <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your customers for this month!
            </p>
          </div>
          <div className="ml-auto mr-4">
                        <Button>
                          <PlusCircledIcon className="mr-2 h-4 w-4" />
                          Add Customer
                        </Button>
                      </div>
        </div>
        <DataTable data={customers} columns={columns} />
      </div>
    </>
  )
}
