import { ReactNode } from "react";
import "./ContainerCards.css";

interface Props {
    children: ReactNode
}

export const ContainerCards = ({ children }: Props) => {
    return (
        <div className="container-cards">
            {children}
        </div>
    )
}