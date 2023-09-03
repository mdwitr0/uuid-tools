/** @type {import('next-sitemap').IConfig} */
const NextSitemapConfig = {
	siteUrl: 'https://uuid.tools/',
	generateRobotsTxt: true,
	additionalPaths: async config => {
		const result = [];

		result.push({ loc: '/v1' });
		result.push({ loc: '/v3' });
		result.push({ loc: '/v4' });
		result.push({ loc: '/v5' });
		result.push({ loc: '/empty' });

		return result;
	},
};

module.exports = NextSitemapConfig;
