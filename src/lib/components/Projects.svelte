<script>
	import { Section } from '$lib/utils';
	import { IconHandClick } from '@tabler/icons-svelte';
	import { socialItems } from '$lib/utils/socialLinks';
	import ssoWebsiteImage from '../assets/projects-images/project-sso-website.png';
	import sitaDbImage from '../assets/projects-images/project-sso-sitadb.png';

	const githubLink = socialItems[0].link;
	const githubTitle = socialItems[0].title;
</script>

<div
	id={Section.Projects}
	class="py-[clamp(3.125rem,8.3vw,7.5rem)] border-y-2 border-[var(--border-color-100)] w-full"
>
	<h2>Featured Projects</h2>
	<div class="flex w-full gap-[3rem] max-[768px]:flex-col">
		<!-- Project Box 1 -->
		<div class="w-1/2 h-full max-[768px]:w-full">
			<div
				class="relative bg-[var(--grey-100)] rounded-[var(--border-radius-100)] w-full h-[500px] content-start pt-[2.75rem] pl-[2rem]"
			>
				<img
					src={sitaDbImage}
					alt="SITA DB Website"
					title="SITA DB website"
					class="absolute top-0 left-0 z-0 w-full h-full object-contain"
				/>
				<div class="w-max">
					<div class="h-[1px] w-full bg-[var(--border-color-200)] mb-[0.65rem]"></div>
					<p class="text-[12px] leading-[1] italic text-black/65">
						project type: <span class="font-medium not-italic text-[var(--font-color-100)]"
							>Client</span
						>
					</p>
					<p class="text-[12px] leading-[1] italic text-black/65 mt-[0.65rem]">
						tech stack: <span class="font-medium not-italic text-[var(--font-color-100)]"
							>Vue, Nginx, Php</span
						>
					</p>
				</div>
			</div>
			<h3 class="my-[3rem] mb-[1rem]">SITA Registration Web App</h3>
			<p class="max-[768px]:text-justify">
				Developed and launched a web application solution tailored specifically for Samoa
				Information Technology Association to revolutionize their onboarding process for new and
				existing members.
			</p>
			<div class="flex gap-4 mt-9">
				<a
					href="https://register.sita.ws/"
					target="_blank"
					class="link link-color"
					title="Browse it live"
				>
					Try it out <IconHandClick size="20" stroke="1.75" />
				</a>
				<a
					href="https://github.com/sita-samoa/sita-membership"
					target="_blank"
					class="link link-plain"
					title="Dive into the code"
				>
					Github
				</a>
			</div>
		</div>

		<!-- Project Box 2 -->
		<div class="w-1/2 h-full max-[768px]:w-full">
			<div
				class="relative bg-[var(--grey-100)] rounded-[var(--border-radius-100)] w-full h-[500px] content-start pt-[2.75rem] pl-[2rem] overflow-hidden"
			>
				<img
					src={ssoWebsiteImage}
					alt="SCH Website"
					title="SCH website"
					class="absolute z-0 h-full top-36 left-1/2 -translate-x-1/2 transform object-contain"
				/>
				<div class="w-max">
					<div class="h-[1px] w-full bg-[var(--border-color-200)] mb-[0.65rem]"></div>
					<p class="text-[12px] leading-[1] italic text-black/65">
						project type: <span class="font-medium not-italic text-[var(--font-color-100)]"
							>Open Source</span
						>
					</p>
					<p class="text-[12px] leading-[1] italic text-black/65 mt-[0.65rem]">
						tech stack: <span class="font-medium not-italic text-[var(--font-color-100)]"
							>SvelteKit, Tailwind</span
						>
					</p>
				</div>
			</div>
			<h3 class="my-[3rem] mb-[1rem]">Samoa Code Hub Website</h3>
			<p class="max-[768px]:text-justify">
				Designed & Created a brand new website for Samoa Code Hub, designed from the ground up to
				reflect the vibrant programming community in Samoa. The new website showcases the latest
				projects and members for Samoa Code Hub.
			</p>
			<a href={githubLink} target="_blank" class="mt-9 link link-plain" title={githubTitle}>
				Github
			</a>
		</div>
	</div>
</div>
