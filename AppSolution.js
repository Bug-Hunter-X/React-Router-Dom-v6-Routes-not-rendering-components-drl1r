import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 

//Home.js

function Home(){
    const location = useLocation();
    return(
        <div>Home {location.pathname}</div>
    );
}

//About.js

function About(){
    const location = useLocation();
    return(
        <div>About {location.pathname}</div>
    );
}

//Contact.js

function Contact(){
    const location = useLocation();
    return(
        <div>Contact {location.pathname}</div>
    );
}