import { AppProvider } from '@/core/provider';
import WithIntl from '@/core/providers/with-intl';
import { DEFAULT_LOCALE } from '@/core/configs';

export default function RootLayout({ children }: { children: React.ReactNode; params: { locale: string } }) {
	return (
		<html lang={DEFAULT_LOCALE}>
			<body>
				<WithIntl locale={DEFAULT_LOCALE}>
					<AppProvider>{children}</AppProvider>
				</WithIntl>
			</body>
		</html>
	);
}
