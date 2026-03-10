import {
	IconExternalLink,
	IconBrandGithub,
	IconBrandDiscord,
	IconBrandFacebook
} from '@tabler/icons-svelte';

export const joinUs = {
	name: 'Join Us',
	link: 'https://docs.google.com/forms/d/e/1FAIpQLSckLWtZky5-jGFWi4HnzuCQC3F1af3-LaCYhRrU5NCK36HJ4g/viewform',
	icon: IconExternalLink,
	title: 'Become a member!'
};

export const socialItems = [
	{
		name: 'Github',
		link: 'https://github.com/SamoaCodeHub',
		icon: IconBrandGithub,
		title: 'Dive into the code'
	},
	{
		name: 'Discord',
		link: 'https://docs.google.com/forms/d/e/1FAIpQLSckLWtZky5-jGFWi4HnzuCQC3F1af3-LaCYhRrU5NCK36HJ4g/viewform',
		icon: IconBrandDiscord,
		title: 'Sign up to join our Discord'
	},
	{
		name: 'Facebook',
		link: 'https://www.facebook.com/groups/948415479224570',
		icon: IconBrandFacebook,
		title: 'Get the latest on Facebook'
	}
];
