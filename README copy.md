# 🎨 Design System - Minimalista & Futurista

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

Design system moderno e minimalista baseado na cor primária **#b66dff** com foco em gradientes, glassmorphism e animações suaves.

---

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Características](#características)
- [Instalação](#instalação)
- [Estrutura de Arquivos](#estrutura-de-arquivos)
- [Guia de Uso](#guia-de-uso)
- [Componentes](#componentes)
- [Animações](#animações)
- [Paleta de Cores](#paleta-de-cores)
- [Exemplos](#exemplos)
- [Boas Práticas](#boas-práticas)
- [FAQ](#faq)

---

## 🎯 Visão Geral

Este design system foi criado para proporcionar uma experiência visual moderna, limpa e futurista. Ele combina elementos de glassmorphism, gradientes suaves e micro-interações para criar interfaces que são tanto bonitas quanto funcionais.

### Princípios de Design

1. **Minimalismo** - Menos é mais. Cada elemento tem um propósito.
2. **Profundidade** - Uso de gradientes e sombras para criar hierarquia visual.
3. **Fluidez** - Animações suaves e transições naturais.
4. **Consistência** - Sistema unificado de cores, espaçamentos e tipografia.
5. **Acessibilidade** - Contraste adequado e tamanhos de fonte legíveis.

---

## ✨ Características

- 🎨 **Paleta de Cores Moderna** - Baseada em roxo vibrante (#b66dff) com acentos complementares
- 🌈 **Gradientes em 135deg** - Direção consistente para todos os gradientes
- 🔮 **Glassmorphism** - Efeitos de vidro fosco com backdrop-filter
- 💫 **Animações Suaves** - Transições de 0.3s e animações em 60fps
- 📱 **Mobile First** - Design responsivo otimizado para mobile
- 🎭 **Dark Mode Nativo** - Esquema de cores escuro elegante
- ♿ **Acessível** - Seguindo diretrizes WCAG 2.1
- 🚀 **Performance** - Otimizado com useNativeDriver: true

---

## 📦 Instalação

### React Native / Expo

```bash
# Instalar dependências necessárias
npm install react-native-linear-gradient
# ou para Expo
expo install expo-linear-gradient

# Instalar animações (opcional, mas recomendado)
npm install react-native-reanimated
```

### Web (React)

```bash
# Basta copiar o arquivo CSS
# Nenhuma dependência externa necessária
```

---

## 📁 Estrutura de Arquivos

```
design-system/
├── constants/
│   └── colors.js              # Paleta de cores
├── components/
│   ├── GlassCard.jsx          # Card com efeito glassmorphism
│   ├── StatCard.jsx           # Card de estatísticas
│   ├── ListItem.jsx           # Item de lista
│   ├── PrimaryButton.jsx      # Botão principal
│   ├── InputField.jsx         # Campo de input
│   └── BottomNav.jsx          # Navegação inferior
├── animations/
│   └── animations.js          # Hooks e componentes animados
├── styles/
│   └── design-system.css      # CSS para web
└── docs/
    ├── IMPLEMENTATION_GUIDE.md # Guia completo
    └── app-redesign.html       # Protótipo visual
```

---

## 🎨 Paleta de Cores

### Cores Primárias

```javascript
const colors = {
  primary: '#b66dff',        // Roxo vibrante principal
  primaryLight: '#d8a7ff',   // Variação clara
  primaryDark: '#8b3ddb',    // Variação escura
};
```

### Cores de Acento

```javascript
const accent = {
  accent: '#6366f1',         // Índigo
  cyan: '#06b6d4',           // Cyan/Turquesa
};
```

### Backgrounds & Superfícies

```javascript
const backgrounds = {
  background: '#0f0f1e',     // Fundo principal
  surface: '#1a1a2e',        // Superfície secundária
  surfaceLight: '#252540',   // Superfície clara
};
```

### Texto

```javascript
const text = {
  textPrimary: '#ffffff',    // Texto principal
  textSecondary: '#a0a0c0',  // Texto secundário
};
```

### Gradientes Pré-definidos

```javascript
const gradients = {
  primary: ['#b66dff', '#8b3ddb'],
  primaryLight: ['#d8a7ff', '#b66dff'],
  accent: ['#6366f1', '#4f46e5'],
  cyan: ['#06b6d4', '#0891b2'],
  primaryAccent: ['#b66dff', '#6366f1'],
  primaryCyan: ['#b66dff', '#06b6d4'],
};
```

---

## 🧩 Componentes

### 1. GlassCard

Card com efeito glassmorphism e borda gradiente.

```jsx
import GlassCard from './components/GlassCard';

<GlassCard style={{ marginBottom: 20 }}>
  <Text>Conteúdo do card</Text>
</GlassCard>
```

**Props:**
- `children` - Conteúdo do card
- `style` - Estilos adicionais

---

### 2. StatCard

Card para exibir estatísticas com barra de progresso.

```jsx
import StatCard from './components/StatCard';

<StatCard 
  value="5.2k" 
  label="Usuários" 
  progress={65} 
/>
```

**Props:**
- `value` (string) - Valor da estatística
- `label` (string) - Label da estatística
- `progress` (number) - Progresso de 0 a 100

---

### 3. ListItem

Item de lista com ícone, título e subtítulo.

```jsx
import ListItem from './components/ListItem';

<ListItem
  icon="🎨"
  title="Design UI/UX"
  subtitle="Atualizado há 2 horas"
  rightText="87%"
  onPress={() => console.log('Pressed!')}
  iconColors={['#b66dff', '#6366f1']}
/>
```

**Props:**
- `icon` (string) - Emoji ou ícone
- `title` (string) - Título do item
- `subtitle` (string) - Subtítulo do item
- `rightText` (string) - Texto à direita (opcional)
- `onPress` (function) - Callback ao pressionar
- `iconColors` (array) - Cores do gradiente do ícone

---

### 4. PrimaryButton

Botão principal com gradiente.

```jsx
import PrimaryButton from './components/PrimaryButton';

<PrimaryButton 
  title="Continuar" 
  onPress={() => console.log('Pressed!')} 
/>
```

**Props:**
- `title` (string) - Texto do botão
- `onPress` (function) - Callback ao pressionar
- `style` - Estilos adicionais

---

### 5. InputField

Campo de input com foco animado.

```jsx
import InputField from './components/InputField';

<InputField
  placeholder="Digite seu email"
  value={email}
  onChangeText={setEmail}
  keyboardType="email-address"
/>
```

**Props:**
- `placeholder` (string) - Placeholder do input
- `value` (string) - Valor atual
- `onChangeText` (function) - Callback ao mudar o texto
- Todos os props de TextInput do React Native

---

### 6. BottomNav

Navegação inferior com tabs animados.

```jsx
import BottomNav from './components/BottomNav';

<BottomNav 
  activeTab="home"
  onTabChange={(tab) => setActiveTab(tab)}
/>
```

**Props:**
- `activeTab` (string) - Tab ativo atual
- `onTabChange` (function) - Callback ao mudar tab

---

## 🎬 Animações

### Hooks de Animação

#### useFadeIn
Animação de fade in com movimento vertical.

```jsx
import { useFadeIn } from './animations';

const Component = () => {
  const fadeInStyle = useFadeIn(600, 200); // duration, delay
  
  return (
    <Animated.View style={fadeInStyle}>
      <Text>Conteúdo</Text>
    </Animated.View>
  );
};
```

#### useSlideIn
Animação de slide horizontal.

```jsx
import { useSlideIn } from './animations';

const slideInStyle = useSlideIn('left', 400, 0); // direction, duration, delay
```

#### usePulse
Animação pulsante contínua.

```jsx
import { usePulse } from './animations';

const pulseStyle = usePulse();
```

#### useShake
Animação de shake (útil para erros).

```jsx
import { useShake } from './animations';

const { shake, style } = useShake();

// Chamar shake() quando necessário
<TouchableOpacity onPress={shake}>
  <Animated.View style={style}>
    <Text>Shake me!</Text>
  </Animated.View>
</TouchableOpacity>
```

### Componentes Animados

#### AnimatedCard
Card com animação de entrada.

```jsx
import { AnimatedCard } from './animations';

<AnimatedCard delay={200}>
  <Text>Conteúdo</Text>
</AnimatedCard>
```

#### AnimatedListItem
Item de lista com animação sequencial.

```jsx
{items.map((item, index) => (
  <AnimatedListItem key={item.id} index={index}>
    <Text>{item.title}</Text>
  </AnimatedListItem>
))}
```

#### ShimmerLoading
Loading skeleton com efeito shimmer.

```jsx
import { ShimmerLoading } from './animations';

<ShimmerLoading width={200} height={20} />
```

---

## 💡 Guia de Uso

### Criando uma Tela Completa

```jsx
import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from './constants/colors';
import GlassCard from './components/GlassCard';
import StatCard from './components/StatCard';
import BottomNav from './components/BottomNav';

const DashboardScreen = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <LinearGradient
      colors={[colors.background, colors.surface]}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scroll}>
          
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Dashboard</Text>
            <Text style={styles.subtitle}>
              Visão geral dos seus dados
            </Text>
          </View>

          {/* Main Card */}
          <GlassCard style={styles.mainCard}>
            <Text style={styles.cardTitle}>Total</Text>
            <Text style={styles.cardValue}>R$ 12.450</Text>
          </GlassCard>

          {/* Stats Grid */}
          <View style={styles.statsGrid}>
            <StatCard value="5.2k" label="Usuários" progress={65} />
            <StatCard value="22" label="Projetos" progress={45} />
          </View>

        </ScrollView>

        {/* Bottom Navigation */}
        <BottomNav 
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scroll: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.primary,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  mainCard: {
    marginBottom: 20,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 12,
  },
});

export default DashboardScreen;
```

---

## 🎯 Boas Práticas

### 1. Consistência de Gradientes

Sempre use gradientes em **135deg** para manter consistência:

```jsx
// ✅ Correto
<LinearGradient
  colors={[colors.primary, colors.accent]}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
>
```

### 2. Espaçamentos Padrão

Use múltiplos de 4 para espaçamentos:

```javascript
// ✅ Bom
padding: 16,  // 4 * 4
margin: 20,   // 5 * 4

// ❌ Evitar
padding: 15,
margin: 23,
```

### 3. Border Radius Generoso

Use valores entre 16-24px para cards e elementos principais:

```javascript
// ✅ Bom
borderRadius: 16,
borderRadius: 24,

// ❌ Evitar valores muito pequenos
borderRadius: 4,
borderRadius: 8,
```

### 4. Animações Suaves

Use duração de 300ms como padrão:

```javascript
transition: 'all 0.3s ease',
```

### 5. Hierarquia Visual

Use gradientes em texto para destacar elementos importantes:

```jsx
<Text style={{
  background: 'linear-gradient(135deg, #d8a7ff, #06b6d4)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}}>
  Texto Destacado
</Text>
```

---

## 📱 Responsividade

### Breakpoints

```javascript
const breakpoints = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  wide: 1440,
};
```

### Media Queries (Web)

```css
/* Mobile First */
@media (max-width: 480px) {
  .grid-2 { grid-template-columns: 1fr; }
}

@media (min-width: 768px) {
  .grid-2 { grid-template-columns: repeat(2, 1fr); }
}
```

### React Native

```jsx
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const isMobile = width < 768;

<View style={{
  flexDirection: isMobile ? 'column' : 'row',
}}>
```

---

## 🐛 Troubleshooting

### Problema: Gradientes não aparecem no Android

**Solução:** Certifique-se de usar `expo-linear-gradient` ou `react-native-linear-gradient`:

```bash
expo install expo-linear-gradient
```

### Problema: Animações com lag

**Solução:** Use sempre `useNativeDriver: true`:

```javascript
Animated.timing(value, {
  toValue: 1,
  duration: 300,
  useNativeDriver: true, // ✅ Importante!
}).start();
```

### Problema: Backdrop filter não funciona

**Solução:** Backdrop filter não é suportado em todos os navegadores/dispositivos. Use fallback:

```css
.glass-card {
  background: rgba(182, 109, 255, 0.1);
  backdrop-filter: blur(10px);
  /* Fallback para browsers sem suporte */
  background: rgba(26, 26, 46, 0.9);
}
```

---

## 🔄 Atualizações

### v1.0.0 (Atual)
- ✅ Design system completo
- ✅ Componentes base (6 componentes)
- ✅ Sistema de animações
- ✅ Paleta de cores
- ✅ Documentação completa

### Roadmap v1.1.0
- [ ] Tema light mode
- [ ] Mais componentes (Modal, Dropdown, Tabs)
- [ ] Temas customizáveis
- [ ] Storybook para documentação visual

---

## 📄 Licença

MIT License - Sinta-se livre para usar em projetos pessoais e comerciais.

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona NovaFeature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

---

## 📞 Suporte

Criado por **BRWAX** 🚀

Para dúvidas ou sugestões, abra uma issue no repositório.

---

## 🙏 Agradecimentos

Design inspirado pelas melhores práticas de UI/UX modernas e pelas tendências de 2024-2025.

**Tags:** design-system, react-native, glassmorphism, gradients, mobile-ui, dark-theme, animation

---

**Última atualização:** Outubro 2025
**Versão:** 1.0.0
