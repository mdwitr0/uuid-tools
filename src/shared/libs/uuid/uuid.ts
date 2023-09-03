import { NIL, v1, v3, v4, v5 } from 'uuid';

export type UUIDVersion = 'v1' | 'v3' | 'v4' | 'v5' | 'empty';

export const generateUuidByVersion = (version: UUIDVersion, namespace: string): string => {
	switch (version) {
		case 'v1':
			return v1();
		case 'v3':
			return v3(namespace, v3.DNS);
		case 'v4':
			return v4();
		case 'v5':
			return v5(namespace, v5.DNS);
		default:
			return NIL;
	}
};

export const uuidList: UUIDVersion[] = ['v4', 'v1', 'v3', 'v5', 'empty'];

export const validateVersion = (version: UUIDVersion): boolean => {
	return uuidList.includes(version);
};
