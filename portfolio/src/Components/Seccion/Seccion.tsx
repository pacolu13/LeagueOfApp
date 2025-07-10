import "./Seccion.css";

interface Props {
    titulo?: string;
    esEncabezado?: boolean;
    fondo?: string;
    children?: React.ReactNode;
}

export const Seccion = ({ titulo, fondo, children, esEncabezado }: Props) => {
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
            {esEncabezado && <h1>{titulo}</h1>}
            {!esEncabezado && <h2>{titulo}</h2>}
            {children}
        </div>
    );
}