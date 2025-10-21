// ========================================
// SISTEMA DE TEMAS
// Variações de cores e temas customizáveis
// ========================================

// ============ TEMA PADRÃO (ROXO) ============
export const defaultTheme = {
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

// ============ TEMA ALTERNATIVO 1: NEON BLUE ============
export const neonBlueTheme = {
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

// ============ TEMA ALTERNATIVO 2: SUNSET ORANGE ============
export const sunsetOrangeTheme = {
  name: 'sunset-orange',
  colors: {
    primary: '#ff6b35',
    primaryLight: '#ff9968',
    primaryDark: '#e6551f',
    accent: '#ff4081',
    cyan: '#ff8c42',
    background: '#1a0f0e',
    surface: '#2e1a18',
    surfaceLight: '#422824',
    textPrimary: '#ffffff',
    textSecondary: '#c7a89f',
  },
  gradients: {
    primary: ['#ff6b35', '#e6551f'],
    primaryLight: ['#ff9968', '#ff6b35'],
    accent: ['#ff4081', '#e63671'],
    cyan: ['#ff8c42', '#e6792b'],
    primaryAccent: ['#ff6b35', '#ff4081'],
    primaryCyan: ['#ff6b35', '#ff8c42'],
  },
};

// ============ TEMA ALTERNATIVO 3: EMERALD GREEN ============
export const emeraldGreenTheme = {
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

// ============ TEMA ALTERNATIVO 4: PINK PASSION ============
export const pinkPassionTheme = {
  name: 'pink-passion',
  colors: {
    primary: '#ec4899',
    primaryLight: '#f472b6',
    primaryDark: '#db2777',
    accent: '#a855f7',
    cyan: '#f97316',
    background: '#1f0a1a',
    surface: '#2e1428',
    surfaceLight: '#421e36',
    textPrimary: '#ffffff',
    textSecondary: '#c79faf',
  },
  gradients: {
    primary: ['#ec4899', '#db2777'],
    primaryLight: ['#f472b6', '#ec4899'],
    accent: ['#a855f7', '#9333ea'],
    cyan: ['#f97316', '#ea580c'],
    primaryAccent: ['#ec4899', '#a855f7'],
    primaryCyan: ['#ec4899', '#f97316'],
  },
};

// ============ TEMA ALTERNATIVO 5: GOLD LUXURY ============
export const goldLuxuryTheme = {
  name: 'gold-luxury',
  colors: {
    primary: '#fbbf24',
    primaryLight: '#fcd34d',
    primaryDark: '#f59e0b',
    accent: '#fb923c',
    cyan: '#facc15',
    background: '#1a1410',
    surface: '#2e2418',
    surfaceLight: '#423624',
    textPrimary: '#ffffff',
    textSecondary: '#c7b89f',
  },
  gradients: {
    primary: ['#fbbf24', '#f59e0b'],
    primaryLight: ['#fcd34d', '#fbbf24'],
    accent: ['#fb923c', '#f97316'],
    cyan: ['#facc15', '#eab308'],
    primaryAccent: ['#fbbf24', '#fb923c'],
    primaryCyan: ['#fbbf24', '#facc15'],
  },
};

// ============ COLEÇÃO DE TODOS OS TEMAS ============
export const themes = {
  default: defaultTheme,
  neonBlue: neonBlueTheme,
  sunsetOrange: sunsetOrangeTheme,
  emeraldGreen: emeraldGreenTheme,
  pinkPassion: pinkPassionTheme,
  goldLuxury: goldLuxuryTheme,
};

// ============ PROVIDER DE TEMA ============
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children, initialTheme = 'default' }) => {
  const [currentTheme, setCurrentTheme] = useState(themes[initialTheme]);

  const changeTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themes[themeName]);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// ============ EXEMPLO DE USO ============

/*
// 1. Wrap your app with ThemeProvider
import { ThemeProvider } from './themes';

function App() {
  return (
    <ThemeProvider initialTheme="default">
      <YourApp />
    </ThemeProvider>
  );
}

// 2. Use the theme in your components
import { useTheme } from './themes';

function MyComponent() {
  const { theme, changeTheme } = useTheme();
  
  return (
    <View style={{ backgroundColor: theme.colors.background }}>
      <Text style={{ color: theme.colors.textPrimary }}>
        Hello World
      </Text>
      
      <LinearGradient
        colors={theme.gradients.primary}
        style={styles.button}
      >
        <Text>Button</Text>
      </LinearGradient>
      
      {/* Change theme */}
      <Button 
        title="Change to Neon Blue"
        onPress={() => changeTheme('neonBlue')}
      />
    </View>
  );
}
*/

// ============ GERADOR DE TEMAS CUSTOMIZADOS ============

/**
 * Gera um tema customizado baseado em uma cor primária
 * @param {string} primaryColor - Cor primária em formato hexadecimal
 * @param {string} name - Nome do tema
 * @returns {object} Objeto de tema completo
 */
export const generateCustomTheme = (primaryColor, name = 'custom') => {
  // Função auxiliar para ajustar brilho
  const adjustBrightness = (color, percent) => {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = ((num >> 8) & 0x00ff) + amt;
    const B = (num & 0x0000ff) + amt;
    
    return (
      '#' +
      (
        0x1000000 +
        (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
        (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
        (B < 255 ? (B < 1 ? 0 : B) : 255)
      )
        .toString(16)
        .slice(1)
    );
  };

  // Gera cores derivadas
  const primaryLight = adjustBrightness(primaryColor, 20);
  const primaryDark = adjustBrightness(primaryColor, -20);

  return {
    name,
    colors: {
      primary: primaryColor,
      primaryLight,
      primaryDark,
      accent: adjustBrightness(primaryColor, -10),
      cyan: adjustBrightness(primaryColor, 10),
      background: '#0f0f1e',
      surface: '#1a1a2e',
      surfaceLight: '#252540',
      textPrimary: '#ffffff',
      textSecondary: '#a0a0c0',
    },
    gradients: {
      primary: [primaryColor, primaryDark],
      primaryLight: [primaryLight, primaryColor],
      accent: [adjustBrightness(primaryColor, -10), adjustBrightness(primaryColor, -20)],
      cyan: [adjustBrightness(primaryColor, 10), primaryColor],
      primaryAccent: [primaryColor, adjustBrightness(primaryColor, -10)],
      primaryCyan: [primaryColor, adjustBrightness(primaryColor, 10)],
    },
  };
};

// ============ HOOK PARA TEMA PERSISTENTE ============
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const usePersistedTheme = () => {
  const [themeName, setThemeName] = useState('default');

  useEffect(() => {
    loadTheme();
  }, []);

  const loadTheme = async () => {
    try {
      const saved = await AsyncStorage.getItem('@theme');
      if (saved) {
        setThemeName(saved);
      }
    } catch (error) {
      console.error('Error loading theme:', error);
    }
  };

  const saveTheme = async (name) => {
    try {
      await AsyncStorage.setItem('@theme', name);
      setThemeName(name);
    } catch (error) {
      console.error('Error saving theme:', error);
    }
  };

  return {
    themeName,
    theme: themes[themeName],
    changeTheme: saveTheme,
  };
};

// ============ COMPONENTE THEME PICKER ============
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const ThemePicker = ({ currentTheme, onThemeChange }) => {
  const themeList = Object.keys(themes);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha um Tema</Text>
      
      <View style={styles.grid}>
        {themeList.map((themeName) => {
          const theme = themes[themeName];
          const isActive = currentTheme === themeName;
          
          return (
            <TouchableOpacity
              key={themeName}
              onPress={() => onThemeChange(themeName)}
              style={styles.themeItem}
            >
              <LinearGradient
                colors={theme.gradients.primary}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[
                  styles.themePreview,
                  isActive && styles.themePreviewActive,
                ]}
              >
                {isActive && (
                  <View style={styles.checkmark}>
                    <Text style={styles.checkmarkIcon}>✓</Text>
                  </View>
                )}
              </LinearGradient>
              
              <Text style={styles.themeName}>
                {theme.name.split('-').map(word => 
                  word.charAt(0).toUpperCase() + word.slice(1)
                ).join(' ')}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  themeItem: {
    width: '30%',
    alignItems: 'center',
  },
  themePreview: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 16,
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  themePreviewActive: {
    borderWidth: 3,
    borderColor: '#ffffff',
  },
  checkmark: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmarkIcon: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
  },
  themeName: {
    fontSize: 12,
    color: '#a0a0c0',
    textAlign: 'center',
  },
});

// ============ UTILITÁRIOS DE COR ============

/**
 * Converte HEX para RGBA
 * @param {string} hex - Cor em formato hexadecimal
 * @param {number} alpha - Valor de transparência (0-1)
 * @returns {string} Cor em formato RGBA
 */
export const hexToRgba = (hex, alpha = 1) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

/**
 * Verifica se uma cor é clara ou escura
 * @param {string} color - Cor em formato hexadecimal
 * @returns {boolean} true se a cor for clara
 */
export const isLightColor = (color) => {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 155;
};

/**
 * Obtém a cor de texto adequada (branca ou preta) baseada no fundo
 * @param {string} backgroundColor - Cor de fundo em formato hexadecimal
 * @returns {string} '#ffffff' ou '#000000'
 */
export const getContrastingTextColor = (backgroundColor) => {
  return isLightColor(backgroundColor) ? '#000000' : '#ffffff';
};

// ============ EXPORTAÇÕES ============
export default {
  themes,
  defaultTheme,
  neonBlueTheme,
  sunsetOrangeTheme,
  emeraldGreenTheme,
  pinkPassionTheme,
  goldLuxuryTheme,
  ThemeProvider,
  useTheme,
  usePersistedTheme,
  generateCustomTheme,
  ThemePicker,
  hexToRgba,
  isLightColor,
  getContrastingTextColor,
};
