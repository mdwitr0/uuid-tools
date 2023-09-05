import { Metadata } from 'next';
import { DEFAULT_LOCALE, DOMAIN } from '@/core/configs';
import { getTranslationJson } from '@/shared/libs/i18b/get-translation-json';

export const socialsImages = [
	{
		url: '/social.png',
		width: 1200,
		height: 630,
	},
];

export const titleTemplate = '%s | UUID tools';
export const defaultMetadata: Metadata = {
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
	openGraph: {
		type: 'website',
		locale: 'en',
		url: DOMAIN,
		title: 'Онлайн генератор уникальных UUID',
		description: 'Мгновенная генерация UUID версий: v1, v3, v4, v5',
		images: socialsImages,
	},
	alternates: {
		canonical: `/`,
		languages: {
			ru: `/ru`,
		},
	},
};

export async function getMetadataByLocaleAndVersion({ locale, version }: { locale: string; version?: string }): Promise<Metadata> {
	const { metadata } = await getTranslationJson(locale || DEFAULT_LOCALE, ['metadata']);
	if (!version) {
		return {
			...defaultMetadata,
			title: metadata['title'],
			description: metadata['description'],
			keywords: metadata['keywords'],
			openGraph: {
				type: 'website',
				locale: locale,
				url: DOMAIN,
				title: metadata['og:title'],
				description: metadata['og:description'],
				images: socialsImages,
			},
			alternates: {
				canonical: `/`,
				languages: {
					ru: `/ru`,
				},
			},
		};
	}

	return {
		...defaultMetadata,
		title: metadata['titleTemplate'].replace('%s', version),
		description: metadata['descriptionTemplate'].replace('%s', version),
		keywords: metadata['keywordsTemplate'].replace('%s', version),
		openGraph: {
			type: 'website',
			locale: locale,
			url: DOMAIN,
			title: metadata['og:titleTemplate'].replace('%s', version),
			description: metadata['og:descriptionTemplate'].replace('%s', version),
			images: socialsImages,
		},
		alternates: {
			canonical: `/version/${version}`,
			languages: {
				ru: `/ru/version/${version}`,
			},
		},
	};
}
