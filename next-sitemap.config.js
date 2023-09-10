/** @type {import('next-sitemap').IConfig} */
const pages = ['/', '/version/v1', '/version/v3', '/version/v4', '/version/v5', '/version/empty'];
const NextSitemapConfig = {
	siteUrl: 'https://www.uuid.tools',
	generateRobotsTxt: true,
	additionalPaths: async config => {
		return pages.map(page => ({
			loc: page,
			priority: 0.8,
			changefreq: 'daily',
			lastmod: new Date().toISOString(),
			alternateRefs: [
				{
					href: '/ru',
					priority: 0.8,
					hreflang: 'ru',
				},
				{
					href: '/zh',
					priority: 0.8,
					hreflang: 'zh',
				},
			],
		}));
	},
};

module.exports = NextSitemapConfig;
