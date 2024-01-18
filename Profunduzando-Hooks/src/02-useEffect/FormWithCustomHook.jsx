import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, onInputChange, onResetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formState;

  return (
    <>
      <h1>Form With custom hook</h1>

      <input
        type="text"
        placeholder="Usename"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        placeholder="hubert@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        placeholder="************"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm}>Borrar</button>
    </>
  );
};
