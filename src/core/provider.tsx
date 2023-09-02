'use client';

import { theme } from '@/core/theme';
import { ColorScheme, ColorSchemeProvider, createEmotionCache, MantineProvider } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { useState } from 'react';
import rtlPlugin from 'stylis-plugin-rtl';
import RootStyleRegistry from './emotion';

const THEME_KEY = 'uuid-tools';
const rtlCache = createEmotionCache({
	key: 'mantine-rtl',
	prepend: true,
	stylisPlugins: [rtlPlugin],
});

export function AppProvider({ children }: { children: React.ReactNode }) {
	const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
		key: THEME_KEY,
		defaultValue: 'dark',
		getInitialValueInEffect: true,
	});
	const [dir, setDir] = useState<'rtl' | 'ltr'>('ltr');

	const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'dark' : 'light'));

	const toggleDir = () => {
		const nextDir = dir === 'ltr' ? 'rtl' : 'ltr';
		setDir(nextDir);
		document.querySelector('html')!.setAttribute('dir', nextDir);
	};

	return (
		<RootStyleRegistry>
			<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
				<MantineProvider
					withGlobalStyles
					withNormalizeCSS
					emotionCache={dir === 'rtl' ? rtlCache : undefined}
					theme={{ ...theme, colorScheme, dir }}
				>
					{children}
				</MantineProvider>
			</ColorSchemeProvider>
		</RootStyleRegistry>
	);
}
