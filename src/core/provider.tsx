'use client';

import { ColorScheme, ColorSchemeProvider, createEmotionCache, MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { useMediaQuery } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import rtlPlugin from 'stylis-plugin-rtl';
import RootStyleRegistry from './emotion';
import { theme } from '@/core/theme';
import WithYandexMetrika from '@/core/providers/with-yandex-metrika';
import { Analytics } from '@vercel/analytics/react';

const THEME_KEY = 'uuidtools-theme';
const rtlCache = createEmotionCache({
	key: 'mantine-rtl',
	prepend: true,
	stylisPlugins: [rtlPlugin],
});

export function AppProvider({ children }: { children: React.ReactNode }) {
	const [dir, setDir] = useState<'rtl' | 'ltr'>('ltr');

	const preferredColorScheme = useMediaQuery('(prefers-color-scheme: dark)');
	const [colorScheme, setColorScheme] = useState<ColorScheme>(preferredColorScheme ? 'dark' : 'light');
	useEffect(() => {
		if (preferredColorScheme) {
			setColorScheme('dark');
		} else {
			setColorScheme('light');
		}
	}, [preferredColorScheme]);

	const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

	const toggleDir = () => {
		const nextDir = dir === 'ltr' ? 'rtl' : 'ltr';
		setDir(nextDir);
		document.querySelector('html')!.setAttribute('dir', nextDir);
	};

	return (
		<WithYandexMetrika>
			<RootStyleRegistry>
				<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
					<MantineProvider withGlobalStyles withNormalizeCSS theme={{ ...theme, colorScheme, dir }}>
						<ModalsProvider>{children}</ModalsProvider>
						<Notifications />
					</MantineProvider>
				</ColorSchemeProvider>
			</RootStyleRegistry>
			<Analytics />
		</WithYandexMetrika>
	);
}
