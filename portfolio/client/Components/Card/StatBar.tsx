import { Box, LinearProgress, Typography } from "@mui/material"

export const StatBar = ({
  label,
  value,
  icon,
  color = "primary",
}: {
  label: string
  value: number
  icon: React.ReactNode
  color?: "primary" | "secondary" | "error" | "warning"
}) => (
  <Box>
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={0.5}>
      <Box display="flex" alignItems="center" gap={0.5}>
        {icon}
        <Typography variant="caption" color="text.secondary">
          {label}
        </Typography>
      </Box>
      <Typography variant="caption" fontWeight="bold">
        {value}
      </Typography>
    </Box>
    <LinearProgress variant="determinate" value={value * 10} color={color} sx={{ height: 15, borderRadius: 1 }} />
  </Box>
)