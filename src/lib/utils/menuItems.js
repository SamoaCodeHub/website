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
		ref: `#${Section.Projects}`,
		name: 'Projects',
		icon: IconUsers
	},
	{
		ref: `#${Section.About}`,
		name: 'About Us',
		icon: IconCode
	},
	{
		ref: `#${Section.Contributors}`,
		name: 'The Team',
		icon: IconCode
	},
	{
		ref: `#${Section.Contact}`,
		name: 'Contact Us',
		icon: IconMail
	}
];
