import { InputHTMLAttributes, ChangeEvent } from "react";

export interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isActive: boolean;
}
