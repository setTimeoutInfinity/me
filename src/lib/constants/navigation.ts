interface NavItem {
	label: string;
	title: string;
	path: string;
}

interface NavItemParent {
	label: string;
	children: NavItem[];
}

type NavigationItem = NavItem | NavItemParent;

type NavigationItems = NavigationItem[];

export const hasChildren = (item: NavigationItem): item is NavItemParent => {
	return 'children' in item;
};

const FUN_NAVIGATION_ITEMS: NavItem[] = [{ label: 'ANG Prediction', title: 'ANG Prediction', path: '/fun/ang-prediction' }];

export const NAVIGATION_ITEMS: NavigationItems = [
	{ label: 'Home', title: 'Home', path: '/' },
	{ label: 'My Playlist', title: 'My Playlist', path: '/my-playlist' },
	{ label: 'Fun', children: FUN_NAVIGATION_ITEMS }
];
