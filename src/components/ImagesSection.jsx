import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box, useTheme, useMediaQuery } from '@mui/material';

export default function ImagesSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Box 
      sx={{ 
        width: { 
          xs: '100vw',      // 100% en móvil
          md: '80vw',       // 80% en tablet
          lg: '70vw'        // 60% en desktop
        },
        maxWidth: '100%',
        margin: '0 auto',
        marginBottom: '25px',
        px: { xs: 2, md: 0 } // Padding lateral en móvil
      }}
    >
      <ImageList 
        sx={{ 
          width: '100%',
          height: 'auto',
          margin: 0,
          overflow: 'hidden'
        }} 
        cols={isMobile ? 2 : isTablet ? 3 : 3}
        gap={isMobile ? 4 : 8}
        variant="masonry"
      >
        {itemData.map((item) => (
          <ImageListItem 
            key={item.img} 
            sx={{ 
              overflow: 'hidden', 
              borderRadius: 2,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)'
              }
            }}
          >
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: '/images/IMG-20230428-WA0025 (1).jpeg',
    title: 'Breakfast',
  },
  {
    img: '/images/Poleas Leva Regulable.jpeg',
    title: 'Burger',
  },
  {
    img: '/images/Pernos Banjo Especiales.jpeg',
    title: 'Camera',
  },
  {
    img: '/images/IMG-20230315-WA0024.jpg',
    title: 'Coffee',
  },
  {
    img: '/images/Carbones Nuevos.jpeg',
    title: 'Hats',
  },
  {
    img: 'images/Cabezal Bomba Turbo Mecanizado Technyl 2.jpeg',
    title: 'Honey',
  },
  {
    img: 'images/Colector Reparado.jpeg',
    title: 'Basketball',
  },
  {
    img: 'images/Escudos Plomado Estandar.jpeg',
    title: 'Fern',
  },
  {
    img: '/images/Escudos Plomados con Camara PP.jpeg',
    title: 'Mushrooms',
  },
  {
    img: '/images/20220512_151428.jpg',
    title: 'Mushrooms',
  },
];


