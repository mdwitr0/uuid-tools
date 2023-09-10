import clsx from 'clsx';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';
import { AppProvider } from '@/core/provider';
import { LOCALES } from '@/core/configs';
import { getTranslationJson } from '@/shared/libs/i18n/get-translation-json';

const inter = Inter({ subsets: ['latin'] });

type Props = {
	children: ReactNode;
	params: { locale: string };
};

export async function generateStaticParams() {
	return LOCALES.map(locale => ({ locale }));
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
	const messages = await getTranslationJson(locale);

	return (
		<html lang={locale}>
			<body className={clsx(inter.className)}>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<AppProvider>{children}</AppProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
