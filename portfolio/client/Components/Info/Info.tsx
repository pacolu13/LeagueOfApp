import { Info } from "../../interfaces";
import "./Info.css";

interface Props {
    info: Info;
}

export const InfoChampion = ({ info }: Props) => {
    return (
        <div className="champion-info">
            <h3>Info</h3>
            <ul>
                {Object.entries(info).map(([key, value]) => (
                    <li key={key} className="info-item">
                        <span className="info-label">{key}:</span>
                        <div className="info-bar">
                            {[...Array(10)].map((_, index) => (
                                <span
                                    key={index}
                                    className="info-box"
                                    style={{ backgroundColor: index < value ? "#3498db" : "transparent" }}
                                />
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};



