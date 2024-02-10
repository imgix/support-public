'use client'

import { useEffect, useState } from "react";
import { Container, Typography, Box, Paper } from '@mui/material';

export default function Home() {
  const [dpr, setDpr] = useState(0);

  useEffect(() =>{
    setDpr(window.devicePixelRatio);
  }, [dpr])

  return (
    <Container maxWidth="sm">
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Paper elevation={3} sx={{ padding: '20px', borderRadius: '8px' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Your Device Pixel Ratio
        </Typography>
        <Typography variant="h5" component="div" align="center" sx={{ color: '#007bff' }}>
          {dpr}
        </Typography>
      </Paper>
    </Box>
  </Container>
  );
}
