import { useState } from "react";
import { Skin } from "../../interfaces";
import "./Galeria.css";
import { Button } from "../Button/Button";

interface Props {
  skins: Skin[];
}

export const Galeria = ({ skins }: Props) => {
  const cantSkins = skins.length;
  const [indice, setIndice] = useState<number>(0);

  function siguiente() {
    setIndice((prev) => (prev < cantSkins - 1 ? prev + 1 : 0));
  };

  function anterior() {
    setIndice((prev) => (prev > 0 ? prev - 1 : cantSkins - 1));
  };

  return (
    <div className="galeria">
      <Button parentMethod={anterior} label="<" />

      <div className="galeria__container">
        <img
          src={skins[indice].image}
          alt={`Skin ${skins[indice].name}`}
          className="galeria__imagen"
        />
        <p>{skins[indice].name}</p>
      </div>

      <Button parentMethod={siguiente} label=">" />
    </div>
  );
};



