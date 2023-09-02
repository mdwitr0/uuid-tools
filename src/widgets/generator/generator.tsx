'use client';

import { Button, Card, Container, createStyles, Group, rem, Text, TextInput, Title } from '@mantine/core';
import { IconCopy, IconRefresh } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { generateUuidByVersion, UUIDVersion } from '@/shared/uuid';
import { DEFAULT_UUID_NAMESPACE } from '@/core/configs';

const useStyles = createStyles(theme => ({
	main: {
		paddingTop: rem(120),

		height: '90vh',
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
	},

	title: {
		fontSize: rem(34),
		fontWeight: 900,
		marginBottom: theme.spacing.xl,
		color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[7],

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
	},

	input: {
		height: rem(54),
		paddingTop: rem(18),
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
	version: UUIDVersion;
};

export function Generator({ uuid: startUuid, version }: GeneratorProps) {
	const { classes, theme } = useStyles();
	const [uuid, setUUID] = useState<string>(startUuid);
	const [namespace, setNamespace] = useState<string>(DEFAULT_UUID_NAMESPACE);
	const copyUUIDtoClipboard = async () => {
		try {
			await navigator.clipboard.writeText(uuid);
		} catch (err) {
			console.log('Failed to copy text: ', err);
		}
	};

	const newUUID = () => {
		setUUID(generateUuidByVersion(version, namespace));
	};

	useEffect(() => {
		newUUID();
	}, [namespace]);

	const namespaceForm = (
		<Container py="xl" className={classes.inputWrapper}>
			<TextInput
				label="Namespace"
				placeholder="Введите namespace"
				classNames={classes}
				value={namespace}
				onChange={event => setNamespace(event.currentTarget.value)}
			/>
			<Text size="sm" py="sm">
				Для корректной генерации UUID 3 и 5 версий введите ваш namespace
			</Text>
		</Container>
	);

	return (
		<main className={classes.main}>
			<Container size="xl" py="xl">
				<Title order={1} className={classes.title} ta="center">
					Онлайн генератор UUID {version == 'empty' ? 'заглушки' : version}
				</Title>

				<Card shadow="md" radius="md" className={classes.card} padding="xl">
					<Text className={classes.uuid}>{uuid}</Text>
					<Group align="center" position="center">
						<Button leftIcon={<IconCopy />} onClick={copyUUIDtoClipboard}>
							Скопировать
						</Button>

						<Button leftIcon={<IconRefresh />} onClick={newUUID}>
							Изменить
						</Button>
					</Group>

					{version === 'v3' || version === 'v5' ? namespaceForm : null}
				</Card>
			</Container>
		</main>
	);
}
