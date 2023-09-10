import { HeaderMiddle } from '@/widgets/header/header';
import { FooterMiddle } from '@/widgets/footer/footer';
import { Generator } from '@/widgets/generator/generator';
import { generateUuidByVersion } from '@/shared/libs/uuid/uuid';
import { DEFAULT_UUID_NAMESPACE, DEFAULT_UUID_VERSION } from '@/core/configs';
import { getMetadataByLocaleAndVersion } from '@/core/metadata';
import { Metadata } from 'next';

type PageProps = {
	params: { locale: string };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	return getMetadataByLocaleAndVersion(params);
}
export default function Page({ params }: PageProps) {
	return (
		<>
			<HeaderMiddle locale={params.locale} />
			<Generator uuid={generateUuidByVersion(DEFAULT_UUID_VERSION, DEFAULT_UUID_NAMESPACE)} version="" />
			<FooterMiddle />
		</>
	);
}
