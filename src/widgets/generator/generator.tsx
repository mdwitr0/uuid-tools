'use client';

import { Button, Card, Container, createStyles, Group, JsonInput, NumberInput, rem, Text, TextInput, Title } from '@mantine/core';
import { IconCopy, IconRefresh } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { generateUuidByVersion, UUIDVersion } from '@/shared/libs/uuid/uuid';
import { DEFAULT_UUID_NAMESPACE } from '@/core/configs';
import { useTranslations } from 'use-intl';

const useStyles = createStyles(theme => ({
	main: {
		paddingTop: rem(120),

		minHeight: '83vh',
		backgroundColor: theme.colors.gray[0],
	},

	title: {
		fontSize: rem(34),
		fontWeight: 900,
		marginBottom: theme.spacing.xl,
		color: theme.colors.dark[7],

		[theme.fn.smallerThan('sm')]: {
			fontSize: rem(24),
		},
	},

	description: {
		maxWidth: 600,
		margin: 'auto',

		'&::after': {
			content: '""',
			display: 'block',
			backgroundColor: theme.fn.primaryColor(),
			width: rem(45),
			height: rem(2),
			marginTop: theme.spacing.sm,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},

	card: {
		border: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]}`,
	},

	cardTitle: {
		'&::after': {
			content: '""',
			display: 'block',
			backgroundColor: theme.fn.primaryColor(),
			width: rem(45),
			height: rem(2),
			marginTop: theme.spacing.sm,
		},
	},

	uuid: {
		fontSize: rem(24),
		fontWeight: 600,
		marginBottom: theme.spacing.xl,
		textAlign: 'center',
		wordBreak: 'break-all',

		[theme.fn.smallerThan('sm')]: {
			fontSize: rem(18),
		},
	},

	input: {
		height: rem(54),
		paddingTop: rem(18),
	},

	textarea: {
		height: rem(200),
		paddingTop: rem(18),
		fontSize: theme.fontSizes.xs,
	},

	label: {
		position: 'absolute',
		pointerEvents: 'none',
		fontSize: theme.fontSizes.xs,
		paddingLeft: theme.spacing.sm,
		paddingTop: `calc(${theme.spacing.sm} / 2)`,
		zIndex: 1,
	},

	inputWrapper: {
		maxWidth: rem(500),
		width: '100%',
	},
}));

type GeneratorProps = {
	uuid: string;
	version?: UUIDVersion;
};

export function Generator({ uuid: startUuid, version }: GeneratorProps) {
	const generatorTranslate = useTranslations('generator');
	const bulkGeneratorTranslate = useTranslations('bulk-generator');
	const buttonsTranslate = useTranslations('buttons');
	const namespaceTranslate = useTranslations('namespace-form');

	const { classes, theme } = useStyles();
	const [uuid, setUUID] = useState<string>(startUuid);

	const [size, setSize] = useState<number>(1);
	const [uuidList, setUUIDList] = useState<string[]>([]);

	const [namespace, setNamespace] = useState<string>(DEFAULT_UUID_NAMESPACE);
	const copyUUIDtoClipboard = async () => {
		try {
			await navigator.clipboard.writeText(uuid);
		} catch (err) {
			console.log('Failed to copy text: ', err);
		}
	};

	const newUUID = () => {
		setUUID(generateUuidByVersion(version || 'v4', namespace));
	};

	const newUUIDList = () => {
		setUUIDList(Array.from({ length: size }, () => generateUuidByVersion(version || 'v4', namespace)));
	};

	useEffect(() => {
		newUUID();
	}, [namespace]);
	return (
		<Container size="xl" py="xl">
			<Title order={1} className={classes.title} ta="center">
				{generatorTranslate(`${version || 'home'}:title`)}
			</Title>

			<Card shadow="md" radius="md" className={classes.card} padding="xl" mb="xl">
				<Text className={classes.uuid}>{uuid}</Text>
				<Group align="center" position="center">
					<Button leftIcon={<IconCopy />} onClick={copyUUIDtoClipboard}>
						{buttonsTranslate('copy')}
					</Button>
					{['v1', 'v4'].find(v => v === version || !version) ? (
						<Button leftIcon={<IconRefresh />} onClick={newUUID}>
							{buttonsTranslate('refresh')}
						</Button>
					) : null}
				</Group>
				{['v3', 'v5'].includes(version || 'v4') ? (
					<Container py="xl" className={classes.inputWrapper}>
						<TextInput
							label={namespaceTranslate('input:label')}
							placeholder={namespaceTranslate('input:placeholder')}
							classNames={classes}
							value={namespace}
							onChange={event => setNamespace(event.currentTarget.value)}
						/>
						<Text size="sm" py="sm">
							{namespaceTranslate(`${version}:description`)}
						</Text>
					</Container>
				) : null}
			</Card>

			{['v1', 'v4'].includes(version || 'v4') ? (
				<Card shadow="md" radius="md" className={classes.card} padding="xl">
					<Title order={2} ta="center">
						{bulkGeneratorTranslate(`${version || 'home'}:title`)}
					</Title>
					<Group align="center" position="center" py="xl">
						<NumberInput
							placeholder={bulkGeneratorTranslate(`input:placeholder`)}
							label={bulkGeneratorTranslate(`input:label`)}
							min={1}
							max={1000}
							defaultValue={size}
							classNames={classes}
							onChange={value => setSize(value || 1)}
						/>
						<Button leftIcon={<IconRefresh />} onClick={newUUIDList}>
							{buttonsTranslate('generate')}
						</Button>
					</Group>
					<Container py="xl" className={classes.inputWrapper}>
						<JsonInput
							label={bulkGeneratorTranslate('textarea:label')}
							formatOnBlur
							autosize
							minRows={4}
							value={JSON.stringify(uuidList, null, 2)}
						/>
					</Container>
				</Card>
			) : null}
		</Container>
	);
}
