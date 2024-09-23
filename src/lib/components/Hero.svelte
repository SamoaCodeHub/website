<script>
	import { Section } from '$lib/utils';
</script>

<section id={Section.Hero} class="py-8 text-black md:py-24 dark:text-white">
	<div class="max-w-screen-xl px-3 mx-auto md:px-10">
		<div class="flex flex-col items-center space-x-0 xl:flex-row">
			<div class="flex flex-col items-center w-full xl:w-2/3">
				<div class="flex flex-col space-y-4">
					<h1
						class="text-5xl font-bold text-center sm:text-6xl md:text-7xl font-heading xl:text-left mb-2"
					>
						Innovate,
						<div class="relative py-2 xl:py-4">
							<span class="relative z-10 inline-block span"> Collaborate, </span>
						</div>
						Create
					</h1>
					<p
						class="text-center text-md xl:text-lg xl:text-left md:max-w-[520px] max-w-[350px] text-[#5d5c5c] dark:text-[#cecece]"
					>
						<b>Samoa Code Hub</b> - Innovation meets collaboration in a thriving community of over 20
						contributing software developers.
					</p>
				</div>

				<div
					class="mt-10 w-[80%] lg:w-[100%] mx-auto xl:mx-0 lg:max-w-[600px] flex sm:flex-row flex-col items-center sm:gap-8 gap-4"
				>
<<<<<<< HEAD
					
=======
					<div class="button-wrapper flex justify-start pl-10 flex-1 w-full sm:w-auto">
>>>>>>> b7e16a2 (made requested changes for pr)
						<p class="sr-only">
							Press Join us Now to find out more about becoming a Samoa Code Hub Member
						</p>
						<a
							rel="external"
							target="_blank"
							href="https://docs.google.com/forms/d/e/1FAIpQLSckLWtZky5-jGFWi4HnzuCQC3F1af3-LaCYhRrU5NCK36HJ4g/viewform"
							class="py-3 bg-blue-500 hover:bg-blue-600 rounded-xl px-14 text-white">Join us Now</a
						>
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

	h1 {
		line-height: 0.8;
		@media (max-width: 1282px) {
			line-height: 1.1;
		}
	}

	a {
		font-weight: 600;
	}

	img {
		@media (max-width: 1282px) {
			width: 75%;
			margin-inline: auto;
		}
		@media (max-width: 768px) {
			width: 100%;
		}
	}

	.button-wrapper {
		@media (max-width: 1282px) {
			justify-content: center;
		}
	}

	.span::after {
		position: absolute;
		top: -5%;
		left: 50%;
		transform: translateX(-50%);
		content: '';
		height: 120%;
		width: 102%;
		z-index: -1;
		background: #dd5757;
		border-radius: 0.75rem;
	}
</style>
