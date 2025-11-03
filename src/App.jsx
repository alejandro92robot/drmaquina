import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectsSection from './components/ProjectsSection';
import ImagesSection from './components/ImagesSection';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      {/* Secciones principales */}
      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <ImagesSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </ThemeProvider>
  );
}

export default App;