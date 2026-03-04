import { Box } from '@mantine/core';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Recommendations } from './components/Recommendations';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <Box style={{ scrollBehavior: 'smooth' }}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Recommendations />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </Box>
  )
}

export default App
