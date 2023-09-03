import { AbstractIntlMessages } from 'next-intl';
import { DEFAULT_LOCALE, LOCALE_NAMESPACES } from '@/core/configs';

export type NsType = (typeof LOCALE_NAMESPACES)[number];

export const getTranslationJson = async (locale: string, namespaces: NsType[] = [...LOCALE_NAMESPACES]) => {
	let messages: AbstractIntlMessages = {};
	for (const namespace of namespaces) {
		const message = (await import(`./locales/${locale || DEFAULT_LOCALE}/${namespace}.json`)).default;
		messages = { ...messages, [namespace]: message };
	}
	return messages;
};
