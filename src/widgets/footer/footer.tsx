'use client';

import { ActionIcon, Container, createStyles, rem, Text } from '@mantine/core';
import { SOCIALS } from '@/core/configs';
import Logo from '@/features/logo/logo';
import { useTranslations } from 'use-intl';

const useStyles = createStyles(theme => ({
	footer: {
		paddingTop: `calc(${theme.spacing.xl} * 2)`,
		paddingBottom: `calc(${theme.spacing.xl} * 2)`,
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
		borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`,
	},

	logo: {
		maxWidth: rem(200),
		marginRight: rem(40),
		[theme.fn.smallerThan('sm')]: {
			marginRight: 0,
		},
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},

	description: {
		[theme.fn.smallerThan('sm')]: {
			marginTop: theme.spacing.xs,
			textAlign: 'center',
		},
	},

	inner: {
		display: 'flex',
		justifyContent: 'space-between',

		[theme.fn.smallerThan('sm')]: {
			flexDirection: 'column',
			alignItems: 'center',
		},
	},

	groups: {
		display: 'flex',
		flexWrap: 'wrap',

		[theme.fn.smallerThan('sm')]: {
			display: 'none',
		},
	},

	wrapper: {
		width: rem(160),
	},

	link: {
		display: 'block',
		color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
		fontSize: theme.fontSizes.sm,
		paddingTop: rem(3),
		paddingBottom: rem(3),

		'&:hover': {
			textDecoration: 'underline',
		},
	},

	title: {
		fontSize: theme.fontSizes.lg,
		fontWeight: 700,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		marginBottom: `calc(${theme.spacing.xs} / 2)`,
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
	},

	afterFooter: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: theme.spacing.xl,
		paddingTop: theme.spacing.xl,
		paddingBottom: theme.spacing.xl,
		borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`,

		[theme.fn.smallerThan('sm')]: {
			flexDirection: 'column',
		},
	},

	social: {
		[theme.fn.smallerThan('sm')]: {
			marginTop: theme.spacing.xs,
		},
	},
}));

export function FooterMiddle() {
	const { classes } = useStyles();
	const t = useTranslations('footer');

	const socials = SOCIALS.map(social => (
		<ActionIcon size="lg" component="a" key={social.label} href={social.link} target="_blank">
			<social.icon size="1.1rem" stroke={1.5} target="_blank"></social.icon>
		</ActionIcon>
	));

	return (
		<footer className={classes.footer}>
			<Container className={classes.inner}>
				<div className={classes.logo}>
					<Logo />
				</div>
				<Text size="xs" color="dimmed" className={classes.description}>
					{t('disclaimer')}
				</Text>
			</Container>
			<Container className={classes.afterFooter}>
				<Text color="dimmed" size="sm">
					{t('copyTemplate').replace('%s', `${new Date().getFullYear()} uuid.tools`)}
				</Text>

				{socials}
			</Container>
		</footer>
	);
}
