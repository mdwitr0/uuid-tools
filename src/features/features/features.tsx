'use client';
import { Container, Text, Title } from '@mantine/core';
import { useTranslations } from 'use-intl';

export function Features() {
	const translations = useTranslations('info');

	return (
		<Container size="xl" py="xl">
			<div>
				<Title order={2}>{translations('howTitle')}</Title>
				<Text>{translations('howText')}</Text>
				<Title order={3}>{translations('standardTitle')}</Title>
				<Text>{translations('standardText')}</Text>
				<Title order={3}>{translations('formatTitle')}</Title>
				<Text>{translations('formatText')}</Text>
			</div>
		</Container>
	);
}
