import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// // App.tsx
// import { BrowserRouter, Route, Routes} from 'react-router-dom';
// import Home from './pages/homePage.tsx';
// import About from './pages/aboutPage.tsx';
// import Contact from './pages/contactPage.tsx';
// import Projects from './pages/projectsPage.tsx';
// import Navbar from './components/Navbar.tsx';

// import '@mantine/core/styles.css';

// import './App.css';

// function App() {

//   return (
    
//       <BrowserRouter>
      

//       <Routes>
//       <Route path="/" element={<Navbar />}>
//       <Route path="/homePage" element={<Home />} />
//       <Route path="/aboutPage" element={<About />} />
//       <Route path="/contactPage" element={<Contact />} />
//       <Route path="/projectsPage" element={<Projects />} />
//     </Route>
//   </Routes>
// </BrowserRouter>
//   );
// }

// export default App;
