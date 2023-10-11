'use client';

import { Box, Burger, Container, createStyles, Drawer, Group, Header, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { uuidList, UUIDVersion } from '@/shared/libs/uuid/uuid';
import a from 'next/link';
import Logo from '@/features/logo/logo';
import { ColorSchemeToggle } from '@/features/color-scheme-toogle/color-scheme-toggle';
import { useTranslations } from 'use-intl';
import { LOCALES_OBJ } from '@/core/configs';

const useStyles = createStyles(theme => ({
	inner: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: rem(56),

		[theme.fn.smallerThan('sm')]: {
			justifyContent: 'flex-start',
		},
	},

	links: {
		[theme.fn.smallerThan('sm')]: {
			display: 'none',
		},
	},

	locales: {
		border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,
		display: 'flex',
		borderRadius: theme.radius.sm,
	},
	social: {
		width: rem(260),

		[theme.fn.smallerThan('sm')]: {
			width: 'auto',
			marginLeft: 'auto',
		},
	},

	burger: {
		marginRight: theme.spacing.md,

		[theme.fn.largerThan('sm')]: {
			display: 'none',
		},
	},

	link: {
		display: 'block',
		lineHeight: 1,
		padding: `${rem(8)} ${rem(12)}`,
		borderRadius: theme.radius.sm,
		textDecoration: 'none',
		color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,
		cursor: 'pointer',
		'&:hover': {
			backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
		},
	},

	linkActive: {
		'&, &:hover': {
			backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
			color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
		},
	},
	hiddenDesktop: {
		[theme.fn.largerThan('sm')]: {
			display: 'none',
		},
	},
}));

type HeaderMiddleProps = {
	version?: UUIDVersion;
	locale: string;
};
export function HeaderMiddle({ version, locale }: HeaderMiddleProps) {
	const linksTranslate = useTranslations('links');
	const headerTranslate = useTranslations('header');

	const [opened, { close, open, toggle }] = useDisclosure(false);

	const { classes, cx } = useStyles();

	const pages = [
		<a
			key="home"
			href={linksTranslate(`home:href`)}
			title={linksTranslate(`home:title`)}
			className={cx(classes.link, { [classes.linkActive]: !version })}
		>
			{linksTranslate(`home:label`)}
		</a>,
		...uuidList.map(id => (
			<a
				key={id}
				href={linksTranslate(`${id}:href`)}
				title={linksTranslate(`${id}:title`)}
				className={cx(classes.link, { [classes.linkActive]: version === id })}
			>
				{linksTranslate(`${id}:label`)}
			</a>
		)),
	];

	const locales = (
		<Box className={classes.locales}>
			{LOCALES_OBJ.map(l => (
				<a key={l.code} href={`/${l.code}`} lang={locale} className={cx(classes.link, { [classes.linkActive]: locale === l.code })}>
					{l.name}
				</a>
			))}
		</Box>
	);

	return (
		<Header height={56}>
			<Container className={classes.inner}>
				<Burger opened={opened} onClick={open} size="sm" className={classes.burger} />
				<Drawer
					opened={opened}
					onClose={close}
					size="100%"
					padding="md"
					title={headerTranslate('menu:title')}
					className={classes.hiddenDesktop}
					zIndex={1000000}
				>
					{pages}
				</Drawer>
				<Logo></Logo>
				<Group className={classes.links} spacing={5}>
					{pages}
				</Group>

				<Group spacing={5} className={classes.social} position="right" noWrap>
					{locales}
					<ColorSchemeToggle />
				</Group>
			</Container>
		</Header>
	);
}
