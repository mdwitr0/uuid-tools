import { notFound } from 'next/navigation';

import { NextIntlClientProvider } from 'next-intl';
import { LOCALE_NAMESPACES } from '@/core/configs';
import { getTranslationJson, NsType } from '@/shared/libs/i18b/get-translation-json';

const withIntl = async ({
	children, // will be a page or nested layout
	locale,
	namespaces = [...LOCALE_NAMESPACES],
}: {
	children: React.ReactNode;
	locale: string;
	namespaces?: NsType[];
}) => {
	let messages;
	try {
		messages = await getTranslationJson(locale, namespaces);
	} catch (error) {
		console.error(error);
		notFound();
	}
	return (
		<NextIntlClientProvider locale={locale} messages={messages}>
			{children}
		</NextIntlClientProvider>
	);
};

export default withIntl;
