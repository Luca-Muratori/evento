import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

//combine clsx and twMerge
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


