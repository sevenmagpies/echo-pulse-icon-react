
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				fluent: {
					primary: '#0078D4',
					secondary: '#50E6FF',
					background: '#F3F2F1',
					accent: '#2B88D8',
					gradient: {
						start: '#6e27d4',
						middle: '#4146ce',
						end: '#181dae',
					}
				}
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pulse-gentle': {
					'0%, 100%': { 
						transform: 'scale(1)',
						opacity: '0.8' 
					},
					'50%': { 
						transform: 'scale(1.05)',
						opacity: '1' 
					}
				},
				'subtle-pulse': {
					'0%, 100%': { 
						transform: 'scale(1)',
						opacity: '0.95' 
					},
					'50%': { 
						transform: 'scale(1.02)',
						opacity: '1' 
					}
				},
				'wave': {
					'0%': { height: '30%' },
					'20%': { height: '60%' },
					'40%': { height: '40%' },
					'60%': { height: '80%' },
					'80%': { height: '35%' },
					'100%': { height: '30%' }
				},
				'wave-alt': {
					'0%': { height: '40%' },
					'20%': { height: '30%' },
					'40%': { height: '70%' },
					'60%': { height: '50%' },
					'80%': { height: '85%' },
					'100%': { height: '40%' }
				},
				'ripple': {
					'0%': { transform: 'scale(0.8)', opacity: '0.8' },
					'50%': { transform: 'scale(1.2)', opacity: '0.2' },
					'100%': { transform: 'scale(1.5)', opacity: '0' }
				},
				'subtle-ripple': {
					'0%': { transform: 'scale(0.95)', opacity: '0.6' },
					'50%': { transform: 'scale(1.05)', opacity: '0.3' },
					'100%': { transform: 'scale(1.1)', opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-gentle': 'pulse-gentle 2s ease-in-out infinite',
				'subtle-pulse': 'subtle-pulse 2.5s ease-in-out infinite',
				'wave-fast': 'wave 1.2s ease-in-out infinite',
				'wave-normal': 'wave 1.5s ease-in-out infinite',
				'wave-slow': 'wave-alt 1.8s ease-in-out infinite',
				'ripple': 'ripple 2s ease-out infinite',
				'subtle-ripple': 'subtle-ripple 2.5s ease-out infinite',
			},
			backgroundImage: {
				'echo-gradient': 'linear-gradient(to right, #6e27d4, #4146ce, #181dae)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
