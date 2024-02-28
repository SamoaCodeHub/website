<script>
	import { Section } from '$lib/utils';
</script>

<section id={Section.Hero} class="py-8 md:py-24 text-black dark:text-white">
	<div class="max-w-screen-xl mx-auto px-3 md:px-10">
		<div class="flex flex-col xl:flex-row items-center space-x-0">
			<div class="flex flex-col w-full xl:w-2/3">
				<div class="flex flex-col space-y-4">
					<h1
						class="text-4xl sm:text-6xl md:text-7xl font-bold font-heading text-center xl:text-left"
					>
						Innovate,
						<div class="relative py-2 xl:py-4">
							<span class="relative z-10 inline-block">
								Collaborate
								<span
									class="absolute top-2 left-0 md:left-3 md:top-3 w-full h-full bg-[#dd5757] rounded-xl z-[-999]"
								/>
							</span>
						</div>
						Create
					</h1>
					<p class="text-md xl:text-xl text-center xl:text-left">
						Samoa Stack Overflow - Where Innovation meets Collaboration
					</p>
				</div>

				<div
					class="mt-4 w-[80%] lg:w-[100%] mx-auto xl:mx-0 lg:max-w-[600px] flex sm:flex-row flex-col items-center sm:gap-8 gap-4"
				>
					<div class="flex-1 sm:w-auto w-full">
						<p class="sr-only">
							Press Join us Now to find out more about becoming a Samoa Stack Overflow Member
						</p>
						<a
							rel="external"
							target="_blank"
							href="https://docs.google.com/forms/d/e/1FAIpQLSckLWtZky5-jGFWi4HnzuCQC3F1af3-LaCYhRrU5NCK36HJ4g/viewform"
							class="bg-blue-500 hover:bg-blue-600 rounded-xl px-14 py-3">Join us Now</a
						>
					</div>
					<div class="flex-1 flex flex-row sm:gap-2 text-sm sm:text-base justify-center">
						<div
							class="flex-1 flex sm:flex-col flex-row sm:gap-0 gap-1 text-sm sm:text-base justify-center"
						>
							<p class="font-semibold">
								A community of software developers<span class="sm:hidden inline">.</span>
							</p>
							<p class="text-base-content/70">
								+20 contributing members<span class="sm:hidden inline">.</span>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="w-full xl:w-2/3 pt-2">
				<img src="/images/sso-banner-img.svg" class="w-full h-full" alt="Hero Section" />
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	section {
		background-image: url('/images/hero-bg.svg');
		background-size: cover;
		background-position: center;
	}
</style>
