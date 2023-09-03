'use client';
import React, { ReactNode, useCallback, useEffect } from 'react';
import Router from 'next/router';
import ym, { YMInitializer } from 'react-yandex-metrika';
import { YANDEX_METRIKA_ID } from '@/core/configs';

export type WithYandexMetrikaProps = {
	children: ReactNode;
};

const enabled = process.env.NODE_ENV === 'production';

const WithYandexMetrika = (props: WithYandexMetrikaProps) => {
	const { children } = props;

	const hit = useCallback(url => {
		console.log('hit', url);
		ym('hit', url);
	}, []);

	useEffect(() => {
		hit(window.location.pathname + window.location.search);
		Router.events.on('routeChangeStart', (url: string) => hit(url));
	}, []);

	return (
		<>
			<YMInitializer accounts={[YANDEX_METRIKA_ID]} options={{ webvisor: true, defer: true }} version="2" />
			{children}
		</>
	);
};

export default WithYandexMetrika;
