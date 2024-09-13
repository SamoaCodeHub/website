<script>
	import { Section } from '$lib/utils';
	import ssoWebsiteImage from '../assets/projects-images/project-sso-website.png';
	import sitaDbImage from '../assets/projects-images/project-sso-sitadb.png';
	import { IconBrandGithubFilled, IconClick } from '@tabler/icons-svelte';
</script>

<div
	id={Section.Projects}
	class="container px-5 py-2 lg:px-32 lg:py-24 bg-transparent mx-auto w-full"
>
	<h1 class="text-4xl font-bold text-center pb-8">Featured Projects</h1>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
		<!-- Project 1 -->
		<div class="rounded-lg overflow-hidden hover:shadow-lg project p-6 card">
			<img src={sitaDbImage} alt="Project 1" class="w-full h-64 object-cover" />
			<div class="mt-5">
				<h3 class="text-xl mb-2">SITA Registration Web App</h3>
				<p class="text-[#5d5c5c] dark:text-[#cecece] pb-4">
					Developed and launched a web application solution tailored specifically for Samoa
					Information Technology Association to revolutionize their onboarding process for new and
					existing members.
				</p>
				<div class="flex gap-4 mt-6 cta">
					<a
						rel="external"
						target="_blank"
						href="https://register.sita.ws/"
						class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-5 rounded flex items-center"
					>
						<IconClick class="mr-2" /> Try it Now
					</a>
					<a
						rel="external"
						target="_blank"
						href="https://github.com/sita-samoa/sita-membership"
						class="bg-[#949494] hover:bg-[#818181] text-white py-2 px-5 rounded flex items-center"
					>
						<IconBrandGithubFilled class="mr-2" /> GitHub Repo
					</a>
				</div>
			</div>
		</div>

		<!-- Project 2 -->
		<div class="rounded-lg overflow-hidden hover:shadow-lg project p-6 card">
			<img src={ssoWebsiteImage} alt="Project 2" class="w-full h-64 object-cover" />
			<div class="mt-5">
				<h3 class="text-xl mb-2">Samoa Code Hub Website</h3>
				<p class="text-[#5d5c5c] dark:text-[#cecece]">
					Designed & Created a brand new website for Samoa Code Hub, designed from the ground up to
					reflect the vibrant programming community in Samoa. The new website showcases the latest
					events, projects and members for Samoa Code Hub.
				</p>
				<div class="flex gap-4 mt-4">
					<a
						rel="external"
						target="_blank"
						href="https://github.com/Samoa-Stack-Overflow/sso-website"
						class="bg-[#949494] hover:bg-[#818181] text-white py-2 px-5 rounded flex items-center"
					>
						<IconBrandGithubFilled class="mr-2" /> GitHub Repo
					</a>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	h3 {
		letter-spacing: 1.5px;
		margin: 0;
		font-size: 18px;
		font-weight: 600;
	}

	p {
		letter-spacing: 1.5px;
		margin-top: 0.5rem;
		font-size: 14px;
		text-align: justify;
	}

	a {
		font-weight: 600;

		@media (max-width: 1024px) {
			margin-inline: auto;
			width: 60%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	.card {
		transition: all 0.2s;
	}

	img {
		border-top-right-radius: 0.5rem;
		border-top-left-radius: 0.5rem;
	}

	.cta {
		width: 100%;

		@media (max-width: 1024px) {
			flex-direction: column;
		}
	}
</style>
