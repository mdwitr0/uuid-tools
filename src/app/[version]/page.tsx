import { HeaderMiddle } from '@/widgets/header/header';
import { FooterMiddle } from '@/widgets/footer/footer';
import { Generator } from '@/widgets/generator/generator';
import { generateUuidByVersion, UUIDVersion, validateVersion } from '@/shared/uuid';
import { notFound } from 'next/navigation';
import { DEFAULT_UUID_NAMESPACE } from '@/core/configs';

type PageProps = {
	params: { version: UUIDVersion };
};

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
