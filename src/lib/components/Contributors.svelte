<script>
	import Andre from '../assets/images/andre-profile.jpeg';
	import Alesana from '../assets/images/alesana-profile.jpeg';
	import Eugene from '../assets/images/eugene-profile.jpeg';
	import Ronaldo from '../assets/images/ronaldo-profile.jpeg';
	import Chen from '../assets/images/chen-profile.jpeg';
	import Antonio from '../assets/images/antonio-profile.jpeg';
	import Aaron from '../assets/images/aaron-profile.jpeg';
	import Junior from '../assets/images/junior-profile.jpeg';
	import { SectionName } from '$lib/utils';

	const team = [
		{
			avatar: Andre,
			name: 'Andre Westerlund',
			title: 'Web Developer',
			github: 'https://github.com/westerandr',
			linkedin: 'https://www.linkedin.com/in/andrewesterlund/'
		},
		{
			avatar: Alesana,
			name: 'Alesana Eteuati Jr',
			title: 'Web Developer',
			github: 'https://github.com/Green-Ranger11',
			linkedin: 'https://www.linkedin.com/in/alesana-eteuati-jr/'
		},
		{
			avatar: Eugene,
			name: 'Eugene Barker',
			title: 'Web Developer',
			github: 'https://github.com/genebarker',
			linkedin: 'https://www.linkedin.com/in/eugenebarker/'
		},
		{
			avatar: Chen,
			name: 'Chia Chen Lin',
			title: 'Web Developer',
			github: 'https://github.com/shifu-lin',
			linkedin: 'https://www.linkedin.com/in/chia-chen-lin-8625251b9/'
		},
		{
			avatar: Junior,
			name: 'Junior Latu',
			title: 'Web Developer',
			github: 'https://github.com/jrlatu',
			linkedin: 'https://www.linkedin.com/in/talavou-junior-latu/'
		},
		{
			avatar: Ronaldo,
			name: 'Ronaldo Pose',
			title: 'Web Developer',
			github: 'https://github.com/renaldox',
			linkedin: 'https://www.linkedin.com/in/ronaldo-pose/'
		},
		{
			avatar: Aaron,
			name: 'Aaron Solofa',
			title: 'Web Developer',
			github: 'https://github.com/aaronjamessolofa',
			linkedin: 'https://www.linkedin.com/in/aaron-solofa-06b923123/'
		},
		{
			avatar:
				'https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1706918400&semt=ais',
			name: 'Kendrick Lui',
			title: 'Web Developer',
			github: 'https://github.com/Ken2523',
			linkedin: 'https://www.linkedin.com/in/ken-lui-15017a232/'
		},
		{
			avatar: Antonio,
			name: 'Antonio Chadwick',
			title: 'Web Developer',
			github: 'https://github.com/antoniochadwick',
			linkedin: 'https://www.linkedin.com/in/antonio-chadwick-8ab853141'
		}
	];
</script>

<section id={SectionName.CONTRIBUTORS} class="container mx-auto">
	<div class="max-w-screen-sm mx-auto mb-8 text-center lg:mb-16">
		<h1 class="pt-5 mb-4 text-4xl font-bold tracking-tight">Meet our Seki Devs</h1>
		<p class="font-light lg:mb-16 sm:text-xl">
			Tama Samoa who are working to build a community of SoftwareDevs on our island
		</p>
	</div>
	<div class="grid grid-cols-1 gap-2 mb-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
		{#each team as { avatar, name, title, github, linkedin }}
			<div
				class="flex flex-col items-center justify-center w-full h-auto py-10 mx-auto mt-5 shadow-xl card card-hover sm:w-80 sm:h-80"
			>
				<img class="w-40 h-40 rounded-full" src={avatar} alt="Avatar" />
				<h5 class="pt-5 text-xl font-semibold">{name}</h5>
				<span class="pt-2 text-sm">{title}</span>
				<div class="flex flex-row pt-10 icon-container">
					<a href={github}>
						<svg class="px-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512"
							><path
								d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
							/></svg
						>
					</a>
					<a href={linkedin}>
						<svg class="px-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"
							><path
								d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
							/></svg
						>
					</a>
				</div>
			</div>
		{/each}
	</div>
</section>
