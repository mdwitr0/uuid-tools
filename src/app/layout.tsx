import { AppProvider } from '@/core/provider';
import { DOMAIN } from '@/core/configs';
import { Metadata } from 'next';

export const metadata: Metadata = {
	metadataBase: new URL(DOMAIN),
	title: { default: 'Онлайн UUID генератор, всех версий: v1, v3, v4, v5', template: '%s | UUID tools' },
	description: 'Генератор UUID',

	manifest: '/site.webmanifest',
	icons: [
		{
			url: '/android-chrome-192x192.png',
			sizes: '192x192',
		},
		{
			url: '/android-chrome-512x512.png',
			sizes: '512x512',
		},
		{
			url: '/apple-touch-icon.png',
			sizes: '180x180',
		},
		{
			url: '/favicon-16x16.png',
			sizes: '16x16',
		},
		{
			url: '/favicon-32x32.png',
			sizes: '32x32',
		},
		{
			url: '/favicon.ico',
			sizes: '48x48',
		},
	],
	colorScheme: 'dark',
	other: {
		'yandex-verification': '65c33071e3b34e31',
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en-US">
			<body>
				<AppProvider>{children}</AppProvider>
			</body>
		</html>
	);
}
