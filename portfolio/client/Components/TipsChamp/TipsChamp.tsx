import './TipsChamp.css';


interface Props {
    tips: string[];
    title: string;
}

export const TipsChamp = ({ tips, title }: Props) => {

    if (!tips || tips.length === 0) {
        return <div>No tips available</div>;
    }
    return (
        <div className="tips-champ">
            <h3>{title}</h3>
            <ul>
                {tips.map((tip, index) => (
                    <div className='tip-item'>
                        <img src="../assets/favicon/Simbolo.png" alt="icon" />
                        <li key={index}>{tip}</li>
                    </div>

                ))}
            </ul>
        </div>
    );
};