import { HeaderMiddle } from '@/widgets/header/header';
import { FooterMiddle } from '@/widgets/footer/footer';
import { Generator } from '@/widgets/generator/generator';
import { generateUuidByVersion, UUIDVersion, validateVersion } from '@/shared/libs/uuid/uuid';
import { DEFAULT_UUID_NAMESPACE } from '@/core/configs';
import { notFound } from 'next/navigation';
import { getMetadataByLocaleAndVersion } from '@/core/metadata';
import { Metadata } from 'next';

type PageProps = {
	params: { version: UUIDVersion; locale: string };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	return getMetadataByLocaleAndVersion(params);
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
