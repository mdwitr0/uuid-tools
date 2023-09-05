import { AppProvider } from '@/core/provider';
import WithIntl from '@/core/providers/with-intl';

type Props = { children: React.ReactNode; params: { locale: string } };

export default function RootLayout({ children, params: { locale } }: Props) {
	return (
		<html lang={locale}>
			<body>
				<WithIntl locale={locale}>
					<AppProvider>{children}</AppProvider>
				</WithIntl>
			</body>
		</html>
	);
}
