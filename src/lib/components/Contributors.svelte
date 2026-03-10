<script>
	import { Section } from '$lib/utils';
	import { IconArrowUpRight, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-svelte';
	import { Contributors } from '$lib/utils/contributors';
	import { joinUs } from '$lib/utils/socialLinks';
	import EmblaCarousel from '$lib/components/EmblaCarousel.svelte';

	// social media icon specs
	let iconSize = 22;
	let iconColor = '#ffffff';
	let iconStroke = 1.75;
</script>

<section id={Section.Contributors} class="team-section py-32 overflow-hidden">
	<h2>Meet our Seki Devs</h2>
	<p class="max-w-[500px] w-full mb-9 [@media(max-width:450px)]:text-justify">
		Tama Samoa who are building a vibrant community of software developers right here on our island.
		At our meet-ups, we share ideas, explore the latest tech trends, and swap stories from the world
		of code. Think you’ve got something to bring to the table? We’d love to have you on board, join
		us right
		<a
			href={joinUs.link}
			target="_blank"
			class="inline p-0 m-0 underline font-semibold"
			title={joinUs.title}>here.</a
		>
	</p>
	<div
		class="card-container hidden md:grid bg-[var(--grey-100)] grid-cols-[repeat(3,_minmax(234px,_270px))] justify-center
              gap-[3.55rem] max-[900px]:gap-6 py-[3.65rem] rounded-[var(--border-radius-100)]"
	>
		{#each Contributors as teamMember}
			<div
				class="card-contributor relative flex flex-col flex-[0_0_100%] h-[320px] overflow-hidden rounded-[var(--border-radius-100)]"
			>
				<img
					src={teamMember.avatar}
					loading="lazy"
					alt={teamMember.name}
					title={teamMember.name}
					class="absolute top-[30px] left-[25px] h-full w-full object-cover filter grayscale scale-[1.2] z-0"
				/>
				<span
					class="detail absolute z-[2] bottom-4 left-4 rounded-[20px] transition-all duration-200 ease-in-out
                     text-[var(--accent-color-100)] flex justify-center items-center"
				>
					details <IconArrowUpRight size="20" />
				</span>
				<div
					class="contributor-info transition-all duration-300 ease-in-out h-full w-full content-end z-[2] p-4 relative"
				>
					<h3 class="font-extrabold text-white mb-2 leading-none text-[1.3rem]">
						{teamMember.name}
					</h3>
					<p class="text-[#f2f2f2] font-medium italic transition-all duration-200 ease-in-out mb-1">
						{teamMember.title}
					</p>
					<div
						class="social-links-container w-max flex justify-start items-start gap-4 transition-all duration-200
                      ease-in-out opacity-0 pointer-events-none translate-y-[150%]"
					>
						<abbr title={`${teamMember.name.trim().split(/\s+/)[0]}'s LinkedIn`}>
							<a
								href={teamMember.linkedin}
								target="_blank"
								class="h-[35px] aspect-square rounded-[var(--border-radius-100)] flex justify-center items-center
                        transition-all duration-100 ease-in-out bg-[#0072b1] hover:bg-[hsl(201,99%,39%)]"
							>
								<IconBrandLinkedin size={iconSize} color={iconColor} stroke={iconStroke} />
							</a>
						</abbr>
						<abbr title={`${teamMember.name.trim().split(/\s+/)[0]}'s Github`}>
							<a
								href={teamMember.github}
								target="_blank"
								class="h-[35px] aspect-square rounded-[var(--border-radius-100)] flex justify-center items-center
                        transition-all duration-100 ease-in-out bg-[#222222] hover:bg-[#555555]"
							>
								<IconBrandGithub size={iconSize} color={iconColor} stroke={iconStroke} />
							</a>
						</abbr>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<EmblaCarousel>
		{#each Contributors as teamMember}
			<div
				class="embla__slide flex-[0_0_80%] min-w-0 max-w-[270px] h-[300px] relative overflow-hidden
                     rounded-[var(--border-radius-100)] text-left"
			>
				<img
					src={teamMember.avatar}
					loading="lazy"
					alt={teamMember.name}
					title={teamMember.name}
					class="absolute top-[30px] left-[25px] h-full w-full object-cover filter grayscale scale-[1.2] z-0"
				/>
				<span
					class="detail absolute z-[2] bottom-4 left-4 rounded-[20px] transition-all duration-200 ease-in-out
                     text-[var(--accent-color-100)] flex justify-center items-center"
				>
					details <IconArrowUpRight size="20" />
				</span>
				<div
					class="contributor-info transition-all duration-300 ease-in-out h-full w-full content-end z-[2] p-4 relative"
				>
					<h3 class="font-extrabold text-white mb-2 leading-none text-[1.3rem]">
						{teamMember.name}
					</h3>
					<p class="text-[#f2f2f2] font-medium italic transition-all duration-200 ease-in-out mb-1">
						{teamMember.title}
					</p>
					<div
						class="social-links-container w-max flex justify-start items-start gap-4 transition-all duration-200 ease-in-out
                      opacity-0 pointer-events-none translate-y-[150%]"
					>
						<a
							href={teamMember.linkedin}
							target="_blank"
							class="h-[35px] aspect-square rounded-[var(--border-radius-100)] flex justify-center items-center
                      transition-all duration-100 ease-in-out bg-[#0072b1]"
						>
							<IconBrandLinkedin size={iconSize} color={iconColor} stroke={iconStroke} />
						</a>
						<a
							href={teamMember.github}
							target="_blank"
							class="h-[35px] aspect-square rounded-[var(--border-radius-100)] flex justify-center items-center
                      transition-all duration-100 ease-in-out bg-[#222222]"
						>
							<IconBrandGithub size={iconSize} color={iconColor} stroke={iconStroke} />
						</a>
					</div>
				</div>
			</div>
		{/each}
	</EmblaCarousel>
</section>

<style lang="postcss">
	.card-contributor:hover .detail,
	.embla__slide:active .detail,
	.embla__slide:focus .detail {
		opacity: 0;
	}

	.card-contributor:hover .contributor-info p,
	.embla__slide:active .contributor-info p,
	.embla__slide:focus .contributor-info p {
		margin-bottom: 1.25rem;
	}

	.contributor-info:hover .social-links-container,
	.contributor-info:active .social-links-container,
	.contributor-info:focus .social-links-container {
		opacity: 1;
		pointer-events: all;
		transform: translateY(0%);
	}

	.card-contributor::before,
	.embla__slide::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		aspect-ratio: 1;
		background: linear-gradient(205deg, rgb(0, 0, 0, 0.3) 50%, var(--accent-color-100) 100%);
		z-index: 2;
		opacity: 0;
		transition: all 0.3s ease-in-out;
	}

	.card-contributor::after,
	.embla__slide::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background: linear-gradient(205deg, transparent 50%, rgb(0, 0, 0, 0.8) 100%);
		z-index: 1;
		transition: all 0.3s ease-in-out;
	}

	.card-contributor:hover::after,
	.embla__slide:active::after,
	.embla__slide:focus::after {
		opacity: 0;
	}

	.card-contributor:hover::before,
	.embla__slide:active::before,
	.embla__slide:focus::before {
		opacity: 1;
	}

	.card-container:has(.card-contributor:hover) .card-contributor:not(:hover) span {
		filter: grayscale(100%);
	}
</style>
