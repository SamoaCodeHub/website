import { IconHome2, IconNews, IconMail, IconCode, IconUsers } from '@tabler/icons-svelte';

export const Section = {
	Hero: 'Hero',
	Media: 'Media',
	Contributors: 'Contributors',
	Contact: 'Contact',
	About: 'About',
	Projects: 'Projects'
};

export const menuItems = [
	{
		ref: `#${Section.Hero}`,
		name: 'Welcome',
		icon: IconHome2
	},
	{
		ref: `#${Section.About}`,
		name: 'About',
		icon: IconCode
	},
	{
		ref: `#${Section.Projects}`,
		name: 'Projects',
		icon: IconUsers
	},
	{
		ref: `#${Section.Media}`,
		name: 'Media',
		icon: IconNews
	},
	{
		ref: `#${Section.Contributors}`,
		name: 'Contributors',
		icon: IconUsers
	},
	{
		ref: `#${Section.Contact}`,
		name: 'Contact Us',
		icon: IconMail
	}
];
