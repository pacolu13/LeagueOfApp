import { useState } from "react";
import { Skin } from "../../interfaces";
import "./Galeria.css";

interface Props {
  skins: Skin[];
}

export const Galeria = ({ skins }: Props) => {
  const cantSkins = skins.length;
  const [indice, setIndice] = useState<number>(0);

  const siguiente = () => {
    setIndice((prev) => (prev < cantSkins - 1 ? prev + 1 : 0));
  };

  const anterior = () => {
    setIndice((prev) => (prev > 0 ? prev - 1 : cantSkins - 1));
  };

  return (
    <div className="galeria">
      <button onClick={anterior} className="galeria__btn">{"<"}</button>

      <div className="galeria__container">
        <img
          src={skins[indice].image}
          alt={`Skin ${skins[indice].name}`}
          className="galeria__imagen"
        />
        <p>{skins[indice].name}</p>
      </div>

      <button onClick={siguiente} className="galeria__btn">{">"}</button>
    </div>
  );
};



