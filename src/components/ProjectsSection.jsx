import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Chip,
  LinearProgress,
  useTheme,
  Modal,
  IconButton,
  Button
} from '@mui/material';
import { 
  Bolt, 
  Build, 
  Water, 
  Scale,
  ArrowForward,
  Close,
  ChevronLeft,
  ChevronRight
} from '@mui/icons-material';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Modernización de Prensa Hidráulica',
    description: 'Actualización completa de sistema de control y potencia para prensa hidráulica de 30 años. Implementación de PLC moderno y sensores de seguridad.',
    images: [
      '/images/IMG-20230428-WA0025 (1).jpeg',
      '/images/Poleas Leva Regulable.jpeg',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop'
    ],
    indicators: {
      electrico: 70,
      mecanico: 40,
      hidraulico: 90,
      peso: 'Alto'
    }
  },
  {
    id: 2,
    title: 'Reparación de Motor Industrial',
    description: 'Re-embobinado completo de motor trifásico de 50HP con actualización de aislamientos y sistema de refrigeración.',
    images: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop'
    ],
    indicators: {
      electrico: 85,
      mecanico: 60,
      hidraulico: 10,
      peso: 'Medio'
    }
  },
  {
    id: 3,
    title: 'Sistema de Automatización',
    description: 'Implementación de lógica de control para línea de producción automatizada con interfaces HMI y comunicaciones industriales.',
    images: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop'
    ],
    indicators: {
      electrico: 95,
      mecanico: 25,
      hidraulico: 30,
      peso: 'Medio'
    }
  },
  {
    id: 4,
    title: 'Reconstrucción de Transmisión',
    description: 'Fabricación de piezas especiales y reparación de transmisión mecánica para equipo minero fuera de producción.',
    images: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop'
    ],
    indicators: {
      electrico: 20,
      mecanico: 95,
      hidraulico: 45,
      peso: 'Alto'
    }
  }
];

// Componente Modal del Carousel
const ProjectCarousel = ({ project, open, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') handlePrev();
    if (event.key === 'ArrowRight') handleNext();
    if (event.key === 'Escape') onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      onKeyDown={handleKeyDown}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(10px)'
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '90vw',
          height: '90vh',
          maxWidth: 1200,
          maxHeight: 800,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          overflow: 'hidden',
          outline: 'none'
        }}
      >
        {/* Header del modal */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 2,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%)',
            zIndex: 10
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: 'white',
              fontWeight: 600,
              textShadow: '0 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            {project.title}
          </Typography>
          <IconButton
            onClick={onClose}
            sx={{
              color: 'white',
              background: 'rgba(0,0,0,0.5)',
              '&:hover': {
                background: 'rgba(0,0,0,0.7)'
              }
            }}
          >
            <Close />
          </IconButton>
        </Box>

        {/* Imagen principal */}
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#000'
          }}
        >
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.title} - Imagen ${currentImageIndex + 1}`}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain'
            }}
          />
        </Box>

        {/* Controles de navegación */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: 'absolute',
            left: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'white',
            background: 'rgba(0,0,0,0.5)',
            '&:hover': {
              background: 'rgba(0,0,0,0.7)'
            },
            zIndex: 10
          }}
        >
          <ChevronLeft fontSize="large" />
        </IconButton>

        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            right: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'white',
            background: 'rgba(0,0,0,0.5)',
            '&:hover': {
              background: 'rgba(0,0,0,0.7)'
            },
            zIndex: 10
          }}
        >
          <ChevronRight fontSize="large" />
        </IconButton>

        {/* Indicadores de imagen */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 16,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 1,
            zIndex: 10
          }}
        >
          {project.images.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: index === currentImageIndex ? 'primary.main' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: index === currentImageIndex ? 'primary.main' : 'rgba(255,255,255,0.8)'
                }
              }}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </Box>

        {/* Contador de imágenes */}
        <Typography
          variant="body2"
          sx={{
            position: 'absolute',
            bottom: 16,
            right: 16,
            color: 'white',
            background: 'rgba(0,0,0,0.5)',
            padding: '4px 8px',
            borderRadius: 1,
            zIndex: 10
          }}
        >
          {currentImageIndex + 1} / {project.images.length}
        </Typography>
      </Box>
    </Modal>
  );
};

const ProjectCard = ({ project, onProjectClick }) => {
  const theme = useTheme();

  const getWeightColor = (weight) => {
    switch (weight) {
      case 'Bajo': return '#4caf50';
      case 'Medio': return '#ff9800';
      case 'Alto': return '#f44336';
      default: return '#7a7a7a';
    }
  };

  const getProgressColor = (value) => {
    if (value >= 80) return '#4caf50';
    if (value >= 60) return '#ff9800';
    return '#f44336';
  };

  return (
    <Card
      sx={{
        width: '100%',
        maxWidth: '500px',
        height: '100%',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        background: 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)',
        overflow: 'hidden',
        mx: 'auto',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 16px 40px rgba(0,0,0,0.12)',
          borderColor: 'primary.light',
        },
      }}
      onClick={() => onProjectClick(project)}
    >
      {/* Imagen del proyecto */}
      <Box
        sx={{
          height: 200,
          background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <img 
          src={project.images[0]} 
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
        />
        
        {/* Overlay para indicar que es clickeable */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            '&:hover': {
              opacity: 1
            }
          }}
        >
          <Box
            sx={{
              background: 'rgba(0,0,0,0.7)',
              color: 'white',
              padding: '8px 16px',
              borderRadius: 2,
              fontSize: '0.875rem',
              fontWeight: 600
            }}
          >
            Ver galería ({project.images.length} imágenes)
          </Box>
        </Box>
      </Box>
    
      <CardContent sx={{ p: 3 }}>
        {/* Título y descripción */}
        <Typography
          variant="h5"
          component="h3"
          gutterBottom
          sx={{
            fontWeight: 600,
            fontSize: '1.25rem',
            color: 'text.primary',
            lineHeight: 1.3,
            textAlign: 'center'
          }}
        >
          {project.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 3,
            lineHeight: 1.5,
            fontSize: '0.9rem',
            textAlign: 'center'
          }}
        >
          {project.description}
        </Typography>

        {/* Indicadores de especialidad */}
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="subtitle2"
            gutterBottom
            sx={{
              fontWeight: 600,
              color: 'text.primary',
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              justifyContent: 'center'
            }}
          >
            <Bolt sx={{ fontSize: 18, color: 'primary.main' }} />
            Especialidades del Proyecto
          </Typography>

          {/* Eléctrico */}
          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                Eléctrico
              </Typography>
              <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.primary' }}>
                {project.indicators.electrico}%
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={project.indicators.electrico}
              sx={{
                height: 6,
                borderRadius: 3,
                backgroundColor: '#e0e0e0',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: getProgressColor(project.indicators.electrico),
                  borderRadius: 3,
                }
              }}
            />
          </Box>

          {/* Mecánico */}
          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                Mecánico
              </Typography>
              <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.primary' }}>
                {project.indicators.mecanico}%
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={project.indicators.mecanico}
              sx={{
                height: 6,
                borderRadius: 3,
                backgroundColor: '#e0e0e0',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: getProgressColor(project.indicators.mecanico),
                  borderRadius: 3,
                }
              }}
            />
          </Box>

          {/* Hidráulico */}
          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                Hidráulico
              </Typography>
              <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.primary' }}>
                {project.indicators.hidraulico}%
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={project.indicators.hidraulico}
              sx={{
                height: 6,
                borderRadius: 3,
                backgroundColor: '#e0e0e0',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: getProgressColor(project.indicators.hidraulico),
                  borderRadius: 3,
                }
              }}
            />
          </Box>
        </Box>

        {/* Indicador de peso/complejidad */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2
        }}>
          <Chip
            icon={<Scale sx={{ fontSize: 16 }} />}
            label={`Complejidad: ${project.indicators.peso}`}
            variant="outlined"
            sx={{
              borderColor: getWeightColor(project.indicators.peso),
              color: getWeightColor(project.indicators.peso),
              fontWeight: 600,
              '& .MuiChip-icon': {
                color: getWeightColor(project.indicators.peso),
              }
            }}
          />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: 'primary.main',
              fontWeight: 600,
              fontSize: '0.875rem',
              cursor: 'pointer',
              '&:hover': {
                color: 'primary.dark'
              }
            }}
          >
            Ver galería
            <ArrowForward sx={{ fontSize: 16, ml: 0.5 }} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [carouselOpen, setCarouselOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCarouselOpen(true);
  };

  const handleCloseCarousel = () => {
    setCarouselOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <Box 
      sx={{ 
        py: { xs: 6, md: 10 },
        bgcolor: 'background.default',
        position: 'relative',
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
            Proyectos Destacados
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: 800,
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: { xs: '1rem', md: '1.25rem' },
              fontWeight: 400,
            }}
          >
            Conoce algunos de nuestros trabajos más representativos donde aplicamos 
            soluciones innovadoras para desafíos industriales complejos.
          </Typography>
        </Box>
        
        {/* Projects Grid - CENTERED */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center',
          width: '100%'
        }}>
          <Grid 
            container 
            spacing={3}
            sx={{ 
              width: '100%',
              maxWidth: { xs: '100%', sm: '600px', md: '900px', lg: '1100px' },
              justifyContent: 'center',
              margin: '0 auto'
            }}
          >
            {projects.map((project) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                lg={4} 
                key={project.id}
                sx={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <ProjectCard 
                  project={project} 
                  onProjectClick={handleProjectClick}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA Section */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              fontStyle: 'italic',
              fontWeight: 500,
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.5
            }}
          >
            ¿Tienes un proyecto industrial desafiante? 
            <Box 
              component="span" 
              sx={{ 
                color: 'primary.main', 
                fontWeight: 600,
                ml: 1
              }}
            >
              Contáctanos para una solución a medida.
            </Box>
          </Typography>
        </Box>

        {/* Carousel Modal */}
        {selectedProject && (
          <ProjectCarousel
            project={selectedProject}
            open={carouselOpen}
            onClose={handleCloseCarousel}
          />
        )}
      </Container>
    </Box>
  );
};

export default ProjectsSection;