import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  			'border-pulse': 'border-pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  			'border-pulse-delay': 'border-pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite 2s',
  			'float': 'float 3s ease-in-out infinite',
  			'shine': 'shine 2s linear infinite',
  			'scan': 'scan 2s linear infinite',
  			'marquee': 'marquee var(--duration) linear infinite',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
			'gradient-xy': 'gradient-xy 4s linear infinite',
  			'border-beam': 'border-beam 10s linear infinite',
  		},
  		keyframes: {
  			pulse: {
  				'0%, 100%': { opacity: '1' },
  				'50%': { opacity: '0.5' },
  			},
  			'border-pulse': {
  				'0%, 100%': { opacity: '1', transform: 'scale(1)' },
  				'50%': { opacity: '0.5', transform: 'scale(1.05)' },
  			},
  			'float': {
  				'0%, 100%': { transform: 'translateY(0)' },
  				'50%': { transform: 'translateY(-10px)' },
  			},
  			'shine': {
  				'0%': { left: '-100%' },
  				'100%': { left: '100%' },
  			},
  			'scan': {
  				'0%': { transform: 'translateY(-100%)' },
  				'100%': { transform: 'translateY(500%)' },
  			},
  			marquee: {
  				from: { transform: 'translateX(0)' },
  				to: { transform: 'translateX(calc(-100% - var(--gap)))' },
  			},
  			'marquee-vertical': {
  				from: { transform: 'translateY(0)' },
  				to: { transform: 'translateY(calc(-100% - var(--gap)))' },
  			},
			'gradient-xy': {
			'0%': {
				'background-size': '300% 300%',
				'background-position': '0% 0%'
			},
			'25%': {
				'background-size': '300% 300%',
				'background-position': '100% 0%'
			},
			'50%': {
				'background-size': '300% 300%',
				'background-position': '100% 100%'
			},
			'75%': {
				'background-size': '300% 300%',
				'background-position': '0% 100%'
			},
			'100%': {
				'background-size': '300% 300%',
				'background-position': '0% 0%'
			}
			},
			'border-beam': {
				'0%': {
					'clip-path': 'inset(0 0 95% 0)',
					'background': 'linear-gradient(90deg, transparent 0%, var(--primary) 50%, transparent 100%)',
				},
				'25%': {
					'clip-path': 'inset(0 0 0 95%)',
					'background': 'linear-gradient(180deg, transparent 0%, var(--primary) 50%, transparent 100%)',
				},
				'50%': {
					'clip-path': 'inset(95% 0 0 0)',
					'background': 'linear-gradient(270deg, transparent 0%, var(--primary) 50%, transparent 100%)',
				},
				'75%': {
					'clip-path': 'inset(0 95% 0 0)',
					'background': 'linear-gradient(0deg, transparent 0%, var(--primary) 50%, transparent 100%)',
				},
				'100%': {
					'clip-path': 'inset(0 0 95% 0)',
					'background': 'linear-gradient(90deg, transparent 0%, var(--primary) 50%, transparent 100%)',
				},
			},
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
