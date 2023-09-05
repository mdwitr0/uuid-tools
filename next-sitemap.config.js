/** @type {import('next-sitemap').IConfig} */
const NextSitemapConfig = {
	siteUrl: 'https://uuid.tools',
	generateRobotsTxt: true,
	additionalPaths: async config => {
		const result = [];

		result.push({
			loc: '/',
			priority: 1,
			alternateRefs: [
				{
					href: '/ru',
					priority: 1,
					hreflang: 'ru',
				},
			],
		});
		result.push({
			loc: '/version/v1',
			priority: 0.8,
			alternateRefs: [
				{
					href: '/ru',
					priority: 0.8,
					hreflang: 'ru',
				},
			],
		});
		result.push({
			loc: '/version/v3',
			priority: 0.8,
			alternateRefs: [
				{
					href: '/ru',
					priority: 0.8,
					hreflang: 'ru',
				},
			],
		});
		result.push({
			loc: '/version/v4',
			priority: 0.8,
			alternateRefs: [
				{
					href: '/ru',
					priority: 0.8,
					hreflang: 'ru',
				},
			],
		});
		result.push({
			loc: '/version/v5',
			priority: 0.8,
			alternateRefs: [
				{
					href: '/ru',
					priority: 0.8,
					hreflang: 'ru',
				},
			],
		});
		result.push({
			loc: '/version/empty',
			priority: 0.8,
			alternateRefs: [
				{
					href: '/ru',
					priority: 0.8,
					hreflang: 'ru',
				},
			],
		});

		return result;
	},
};

module.exports = NextSitemapConfig;
