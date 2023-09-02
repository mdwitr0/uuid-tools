import { NIL, v1, v3, v4, v5 } from 'uuid';

export type UUIDVersions = 'v1' | 'v3' | 'v4' | 'v5' | 'empty';
export const generateUuidByVersion = (version: UUIDVersions): string => {
	switch (version) {
		case 'v1':
			console.log(v1());
			return v1();
		case 'v3':
			return v3('uuid.tools', v3.DNS);
		case 'v4':
			return v4();
		case 'v5':
			return v5('uuid.tools', v5.DNS);
		default:
			return NIL;
	}
};
