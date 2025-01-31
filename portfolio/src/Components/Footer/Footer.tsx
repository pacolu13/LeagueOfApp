import { link } from '../../interfaces';
import './Footer.css';

interface Props {
    text: string;
    links: link[];
}

export const Footer = ({ text, links }: Props) => {
    return (
        <footer className="footer">
            <p>{text}</p>
            <div className="footer__links">
                {links.map((link) => (
                    <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
                ))}
            </div>
        </footer>
    );
}