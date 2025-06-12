import "./Seccion.css";

interface Props {
    titulo: string;
    children?: React.ReactNode;
}

export const Seccion = ({ titulo, children }: Props) => {
    return (
        <div className="seccion">
            <h2>{titulo}</h2>
            {children}
        </div>
    );
}