
"use client"

import { Chip, Box, Typography, Stack, Grid, Divider, } from "@mui/material"
import { Sports as SwordIcon, Security as ShieldIcon, Speed as SpeedIcon, } from "@mui/icons-material"
import { Champion } from "../../interfaces"
import { API_ROUTES } from "../../api"
import { StatBar } from "./StatBar"
import './Card.css'
import { Button } from "../Button/Button"
import { Seccion } from "../Seccion/Seccion"

interface Props {
  character?: Champion
}

export const Card = ({ character }: Props) => {
  return (
    <div className="card-design">
      <div className="image-container">
        <img src={`${API_ROUTES.splashArt}${character?.id}_0.jpg`} alt={character?.name} />
      </div>
      <Seccion titulo={character?.name}>
        <Typography variant="subtitle2" >
          {character?.title}
        </Typography>

        <Stack direction="row" spacing={1} mb={2}>
          {character?.tags?.map((tag) => (
            <Chip key={tag} label={tag} variant="outlined" size="small" />
          ))}
        </Stack>
        <Typography variant="subtitle2" fontWeight="bold" >
          Estadísticas
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <StatBar label="Ataque" value={character?.info?.attack || 0}
              icon={<SwordIcon fontSize="small" />}
              color="error"
            />
          </Grid>
          <Grid item xs={6}>
            <StatBar label="Defensa" value={character?.info?.defense || 0}
              icon={<ShieldIcon fontSize="small" />}
              color="primary"
            />
          </Grid>
          <Grid item xs={6}>
            <StatBar label="Dificultad" value={character?.info?.difficulty || 0}
              icon={<SpeedIcon fontSize="small" />}
              color="warning"
            />
          </Grid>
        </Grid>
        <div className="button-container">
          <Button label={"Ver Detalles"} parentMethod={() => { window.location.href = `/Champ/${character?.id}`; }} />
        </div>
      </Seccion>
    </div>
  )
}
