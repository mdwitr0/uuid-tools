import { AppProvider } from '@/core/provider';
import { Analytics } from '@vercel/analytics/react';
import WithIntl from '@/core/providers/with-intl';
import { DEFAULT_LOCALE } from '@/core/configs';

export default function RootLayout({ children }: { children: React.ReactNode; params: { locale: string } }) {
	return (
		<html lang={DEFAULT_LOCALE}>
			<body>
				<WithIntl locale={DEFAULT_LOCALE} namespaces={['common']}>
					<AppProvider>
						{children}
						<Analytics />
					</AppProvider>
				</WithIntl>
			</body>
		</html>
	);
}
