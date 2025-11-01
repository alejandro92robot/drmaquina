import {Typography, Container, Box  } from '@mui/material';
function Footer(){
    return (
        <Box component="footer" sx={{ bgcolor: 'secondary.main', color: 'white', py: 4 }}>
<Container maxWidth="lg">
<Typography variant="body2" textAlign="center" sx={{ opacity: 0.8, mt: 1 }}>
    El músculo industrial que soluciona rápida y efectivamente
  </Typography>
  <Typography variant="body2" textAlign="center">
    © {new Date().getFullYear()} Doctor Máquina - Diseñado y Desarrollado por Alejandro Aguilera
  </Typography>
</Container>
</Box>
    )
}
export default Footer;
