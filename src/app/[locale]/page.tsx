import { HeaderMiddle } from '@/widgets/header/header';
import { FooterMiddle } from '@/widgets/footer/footer';
import { Generator } from '@/widgets/generator/generator';
import { generateUuidByVersion } from '@/shared/libs/uuid/uuid';
import { DEFAULT_UUID_NAMESPACE, DEFAULT_UUID_VERSION } from '@/core/configs';
import { Metadata } from 'next';
import { getTranslationJson } from '@/shared/libs/i18b/get-translation-json';

type PageProps = {
	params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
	const messages = await getTranslationJson(locale, ['common']);

	return {
		title: messages['common']['title'],
		description: messages['common']['description'],
		keywords: messages['common']['keywords'],
	};
}
export default function Page() {
	return (
		<>
			<HeaderMiddle version={DEFAULT_UUID_VERSION} />
			<Generator uuid={generateUuidByVersion(DEFAULT_UUID_VERSION, DEFAULT_UUID_NAMESPACE)} version={DEFAULT_UUID_VERSION} />
			<FooterMiddle />
		</>
	);
}
