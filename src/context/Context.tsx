import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IPropsProviders {
    time: number;
    setTime: (value: number) => void;
    navigate: (value: string) => void;
    price: number
    setPrice: (value: number) => void;
}

export const Context = createContext({} as IPropsProviders);

export interface INode {
    children: ReactNode;
}

export const ContextProvider = ({ children }: INode) => {
    const [time, setTime] = useState(0);
    const [price, setPrice] = useState(0);
    
    const navigate = useNavigate()
    return (
        <Context.Provider value={{ time, setTime, navigate, price, setPrice }}>
            {children}
        </Context.Provider>
    );
};
