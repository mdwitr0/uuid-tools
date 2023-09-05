import createMiddleware from 'next-intl/middleware';
import { DEFAULT_LOCALE, LOCALES } from '@/core/configs';

export default createMiddleware({
	locales: LOCALES,
	defaultLocale: DEFAULT_LOCALE,
});

export const config = {
	matcher: ['/((?!api|_next|.*\\..*).*)'],
};
