interface Props {
    level: number
}

export const BarLevel = ({ level }: Props) => {
    const levels = Array(3).fill("level-space"); // Crea un array base con niveles vacíos
    for (let i = 0; i < level; i++) {
        levels[i] = `level-${level}`; // Rellena los niveles según el valor de `nivel`
    }

    return (
        <div className="level">
            {levels.map((levelClass, index) => (
                <div key={index} className={`level-design ${levelClass}`}></div>
            ))}
        </div>
    );
};