import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const textSizes = {
'display-3xl': '--text-display-3xl',
'display-2xl': '--text-display-2xl',
'display-xl': '--text-display-xl',
'display-lg': '--text-display-lg',
'display-md': '--text-display-md',
'display-sm': '--text-display-sm',
'display-xs': '--text-display-xs',
'text-xl': '--text-xl',
'text-lg': '--text-lg',
'text-md': '--text-md',
'text-sm': '--text-sm',
'text-xs': '--text-xs',
};

const fontWeights = {
regular: '--font-weight-regular',
medium: '--font-weight-medium',
semibold: '--font-weight-semibold',
bold: '--font-weight-bold',
extrabold: '--font-weight-extrabold',
};

const customTextPlugin = plugin(({ addUtilities }) => {
const newUtilities: Record<string, any> = {};

for (const [sizeName, sizeVar] of Object.entries(textSizes)) {
for (const [weightName, weightVar] of Object.entries(fontWeights)) {
const className = `.${sizeName}-${weightName}`;
newUtilities[className] = {
fontSize: `var(${sizeVar})`,
lineHeight: `var(${sizeVar}--line-height)`,
fontWeight: `var(${weightVar})`,
};
}
}

addUtilities(newUtilities);
});

export default {
content: ['./src/**/*.{js,ts,jsx,tsx}'],
theme: {
extend: {
colors: {
white: 'var(--color-white)',
black: 'var(--color-black)',
primary: 'var(--color-primary)',
secondary: 'var(--color-secondary)',
neutral: {
100: 'var(--color-neutral-100)',
200: 'var(--color-neutral-200)',
300: 'var(--color-neutral-300)',
400: 'var(--color-neutral-400)',
500: 'var(--color-neutral-500)',
600: 'var(--color-neutral-600)',
700: 'var(--color-neutral-700)',
800: 'var(--color-neutral-800)',
900: 'var(--color-neutral-900)',
950: 'var(--color-neutral-950)',
1000: 'var(--color-neutral-1000)',
1100: 'var(--color-neutral-1100)',
},
},
spacing: {
none: '0',
xxs: '0.125rem',
xs: '0.25rem',
sm: '0.375rem',
md: '0.5rem',
lg: '0.75rem',
xl: '1rem',
'2xl': '1.25rem',
'3xl': '1.5rem',
'4xl': '2rem',
'5xl': '2.5rem',
'6xl': '3rem',
'7xl': '4rem',
'8xl': '5rem',
'9xl': '6rem',
'10xl': '8rem',
'11xl': '8.75rem',
},
borderRadius: {
none: '0',
xxs: '0.125rem',
xs: '0.25rem',
sm: '0.375rem',
md: '0.5rem',
lg: '0.625rem',
xl: '0.75rem',
'2xl': '1rem',
'3xl': '1.25rem',
'4xl': '1.5rem',
full: '9999px',
},


},
},
plugins: [customTextPlugin],
} satisfies Config;
