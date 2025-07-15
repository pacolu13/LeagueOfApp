import {Card} from "../../Components"
import { Box, Typography } from "@mui/material"

// Ejemplo de cómo usar el componente con datos personalizados


export const Tienda = () => {
    return (
        <Box maxWidth="md" mx="auto" p={3}>
            <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom textAlign="center">
                Mis Personajes
            </Typography>

            {/* Usar con datos por defecto */}
            <Box mb={4}>
                <Card />
            </Box>
        </Box>
    )
}
