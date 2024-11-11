export interface FormSignInProps {
  buttonText: string;
  title: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
