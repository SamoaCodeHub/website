<script>
	import ssoWebsiteImage from '../assets/projects-images/project-sso-website.png';
	import sitaDbImage from '../assets/projects-images/project-sso-sitadb.png';
	import { IconBrandGithubFilled, IconClick } from '@tabler/icons-svelte';
</script>

<div class="container px-5 py-2 lg:px-32 lg:py-24 bg-transparent mx-auto w-full">
	<h1 class="text-4xl font-bold text-center pb-8">Featured Projects</h1>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
		<!-- Project 1 -->
		<div class="rounded-lg overflow-hidden hover:shadow-lg">
			<img src={sitaDbImage} alt="Project 1" class="w-full h-64 object-cover" />
			<div class="p-4">
				<h3 class="text-xl font-bold mb-2">SITA Registration Web App</h3>
				<p class="text-black dark:text-white pb-4">
					Developed and launched a web application solution tailored specifically for Samoa
					Information Technology Association to revolutionize their onboarding process for new and
					existing members.
				</p>
				<div class="flex gap-2 mt-4">
					<a
						rel="external"
						target="_blank"
						href="https://register.sita.ws/"
						class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
					>
						<IconClick class="mr-2" /> Try it Now
					</a>
					<!-- <a
						rel="external"
						target="_blank"
						href="https://register.sita.ws/"
						class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex items-center"
					>
						<IconBrandGithubFilled class="mr-2" /> GitHub Repo
					</a> -->
				</div>
			</div>
		</div>

		<!-- Project 2 -->
		<div class="rounded-lg overflow-hidden hover:shadow-lg">
			<img src={ssoWebsiteImage} alt="Project 2" class="w-full h-64 object-cover" />
			<div class="p-4">
				<h3 class="text-xl font-bold mb-2">Samoa Code Hub Website</h3>
				<p class="text-black dark:text-white">
					Designed & Created a brand new website for Samoa Code Hub, designed from the ground up to
					reflect the vibrant programming community in Samoa. The new website showcases the latest
					events, projects and members for Samoa Code Hub.
				</p>
				<div class="flex gap-2 mt-4">
					<a
						rel="external"
						href="#"
						class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
					>
						<IconClick class="mr-2" /> Try it Now
					</a>
					<a
						rel="external"
						target="_blank"
						href="https://github.com/Samoa-Stack-Overflow/sso-website"
						class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex items-center"
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
	}
	p {
		letter-spacing: 1.5px;
		margin: 0;
		font-size: 14px;
	}
</style>
