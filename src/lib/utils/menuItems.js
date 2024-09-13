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
		ref: `#${Section.Contributors}`,
		name: 'Contributors',
		icon: IconUsers
	},
	{
		ref: `#${Section.Media}`,
		name: 'Media',
		icon: IconNews
	},
	{
		ref: `#${Section.Contact}`,
		name: 'Contact Us',
		icon: IconMail
	}
];
