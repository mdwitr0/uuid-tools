import { createStyles, rem } from '@mantine/core';
import { useTranslations } from 'use-intl';

const useStyles = createStyles(theme => ({
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},

	logo: {
		width: '100%',
		height: '100%',
		maxHeight: rem(40),
		maxWidth: rem(40),
		'& path': {
			fill: theme.colors[theme.primaryColor],
		},
	},
}));
export default function Logo() {
	const t = useTranslations('links');
	const { classes } = useStyles();
	return (
		<a href={t('home:href')} title={t('home:title')} className={classes.container}>
			<svg className={classes.logo} viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
				<path d="M180.211 76V924H6V76H180.211Z" />
				<path d="M604.376 924H419.678L420.843 787.714H604.376C650.211 787.714 688.859 777.425 720.322 756.846C751.785 735.879 775.479 705.399 791.405 665.407C807.719 625.414 815.876 577.073 815.876 520.385V479.033C815.876 435.546 811.215 397.3 801.893 364.297C792.959 331.293 779.558 303.531 761.69 281.011C743.822 258.491 721.876 241.601 695.851 230.341C669.826 218.692 639.917 212.868 606.124 212.868H416.182V76H606.124C662.835 76 714.69 85.707 761.69 105.121C809.078 124.147 850.058 151.52 884.628 187.242C919.198 222.963 945.806 265.674 964.45 315.374C983.483 364.685 993 419.626 993 480.198V520.385C993 580.568 983.483 635.509 964.45 685.209C945.806 734.908 919.198 777.619 884.628 813.341C850.446 848.674 809.467 876.048 761.69 895.462C714.302 914.487 661.864 924 604.376 924ZM518.727 76V924H343.934V76H518.727Z" />
			</svg>
		</a>
	);
}
