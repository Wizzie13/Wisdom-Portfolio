// App.tsx

import { Navbar } from './components/Navbar.tsx';

import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './pages/homePage.tsx';
import About from './pages/aboutPage.tsx';
import Contact from './pages/contactPage.tsx';
import Projects from './pages/projectsPage.tsx';


import './App.css';

function App() {

  return (
    
    <MantineProvider>
      <BrowserRouter>
<Navbar/>
      <Routes>
        
        <Route path="/homePage" element={<Home />} />
        <Route path="/aboutPage" element={<About />} />
        <Route path="/contactPage" element={<Contact />} />
        <Route path="/projectsPage" element={<Projects />} />
      </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
