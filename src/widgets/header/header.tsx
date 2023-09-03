'use client';

import { ActionIcon, Burger, Container, createStyles, Group, Header, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { uuidList, UUIDVersion } from '@/shared/uuid';
import Link from 'next/link';
import { SOCIALS } from '@/core/configs';
import Logo from '@/features/logo/logo';

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
		width: rem(260),

		[theme.fn.smallerThan('sm')]: {
			display: 'none',
		},
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
}));

type HeaderMiddleProps = {
	version: UUIDVersion;
};
export function HeaderMiddle({ version }: HeaderMiddleProps) {
	const links = uuidList.map(link => ({ link: '/' + link, label: link }));

	const [opened, { toggle }] = useDisclosure(false);

	const { classes, cx } = useStyles();

	const pages = links.map(link => (
		<Link key={link.label} href={link.link} className={cx(classes.link, { [classes.linkActive]: '/' + version === link.link })}>
			{link.label}
		</Link>
	));

	const socials = SOCIALS.map(social => (
		<ActionIcon size="lg" component="a" key={social.label} href={social.link} target="_blank">
			<social.icon size="1.1rem" stroke={1.5} target="_blank"></social.icon>
		</ActionIcon>
	));

	return (
		<Header height={56}>
			<Container className={classes.inner}>
				<Burger opened={opened} onClick={toggle} size="sm" className={classes.burger} />
				<Group className={classes.links} spacing={5}>
					{pages}
				</Group>

				<Logo></Logo>

				<Group spacing={0} className={classes.social} position="right" noWrap>
					{socials}
				</Group>
			</Container>
		</Header>
	);
}
