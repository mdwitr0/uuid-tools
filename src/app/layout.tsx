import { AppProvider } from '@/core/provider';
import { DOMAIN } from '@/core/configs';

export const metadata = {
	metadataBase: new URL(DOMAIN),
	title: { default: 'Онлайн UUID генератор, всех версий: v1, v3, v4, v5', template: '%s | UUID tools' },
	description: 'Генератор UUID',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en-US">
			<head />
			<body>
				<AppProvider>{children}</AppProvider>
			</body>
		</html>
	);
}
