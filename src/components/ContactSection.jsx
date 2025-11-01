import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Button, 
  TextField, 
  Paper,
  FormControl,
  InputLabel,
  useTheme,
  Card,
  Chip,
  Stack,
  Select,
  MenuItem
} from '@mui/material';
import { 
  Email, 
  Phone, 
  LocationOn, 
  Send, 
  Schedule,
  Engineering,
  SupportAgent
} from '@mui/icons-material';

const ContactSection = () => {
  const theme = useTheme();

  return (
    <Box sx={{ 
      py: { xs: 6, md: 10 },
      background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: `linear-gradient(90deg, transparent 0%, ${theme.palette.primary.main} 50%, transparent 100%)`,
      }
    }}>
      <Container 
        maxWidth="lg" 
        sx={{ 
          width: { xs: '95%', sm: '90%', md: '85%', lg: '80%' },
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* Header Section */}
        <Box sx={{ 
          textAlign: 'center', 
          mb: { xs: 6, md: 8 },
          width: '100%',
          maxWidth: { xs: '100%', sm: '600px', md: '800px' }
        }}>
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
            Contáctanos
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.6,
              fontSize: { xs: '1rem', md: '1.25rem' },
              fontWeight: 400,
            }}
          >
            ¿Necesitas solucionar un problema con tu maquinaria? 
            Nuestro equipo de expertos está listo para ayudarte con soluciones rápidas y efectivas.
          </Typography>
        </Box>

        {/* Stats Chips */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          mb: 6,
          width: '100%'
        }}>
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={2}
            sx={{ justifyContent: 'center' }}
          >
            <Chip
              icon={<Schedule sx={{ fontSize: 18 }} />}
              label="Respuesta en 24h"
              variant="filled"
              sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                fontWeight: 600,
                px: 2,
                py: 1.5
              }}
            />
            <Chip
              icon={<Engineering sx={{ fontSize: 18 }} />}
              label="Expertos Industriales"
              variant="outlined"
              sx={{
                borderColor: 'primary.main',
                color: 'primary.main',
                fontWeight: 600,
                px: 2,
                py: 1.5
              }}
            />
            <Chip
              icon={<SupportAgent sx={{ fontSize: 18 }} />}
              label="Soporte 24/7"
              variant="outlined"
              sx={{
                borderColor: 'secondary.main',
                color: 'secondary.main',
                fontWeight: 600,
                px: 2,
                py: 1.5
              }}
            />
          </Stack>
        </Box>
        
        {/* Main Content Grid */}
        <Box sx={{ 
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Grid 
            container 
            spacing={4}
            sx={{ 
              width: '100%',
              maxWidth: { xs: '100%', sm: '600px', md: '900px', lg: '1100px' },
              justifyContent: 'center',
              margin: '0 auto'
            }}
          >
            {/* Información de Contacto */}
            <Grid 
              item 
              xs={12} 
              md={5}
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Card
                sx={{
                  width: '100%',
                  maxWidth: '500px',
                  p: { xs: 3, md: 4 },
                  background: 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                }}
              >
                <Typography 
                  variant="h4" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 700,
                    fontSize: { xs: '1.5rem', md: '1.75rem' },
                    color: 'primary.main',
                    mb: 4,
                    textAlign: 'center'
                  }}
                >
                  Información de Contacto
                </Typography>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {/* Teléfono */}
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: 'rgba(242, 107, 0, 0.05)',
                    border: '1px solid',
                    borderColor: 'rgba(242, 107, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(242, 107, 0, 0.08)',
                      transform: 'translateX(4px)'
                    }
                  }}>
                    <Box sx={{ 
                      p: 1.5, 
                      borderRadius: 2, 
                      backgroundColor: 'primary.main',
                      mr: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Phone sx={{ fontSize: 24, color: 'white' }} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                        Teléfono
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 500 }}>
                        +1 (555) 123-4567
                      </Typography>
                      <Typography variant="caption" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                        Lunes a Viernes 8:00 - 18:00
                      </Typography>
                    </Box>
                  </Box>
                  
                  {/* Email */}
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: 'rgba(122, 122, 122, 0.05)',
                    border: '1px solid',
                    borderColor: 'rgba(122, 122, 122, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(122, 122, 122, 0.08)',
                      transform: 'translateX(4px)'
                    }
                  }}>
                    <Box sx={{ 
                      p: 1.5, 
                      borderRadius: 2, 
                      backgroundColor: 'secondary.main',
                      mr: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Email sx={{ fontSize: 24, color: 'white' }} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                        Email
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 500 }}>
                        contacto@doctormaquina.com
                      </Typography>
                      <Typography variant="caption" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                        Respuesta en menos de 24 horas
                      </Typography>
                    </Box>
                  </Box>
                  
                  {/* Servicios */}
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: 'rgba(242, 107, 0, 0.05)',
                    border: '1px solid',
                    borderColor: 'rgba(242, 107, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(242, 107, 0, 0.08)',
                      transform: 'translateX(4px)'
                    }
                  }}>
                    <Box sx={{ 
                      p: 1.5, 
                      borderRadius: 2, 
                      backgroundColor: 'primary.main',
                      mr: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <LocationOn sx={{ fontSize: 24, color: 'white' }} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                        Servicios
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 500 }}>
                        En taller y en terreno
                      </Typography>
                      <Typography variant="caption" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                        Cobertura nacional
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Additional Info */}
                <Box sx={{ mt: 4, p: 3, backgroundColor: 'rgba(122, 122, 122, 0.03)', borderRadius: 2 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', fontStyle: 'italic' }}>
                    "Más de 20 años resolviendo los desafíos industriales más complejos"
                  </Typography>
                </Box>
              </Card>
            </Grid>
            
            {/* Formulario de Contacto */}
            <Grid 
              item 
              xs={12} 
              md={7}
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Card
                sx={{
                  width: '100%',
                  maxWidth: '600px',
                  p: { xs: 3, md: 4 },
                  background: 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                }}
              >
                <Typography 
                  variant="h4" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 700,
                    fontSize: { xs: '1.5rem', md: '1.75rem' },
                    color: 'primary.main',
                    mb: 1,
                    textAlign: 'center'
                  }}
                >
                  Solicitar Cotización
                </Typography>
                
                <Typography 
                  variant="body1" 
                  color="text.secondary" 
                  sx={{ mb: 4, textAlign: 'center' }}
                >
                  Completa el formulario y nos pondremos en contacto contigo para evaluar tu proyecto.
                </Typography>
                
                <Box 
                  component="form" 
                  sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: 3 
                  }}
                >
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Nombre completo"
                        variant="outlined"
                        fullWidth
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Empresa"
                        variant="outlined"
                        fullWidth
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                          }
                        }}
                      />
                    </Grid>
                  </Grid>

                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        required
                        type="email"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Teléfono"
                        variant="outlined"
                        fullWidth
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                          }
                        }}
                      />
                    </Grid>
                  </Grid>
<FormControl fullWidth sx={{ mb: 3 }}>
  <InputLabel id="service-type-label">
    Tipo de servicio requerido
  </InputLabel>
  <Select
    labelId="service-type-label"
    label="Tipo de servicio requerido"
    variant="outlined"
    sx={{
      borderRadius: 2,
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'primary.main',
      },
    }}
  >
    <MenuItem value="">
      <em>Selecciona un servicio</em>
    </MenuItem>
    <MenuItem value="reparacion">Reparación de emergencia</MenuItem>
    <MenuItem value="mantenimiento">Mantenimiento preventivo</MenuItem>
    <MenuItem value="modernizacion">Modernización</MenuItem>
    <MenuItem value="consultoria">Consultoría técnica</MenuItem>
    <MenuItem value="otro">Otro</MenuItem>
  </Select>
</FormControl>

                  <TextField
                    label="Descripción del problema o servicio requerido"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    required
                    placeholder="Describe detalladamente el problema, tipo de máquina, antigüedad, y cualquier información relevante..."
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                        },
                      }
                    }}
                  />

                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      endIcon={<Send />}
                      sx={{
                        px: 4,
                        py: 1.5,
                        borderRadius: 2,
                        fontWeight: 600,
                        fontSize: '1rem',
                        textTransform: 'none',
                        boxShadow: '0 4px 16px rgba(242, 107, 0, 0.3)',
                        '&:hover': {
                          boxShadow: '0 6px 20px rgba(242, 107, 0, 0.4)',
                          transform: 'translateY(-2px)'
                        },
                        transition: 'all 0.3s ease',
                        minWidth: { xs: '100%', sm: 'auto' }
                      }}
                    >
                      Enviar Solicitud
                    </Button>
                  </Box>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection;