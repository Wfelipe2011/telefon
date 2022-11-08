import { useState } from 'react'
import { Button } from '../components/Atoms/Button';
import { Input } from '../components/Atoms/Input';

interface IAddress {
    street: string;
    number: number;
    city: string;
    state: string;
    country: string;
}

export const Home = () => {
    const [address, setAddress] = useState({} as IAddress);
    const [phones, setPhones] = useState([] as any[]);

    const submit = async (e: any) => {
        console.log(address);
        e.preventDefault();
        try {

            const res = await fetch(`http://127.0.0.1:3000/api/address`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(address),
            });
            const data = await res.json();
            if (data?.code !== 200) data?.message && alert(data?.message);
            if (!data) return setPhones([]);
            setPhones(data);
        } catch (error) {
            console.log(error);
            alert('Erro ao buscar endereço');
        }

    };

    return (
        <div className="flex w-full h-[100vh] bg-zinc-100 justify-center items-center ">
            <form
                onSubmit={submit}
                className="flex flex-col justify-evenly items-center gap-8 bg-white border border-gray-200 rounded-lg px-4 py-8 w-1/2  shadow-xl"
            >
                <div className="flex flex-col justify-around items-center h-fit w-4/5">
                    <h1 className="text-slate-600 font-bold 2xl:text-3xl lg:text-xl inline-block h-fit mt-5">
                        Bem vindo ao Telefon
                    </h1>
                </div>
                <div className="h-fit w-4/5 flex flex-col justify-center 2xl:gap-6 xl:gap-4 lg:gap-3">
                    <Input
                        label="Rua"
                        placeholder="Digite sua rua"
                        name="street"
                        type="text"
                        value={address.street}
                        onChange={(e) => setAddress({ ...address, street: e.target.value })}
                    />
                    <Input
                        label="Número"
                        placeholder="Digite seu número"
                        name="number"
                        type="number"
                        value={address.number}
                        onChange={(e) => setAddress({ ...address, number: Number(e.target.value) })}
                    />
                    <Input
                        label="Cidade"
                        placeholder="Digite sua cidade"
                        name="city"
                        type="text"
                        value={address.city}
                        onChange={(e) => setAddress({ ...address, city: e.target.value })}
                    />
                    <Input
                        label="Estado"
                        placeholder="Digite seu estado"
                        name="state"
                        type="text"
                        value={address.state}
                        onChange={(e) => setAddress({ ...address, state: e.target.value })}
                    />
                    <Input
                        label="País"
                        placeholder="Digite seu país"
                        name="country"
                        type="text"
                        value={address.country}
                        onChange={(e) => setAddress({ ...address, country: e.target.value })}
                    />
                </div>
                <div className="h-fit justify-around flex flex-col items-center w-4/5 font-semibold 2xl:gap-7 lg:gap-4 lg:mt-2 2xl:mt-0">
                    <Button type="submit" className="text-white w-full" >
                        Pesquisar
                    </Button>
                </div>
            </form>
            {phones.length > 0 && (
                <div className="flex flex-col justify-evenly items-center gap-8 bg-white border border-gray-200 rounded-lg px-4 py-8 w-1/2  shadow-xl">
                    <div className="flex flex-col justify-around items-center h-fit w-4/5">
                        <h1 className="text-slate-600 font-bold 2xl:text-3xl lg:text-xl inline-block h-fit mt-5">
                            Telefones
                        </h1>
                        {phones.map((phone) => (
                            <li className='flex w-full justify-between p-2' key={phone.phone}>
                                <p>{phone.address}</p>
                                <p>{phone.phone}</p>
                            </li>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}


