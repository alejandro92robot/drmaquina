import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Box,
  Button,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu
} from '@mui/material';
import { 
  Menu as MenuIcon,
  Close as CloseIcon,
  Engineering
} from '@mui/icons-material';
import { useState } from 'react';

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesAnchor, setServicesAnchor] = useState(null);

  const navigationItems = [
    { label: 'Servicios', hasDropdown: true },
    { label: 'Proyectos', hasDropdown: false },
    { label: 'Contacto', hasDropdown: false },
  ];

  const serviceItems = [
    'Reparación de PCBs',
    'Embobinado de Motores',
    'Soldaduras Especiales',
    'Diseño y Fabricación',
    'Implementación de Lógica',
    'Trabajo en Terreno'
  ];

  const handleServicesClick = (event) => {
    setServicesAnchor(event.currentTarget);
  };

  const handleServicesClose = () => {
    setServicesAnchor(null);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Componente de botón de navegación para desktop
  const DesktopNavButton = ({ item }) => (
    <Button
      color="inherit"
      onClick={item.hasDropdown ? handleServicesClick : undefined}
      sx={{
        mx: 1,
        px: 3,
        py: 1,
        fontWeight: 600,
        fontSize: '0.9rem',
        textTransform: 'none',
        borderRadius: 2,
        position: 'relative',
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          transform: 'translateY(-1px)',
          '&::after': {
            width: '100%',
          }
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '0%',
          height: '2px',
          backgroundColor: theme.palette.primary.main,
          transition: 'width 0.3s ease',
        }
      }}
    >
      {item.label}
    </Button>
  );

  // Componente de botón de navegación para mobile
  const MobileNavItem = ({ item, onClick }) => (
    <ListItem 
      button 
      onClick={onClick}
      sx={{
        py: 2,
        borderBottom: '1px solid',
        borderColor: 'divider',
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: 'rgba(242, 107, 0, 0.1)',
          paddingLeft: 3,
        }
      }}
    >
      <ListItemText 
        primary={item.label}
        primaryTypographyProps={{
          fontWeight: 600,
          fontSize: '1.1rem',
          color: 'text.primary'
        }}
      />
    </ListItem>
  );

  return (
    <>
      <AppBar 
        position="static" 
        elevation={1}
        sx={{ 
          bgcolor: 'secondary.main',
          background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
          borderBottom: `2px solid ${theme.palette.primary.main}`,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ py: 1 }}>
            {/* Logo y nombre */}
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <Engineering 
                sx={{ 
                  fontSize: 32, 
                  color: 'primary.main',
                  mr: 2
                }} 
              />
              <Box>
                <Typography 
                  variant="h6" 
                  component="div" 
                  sx={{ 
                    fontWeight: 700,
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    lineHeight: 1.2
                  }}
                >
                  Doctor Máquina
                </Typography>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    opacity: 0.9,
                    fontSize: '0.75rem',
                    letterSpacing: '0.5px'
                  }}
                >
                  Soluciones Industriales
                </Typography>
              </Box>
            </Box>

            {/* Navegación Desktop */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {navigationItems.map((item, index) => (
                  <DesktopNavButton key={index} item={item} />
                ))}
                
                {/* Botón CTA especial */}
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    ml: 2,
                    px: 3,
                    py: 1,
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    textTransform: 'none',
                    borderRadius: 2,
                    boxShadow: `0 4px 12px ${theme.palette.primary.main}40`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: `0 6px 16px ${theme.palette.primary.main}60`,
                    }
                  }}
                >
                  Cotizar Ahora
                </Button>
              </Box>
            )}

            {/* Menú Mobile */}
            {isMobile && (
              <IconButton
                color="inherit"
                onClick={handleMobileMenuToggle}
                sx={{
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Menú desplegable de Servicios */}
      <Menu
        anchorEl={servicesAnchor}
        open={Boolean(servicesAnchor)}
        onClose={handleServicesClose}
        PaperProps={{
          sx: {
            mt: 1.5,
            borderRadius: 2,
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            minWidth: 280,
            '& .MuiList-root': {
              py: 1,
            }
          }
        }}
      >
        {serviceItems.map((service, index) => (
          <ListItem 
            button 
            key={index}
            onClick={handleServicesClose}
            sx={{
              px: 3,
              py: 1.5,
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: 'rgba(242, 107, 0, 0.08)',
                paddingLeft: 4,
              }
            }}
          >
            <ListItemText 
              primary={service}
              primaryTypographyProps={{
                fontWeight: 500,
                fontSize: '0.9rem',
                color: 'text.primary'
              }}
            />
          </ListItem>
        ))}
      </Menu>

      {/* Drawer Mobile */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleMobileMenuToggle}
        PaperProps={{
          sx: {
            width: 280,
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
          }
        }}
      >
        <Box sx={{ p: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
              Menú
            </Typography>
            <IconButton onClick={handleMobileMenuToggle}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>

        <List sx={{ py: 2 }}>
          {navigationItems.map((item, index) => (
            <MobileNavItem 
              key={index} 
              item={item} 
              onClick={handleMobileMenuToggle}
            />
          ))}
          
          {/* Botón CTA Mobile */}
          <Box sx={{ p: 2, mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                py: 1.5,
                fontWeight: 700,
                fontSize: '1rem',
                textTransform: 'none',
                borderRadius: 2,
                boxShadow: `0 4px 12px ${theme.palette.primary.main}40`,
              }}
            >
              Solicitar Cotización
            </Button>
          </Box>
        </List>
      </Drawer>
    </>
  );
}

export default Header;