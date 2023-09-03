import { HeaderMiddle } from '@/widgets/header/header';
import { FooterMiddle } from '@/widgets/footer/footer';
import { Generator } from '@/widgets/generator/generator';
import { generateUuidByVersion, UUIDVersion, validateVersion } from '@/shared/libs/uuid/uuid';
import { DEFAULT_LOCALE, DEFAULT_UUID_NAMESPACE } from '@/core/configs';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getTranslationJson } from '@/shared/libs/i18b/get-translation-json';

type PageProps = {
	params: { version: UUIDVersion; locale: string };
};

export async function generateMetadata({ params: { version, locale } }: PageProps): Promise<Metadata> {
	console.log(version, locale);
	const messages = await getTranslationJson(DEFAULT_LOCALE, ['common']);

	return {
		title: messages['common']['title'],
		description: messages['common']['description'],
		keywords: messages['common']['keywords'],
	};
}
export default function Page({ params }: PageProps) {
	if (!validateVersion(params.version)) notFound();

	return (
		<>
			<HeaderMiddle version={params.version} />
			<Generator uuid={generateUuidByVersion(params.version, DEFAULT_UUID_NAMESPACE)} version={params.version} />
			<FooterMiddle />
		</>
	);
}
