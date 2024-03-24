<script>
	import { Section } from '$lib/utils';
</script>

<section id={Section.Hero} class="py-8 text-black md:py-24 dark:text-white">
	<div class="max-w-screen-xl px-3 mx-auto md:px-10">
		<div class="flex flex-col items-center space-x-0 xl:flex-row">
			<div class="flex flex-col w-full xl:w-2/3">
				<div class="flex flex-col space-y-4">
					<h1
						class="text-4xl font-bold text-center sm:text-6xl md:text-7xl font-heading xl:text-left"
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
					<p class="text-center text-md xl:text-xl xl:text-left">
						Samoa Code Hub - Where Innovation meets Collaboration
					</p>
				</div>

				<div
					class="mt-4 w-[80%] lg:w-[100%] mx-auto xl:mx-0 lg:max-w-[600px] flex sm:flex-row flex-col items-center sm:gap-8 gap-4"
				>
					<div class="flex-1 w-full sm:w-auto">
						<p class="sr-only">
							Press Join us Now to find out more about becoming a Samoa Code Hub Member
						</p>
						<a
							rel="external"
							target="_blank"
							href="https://docs.google.com/forms/d/e/1FAIpQLSckLWtZky5-jGFWi4HnzuCQC3F1af3-LaCYhRrU5NCK36HJ4g/viewform"
							class="py-3 bg-blue-500 hover:bg-blue-600 rounded-xl px-14">Join us Now</a
						>
					</div>
					<div class="flex flex-row justify-center flex-1 text-sm sm:gap-2 sm:text-base">
						<div
							class="flex flex-row justify-center flex-1 gap-1 text-sm sm:flex-col sm:gap-0 sm:text-base"
						>
							<p class="font-semibold">
								A community of software developers<span class="inline sm:hidden">.</span>
							</p>
							<p class="text-base-content/70">
								+20 contributing members<span class="inline sm:hidden">.</span>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="w-full pt-2 xl:w-2/3">
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
