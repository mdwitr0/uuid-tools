'use client';

import { ActionIcon, Container, createStyles, rem, Text } from '@mantine/core';
import { SOCIALS } from '@/core/configs';

const useStyles = createStyles(theme => ({
	footer: {
		position: 'fixed',
		left: 0,
		right: 0,
		bottom: 0,
		zIndex: 10,
		marginTop: rem(120),
		paddingTop: `calc(${theme.spacing.xl} * 2)`,
		paddingBottom: `calc(${theme.spacing.xl} * 2)`,
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
		borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`,
	},

	logo: {
		maxWidth: rem(200),
		marginRight: rem(40),

		[theme.fn.smallerThan('sm')]: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
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

	const socials = SOCIALS.map(social => (
		<ActionIcon size="lg" component="a" key={social.label} href={social.link} target="_blank">
			<social.icon size="1.1rem" stroke={1.5} target="_blank"></social.icon>
		</ActionIcon>
	));

	return (
		<footer className={classes.footer}>
			<Container className={classes.inner}>
				<div className={classes.logo}>
					<>LOGO</>
				</div>
				<Text size="xs" color="dimmed" className={classes.description}>
					Наш сервис не дает гарантий, что представленный UUID является уникальным и не был использован ранее. Мы не несем ответственности
					за любые убытки, прямые или косвенные, связанные с использованием нашего сервиса.
				</Text>
			</Container>
			<Container className={classes.afterFooter}>
				<Text color="dimmed" size="sm">
					© {new Date().getFullYear()} <b>uuid.tools</b> — сервис для генерации UUID
				</Text>

				{socials}
			</Container>
		</footer>
	);
}
