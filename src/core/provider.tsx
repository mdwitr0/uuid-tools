'use client';

import { ColorScheme, ColorSchemeProvider, createEmotionCache, MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { useMediaQuery } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import rtlPlugin from 'stylis-plugin-rtl';
import RootStyleRegistry from './emotion';
import { theme } from '@/core/theme';
import { YMInitializer } from 'react-yandex-metrika';

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
		<RootStyleRegistry>
			<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
				<MantineProvider withGlobalStyles withNormalizeCSS theme={{ ...theme, colorScheme, dir }}>
					<YMInitializer
						accounts={[94820522]}
						options={{
							clickmap: true,
							trackLinks: true,
							accurateTrackBounce: true,
							webvisor: true,
						}}
					/>
					<ModalsProvider>{children}</ModalsProvider>
					<Notifications />
				</MantineProvider>
			</ColorSchemeProvider>
		</RootStyleRegistry>
	);
}
