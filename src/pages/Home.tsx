import React from 'react';
import { Typography, Card, CardContent, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import {
  Nature,
  MenuBook,
  LocalFlorist,
  EmojiNature,
  Science,
  AutoStories,
  Person
} from '@mui/icons-material';
import { commonStyles } from '../theme/theme';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const facts = [
    {
      text: "Colombia es el segundo país más rico en plantas con flores en el mundo, con cerca de 26.500 especies, lo que representa el 12% de la riqueza vegetal global",
      image: "/1.jpg"
    },
    {
      text: "Los helechos no producen flores ni semillas, pero han colonizado casi todo el planeta, con más de 12.000 especies descritas hasta hoy",
      image: "/2.jpg"
    },
    {
      text: "Los musgos (Sphagnum) pueden retener hasta 20 veces su peso en agua, por eso son fundamentales en la regulación hídrica de los ecosistemas",
      image: "/3.jpg"
    },
    {
      text: "En el Carbonífero (hace 300 millones de años), los bosques de helechos gigantes dieron origen a gran parte del carbón mineral que hoy usamos como recurso energético",
      image: "/4.jpg"
    },
    {
      text: "Algunas hepáticas se usan en la medicina tradicional como antiinflamatorios y cicatrizantes, gracias a compuestos bioactivos presentes en sus tejidos",
      image: "/5.jpg"
    }
  ];

  const bibliography = [
    {
      citation: "Raven, P. H., Evert, R. F., & Eichhorn, S. E. (2005). Biología de las plantas (7.ª ed.). McGraw-Hill.",
      description: "Manual fundamental sobre biología vegetal",
      icon: <MenuBook />
    },
    {
      citation: "Bold, H. C., Alexopoulos, C. J., & Delevoryas, T. (1980). Morphology of plants and fungi (5th ed.). Harper & Row.",
      description: "Obra clásica sobre morfología vegetal",
      icon: <Science />
    },
    {
      citation: "Goffinet, B., & Shaw, A. J. (2009). Bryophyte Biology (2nd ed.). Cambridge University Press.",
      description: "Referencia especializada en briofitas",
      icon: <Nature />
    },
    {
      citation: "Ranker, T. A., & Haufler, C. H. (Eds.). (2008). Biology and evolution of ferns and lycophytes. Cambridge University Press.",
      description: "Estudio detallado sobre pteridofitas",
      icon: <LocalFlorist />
    },
    {
      citation: "Rodríguez, A. R. (2025). Anatomía y evolución vegetal. Universidad de La Salle.",
      description: "Investigación actualizada sobre evolución vegetal",
      icon: <AutoStories />
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    arrows: true,
    cssEase: "linear",
    fade: true
  };

  return (
    <Box sx={{ 
      ...commonStyles.pageContainer,
      ...commonStyles.pageBackground,
      backgroundImage: `url(/fondohome.jpg)`
    }}>
      <Card sx={{ mb: 6, backgroundColor: 'rgba(46, 125, 50, 0.05)' }}>
        <CardContent>
          <Typography variant="h3" component="h1" align="center" gutterBottom>
            ANATOMÍA VEGETAL Y EVOLUCIÓN
          </Typography>
          <Typography variant="h5" component="h2" align="center" gutterBottom>
            Briofitas y Pteridofitas
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Un viaje al fascinante mundo de los musgos, hepáticas y helechos
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            mt: 3,
            pt: 2,
            borderTop: '1px solid rgba(46, 125, 50, 0.2)'
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Person sx={{ color: 'primary.main', mr: 1 }} />
              <Typography variant="h6" component="p">
                Ana Luisa Suarez García
              </Typography>
            </Box>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              Licenciatura en Ciencias Naturales
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Universidad de La Salle
            </Typography>
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ mb: 6, backgroundColor: 'rgba(46, 125, 50, 0.05)' }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <EmojiNature sx={{ color: 'primary.main', mr: 2, fontSize: 32 }} />
            <Typography variant="h5" component="h3" gutterBottom>
              Descubre la Historia de la Vida Vegetal
            </Typography>
          </Box>
          <Typography variant="body1" paragraph align="center">
            Explora el fascinante papel de estas plantas en la biodiversidad y la historia de la vida en la Tierra.
            Desde los diminutos musgos hasta los majestuosos helechos, estas plantas han sido testigos
            y protagonistas de la evolución vegetal.
          </Typography>
        </CardContent>
      </Card>

      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, 
        gap: 4,
        mb: 6
      }}>
        <Card
          component={RouterLink}
          to="/briofitas"
          sx={{ 
            textDecoration: 'none',
            height: '100%',
            transition: '0.3s',
            backgroundColor: 'rgba(129, 199, 132, 0.05)',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: 3
            }
          }}
        >
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Nature sx={{ color: 'primary.main', mr: 2, fontSize: 32 }} />
              <Typography variant="h5" component="h2" gutterBottom>
                Briofitas
              </Typography>
            </Box>
            <Typography variant="body1" paragraph>
              Plantas terrestres, no vasculares, que incluyen a los musgos, hepáticas y antocerotes.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Descubre cómo estas pequeñas plantas pioneras colonizaron la tierra firme y su importancia
              en los ecosistemas actuales.
            </Typography>
          </CardContent>
        </Card>

        <Card
          component={RouterLink}
          to="/pteridofitas"
          sx={{ 
            textDecoration: 'none',
            height: '100%',
            transition: '0.3s',
            backgroundColor: 'rgba(129, 199, 132, 0.05)',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: 3
            }
          }}
        >
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocalFlorist sx={{ color: 'primary.main', mr: 2, fontSize: 32 }} />
              <Typography variant="h5" component="h2" gutterBottom>
                Pteridofitas
              </Typography>
            </Box>
            <Typography variant="body1" paragraph>
              Plantas vasculares sin semillas que se reproducen por esporas.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Explora el mundo de los helechos y sus aliados, desde su dominación en el Carbonífero
              hasta su diversidad actual.
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography 
          variant="h4" 
          component="h3" 
          align="center" 
          gutterBottom
          sx={{
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '3px',
              backgroundColor: 'primary.main',
              borderRadius: '2px',
            },
          }}
        >
          ¿Sabías que?
        </Typography>
        
        <Box sx={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          mt: 4,
          '& .slick-prev, & .slick-next': {
            width: '40px',
            height: '40px',
            zIndex: 1,
            '&:before': {
              fontSize: '40px'
            }
          },
          '& .slick-prev': {
            left: '10px'
          },
          '& .slick-next': {
            right: '10px'
          },
          '& .slick-dots': {
            bottom: '10px',
            '& li button:before': {
              color: 'white'
            },
            '& li.slick-active button:before': {
              color: 'white'
            }
          }
        }}>
          <Slider {...settings}>
            {facts.map((fact, index) => (
              <Box 
                key={index}
                sx={{ 
                  position: 'relative',
                  height: '400px',
                  backgroundColor: 'rgba(46, 125, 50, 0.05)',
                  '& img': {
                    width: '100%',
                    height: '400px',
                    objectFit: 'cover',
                    display: 'block'
                  }
                }}
              >
                <img
                  src={fact.image}
                  alt={`Imagen ilustrativa ${index + 1}`}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.8))',
                    padding: 3,
                  }}
                >
                  <Typography variant="body1" sx={{ 
                    color: 'white',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                    textAlign: 'center'
                  }}>
                    {fact.text}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>

      <Card sx={{ mt: 6, backgroundColor: 'rgba(129, 199, 132, 0.05)' }}>
        <CardContent>
          <Typography 
            variant="h5" 
            component="h3" 
            gutterBottom 
            align="center"
            sx={{
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-8px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '3px',
                backgroundColor: 'primary.main',
                borderRadius: '2px',
              },
              mb: 4
            }}
          >
            Bibliografía
          </Typography>
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 2,
            mt: 4
          }}>
            {bibliography.map((item, index) => (
              <Card key={index} variant="outlined" sx={{ backgroundColor: 'background.paper' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Box sx={{ color: 'primary.main', mr: 1, mt: 0.5 }}>
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography variant="body2" paragraph>
                        {item.citation}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Home;