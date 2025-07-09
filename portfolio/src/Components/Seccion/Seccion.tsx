import "./Seccion.css";

interface Props {
    titulo?: string;
    fondo?: string;
    children?: React.ReactNode;
}

export const Seccion = ({ titulo, fondo, children }: Props) => {
    return (
        <div
            className="seccion"
            style={{
                backgroundImage: `url(${fondo})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
        >
            <h2>{titulo}</h2>
            {children}
        </div>
    );
}