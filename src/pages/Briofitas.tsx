import React from 'react';
import { Typography, Card, CardContent, Box, Divider } from '@mui/material';
import { commonStyles } from '../theme/theme';
import {
  Nature,
  Science,
  Park,
  Home,
  LocalFlorist,
  ImportantDevices,
  Terrain,
  WaterDrop,
  Spa,
  BiotechOutlined,
  Agriculture,
  Grass
} from '@mui/icons-material';
import PageHeader from '../components/common/PageHeader';
import SectionCard from '../components/common/SectionCard';

const Briofitas = () => {
  const sections = [
    {
      title: "¿Qué son?",
      content: "Plantas no vasculares que dependen de ambientes húmedos y presentan rizoidios en lugar de raíces.",
      icon: <Nature sx={{ color: 'primary.main', fontSize: 32 }} />
    },
    {
      title: "Morfología",
      content: "Se caracteriza por ser plantas pequeñas, no vasculares y sin semillas, que se anclan al sustrato mediante rizoides. Su estructura principal es el gametofito, que es la generación dominante, de color verde y que produce los gametos. Del gametofito emerge el esporofito, que es la fase diploide, efímera y dependiente del gametofito para su nutrición. La estructura del gametofito puede ser taloide o frondosa, similar a un tallo con hojas verdaderas llamadas caulidios y filidios.",
      icon: <Science sx={{ color: 'primary.main', fontSize: 32 }} />
    }
  ];

  const examples = [
    {
      name: "Sphagnum (musgo de turbera)",
      description: "Es un género de musgo ampliamente usado en la jardinería, se trata de un tipo de musgo empleado en diversos cultivos como sustrato único o complemento en las mezclas de sustrato para mejorar la retención de agua.",
      habitat: "Turberas, suelos ácidos, zonas frías y húmedas",
      ecosystem: "Humedales y páramos (clave en la regulación hídrica)",
      importance: [
        "Regula el agua como una esponja natural (retiene hasta 20 veces su peso en agua)",
        "Base para la formación de turba (usada como combustible y en horticultura)",
        "Conserva carbono, ayudando a mitigar el cambio climático"
      ],
      conservation: "Vulnerable por drenaje de humedales, cambio climático y sobreexplotación de turba"
    },
    {
      name: "Marchantia polymorpha (hepática)",
      description: "A veces conocida como hepática común o hepática paraguas, es una hepática de gran tamaño con una amplia distribución mundial. Presenta una apariencia variable y cuenta con varias subespecies. Es dioica, con plantas masculinas y femeninas independientes.",
      habitat: "Ambientes húmedos y sombreados, grietas de rocas con agua, cuevas, cascadas",
      ecosystem: "Bosques tropicales y subtropicales húmedos",
      importance: [
        "Indicador ecológico de humedad y contaminación",
        "Usada en medicina tradicional como antiinflamatorio y cicatrizante",
        "Contribuye a la formación de suelo al retener partículas"
      ],
      conservation: "No está en riesgo global, pero es sensible a la contaminación atmosférica y la pérdida de hábitat"
    }
  ];

  const habitats = {
    common: [
      {
        title: "Bosques",
        description: "Suelos, troncos y ramas de árboles en áreas húmedas y sombreadas",
        icon: <Park />
      },
      {
        title: "Turberas",
        description: "Grandes extensiones de vegetación, donde musgos de Sphagnum son dominantes",
        icon: <WaterDrop />
      },
      {
        title: "Cursos de agua",
        description: "Cerca de arroyos y ríos",
        icon: <Spa />
      }
    ],
    extreme: [
      {
        title: "Desiertos y zonas árticas",
        description: "Pueden sobrevivir en estas condiciones adversas mediante mecanismos de letargo o adaptaciones específicas",
        icon: <Terrain />
      },
      {
        title: "Afloramientos rocosos y zonas costeras",
        description: "Ocasionalmente se encuentran en estos lugares",
        icon: <Nature />
      },
      {
        title: "Cerca de glaciares",
        description: "Algunas especies pueden colonizar sustratos inestables cerca de los márgenes de los glaciares",
        icon: <Nature />
      }
    ]
  };

  const importance = {
    ecological: [
      {
        title: "Regulación del ciclo del agua",
        description: "Absorben la humedad del aire y la lluvia, actuando como esponjas que liberan el agua lentamente"
      },
      {
        title: "Prevención de la erosión",
        description: "Su estructura fibrosa y capacidad de retención evitan la pérdida de tierra"
      },
      {
        title: "Formación y enriquecimiento del suelo",
        description: "Contribuyen a la creación de sustrato para otras plantas"
      },
      {
        title: "Albergue y alimento",
        description: "Proveen hogar y protección a numerosos invertebrados"
      },
      {
        title: "Ciclo de nutrientes",
        description: "Capturan y liberan nutrientes gradualmente al suelo"
      }
    ],
    human: [
      {
        title: "Medicina",
        description: "Propiedades antibacterianas, antifúngicas, antitumorales y antisépticas",
        icon: <BiotechOutlined />
      },
      {
        title: "Bioindicadores",
        description: "Indicadores de calidad del aire y agua",
        icon: <Science />
      },
      {
        title: "Agricultura y jardinería",
        description: "Material para semilleros y acondicionamiento del suelo",
        icon: <Agriculture />
      },
      {
        title: "Otros usos",
        description: "Embalaje, combustible (turba), materiales de construcción, ropa y mobiliario",
        icon: <ImportantDevices />
      }
    ]
  };

  const images = [
    {
      url: "/sphagnum.jpg",
      title: "Sphagnum (Musgo de turbera)",
      description: "Detalle de las hojas y estructura del musgo Sphagnum"
    },
    {
      url: "/marchantia.jpg",
      title: "Marchantia polymorpha",
      description: "Vista superior de una colonia de Marchantia mostrando los anteridióforos"
    },
    {
      url: "/polytrichum.jpg",
      title: "Polytrichum commune",
      description: "Musgo común mostrando sus esporofitos"
    },
    {
      url: "/habitat-briofitas.jpg",
      title: "Hábitat de briofitas",
      description: "Briofitas creciendo en un ambiente húmedo y sombreado"
    }
  ];

  return (
    <Box 
      sx={{ 
        ...commonStyles.pageContainer,
        ...commonStyles.pageBackground,
        backgroundImage: `url(/fondobriofitas.jpg)`
      }}>
      <PageHeader 
        title="Briofitas"
        subtitle="Musgos y Hepáticas"
        description="Explora el fascinante mundo de las plantas no vasculares"
      />

      <Box sx={{ mb: 6 }}>
        {sections.map((section, index) => (
          <SectionCard
            key={index}
            title={section.title}
            content={section.content}
            icon={section.icon}
          />
        ))}
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography 
          variant="h4" 
          component="h2" 
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
          Ejemplos Destacados
        </Typography>
        
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 4,
          mt: 6
        }}>
          {examples.map((example, index) => (
            <Card 
              key={index} 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'rgba(129, 199, 132, 0.05)',
                border: '1px solid rgba(129, 199, 132, 0.1)',
              }}
            >
              <CardContent sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocalFlorist sx={{ color: 'primary.main', mr: 1 }} />
                  <Typography variant="h5" component="h3">
                    {example.name}
                  </Typography>
                </Box>
                
                <Typography variant="body1" paragraph>
                  {example.description}
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Home sx={{ color: 'primary.main', mr: 1, fontSize: 20 }} />
                    <Typography variant="subtitle1" component="h4">
                      Hábitat
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ ml: 4 }}>
                    {example.habitat}
                  </Typography>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Park sx={{ color: 'primary.main', mr: 1, fontSize: 20 }} />
                    <Typography variant="subtitle1" component="h4">
                      Ecosistema
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ ml: 4 }}>
                    {example.ecosystem}
                  </Typography>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <ImportantDevices sx={{ color: 'primary.main', mr: 1, fontSize: 20 }} />
                    <Typography variant="subtitle1" component="h4">
                      Importancia
                    </Typography>
                  </Box>
                  <ul style={{ marginTop: 0, paddingLeft: '32px' }}>
                    {example.importance.map((point, i) => (
                      <li key={i}>
                        <Typography variant="body2">
                          {point}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </Box>

                <Divider sx={{ my: 2 }} />

                <Typography variant="subtitle2" color="primary" sx={{ fontWeight: 'bold' }}>
                  Estado de conservación:
                </Typography>
                <Typography variant="body2">
                  {example.conservation}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography 
          variant="h4" 
          component="h2" 
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
          Hábitats
        </Typography>

        <Typography variant="body1" sx={{ mt: 4, mb: 3 }}>
          Prosperan en ambientes húmedos y sombreados, aunque se encuentran en una amplia gama de hábitats, desde bosques y humedales hasta zonas árticas y desiertos. Pueden crecer en el suelo de los bosques, en turberas, sobre árboles (como briofitas epífitas) o cerca de cuerpos de agua.
        </Typography>

        <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 4 }}>
          Hábitats comunes
        </Typography>
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
          gap: 3,
          mb: 4
        }}>
          {habitats.common.map((habitat, index) => (
            <Card 
              key={index}
              sx={{
                height: '100%',
                backgroundColor: 'rgba(46, 125, 50, 0.05)',
                border: '1px solid rgba(46, 125, 50, 0.1)',
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ color: 'primary.main', mr: 1 }}>
                    {habitat.icon}
                  </Box>
                  <Typography variant="h6" component="h4">
                    {habitat.title}
                  </Typography>
                </Box>
                <Typography variant="body2">
                  {habitat.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 4 }}>
          Hábitats diversos y extremos
        </Typography>
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
          gap: 3
        }}>
          {habitats.extreme.map((habitat, index) => (
            <Card 
              key={index}
              sx={{
                height: '100%',
                backgroundColor: 'rgba(46, 125, 50, 0.05)',
                border: '1px solid rgba(46, 125, 50, 0.1)',
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ color: 'primary.main', mr: 1 }}>
                    {habitat.icon}
                  </Box>
                  <Typography variant="h6" component="h4">
                    {habitat.title}
                  </Typography>
                </Box>
                <Typography variant="body2">
                  {habitat.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography 
          variant="h4" 
          component="h2" 
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
          Importancia
        </Typography>

        <Typography variant="body1" sx={{ mt: 4, mb: 4 }}>
          Son importantes porque protegen y mejoran los suelos, absorbiendo y reteniendo agua para prevenir inundaciones y erosión, y liberando nutrientes esenciales para otras plantas. Además, actúan como hábitat y refugio para muchos invertebrados, contribuyen a la fijación de carbono y nitrógeno en el ecosistema, y tienen usos medicinales, agrícolas y como bioindicadores de contaminación ambiental.
        </Typography>

        <Typography variant="h5" component="h3" gutterBottom>
          Funciones ecológicas clave
        </Typography>
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 3,
          mb: 4
        }}>
          {importance.ecological.map((item, index) => (
            <Card 
              key={index}
              sx={{
                height: '100%',
                backgroundColor: 'rgba(46, 125, 50, 0.05)',
                border: '1px solid rgba(46, 125, 50, 0.1)',
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Grass sx={{ color: 'primary.main', mr: 1 }} />
                  <Typography variant="h6" component="h4">
                    {item.title}
                  </Typography>
                </Box>
                <Typography variant="body2">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 4 }}>
          Usos humanos y aplicaciones
        </Typography>
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: 3
        }}>
          {importance.human.map((item, index) => (
            <Card 
              key={index}
              sx={{
                height: '100%',
                backgroundColor: 'rgba(46, 125, 50, 0.05)',
                border: '1px solid rgba(46, 125, 50, 0.1)',
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ color: 'primary.main', mr: 1 }}>
                    {item.icon}
                  </Box>
                  <Typography variant="h6" component="h4">
                    {item.title}
                  </Typography>
                </Box>
                <Typography variant="body2">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography 
          variant="h4" 
          component="h2" 
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
          Galería
        </Typography>
        
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: 3,
          mt: 4
        }}>
          {images.map((image, index) => (
            <Card 
              key={index}
              sx={{
                height: '100%',
                backgroundColor: 'rgba(46, 125, 50, 0.05)',
                border: '1px solid rgba(46, 125, 50, 0.1)',
              }}
            >
              <Box
                component="img"
                src={image.url}
                alt={image.title}
                sx={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                }}
              />
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  {image.title}
                </Typography>
                <Typography variant="body2">
                  {image.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Briofitas;