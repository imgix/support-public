import Image from "next/image";
import { Container, Typography } from "@mui/material";


export default function Home() {
  return (
    <Container component="main" maxWidth="sm" sx={{ mt: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Welcome! This is a NextJS public repository for imgix demos. The content here supports the content on the <a href="//docs.imgix.com">imgix documentation</a> site.
      </Typography>
    </Container>
  );
}
