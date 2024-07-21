"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { DialogProps } from "@radix-ui/react-alert-dialog"
import {
  CircleIcon,
  FileIcon,
  LaptopIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { docsConfig } from "@/config/docs"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/registry/new-york/ui/command"
import { Search } from 'lucide-react'


export function CommandMenu({ ...props }: DialogProps) {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const { setTheme } = useTheme()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative mr-2 h-7 px-1"
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
      
      <Search size={24} color="black" className="p-1"/>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <div className="card ">
            <div className="results">
              <p className="label mt-4">Available Options</p>

              <CommandGroup className="py-3">
                {docsConfig.mainNav
                  .filter((navitem) => !navitem.external)
                  .map((navItem) => (
                    <CommandItem
                      className=""
                      key={navItem.href}
                      value={navItem.title}
                      onSelect={() => {
                        runCommand(() => router.push(navItem.href as string))
                      }}
                    >
                      <div className="results-list">
                        <div className="entry">
                          <div className="icon">
                            <svg
                              fill="none"
                              viewBox="0 0 24 24"
                              height="20"
                              width="20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linejoin="round"
                                stroke-width="2"
                                stroke="#171718"
                                d="M5 16L10 13M14 11L19 8M12 5V10M12 14V19M5 8L10 11M14 13L19 16"
                              ></path>
                              <path
                                stroke-linejoin="round"
                                stroke-width="2"
                                stroke="#171718"
                                d="M20.5 9.00001V14.5M13.5 20.5L19 17.5M4.5 17.5L10.5 20.5M3.5 15V9.00001M4.5 6.5L10.5 3.5M19.5 6.5L13.5 3.5"
                              ></path>
                              <circle
                                stroke-linejoin="round"
                                stroke-width="2"
                                stroke="#171718"
                                r="1.5"
                                cy="3.5"
                                cx="12"
                              ></circle>
                              <circle
                                stroke-linejoin="round"
                                stroke-width="2"
                                stroke="#171718"
                                r="1.5"
                                cy="20.5"
                                cx="12"
                              ></circle>
                              <circle
                                stroke-linejoin="round"
                                stroke-width="2"
                                stroke="#171718"
                                r="1.5"
                                cy="7.5"
                                cx="3.5"
                              ></circle>
                              <circle
                                stroke-linejoin="round"
                                stroke-width="2"
                                stroke="#171718"
                                r="1.5"
                                cy="7.5"
                                cx="20.5"
                              ></circle>
                              <circle
                                stroke-linejoin="round"
                                stroke-width="2"
                                stroke="#171718"
                                r="1.5"
                                cy="16.5"
                                cx="20.5"
                              ></circle>
                              <circle
                                stroke-linejoin="round"
                                stroke-width="2"
                                stroke="#171718"
                                r="1.5"
                                cy="16.5"
                                cx="3.5"
                              ></circle>
                              <path
                                stroke-linejoin="round"
                                stroke-width="2"
                                stroke="#171718"
                                d="M12 9.75L14 10.875V13.125L12 14.25L10 13.125V10.875L12 9.75Z"
                              ></path>
                            </svg>
                          </div>
                          <div className="desc ">
                            <label>{navItem.title}</label>
                          </div>
                        </div>
                      </div>
                    </CommandItem>
                  ))}
              </CommandGroup>
            </div>

           

          <CommandSeparator />
       
          <div className="card-footer">
              <div className="action">
                <button type="button">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    height="14"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="2.5"
                      stroke="#5F6368"
                      d="M12 19V4"
                    ></path>
                    <path
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="2.5"
                      stroke="#5F6368"
                      d="M7 15L11.2929 19.2929C11.6262 19.6262 11.7929 19.7929 12 19.7929C12.2071 19.7929 12.3738 19.6262 12.7071 19.2929L17 15"
                    ></path>
                  </svg>
                </button>
                <button type="button">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    height="14"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="2.5"
                      stroke="#5F6368"
                      d="M12 5L12 20"
                    ></path>
                    <path
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="2.5"
                      stroke="#5F6368"
                      d="M7 9L11.2929 4.70711C11.6262 4.37377 11.7929 4.20711 12 4.20711C12.2071 4.20711 12.3738 4.37377 12.7071 4.70711L17 9"
                    ></path>
                  </svg>
                </button>
                <p className="label">Navigate</p>
              </div>
              <div className="action">
                  <button type="button">
                    <svg fill="none" viewBox="0 0 14 14" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-width="1.5" stroke="#5F6368" d="M13 2.875V2.875C13 1.83947 12.1605 1 11.125 1V1C10.0895 1 9.25 1.83947 9.25 2.875V11.125C9.25 12.1605 10.0895 13 11.125 13V13C12.1605 13 13 12.1605 13 11.125V11.125C13 10.0895 12.1605 9.25 11.125 9.25H2.875C1.83947 9.25 1 10.0895 1 11.125V11.125C1 12.1605 1.83947 13 2.875 13V13C3.91053 13 4.75 12.1605 4.75 11.125V2.875C4.75 1.83947 3.91053 1 2.875 1V1C1.83947 1 1 1.83947 1 2.875V2.875C1 3.91053 1.83947 4.75 2.875 4.75H11.125C12.1605 4.75 13 3.91053 13 2.875Z"></path>
                    </svg>
            </button>
                  <p className="label">Quit
                </p></div>

              <CommandGroup >
            <div className="flex space-x-2">
              <CommandItem
                onSelect={() => runCommand(() => setTheme("light"))}
              >
                <SunIcon className="h-8 w-8 rounded-md bg-gray-300 p-1 dark:text-gray-500" />
                {/* <span>Light</span> */}
              </CommandItem>
              <CommandItem
                onSelect={() => runCommand(() => setTheme("dark"))}
              >
                <MoonIcon className="h-8 w-8 rounded-md bg-gray-300 p-1 dark:text-gray-500" />
                {/* <span>Dark</span> */}
              </CommandItem>
              <CommandItem
                onSelect={() => runCommand(() => setTheme("system"))}
              >
                <LaptopIcon className="h-8 w-8 rounded-md bg-gray-300 p-1 dark:text-gray-500" />
                {/* <span>System</span> */}
              </CommandItem>
            </div>
          </CommandGroup>
            </div>
          </div>

        </CommandList>
      </CommandDialog>
    </>
  )
}
