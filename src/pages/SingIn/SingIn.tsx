import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Atoms/Button";
import { Input } from "../../components/Atoms/Input";


export const SignIn = ({ http }: { http: any }) => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const preSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSubmit();
  };

  const handleSubmit = async () => {
    navigate("/home");
  };

  const validateFields = () => {

  };

  return (
    <div className="flex w-full h-[100vh] bg-zinc-100 justify-center items-center ">
      <form
        onSubmit={preSubmit}
        className="flex flex-col justify-evenly items-center gap-8 bg-white border border-gray-200 rounded-lg px-4 py-8 w-[450px]  shadow-xl"
      >
        <div className="flex flex-col justify-around items-center h-fit w-4/5">
          <h1 className="text-slate-600 font-bold 2xl:text-3xl lg:text-xl inline-block h-fit mt-5">
            Bem vindo ao Telefon
          </h1>

        </div>
        <div className="h-fit w-4/5 flex flex-col justify-center 2xl:gap-6 xl:gap-4 lg:gap-3">
          <Input
            label="Email"
            placeholder="Digite seu e-mail"
            name="email"
            type="email"
            value={credentials.email}
          />
          <Input
            label="Senha"
            placeholder="Digite sua senha"
            type="password"
            name="password"
            value={credentials.password}
          />

        </div>
        <div className="h-fit justify-around flex flex-col items-center w-4/5 font-semibold 2xl:gap-7 lg:gap-4 lg:mt-2 2xl:mt-0">
          <Button type="submit" className="text-white w-full" >
            Acessar o sistema
          </Button>
        </div>
      </form>
    </div>
  );
};
