# Sass Architecture for 3D Portfolio

This directory contains the Sass (SCSS) files for the 3D Portfolio website, organized using a scalable architecture pattern.

## 📁 Folder Structure

```
sass/
├── abstracts/          # Variables, mixins, functions
│   ├── _variables.scss # Color palette, typography, spacing
│   └── _mixins.scss    # Reusable mixins and utilities
├── base/               # Reset, typography, base styles
│   ├── _reset.scss     # CSS reset and normalize
│   └── _typography.scss # Typography styles and utilities
├── components/         # Reusable UI components
│   ├── _navigation.scss # Navigation bar styles
│   ├── _cursor.scss    # Custom cursor component
│   ├── _loading.scss   # Loading screen component
│   └── _buttons.scss   # Button styles and variants
├── layout/             # Layout-specific styles
│   ├── _hero.scss      # Hero section layout
│   └── _sections.scss  # General section layouts
├── pages/              # Page-specific styles
│   ├── _about.scss     # About section styles
│   ├── _skills.scss    # Skills section styles
│   ├── _projects.scss  # Projects section styles
│   └── _contact.scss   # Contact section styles
├── utilities/          # Utility classes and animations
│   └── _animations.scss # Keyframes and animation utilities
└── main.scss           # Main file that imports everything
```

## 🎨 Design System

### Colors
- **Primary Cyan**: `#00ffff` - Main accent color
- **Primary Magenta**: `#ff00ff` - Secondary accent
- **Primary Yellow**: `#ffff00` - Tertiary accent
- **Background**: `#000` - Main background
- **Text**: `#fff` - Primary text color

### Typography
- **Primary Font**: 'Rajdhani', sans-serif
- **Heading Font**: 'Orbitron', monospace
- **Responsive Sizes**: Using clamp() for fluid typography

### Spacing
- **Base Unit**: 1rem (16px)
- **Scale**: 0.25x, 0.5x, 1x, 1.5x, 2x, 3x, 4x

## 🔧 Development Workflow

### Prerequisites
```bash
npm install
```

### Available Scripts

#### Development (Watch Mode)
```bash
npm run dev
# or
npm run sass:watch
```
This watches for changes in Sass files and automatically compiles them.

#### Production Build
```bash
npm run build
# or
npm run sass:compressed
```
This compiles Sass to compressed CSS for production.

#### One-time Compilation
```bash
npm run sass
```

### File Naming Convention
- All Sass partials start with underscore (`_`)
- Use kebab-case for file names
- Component files match their CSS class names

## 📝 Usage Guidelines

### Variables
All design tokens are defined in `abstracts/_variables.scss`:
```scss
// Colors
$primary-cyan: #00ffff;
$bg-primary: #000;

// Typography
$font-primary: 'Rajdhani', sans-serif;
$font-heading: 'Orbitron', monospace;

// Spacing
$spacing-md: 1rem;
$spacing-lg: 1.5rem;
```

### Mixins
Common patterns are available as mixins in `abstracts/_mixins.scss`:
```scss
// Flexbox utilities
@include flex-center;
@include flex-between;

// Grid utilities
@include grid-auto-fit(300px, 2rem);

// Effects
@include glass-effect(0.3);
@include hover-lift;
```

### Responsive Design
Use the provided breakpoint mixins:
```scss
.component {
  padding: 2rem;
  
  @include mobile {
    padding: 1rem;
  }
}
```

### Component Structure
Each component should follow this pattern:
```scss
// Component base styles
.component {
  // Base styles
  
  // Modifiers
  &.modifier {
    // Modified styles
  }
  
  // States
  &:hover,
  &:focus {
    // Interactive states
  }
  
  // Child elements
  &__element {
    // Element styles
  }
}
```

## 🎯 Key Features

### 1. **Modular Architecture**
- Each component is self-contained
- Easy to maintain and update
- Scalable for future additions

### 2. **Design System Integration**
- Consistent color palette
- Standardized spacing scale
- Typography hierarchy

### 3. **Responsive Design**
- Mobile-first approach
- Flexible grid systems
- Fluid typography

### 4. **Performance Optimized**
- Compressed output for production
- Efficient CSS organization
- Minimal redundancy

### 5. **Developer Experience**
- Watch mode for development
- Source maps for debugging
- Clear naming conventions

## 🚀 Adding New Components

1. Create a new partial in the appropriate folder
2. Follow the naming convention (`_component-name.scss`)
3. Import it in `main.scss`
4. Use existing variables and mixins when possible

Example:
```scss
// sass/components/_new-component.scss
.new-component {
  @include card-style;
  color: $primary-cyan;
  
  &:hover {
    @include hover-lift;
  }
}
```

Then add to `main.scss`:
```scss
@import 'components/new-component';
```

## 📚 Resources

- [Sass Documentation](https://sass-lang.com/documentation)
- [7-1 Architecture Pattern](https://sass-guidelin.es/#the-7-1-pattern)
- [BEM Methodology](http://getbem.com/)

## 🔄 Migration Notes

This Sass architecture replaces the previous inline CSS and JavaScript-injected styles:
- All styles from `index.html` `<style>` tag moved to Sass
- JavaScript style injection removed from `js/main.js`
- Styles are now compiled to `css/main.css`
- Better organization and maintainability
