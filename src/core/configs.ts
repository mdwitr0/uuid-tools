import { IconBrandGithub } from '@tabler/icons-react';

export const DEFAULT_UUID_VERSION = 'v4';
export const DEFAULT_UUID_NAMESPACE = 'uuid.tools';
export const DOMAIN = 'https://uuid.tools';

export const SOCIALS = [
	{
		label: 'GitHub',
		link: 'https://github.com/mdwitr0',
		icon: IconBrandGithub,
		alt: 'GitHub',
	},
];

export const YANDEX_METRIKA_ID = 94820522;

export const LOCALES = ['ru', 'en', 'zh'];
export const DEFAULT_LOCALE = 'en';

export const LOCALE_NAMESPACES = [
	'header',
	'footer',
	'metadata',
	'buttons',
	'generator',
	'bulk-generator',
	'links',
	'namespace-form',
] as const;
