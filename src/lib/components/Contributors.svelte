<script>
	import Andre from '../assets/images/andre-profile.jpeg';
	import Alesana from '../assets/images/alesana-profile.jpeg';
	import Eugene from '../assets/images/eugene-profile.jpeg';
	import Ronaldo from '../assets/images/ronaldo-profile.jpeg';
	import Chen from '../assets/images/chen-profile.jpeg';
	import Antonio from '../assets/images/antonio-profile.jpeg';
	import Aaron from '../assets/images/aaron-profile.jpeg';
	import Junior from '../assets/images/junior-profile.jpeg';
	import Tausani from '../assets/images/tausani-profile.jpeg';
	import Ainsof from '../assets/images/ainsof-profile.jpeg';
	import Hilton from '../assets/images/hilton-profile.jpeg';
	import Kendrick from '../assets/images/kendrick-profile.jpeg';
	import Henry from '../assets/images/henry-profile.jpg';
	import { Section } from '$lib/utils';
	import emblaCarouselSvelte from 'embla-carousel-svelte';

	const team = [
		{
			avatar: Andre,
			name: 'Andre Westerlund',
			title: 'Founder & Senior Full Stack Developer',
			github: 'https://github.com/westerandr',
			linkedin: 'https://www.linkedin.com/in/andrewesterlund/'
		},
		{
			avatar: Alesana,
			name: 'Alesana Eteuati Jr',
			title: 'Senior Software Developer',
			github: 'https://github.com/Green-Ranger11',
			linkedin: 'https://www.linkedin.com/in/alesana-eteuati-jr/'
		},
		{
			avatar: Eugene,
			name: 'Eugene Barker',
			title: 'Solutions Architect',
			github: 'https://github.com/genebarker',
			linkedin: 'https://www.linkedin.com/in/eugenebarker/'
		},
		{
			avatar: Chen,
			name: 'Chia Chen Lin',
			title: 'Software Developer',
			github: 'https://github.com/shifu-lin',
			linkedin: 'https://www.linkedin.com/in/chia-chen-lin-8625251b9/'
		},
		{
			avatar: Junior,
			name: 'Junior Latu',
			title: 'Software Developer',
			github: 'https://github.com/jrlatu',
			linkedin: 'https://www.linkedin.com/in/talavou-junior-latu/'
		},
		{
			avatar: Ronaldo,
			name: 'Ronaldo Pose',
			title: 'Business Solutions Manager',
			github: 'https://github.com/renaldox',
			linkedin: 'https://www.linkedin.com/in/ronaldo-pose/'
		},
		{
			avatar: Aaron,
			name: 'Aaron Solofa',
			title: 'GIS Specialist',
			github: 'https://github.com/aaronjamessolofa',
			linkedin: 'https://www.linkedin.com/in/aaron-solofa-06b923123/'
		},
		{
			avatar: Kendrick,
			name: 'Kendrick Lui',
			title: 'Web Developer',
			github: 'https://github.com/Ken2523',
			linkedin: 'https://www.linkedin.com/in/ken-lui-15017a232/'
		},
		{
			avatar: Antonio,
			name: 'Antonio Chadwick',
			title: 'IT Engineer',
			github: 'https://github.com/antoniochadwick',
			linkedin: 'https://www.linkedin.com/in/antonio-chadwick-8ab853141'
		},
		{
			avatar: Tausani,
			name: 'Tausani Ah Chong',
			title: 'Software Engineer',
			github: 'https://github.com/tausani-ah-chong',
			linkedin: 'https://www.linkedin.com/in/tausaniahchong'
		},
		{
			avatar: Ainsof,
			name: "Ainsof So'o",
			title: 'Systems Developer & Analyst',
			github: 'https://github.com/ainsofs',
			linkedin: 'https://www.linkedin.com/in/ainsofs'
		},
		{
			avatar: Hilton,
			name: "Hilton So'o",
			title: 'Managing Director',
			github: 'https://github.com/encode685',
			linkedin: 'https://www.linkedin.com/in/hilton-samuelu-so-o-8711aa103'
		},
		{
			avatar: Henry,
			name: 'Henry Fuerst',
			title: 'Frontend Developer',
			github: 'https://github.com/5thAttemptCode',
			linkedin: 'https://www.linkedin.com/in/henry-fuerst-10b58a187/'
		}
	];
</script>

<section id={Section.Contributors} class="container mx-auto px-12 lg:pb-24">
	<div class="max-w-screen-sm mx-auto mb-8 text-center lg:mb-16">
		<h1 class="pt-5 mb-4 text-4xl font-bold tracking-tight">Meet our Seki Devs</h1>
		<h3 class="text-[#5d5c5c] dark:text-[#cecece]">
			Tama Samoa who are working to build a community of SoftwareDevs on our island.
		</h3>
	</div>
	<div class="grid grid-cols-1 gap-10 mb-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5">
		{#each team as { avatar, name, title, github, linkedin }}
			<div
				class="flex flex-col items-center justify-center w-full mx-auto mt-5 card card-hover sm:w-80 sm:h-80"
			>
				<img class="w-40 h-40 rounded-full object-cover" src={avatar} loading="lazy" alt="Avatar" />
				<h5 class="pt-5 text-xl font-semibold">{name}</h5>
				<span class="pt-2 text-sm text-wrap text-[#5d5c5c] dark:text-[#cecece]">{title}</span>
				<div class="flex flex-row pt-6 icon-container">
					<a
						href={linkedin}
						target="_blank"
						class="rounded bg-blue-500 hover:bg-blue-600 text-white"
					>
						LinkedIn
					</a>
					<a
						href={github}
						target="_blank"
						class="rounded bg-[#949494] hover:bg-[#818181] text-white"
					>
						Github
					</a>
				</div>
			</div>
		{/each}
	</div>
	<p class="sm:visible mx-auto text-[#5d5c5c] dark:text-[#cecece] text-[14px]">please swipe</p>
	<div class="embla" use:emblaCarouselSvelte>
		<div class="embla__container">
			{#each team as { avatar, name, title, github, linkedin }}
				<div
					class="embla__slide flex flex-col items-center justify-center w-full mx-auto mt-5 card sm:w-80 sm:h-80"
				>
					<img
						class="w-40 h-40 rounded-full object-cover"
						src={avatar}
						loading="lazy"
						alt="Avatar"
					/>
					<h5 class="pt-5 text-xl font-semibold">{name}</h5>
					<span class="pt-2 text-sm text-wrap text-[#5d5c5c] dark:text-[#cecece]">{title}</span>
					<div class="flex flex-row pt-6 icon-container">
						<a
							href={linkedin}
							target="_blank"
							class="rounded bg-blue-500 hover:bg-blue-600 text-white"
						>
							LinkedIn
						</a>
						<a
							href={github}
							target="_blank"
							class="rounded bg-[#949494] hover:bg-[#818181] text-white"
						>
							Github
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.container {
		@media (max-width: 450px) {
			margin-block: 4rem;
		}
	}
	.icon-container {
		flex-direction: column;
		gap: 0.7rem;
		margin-top: 0.5rem;
	}

	a {
		padding: 0.4rem 2.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.card {
		transition: all 0.2s;
		height: 100%;
		padding-block: 1rem;
	}

	.grid {
		@media (max-width: 450px) {
			display: none;
		}
	}

	.embla {
		overflow: hidden;
		display: none;

		@media (max-width: 450px) {
			display: block;
		}
	}

	.embla__container {
		display: flex;
		gap: 2rem;
	}

	.embla__slide {
		flex: 0 0 100%;
		min-width: 0;
	}

	p {
		max-width: max-content;
	}
</style>
