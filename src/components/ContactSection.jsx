import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Button, 
  TextField, 
  Card,
  Chip,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  Snackbar,
  useTheme
} from '@mui/material';
import { 
  Email, 
  Phone, 
  LocationOn, 
  Send, 
  Schedule,
  Engineering,
  SupportAgent,
  CheckCircle,
  Business,
  Build
} from '@mui/icons-material';
import { useState } from 'react';
import { motion } from 'framer-motion';

// Paleta de colores consistente
const COLOR_PALETTE = {
  primary: '#1e40af',
  primaryLight: '#3b82f6',
  primaryDark: '#1e3a8a',
  secondary: '#f26b00',
  background: '#ffffff',
  textPrimary: '#1e293b',
  textSecondary: '#475569',
  success: '#10b981'
};

const MotionCard = motion.create(Card);
const MotionButton = motion.create(Button);
const MotionBox = motion.create(Box);

const ContactSection = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    servicio: '',
    descripcion: '',
    urgencia: ''
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (field) => (event) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es requerido';
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.servicio) newErrors.servicio = 'Selecciona un tipo de servicio';
    if (!formData.descripcion.trim()) newErrors.descripcion = 'La descripción es requerida';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Simular envío del formulario
    setSubmitStatus('loading');
    
    try {
      // Aquí iría la llamada a tu API
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        nombre: '',
        empresa: '',
        email: '',
        telefono: '',
        servicio: '',
        descripcion: '',
        urgencia: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  const handleCloseSnackbar = () => {
    setSubmitStatus(null);
  };

  return (
    <MotionBox
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
      component="section"
      id="contacto"
      sx={sectionStyles}
    >
      {/* Efectos de fondo */}
      <Box sx={backgroundOverlay} />
      
      <Container maxWidth="xl" sx={containerStyles}>
        {/* Header Section */}
        <MotionBox
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          sx={headerStyles}
        >
          <Typography variant="h2" sx={titleStyles}>
            Contáctanos
          </Typography>
          <Typography variant="h6" sx={subtitleStyles}>
            ¿Necesitas solucionar un problema con tu maquinaria? 
            Nuestro equipo de expertos está listo para ayudarte con soluciones rápidas y efectivas.
          </Typography>
        </MotionBox>

        {/* Stats Chips */}
        <MotionBox
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          sx={chipsContainerStyles}
        >
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            {[
              { icon: Schedule, label: "Respuesta en 24h", color: 'primary' },
              { icon: Engineering, label: "Expertos Industriales", color: 'primary' },
              { icon: SupportAgent, label: "Soporte 24/7", color: 'secondary' }
            ].map((item, index) => (
              <Chip
                key={item.label}
                icon={<item.icon sx={{ fontSize: 18 }} />}
                label={item.label}
                variant="filled"
                sx={chipStyles(item.color)}
              />
            ))}
          </Stack>
        </MotionBox>
        
        {/* Main Content Grid */}
        <Grid container spacing={4} sx={gridContainerStyles}>
          {/* Información de Contacto */}
          <Grid item xs={12} lg={5}>
            <MotionCard
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              sx={infoCardStyles}
            >
              <Typography variant="h4" sx={infoTitleStyles}>
                Información de Contacto
              </Typography>
              
              <Box sx={contactItemsContainer}>
                {[
                  {
                    icon: Phone,
                    title: "Teléfono",
                    value: "+56 (9) 76025923",
                    description: "Lunes a Viernes 8:00 - 18:00",
                    color: COLOR_PALETTE.primary
                  },
                  {
                    icon: Email,
                    title: "Email",
                    value: "contacto.drmaquina@gmail.com",
                    description: "Respuesta en menos de 24 horas",
                    color: COLOR_PALETTE.secondary
                  },
                  {
                    icon: LocationOn,
                    title: "Servicios",
                    value: "En taller y en terreno",
                    description: "Cobertura nacional",
                    color: COLOR_PALETTE.primary
                  }
                ].map((item, index) => (
                  <MotionBox
                    key={item.title}
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    sx={contactItemStyles}
                  >
                    <Box sx={contactIconStyles(item.color)}>
                      <item.icon sx={{ fontSize: 24, color: 'white' }} />
                    </Box>
                    <Box sx={contactTextStyles}>
                      <Typography variant="h6" sx={contactItemTitle}>
                        {item.title}
                      </Typography>
                      <Typography variant="body1" sx={contactItemValue}>
                        {item.value}
                      </Typography>
                      <Typography variant="caption" sx={contactItemDescription}>
                        {item.description}
                      </Typography>
                    </Box>
                  </MotionBox>
                ))}
              </Box>

              {/* Trust Indicator */}
              <Box sx={trustIndicatorStyles}>
                <CheckCircle sx={{ color: COLOR_PALETTE.success, mr: 1 }} />
                <Typography variant="body2" sx={trustTextStyles}>
                  Más de 20 años resolviendo los desafíos industriales más complejos
                </Typography>
              </Box>
            </MotionCard>
          </Grid>
          
          {/* Formulario de Contacto */}
          <Grid item xs={12} lg={7}>
            <MotionCard
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              sx={formCardStyles}
            >
              <Typography variant="h4" sx={formTitleStyles}>
                Solicitar Cotización
              </Typography>
              
              <Typography variant="body1" sx={formSubtitleStyles}>
                Completa el formulario y nos pondremos en contacto contigo para evaluar tu proyecto.
              </Typography>
              
              <Box component="form" onSubmit={handleSubmit} sx={formStyles}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Nombre completo *"
                      variant="outlined"
                      fullWidth
                      value={formData.nombre}
                      onChange={handleChange('nombre')}
                      error={!!errors.nombre}
                      helperText={errors.nombre}
                      sx={textFieldStyles}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Empresa"
                      variant="outlined"
                      fullWidth
                      value={formData.empresa}
                      onChange={handleChange('empresa')}
                      InputProps={{
                        startAdornment: <Business sx={adornmentStyles} />
                      }}
                      sx={textFieldStyles}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Email *"
                      variant="outlined"
                      fullWidth
                      type="email"
                      value={formData.email}
                      onChange={handleChange('email')}
                      error={!!errors.email}
                      helperText={errors.email}
                      InputProps={{
                        startAdornment: <Email sx={adornmentStyles} />
                      }}
                      sx={textFieldStyles}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Teléfono"
                      variant="outlined"
                      fullWidth
                      value={formData.telefono}
                      onChange={handleChange('telefono')}
                      InputProps={{
                        startAdornment: <Phone sx={adornmentStyles} />
                      }}
                      sx={textFieldStyles}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth error={!!errors.servicio} sx={selectStyles}>
                      <InputLabel>Tipo de servicio *</InputLabel>
                      <Select
                        value={formData.servicio}
                        onChange={handleChange('servicio')}
                        label="Tipo de servicio *"
                        startAdornment={<Build sx={{ ...adornmentStyles, mr: 1 }} />}
                      >
                        <MenuItem value=""><em>Selecciona un servicio</em></MenuItem>
                        <MenuItem value="reparacion">Reparación de emergencia</MenuItem>
                        <MenuItem value="mantenimiento">Mantenimiento preventivo</MenuItem>
                        <MenuItem value="modernizacion">Modernización</MenuItem>
                        <MenuItem value="consultoria">Consultoría técnica</MenuItem>
                        <MenuItem value="fabricacion">Fabricación de piezas</MenuItem>
                        <MenuItem value="otro">Otro servicio</MenuItem>
                      </Select>
                      {errors.servicio && (
                        <Typography variant="caption" color="error" sx={{ ml: 2, mt: 0.5 }}>
                          {errors.servicio}
                        </Typography>
                      )}
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth sx={selectStyles}>
                      <InputLabel>Urgencia del servicio</InputLabel>
                      <Select
                        value={formData.urgencia}
                        onChange={handleChange('urgencia')}
                        label="Urgencia del servicio"
                      >
                        <MenuItem value="baja">Baja (Planificado)</MenuItem>
                        <MenuItem value="media">Media (Próxima semana)</MenuItem>
                        <MenuItem value="alta">Alta (Inmediato)</MenuItem>
                        <MenuItem value="emergencia">Emergencia (24/7)</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                <TextField
                  label="Descripción del problema o servicio requerido *"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={5}
                  value={formData.descripcion}
                  onChange={handleChange('descripcion')}
                  error={!!errors.descripcion}
                  helperText={errors.descripcion || "Describe detalladamente el problema, tipo de máquina, antigüedad, y cualquier información relevante..."}
                  placeholder="Ej: Prensa hidráulica de 50 toneladas presenta fallas en el sistema de control. La máquina tiene 15 años y requiere revisión completa del circuito hidráulico..."
                  sx={textAreaStyles}
                />

                <MotionBox sx={submitButtonContainer}>
                  <MotionButton
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={submitStatus === 'loading'}
                    endIcon={<Send />}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    sx={submitButtonStyles}
                  >
                    {submitStatus === 'loading' ? 'Enviando...' : 'Enviar Solicitud'}
                  </MotionButton>
                </MotionBox>

                <Typography variant="caption" sx={privacyTextStyles}>
                  Al enviar este formulario, aceptas nuestra política de privacidad y el tratamiento de tus datos.
                </Typography>
              </Box>
            </MotionCard>
          </Grid>
        </Grid>
      </Container>

      {/* Notificación de éxito/error */}
      <Snackbar
        open={submitStatus === 'success'}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          ¡Solicitud enviada con éxito! Nos pondremos en contacto contigo dentro de 24 horas.
        </Alert>
      </Snackbar>

      <Snackbar
        open={submitStatus === 'error'}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
          Error al enviar la solicitud. Por favor, intenta nuevamente.
        </Alert>
      </Snackbar>
    </MotionBox>
  );
};

// ===== ESTILOS PROFESIONALES =====

const sectionStyles = {
  py: { xs: 8, md: 12 },
  background: `linear-gradient(135deg, ${COLOR_PALETTE.background} 0%, #f8fafc 100%)`,
  position: 'relative',
  overflow: 'hidden'
};

const backgroundOverlay = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `
    radial-gradient(circle at 20% 80%, ${COLOR_PALETTE.primaryLight}08 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, ${COLOR_PALETTE.secondary}05 0%, transparent 50%)
  `,
  pointerEvents: 'none'
};

const containerStyles = {
  position: 'relative',
  zIndex: 1
};

const headerStyles = {
  textAlign: 'center', 
  mb: { xs: 6, md: 8 },
  maxWidth: '800px',
  mx: 'auto'
};

const titleStyles = {
  color: COLOR_PALETTE.primary,
  fontWeight: 700,
  fontSize: { xs: '2.5rem', md: '3rem' },
  mb: 3,
  background: `linear-gradient(135deg, ${COLOR_PALETTE.primary} 0%, ${COLOR_PALETTE.primaryLight} 100%)`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
};

const subtitleStyles = {
  color: COLOR_PALETTE.textSecondary,
  lineHeight: 1.6,
  fontSize: { xs: '1.1rem', md: '1.25rem' },
  fontWeight: 400,
};

const chipsContainerStyles = {
  display: 'flex', 
  justifyContent: 'center', 
  mb: 8,
  width: '100%'
};

const chipStyles = (color) => ({
  backgroundColor: color === 'primary' ? COLOR_PALETTE.primary : COLOR_PALETTE.secondary,
  color: 'white',
  fontWeight: 600,
  px: 3,
  py: 2,
  fontSize: '0.9rem',
  '&:hover': {
    backgroundColor: color === 'primary' ? COLOR_PALETTE.primaryDark : '#d45a00',
  }
});

const gridContainerStyles = {
  justifyContent: 'center',
  alignItems: 'stretch'
};

const infoCardStyles = {
  width: '100%',
  p: { xs: 3, md: 4 },
  background: `linear-gradient(135deg, ${COLOR_PALETTE.background} 0%, #fafafa 100%)`,
  border: `1px solid ${COLOR_PALETTE.primaryLight}20`,
  borderRadius: 3,
  boxShadow: '0 12px 40px rgba(30, 64, 175, 0.08)',
  height: 'fit-content'
};

const infoTitleStyles = {
  fontWeight: 700,
  fontSize: { xs: '1.5rem', md: '1.75rem' },
  color: COLOR_PALETTE.primary,
  mb: 4,
  textAlign: 'center'
};

const contactItemsContainer = {
  display: 'flex',
  flexDirection: 'column',
  gap: 3
};

const contactItemStyles = {
  display: 'flex', 
  alignItems: 'flex-start',
  p: 3,
  borderRadius: 2,
  backgroundColor: 'rgba(30, 64, 175, 0.03)',
  border: '1px solid',
  borderColor: 'rgba(30, 64, 175, 0.1)',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgba(30, 64, 175, 0.05)',
    borderColor: 'rgba(30, 64, 175, 0.2)'
  }
};

const contactIconStyles = (color) => ({
  p: 1.5, 
  borderRadius: 2, 
  backgroundColor: color,
  mr: 3,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0
});

const contactTextStyles = {
  flex: 1
};

const contactItemTitle = {
  fontWeight: 600, 
  mb: 1,
  color: COLOR_PALETTE.textPrimary
};

const contactItemValue = {
  fontWeight: 500,
  color: COLOR_PALETTE.textPrimary,
  mb: 0.5
};

const contactItemDescription = {
  color: COLOR_PALETTE.textSecondary,
  fontStyle: 'italic'
};

const trustIndicatorStyles = {
  mt: 4,
  p: 3,
  backgroundColor: 'rgba(16, 185, 129, 0.05)',
  borderRadius: 2,
  border: '1px solid rgba(16, 185, 129, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const trustTextStyles = {
  color: COLOR_PALETTE.textSecondary,
  fontStyle: 'italic',
  fontWeight: 500
};

const formCardStyles = {
  width: '100%',
  p: { xs: 3, md: 4 },
  background: `linear-gradient(135deg, ${COLOR_PALETTE.background} 0%, #fafafa 100%)`,
  border: `1px solid ${COLOR_PALETTE.primaryLight}20`,
  borderRadius: 3,
  boxShadow: '0 12px 40px rgba(30, 64, 175, 0.08)',
  height: 'fit-content'
};

const formTitleStyles = {
  fontWeight: 700,
  fontSize: { xs: '1.5rem', md: '1.75rem' },
  color: COLOR_PALETTE.primary,
  mb: 1,
  textAlign: 'center'
};

const formSubtitleStyles = {
  mb: 4, 
  textAlign: 'center',
  color: COLOR_PALETTE.textSecondary
};

const formStyles = {
  display: 'flex', 
  flexDirection: 'column', 
  gap: 3 
};

const textFieldStyles = {
  '& .MuiOutlinedInput-root': {
    borderRadius: 2,
    '&:hover fieldset': {
      borderColor: COLOR_PALETTE.primaryLight,
    },
    '&.Mui-focused fieldset': {
      borderColor: COLOR_PALETTE.primary,
    },
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: COLOR_PALETTE.primary,
  }
};

const adornmentStyles = {
  color: COLOR_PALETTE.textSecondary,
  mr: 1
};

const selectStyles = {
  '& .MuiOutlinedInput-root': {
    borderRadius: 2,
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: COLOR_PALETTE.primaryLight,
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: COLOR_PALETTE.primary,
    },
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: COLOR_PALETTE.primary,
  }
};

const textAreaStyles = {
  ...textFieldStyles,
  '& .MuiOutlinedInput-root': {
    ...textFieldStyles['& .MuiOutlinedInput-root'],
    alignItems: 'flex-start'
  }
};

const submitButtonContainer = {
  display: 'flex',
  justifyContent: 'center',
  mt: 2
};

const submitButtonStyles = {
  px: 6,
  py: 1.5,
  borderRadius: 2,
  fontWeight: 600,
  fontSize: '1.1rem',
  textTransform: 'none',
  background: `linear-gradient(135deg, ${COLOR_PALETTE.primary} 0%, ${COLOR_PALETTE.primaryLight} 100%)`,
  boxShadow: '0 4px 16px rgba(30, 64, 175, 0.3)',
  minWidth: { xs: '100%', sm: '250px' },
  '&:hover': {
    boxShadow: '0 8px 25px rgba(30, 64, 175, 0.4)',
    background: `linear-gradient(135deg, ${COLOR_PALETTE.primaryDark} 0%, ${COLOR_PALETTE.primary} 100%)`
  },
  '&:disabled': {
    background: COLOR_PALETTE.textSecondary
  }
};

const privacyTextStyles = {
  textAlign: 'center',
  color: COLOR_PALETTE.textSecondary,
  mt: 2
};

export default ContactSection;