import React from 'react';
import { Box, Typography } from '@mui/material';
import { commonStyles } from '../../theme/theme';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, description }) => {
  return (
    <Box sx={commonStyles.pageHeader}>
      <Typography 
        variant="h1" 
        component="h1" 
        align="center" 
        gutterBottom
        sx={commonStyles.sectionTitle}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography 
          variant="h4" 
          component="h2" 
          align="center" 
          gutterBottom
          sx={{ mb: 3 }}
        >
          {subtitle}
        </Typography>
      )}
      {description && (
        <Typography 
          variant="body1" 
          align="center"
          sx={{ 
            maxWidth: '800px', 
            margin: '0 auto',
            color: 'text.secondary'
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
};

export default PageHeader;
