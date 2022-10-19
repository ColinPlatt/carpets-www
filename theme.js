import preset from '@theme-ui/preset-base';


// --color-fire-opal: #ec544c;
// --color-ultra-ultraRed: #f37588;
// --color-brown-chocolate: #5c1c34;
// --color-liberty: #4f53a2;
// --color-pearly-purple: #bf6d9d;
// --color-jacarta: #3e2f63;


// Universal colors.
const black = '#000';
const white = '#FFF';
const gray = '#717171';


// Styleguide colors.
const fireOpal = '#ec544c';
const blue = '#0E6A9C';
const liberty = '#4f53a2';
const ultraRed = '#f37588';
const brownChocolate = '#5c1c34';
const pearlyPurple = '#bf6d9d';
const jacarta = '#3e2f63';

/**
 * This file accomplishes 5 things:
 * 1 - Set defaults (from @theme-ui/preset-base).
 * 2 - Define colors.
 * 3 - Customize theme scales.
 * 4 - Customize variants for Theme UI components.
 * 5 - Customize variants for @undataforum/components.
 * 6 - Customize styles for MDX content.
 */

const theme = {
  // 1 - Set defaults (from @theme-ui/preset-base).
  ...preset,

  // 2 - Define colors.
  colors: {
    ...preset.colors,
    // Theme UI colors.
    text: fireOpal,
    background: jacarta,
    primary: fireOpal,
    secondary: liberty,
    // Style guide colors.
    fireOpal,
    blue,
    liberty,
    ultraRed,
    brownChocolate,
    pearlyPurple,
    jacarta,
    // Additional colors.
    gray,
  },

  // 3 - Customize theme scales.
  breakpoints: ['30em', '60em'],
  borders: [0, '1px solid', '2px solid', '3px solid'],
  radii: {
    default: 0,
    circle: 99999,
  },

  // 4 - Customize variants for Theme UI components.

  // Badge.
  badges: {
    default: {
      borderRadius: 'default',
    },
    primary: {
      color: 'background',
      bg: 'primary',
      variant: 'badges.default',
    },
    secondary: {
      color: 'background',
      bg: 'secondary',
      variant: 'badges.default',
    },
  },

  // Button.
  buttons: {
    default: {
      fontSize: 2,
      fontWeight: 'bold',
      borderRadius: 'default',
      fontFamily: 'aladdin',
      borderRadius: 10
    },
    primary: {
      variant: 'buttons.default',
      color: 'background',
      bg: 'primary',
    },
    secondary: {
      variant: 'buttons.default',
      color: 'background',
      bg: 'secondary',
    },
    outline: {
      default: {
        variant: 'buttons.default',
        boxShadow: '0 0 0 2px inset',
        // Override default `bg: 'primary'` from Theme UI's Button.
        bg: 'inherit',
      },
      primary: {
        variant: 'buttons.outline.default',
        color: 'primary',
      },
      secondary: {
        variant: 'buttons.outline.default',
        color: 'secondary',
      },
    },
  },

  // Container.
  layout: {
    container: {
      px: [2, 3, 4],
      maxWidth: '64rem',
    },
    narrow: {
      variant: 'layout.container',
      maxWidth: '48rem',
    },
    wide: {
      variant: 'layout.container',
      maxWidth: '96rem',
    },
  },

  // 5 - Customize variants for @undataforum/components.

  // EventPreview.
  'event-preview': {
    badge: {
      variant: 'badges.primary',
    },
    buttons: {
      event: {
        variant: 'buttons.primary',
      },
      registration: {
        variant: 'buttons.outline.primary',
      },
    },
  },

  // Footer.
  footer: {
    bg: 'primary',
  },

  // Header.
  header: {
    color: 'primary',
    bg: 'background',
    container: {
      variant: 'layout.wide',
    },
    nav: {
      bg: 'background',
    },
    cta: { variant: 'buttons.outline.primary' },
  },

  // Names.
  names: {
    default: {
      fontWeight: 'body',
    },
    bold: {
      fontWeight: 'bold',
    },
  },

  // PostPreview.
  'post-preview': {
    badge: {
      variant: 'badges.primary',
    },
    button: {
      variant: 'buttons.primary',
    },
  },

  // Tags.
  tags: {
    default: {
      borderRadius: 'default',
    },
    primary: {
      color: 'background',
      bg: 'primary',
      variant: 'tags.default',
    },
    secondary: {
      color: 'background',
      bg: 'secondary',
      variant: 'tags.default',
    },
  },

  // 6 - Customize styles for MDX content.
  styles: {
    ...preset.styles,
    h1: {
      ...preset.styles.h1,
      mt: 0,
      mb: 4,
    },
    h2: {
      ...preset.styles.h2,
      mt: 0,
      mb: 3,
    },
    h3: {
      ...preset.styles.h3,
      mt: 0,
      mb: 2,
    },
    h4: {
      ...preset.styles.h4,
      mt: 0,
      mb: 2,
    },
    h5: {
      ...preset.styles.h5,
      mt: 0,
      mb: 2,
    },
    h6: {
      ...preset.styles.h6,
      mt: 0,
      mb: 2,
    },
    p: {
      ...preset.styles.p,
      // Set color to inherit to allow adapting to parent text color.
      color: 'inherit',
      mt: 0,
      mb: 3,
      '&:last-child': {
        mb: 0,
      },
    },
    a: {
      ...preset.styles.a,
      textDecoration: 'none',
      '@media (hover: hover)': {
        '&:hover': {
          textDecoration: 'underline',
        },
      },
      WebkitTapHighlightColor: 'transparent',
    },
  },
};

export default theme;