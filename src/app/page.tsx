import { HeaderMiddle } from '@/widgets/header/header';
import { FooterMiddle } from '@/widgets/footer/footer';
import { Generator } from '@/widgets/generator/generator';
import { generateUuidByVersion } from '@/shared/uuid';
import { DEFAULT_UUID_NAMESPACE, DEFAULT_UUID_VERSION } from '@/core/configs';

export default function Page() {
	return (
		<>
			<HeaderMiddle version={DEFAULT_UUID_VERSION} />
			<Generator uuid={generateUuidByVersion(DEFAULT_UUID_VERSION, DEFAULT_UUID_NAMESPACE)} version={DEFAULT_UUID_VERSION} />
			<FooterMiddle />
		</>
	);
}
