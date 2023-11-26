'use client';

import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import RootStyleRegistry from './emotion';
import { theme } from '@/core/theme';
import WithYandexMetrika from '@/core/providers/with-yandex-metrika';
import { Analytics } from '@vercel/analytics/react';

export function AppProvider({ children }: { children: React.ReactNode }) {
	return (
		<WithYandexMetrika>
			<RootStyleRegistry>
				<MantineProvider withGlobalStyles withNormalizeCSS theme={{ ...theme, colorScheme: 'dark' }}>
					<ModalsProvider>{children}</ModalsProvider>
					<Notifications />
				</MantineProvider>
			</RootStyleRegistry>
			<Analytics />
		</WithYandexMetrika>
	);
}
