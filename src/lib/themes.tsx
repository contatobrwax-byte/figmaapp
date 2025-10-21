import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Theme {
  name: string;
  colors: {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    accent: string;
    cyan: string;
    background: string;
    surface: string;
    surfaceLight: string;
    textPrimary: string;
    textSecondary: string;
  };
  gradients: {
    primary: [string, string];
    primaryLight: [string, string];
    accent: [string, string];
    cyan: [string, string];
    primaryAccent: [string, string];
    primaryCyan: [string, string];
  };
}

export const defaultTheme: Theme = {
  name: 'purple-dream',
  colors: {
    primary: '#b66dff',
    primaryLight: '#d8a7ff',
    primaryDark: '#8b3ddb',
    accent: '#6366f1',
    cyan: '#06b6d4',
    background: '#0f0f1e',
    surface: '#1a1a2e',
    surfaceLight: '#252540',
    textPrimary: '#ffffff',
    textSecondary: '#a0a0c0',
  },
  gradients: {
    primary: ['#b66dff', '#8b3ddb'],
    primaryLight: ['#d8a7ff', '#b66dff'],
    accent: ['#6366f1', '#4f46e5'],
    cyan: ['#06b6d4', '#0891b2'],
    primaryAccent: ['#b66dff', '#6366f1'],
    primaryCyan: ['#b66dff', '#06b6d4'],
  },
};

export const neonBlueTheme: Theme = {
  name: 'neon-blue',
  colors: {
    primary: '#00d4ff',
    primaryLight: '#5ee7ff',
    primaryDark: '#00a1cc',
    accent: '#0084ff',
    cyan: '#00fff0',
    background: '#0a0e1a',
    surface: '#141c2e',
    surfaceLight: '#1e2a42',
    textPrimary: '#ffffff',
    textSecondary: '#8fa4c7',
  },
  gradients: {
    primary: ['#00d4ff', '#00a1cc'],
    primaryLight: ['#5ee7ff', '#00d4ff'],
    accent: ['#0084ff', '#0057b3'],
    cyan: ['#00fff0', '#00ccc0'],
    primaryAccent: ['#00d4ff', '#0084ff'],
    primaryCyan: ['#00d4ff', '#00fff0'],
  },
};

export const emeraldGreenTheme: Theme = {
  name: 'emerald-green',
  colors: {
    primary: '#10b981',
    primaryLight: '#34d399',
    primaryDark: '#059669',
    accent: '#3b82f6',
    cyan: '#06b6d4',
    background: '#0a1f14',
    surface: '#142e1f',
    surfaceLight: '#1e422d',
    textPrimary: '#ffffff',
    textSecondary: '#9fc7af',
  },
  gradients: {
    primary: ['#10b981', '#059669'],
    primaryLight: ['#34d399', '#10b981'],
    accent: ['#3b82f6', '#2563eb'],
    cyan: ['#06b6d4', '#0891b2'],
    primaryAccent: ['#10b981', '#3b82f6'],
    primaryCyan: ['#10b981', '#06b6d4'],
  },
};

export const themes = {
  default: defaultTheme,
  neonBlue: neonBlueTheme,
  emeraldGreen: emeraldGreenTheme,
};

interface ThemeContextType {
  theme: Theme;
  changeTheme: (themeName: keyof typeof themes) => void;
  currentThemeName: keyof typeof themes;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: keyof typeof themes;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialTheme = 'default'
}) => {
  const [currentThemeName, setCurrentThemeName] = useState<keyof typeof themes>(initialTheme);
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[initialTheme]);

  const changeTheme = (themeName: keyof typeof themes) => {
    if (themes[themeName]) {
      setCurrentThemeName(themeName);
      setCurrentTheme(themes[themeName]);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, changeTheme, currentThemeName }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const hexToRgba = (hex: string, alpha: number = 1): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
