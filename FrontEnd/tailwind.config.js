/** @type {import('tailwindcss').Config} */
function addVariablesForColors({ addBase, theme }) {
	const colors = theme("colors");
	const newVars = Object.entries(colors).reduce((vars, [key, value]) => {
	  if (typeof value === "string") {
		vars[`--${key}`] = value;
	  } else {
		Object.entries(value).forEach(([subKey, subValue]) => {
		  vars[`--${key}-${subKey}`] = subValue;
		});
	  }
	  return vars;
	}, {});
  
	addBase({
	  ":root": newVars,
	});
  }
  
  module.exports = {
	darkMode: ["class", "class"],
	content: [
	  './src/**/*.{js,jsx,ts,tsx}', // Ensure this path matches your source files
	],
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
		  'color-1': 'hsl(var(--color-1))',
		  'color-2': 'hsl(var(--color-2))',
		  'color-3': 'hsl(var(--color-3))',
		  'color-4': 'hsl(var(--color-4))',
		  'color-5': 'hsl(var(--color-5))'
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)'
		},
		animation: {
		  shimmer: "shimmer 2s linear infinite",
		  aurora: 'aurora 60s linear infinite',
		  'accordion-down': 'accordion-down 0.2s ease-out',
		  'accordion-up': 'accordion-up 0.2s ease-out',
		  orbit: 'orbit calc(var(--duration)*1s) linear infinite',
		  rainbow: 'rainbow var(--speed, 2s) infinite linear',
		  'shimmer-slide': 'shimmer-slide var(--speed) ease-in-out infinite alternate',
		  'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear'
		},
		keyframes: {
		  shimmer: {
			from: {
			  backgroundPosition: "0 0"
			},
			to: {
			  backgroundPosition: "-200% 0"
			}
		  },
		  aurora: {
			from: {
			  backgroundPosition: '50% 50%, 50% 50%'
			},
			to: {
			  backgroundPosition: '350% 50%, 350% 50%'
			}
		  },
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
		  orbit: {
			'0%': {
			  transform: 'rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)'
			},
			'100%': {
			  transform: 'rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)'
			}
		  },
		  rainbow: {
			'0%': {
			  'background-position': '0%'
			},
			'100%': {
			  'background-position': '200%'
			}
		  },
		  'shimmer-slide': {
			to: {
			  transform: 'translate(calc(100cqw - 100%), 0)'
			}
		  },
		  'spin-around': {
			'0%': {
			  transform: 'translateZ(0) rotate(0)'
			},
			'15%, 35%': {
			  transform: 'translateZ(0) rotate(90deg)'
			},
			'65%, 85%': {
			  transform: 'translateZ(0) rotate(270deg)'
			},
			'100%': {
			  transform: 'translateZ(0) rotate(360deg)'
			}
		  }
		}
	  }
	},
	plugins: [
	  addVariablesForColors,
	  require("tailwindcss-animate"),
	],
  };