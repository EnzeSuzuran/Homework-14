import { createContext, Dispatch, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stack from './components/Stack'
import ImageList from './components/Collage';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './styles/globals.css';

export const ThemeContext = createContext< {theme: string, setTheme: Dispatch<React.SetStateAction<string>>} | null>(null);

function App() {
  const [theme, setTheme] = useState("dark");
  console.log(ThemeContext);
  return (
    <ThemeContext.Provider value={{theme , setTheme}}>
    <div className={`container ${theme}`}>
      <Header />
      <main className="main">
        <Hero />
        <Stack/>
        <ImageList />
        <Projects />
        <Stack/>
        <Footer/>
      </main>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;