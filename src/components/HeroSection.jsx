import { Box, Container, Typography, Button, Grid, Paper } from '@mui/material';
import { Build, Engineering, Settings } from '@mui/icons-material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: 8,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            repeating-linear-gradient(
              45deg,
              #f26b00,
              #f26b00 60px,
              #7a7a7a 60px,
              #7a7a7a 120px
            )
          `,
          zIndex: 0,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%)',
          zIndex: 1,
        },
      }}
    >
      <Container 
        maxWidth="lg" 
        sx={{ 
          position: 'relative', 
          zIndex: 2 
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                color: 'white',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              }}
            >
              Doctor Máquina
            </Typography>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 600,
                mb: 3,
                fontSize: { xs: '1.5rem', md: '2rem' },
                color: 'white',
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              }}
            >
              El músculo industrial que soluciona rápida y efectivamente
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                color: 'rgba(255,255,255,0.9)',
                fontSize: { xs: '1rem', md: '1.2rem' },
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                maxWidth: '90%',
              }}
            >
              Mantenimiento, reparación, actualización e implementación de hardware y maquinaria, 
              incluso para equipos con más de 30 años de antigüedad.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: '#f26b00',
                color: 'white',
                '&:hover': {
                  bgcolor: '#ff8c00',
                  transform: 'translateY(-2px)',
                  boxShadow: 3,
                },
                px: 4,
                py: 1.5,
                fontWeight: 600,
                fontSize: '1.1rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                border: '2px solid white',
              }}
            >
              Solicitar Servicio
            </Button>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                flexWrap: 'wrap',
              }}
            >
              <Paper
                sx={{
                  p: 3,
                  textAlign: 'center',
                  bgcolor: 'rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(10px)',
                  minWidth: 120,
                  border: '2px solid rgba(255,255,255,0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    bgcolor: 'rgba(255,255,255,0.25)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                    border: '2px solid rgba(255,255,255,0.5)',
                  },
                }}
              >
                <Build sx={{ fontSize: 40, mb: 1, color: 'white' }} />
                <Typography variant="body2" sx={{ color: 'white', fontWeight: 600 }}>
                  Reparación
                </Typography>
              </Paper>
              <Paper
                sx={{
                  p: 3,
                  textAlign: 'center',
                  bgcolor: 'rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(10px)',
                  minWidth: 120,
                  border: '2px solid rgba(255,255,255,0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    bgcolor: 'rgba(255,255,255,0.25)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                    border: '2px solid rgba(255,255,255,0.5)',
                  },
                }}
              >
                <Engineering sx={{ fontSize: 40, mb: 1, color: 'white' }} />
                <Typography variant="body2" sx={{ color: 'white', fontWeight: 600 }}>
                  Mantenimiento
                </Typography>
              </Paper>
              <Paper
                sx={{
                  p: 3,
                  textAlign: 'center',
                  bgcolor: 'rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(10px)',
                  minWidth: 120,
                  border: '2px solid rgba(255,255,255,0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    bgcolor: 'rgba(255,255,255,0.25)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                    border: '2px solid rgba(255,255,255,0.5)',
                  },
                }}
              >
                <Settings sx={{ fontSize: 40, mb: 1, color: 'white' }} />
                <Typography variant="body2" sx={{ color: 'white', fontWeight: 600 }}>
                  Actualización
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;