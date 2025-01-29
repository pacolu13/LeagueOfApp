import { ReactNode } from "react";

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