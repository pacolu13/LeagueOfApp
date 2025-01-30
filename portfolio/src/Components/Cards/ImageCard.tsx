interface Props {
    name: string;
}

const urlSplashArtLoading = 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/'

export const ImageCard = ({ name }: Props) => {
    return (
        <div className="card">
            <img src={`${urlSplashArtLoading}${name}_0.jpg`} alt={name} />
        </div>
    )
}