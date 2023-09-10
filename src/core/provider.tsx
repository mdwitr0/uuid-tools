'use client';

import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { useMediaQuery } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import RootStyleRegistry from './emotion';
import { theme } from '@/core/theme';
import WithYandexMetrika from '@/core/providers/with-yandex-metrika';
import { Analytics } from '@vercel/analytics/react';

export function AppProvider({ children }: { children: React.ReactNode }) {
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

	return (
		<WithYandexMetrika>
			<RootStyleRegistry>
				<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
					<MantineProvider withGlobalStyles withNormalizeCSS theme={{ ...theme, colorScheme }}>
						<ModalsProvider>{children}</ModalsProvider>
						<Notifications />
					</MantineProvider>
				</ColorSchemeProvider>
			</RootStyleRegistry>
			<Analytics />
		</WithYandexMetrika>
	);
}
