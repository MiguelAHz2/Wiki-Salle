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

} from '@mui/icons-material';
import PageHeader from '../components/common/PageHeader';
import SectionCard from '../components/common/SectionCard';

const Pteridofitas = () => {
  const sections = [
    {
      title: "¿Qué son?",
      content: "Plantas vasculares sin semillas, con raíces, tallos y hojas verdaderas, que se reproducen por esporas.",
      icon: <Nature sx={{ color: 'primary.main', fontSize: 32 }} />
    },
    {
      title: "Morfología",
      content: "Tienen un cuerpo diferenciado en raíz, tallo y hojas (cormo), y son plantas vasculares con tejidos como el xilema y el floema para el transporte de agua y nutrientes. Su esporofito es la fase dominante, y producen esporas para su reproducción. Las hojas, llamadas frondas, pueden ser pequeñas (microfilos) o grandes (megafilicos) y se caracterizan por su desarrollo circinado y la disposición de los esporangios, a menudo agrupados en soros.",
      icon: <Science sx={{ color: 'primary.main', fontSize: 32 }} />
    }
  ];

  const examples = [
    {
      name: "Adiantum capillus-veneris (culantrillo de pozo)",
      description: "Es un arbusto perenne de tallo rizomatoso, distribuido en el hemisferio norte. Puede tener tallos estériles y fértiles. Los estériles arrancan a crecer después de que los fértiles hayan emergido, y tienden a ser más largos y arbustivos.",
      habitat: "Ambientes húmedos y sombreados, grietas de rocas con agua, cuevas, cascadas",
      ecosystem: "Bosques tropicales y subtropicales húmedos",
      importance: [
        "Planta ornamental muy popular",
        "Usada en medicina tradicional contra tos y afecciones respiratorias",
        "Ayuda en la regulación de humedad en microhábitats"
      ],
      conservation: "Localmente amenazada por extracción excesiva como ornamental y cambio en fuentes de agua"
    },
    {
      name: "Equisetum arvense (cola de caballo)",
      description: "Es un pequeño helecho vivaz que alcanza los 10-40 cm de altura. Tiene pecíolo recto y fronda finamente pinnada con peciolo negro. Es un excelente demulcente, con efecto antiinflamatorio, béquico, mucolítico y expectorante.",
      habitat: "Orillas de ríos, suelos húmedos, praderas templadas",
      ecosystem: "Zonas riparias y humedales",
      importance: [
        "Usada medicinalmente como diurético y remineralizante",
        "Ayuda a fijar suelos y controlar erosión",
        "Restos fósiles formaron parte de los bosques carboníferos"
      ],
      conservation: "No está en riesgo global, pero algunas poblaciones locales son vulnerables por drenaje de humedales y contaminación agrícola"
    }
  ];

  const habitats = [
    "Bosques húmedos y sombríos - El hábitat más común para la mayoría de las pteridofitas",
    "Grietas de rocas - Algunas especies se adaptan a estos lugares",
    "Ciénagas y pantanos - Áreas húmedas donde varias pteridofitas acuáticas prosperan",
    "Troncos de árboles - Crecimiento epífito sin ser parásitas",
    "Suelos arenosos o áridos - Algunas especies pueden adaptarse a ambientes con menos humedad",
    "Agua dulce - Algunas especies son acuáticas"
  ];

  const importance = {
    ecological: [
      {
        title: "Hábitat y alimento",
        description: "Proporcionan refugio y alimento para otros organismos",
        icon: <Park />
      },
      {
        title: "Control de erosión",
        description: "Sus sistemas radiculares ayudan a fijar el suelo",
        icon: <Terrain />
      },
      {
        title: "Ciclos de nutrientes",
        description: "Desempeñan un papel en los ciclos biogeoquímicos",
        icon: <Science />
      },
      {
        title: "Sucesión ecológica",
        description: "Influyen en la diversidad de especies",
        icon: <Nature />
      }
    ],
    human: [
      {
        title: "Ornamentales",
        description: "Valoradas como plantas de jardín e interior",
        icon: <LocalFlorist />
      },
      {
        title: "Medicinal",
        description: "Poseen propiedades medicinales diversas",
        icon: <Science />
      },
      {
        title: "Alimento y agricultura",
        description: "Ciertas especies son fuente de almidón y se usan como aglutinantes y fertilizantes",
        icon: <Park />
      },
      {
        title: "Usos industriales",
        description: "Los tallos se usan para pulir metales y sus restos fósiles formaron yacimientos de carbón",
        icon: <ImportantDevices />
      }
    ]
  };

  return (
    <Box 
      sx={{ 
        ...commonStyles.pageContainer,
        ...commonStyles.pageBackground,
        backgroundImage: `url(/fondopteridofitas.jpg)`
      }}>
      <PageHeader 
        title="Pteridofitas"
        subtitle="Helechos y plantas afines"
        description="Explora el fascinante mundo de las primeras plantas vasculares, que dominaron la Tierra hace millones de años"
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
        
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
          gap: 3,
          mt: 4
        }}>
          {habitats.map((habitat, index) => (
            <Card 
              key={index}
              sx={{
                height: '100%',
                backgroundColor: 'rgba(46, 125, 50, 0.05)',
                border: '1px solid rgba(46, 125, 50, 0.1)',
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <Terrain sx={{ color: 'primary.main', mr: 1, mt: 0.5 }} />
                  <Typography variant="body1">
                    {habitat}
                  </Typography>
                </Box>
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

        <Typography variant="h5" component="h3" gutterBottom>
          Funciones ecológicas clave
        </Typography>
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 4,
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
          {[
            {
              url: "/adiantum.jpg",
              title: "Adiantum capillus-veneris",
              description: "Detalle de las frondas del culantrillo de pozo"
            },
            {
              url: "/equisetum.jpg",
              title: "Equisetum arvense",
              description: "Cola de caballo mostrando sus tallos característicos"
            },
            {
              url: "/habitat-pteridofitas.jpg",
              title: "Hábitat natural",
              description: "Pteridofitas en su ambiente natural húmedo y sombreado"
            },
            {
              url: "/soros.jpg",
              title: "Soros",
              description: "Detalle de los soros en el envés de una fronda"
            }
          ].map((image, index) => (
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

export default Pteridofitas;