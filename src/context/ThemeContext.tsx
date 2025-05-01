'use client';

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type Theme = 'marketing' | 'coding';

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isChangingTheme: boolean;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('marketing'); // Default a marketing
  const [isChangingTheme, setIsChangingTheme] = useState(false);

  // Funzione per cambiare tema con animazione
  const changeTheme = (newTheme: Theme) => {
    if (theme !== newTheme) {
      setIsChangingTheme(true);
      
      // Delay per finire l'animazione
      setTimeout(() => {
        setTheme(newTheme);
        
        // Timeout per completare la transizione
        setTimeout(() => {
          setIsChangingTheme(false);
        }, 500); // Allineato con le transizioni CSS
      }, 50);
    }
  };

  // Effetto per aggiornare l'attributo data-theme sul body
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    
    // Aggiungi una classe temporanea per enfatizzare il cambio tema
    if (theme === 'marketing') {
      document.body.classList.add('theme-changing-to-marketing');
      setTimeout(() => document.body.classList.remove('theme-changing-to-marketing'), 500);
    } else {
      document.body.classList.add('theme-changing-to-coding');
      setTimeout(() => document.body.classList.remove('theme-changing-to-coding'), 500);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: changeTheme, isChangingTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 