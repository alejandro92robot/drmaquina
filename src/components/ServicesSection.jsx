import { Box, Container, Typography, Grid, Card, CardContent, useTheme } from '@mui/material';
import {
  Memory,
  ElectricBolt,
  Construction,
  DesignServices,
  SettingsInputComponent,
  PrecisionManufacturing
} from '@mui/icons-material';

const services = [
  {
    icon: <Memory />,
    title: 'Reparación de PCBs',
    description: 'Reparación de placas de circuito impreso de cualquier complejidad y antigüedad.'
  },
  {
    icon: <ElectricBolt />,
    title: 'Embobinado de Motores',
    description: 'Embobinado especial de motores y solenoides en configuraciones nuevas.'
  },
  {
    icon: <Construction />,
    title: 'Soldaduras Especiales',
    description: 'Técnicas de soldadura especializadas para materiales y aplicaciones específicas.'
  },
  {
    icon: <DesignServices />,
    title: 'Diseño y Fabricación',
    description: 'Diseño y fabricación de piezas especiales cuando los repuestos no existen.'
  },
  {
    icon: <SettingsInputComponent />,
    title: 'Implementación de Lógica',
    description: 'Implementación de lógica externa en máquinas existentes para modernización.'
  },
  {
    icon: <PrecisionManufacturing />,
    title: 'Trabajo en Terreno',
    description: 'Servicios tanto en taller como en terreno para máxima flexibilidad.'
  }
];

const ServicesSection = () => {
  const theme = useTheme();

  return (
    <Box 
      sx={{ 
        py: { xs: 6, md: 10 },
        bgcolor: 'background.paper',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: `linear-gradient(90deg, transparent 0%, ${theme.palette.primary.main} 50%, transparent 100%)`,
        }
      }}
    >
      <Container 
        maxWidth="lg" 
        sx={{ 
          width: { xs: '95%', sm: '90%', md: '85%', lg: '80%' },
          mx: 'auto'
        }}
      >
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{ 
              color: 'primary.main',
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '2.75rem' },
              mb: 3
            }}
          >
            Nuestros Servicios
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '100%',
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1rem', md: '1.25rem' },
              fontWeight: 400,
              px: { xs: 2, sm: 0 }
            }}
          >
            Solucionamos problemas incluso cuando los repuestos o programas no existen hace más de 30 años. 
            Contamos con una batería de servicios inmensa para todas tus necesidades industriales.
          </Typography>
        </Box>
        
        {/* Services Grid - ANCHO RELATIVO */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center',
          width: '100%'
        }}>
          <Grid 
            container 
            spacing={{ xs: 2, sm: 3 }}
            sx={{ 
              width: '100%',
              justifyContent: 'center'
            }}
          >
            {services.map((service, index) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                lg={4} 
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <Card
                  sx={{
                    width: '95%', // 95% del espacio disponible del Grid item
                    maxWidth: '400px', // Máximo absoluto para evitar que se estire demasiado
                    height: '100%',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)',
                    '&:hover': {
                      transform: { xs: 'none', sm: 'translateY(-8px)' },
                      boxShadow: { xs: 2, sm: '0 12px 40px rgba(0,0,0,0.15)' },
                      borderColor: 'primary.light',
                      '& .service-icon': {
                        transform: { xs: 'none', sm: 'scale(1.1)' },
                        color: 'primary.dark',
                      }
                    },
                  }}
                >
                  <CardContent sx={{ 
                    textAlign: 'center', 
                    p: { xs: 2, sm: 3, md: 4 },
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}>
                    <Box
                      className="service-icon"
                      sx={{
                        color: 'primary.main',
                        fontSize: { xs: 32, sm: 36, md: 48 },
                        mb: { xs: 2, sm: 3 },
                        p: { xs: 1.5, sm: 2 },
                        borderRadius: 2,
                        backgroundColor: 'rgba(242, 107, 0, 0.08)',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: { xs: 60, sm: 70, md: 80 },
                        height: { xs: 60, sm: 70, md: 80 }
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{ 
                        fontWeight: 600,
                        fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
                        mb: { xs: 1, sm: 2 },
                        color: 'text.primary'
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.6,
                        fontSize: { xs: '0.875rem', sm: '0.9rem', md: '1rem' }
                      }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        
        {/* Quote Section */}
        <Box 
          sx={{ 
            textAlign: 'center', 
            mt: { xs: 6, md: 8 },
            pt: 4,
            borderTop: '1px solid',
            borderColor: 'divider',
            px: { xs: 2, sm: 0 },
            width: '100%'
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: 'primary.main',
              fontStyle: 'italic',
              fontWeight: 500,
              fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
              lineHeight: 1.4,
              maxWidth: '100%',
              mx: 'auto',
              position: 'relative',
              '&::before, &::after': {
                content: { xs: '""', sm: '"\\201C"' },
                fontSize: { sm: '2rem', md: '3rem' },
                color: 'primary.light',
                position: 'absolute',
                opacity: 0.3,
              },
              '&::before': {
                top: { sm: -15, md: -20 },
                left: { sm: -30, md: -40 },
              },
              '&::after': {
                content: { xs: '""', sm: '"\\201D"' },
                bottom: { sm: -30, md: -40 },
                right: { sm: -30, md: -40 },
              }
            }}
          >
            Doctor Máquina es el músculo industrial que soluciona rápida y efectivamente
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;