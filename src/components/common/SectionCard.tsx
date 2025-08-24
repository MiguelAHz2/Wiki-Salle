import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { commonStyles } from '../../theme/theme';

interface SectionCardProps {
  title: string;
  content: string | React.ReactNode;
  variant?: 'info' | 'example' | 'habitat';
  icon?: React.ReactNode;
}

const SectionCard: React.FC<SectionCardProps> = ({ 
  title, 
  content, 
  variant = 'info',
  icon 
}) => {
  const getCardStyle = () => {
    switch (variant) {
      case 'example':
        return commonStyles.exampleCard;
      case 'habitat':
        return commonStyles.habitatCard;
      default:
        return commonStyles.infoCard;
    }
  };

  return (
    <Card sx={{ ...getCardStyle(), mb: 4 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          {icon && (
            <Box sx={{ mr: 2 }}>
              {icon}
            </Box>
          )}
          <Typography variant="h5" component="h2" gutterBottom>
            {title}
          </Typography>
        </Box>
        {typeof content === 'string' ? (
          <Typography variant="body1">
            {content}
          </Typography>
        ) : (
          content
        )}
      </CardContent>
    </Card>
  );
};

export default SectionCard;
