import { AppProvider } from '@/core/provider';
import { DOMAIN } from '@/core/configs';
import { Metadata } from 'next';
import Head from 'next/head';
import Script from 'next/script';

export const metadata: Metadata = {
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en-US">
			<Head>
				<Script
					dangerouslySetInnerHTML={{
						__html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(94820522, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
            });
            `,
					}}
				/>
			</Head>
			<body>
				<AppProvider>{children}</AppProvider>
				<noscript>
					<div>
						<img src="https://mc.yandex.ru/watch/94820522" />
					</div>
				</noscript>
			</body>
		</html>
	);
}
