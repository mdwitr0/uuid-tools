import { AppProvider } from '@/core/provider';
import { Analytics } from '@vercel/analytics/react';
import WithIntl from '@/core/providers/with-intl';

type Props = { children: React.ReactNode; params: { locale: string } };

export default function RootLayout({ children, params: { locale } }: Props) {
	console.log(locale);
	return (
		<html lang={locale}>
			<body>
				<WithIntl locale={locale} namespaces={['common']}>
					<AppProvider>
						{children}
						<Analytics />
					</AppProvider>
				</WithIntl>
			</body>
		</html>
	);
}
