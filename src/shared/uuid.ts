import { NIL, v1, v3, v4, v5 } from 'uuid';

export type UUIDVersions = 'v1' | 'v3' | 'v4' | 'v5' | 'empty';

export type UUIDLinks = { link: UUIDVersions; label: string }[];

export const generateUuidByVersion = (version: UUIDVersions): string => {
	switch (version) {
		case 'v1':
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

const uuidList: UUIDVersions[] = ['v1', 'v3', 'v4', 'v5', 'empty'];

const uuidLinks: UUIDLinks = uuidList.map(link => ({ link, label: '/' + link }));

export const validateVersion = (version: UUIDVersions): boolean => {
	return uuidList.includes(version);
};
