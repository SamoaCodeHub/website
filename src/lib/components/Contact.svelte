<script>
	import { Section } from '$lib/utils';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { IconMail, IconMapPin, IconSend } from '@tabler/icons-svelte';
	import { validateEmail, triggerToast } from '$lib/utils/form';
	import { submitContactForm } from '$lib/service/contactService';
	import { socialItems } from '$lib/utils/socialLinks';
	import ClickToCopy from '$lib/components/ClickToCopy.svelte';

	const env = import.meta.env.VITE_ENV ?? 'development';
	const formSpree = import.meta.env.VITE_FORMSPREE ?? '#';
	const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
	const toast = getToastStore();

	let firstname = '';
	let lastname = '';
	let email = '';
	let phone = '';
	let message = '';

	function clearForm() {
		firstname = '';
		lastname = '';
		email = '';
		phone = '';
		message = '';
	}

	async function handleSubmit() {
		// Dev mode skip
		if (env === 'development') {
			triggerToast(toast, 'Thanks for your submission!');
			clearForm();
			return;
		}

		try {
			if (!validateEmail(email)) {
				triggerToast(toast, 'Please enter a valid email address', 'error');
				return;
			}

			const recaptchaToken = document.getElementById('recaptchaResponse')?.value;

			if (!recaptchaToken) {
				triggerToast(toast, 'Please complete the ReCAPTCHA', 'error');
				return;
			}

			await submitContactForm(formSpree, {
				firstname,
				lastname,
				email,
				phone,
				message,
				'g-recaptcha-response': recaptchaToken
			});

			triggerToast(toast, 'Thanks for your submission!');
			clearForm();
		} catch (err) {
			triggerToast(toast, err.message || 'Oops! There was a problem submitting your form', 'error');
		} finally {
			window.grecaptcha?.reset?.();
		}
	}

	// social media buttons specs
	let iconSize = 18;

	const colors = ['bg-[#222222]', 'bg-[#8a75ff]', 'bg-[#1877f2]'];

	const hoverColors = [
		'group-hover:bg-[#555555]',
		'group-hover:bg-[#9f8efa]',
		'group-hover:bg-[#5da2fc]'
	];
</script>

<svelte:head>
	{#if recaptchaSiteKey && env !== 'development'}
		<script src="https://www.google.com/recaptcha/api.js"></script>
		<script>
			function recaptchaCallback(token) {
				window.document.getElementById('recaptchaResponse').value = token;
			}
		</script>
	{/if}
</svelte:head>

<section id={Section.Contact} class="py-[clamp(3.125rem,8.3vw,7.5rem)]">
	<h2>Contact Us</h2>
	<div class="contact-container flex gap-8 flex-col md:flex-row">
		<!-- First box -->
		<div
			class="w-full md:w-[60%] px-6 py-8 bg-[var(--grey-100)] rounded-[var(--border-radius-100)] flex flex-col"
		>
			<h4>Any questions or remarks? Just write us a message!</h4>
			<form
				action={formSpree}
				on:submit|preventDefault={handleSubmit}
				class="input-container grid grid-cols-1 gap-y-6 gap-x-0 mt-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-0 auto-rows-auto"
				method="POST"
			>
				<input
					type="text"
					class="row-start-1 row-end-2 col-start-1 col-end-2 border-0 border-b-2 border-[var(--border-color-100)]
		  		 bg-[var(--background-color-100)] p-2 rounded-[var(--border-radius-100)] focus:border-0"
					name="name"
					placeholder="Enter your name"
					bind:value={firstname}
					required
				/>
				<input
					type="email"
					class="row-start-1 row-end-2 col-start-2 col-end-3 border-0 border-b-2 border-[var(--border-color-100)]
		  		 bg-[var(--background-color-100)] p-2 rounded-[var(--border-radius-100)] focus:border-0"
					name="email"
					placeholder="Enter your email-address"
					bind:value={email}
					required
				/>
				<textarea
					placeholder="Enter your message"
					class="border-0 border-b-2 border-[var(--border-color-100)] bg-[var(--background-color-100)] p-2
		  		 rounded-[var(--border-radius-100)] focus:border-0 resize-none mt-8 max-[620px]:mt-0 col-span-2 row-span-2"
					name="message"
					rows="8"
					bind:value={message}
					required
				/>
				{#if recaptchaSiteKey && env !== 'development'}
					<div
						data-sitekey={recaptchaSiteKey}
						data-callback="recaptchaCallback"
						class="g-recaptcha col-span-2 row-start-4 row-end-5 w-max justify-self-center mt-4"
					></div>
					<input id="recaptchaResponse" name="recaptchaResponse" type="hidden" />
				{/if}
				<button
					type="submit"
					class="submit link link-color col-span-2 row-start-5 row-end-6 mt-8 mx-auto"
				>
					Send Message
					<IconSend size="20" />
				</button>
			</form>
			<p class="text-[12px] mx-auto mt-4 text-black/55">Your data is safe with us.</p>
		</div>

		<!-- Second box -->
		<div
			class="flex flex-col sm:flex-row md:flex-col px-6 py-8 bg-[var(--grey-100)] rounded-[var(--border-radius-100)] md:w-[40%]"
		>
			<div
				class="pb-[2.75rem] border-b-2 border-[var(--border-color-100)] max-[768px]:pr-8 max-[768px]:border-r-2 max-[768px]:border-b-0
            max-[550px]:pr-0 max-[640px]:border-b-2 max-[640px]:border-r-0"
			>
				<h4 class="mb-[1.75rem]">Contact Information</h4>
				<div class="w-max flex justify-center items-center">
					<span
						class="bg-[var(--grey-300)] h-[30px] aspect-square rounded-[var(--border-radius-100)] flex items-center justify-center
            		   transition-all duration-100 ease-in mr-[0.65rem]"
					>
						<IconMapPin size="19" />
					</span>
					<p>Apia, Samoa</p>
				</div>
				<abbr title="Click to copy email adress">
					<ClickToCopy text="samoastackoverflow@gmail.com" classes="email-button">
						<span
							class="email-icon h-[30px] aspect-square rounded-[var(--border-radius-100)] flex items-center justify-center
            			 transition-all duration-100 ease-in mr-[0.65rem] text-[var(--font-color-100)] bg-[rgb(252,187,66)]"
						>
							<IconMail size="18" />
						</span>
						samoastackoverflow@gmail.com
					</ClickToCopy>
				</abbr>
			</div>

			<div
				class="mt-[2.75rem] max-[768px]:pl-8 max-[768px]:mt-0 max-[640px]:pl-0 max-[640px]:mt-[2.75rem]"
			>
				<h4 class="mb-[1.75rem]">Find us also on:</h4>
				<ul>
					{#each socialItems as item, i}
						<li class={i === 1 ? 'my-[1.25rem]' : ''}>
							<a
								href={item.link}
								target="_blank"
								title={item.title}
								class="w-max flex justify-center items-center group"
							>
								<span
									class="text-white {colors[i]} {hoverColors[
										i
									]} transition-colors h-[30px] aspect-square rounded-[var(--border-radius-100)]
            				 flex items-center justify-center duration-100 ease-in mr-[0.65rem]"
								>
									<svelte:component this={item.icon} size={iconSize} />
								</span>
								{item.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<style>
	@media (max-width: 620px) {
		/* forcefully reset positioning */
		.input-container input:nth-child(1),
		.input-container input:nth-child(2),
		.input-container textarea,
		.input-container .g-recaptcha,
		.input-container .submit {
			grid-column: 1 / -1 !important;
			grid-row: auto !important;
		}
	}

	:global(.email-button) {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: clamp(0.875rem, 0.7188rem + 0.5vw, 1rem);
		margin-top: 1.25rem;
	}

	@media (max-width: 1024px) {
		:global(.email-button) {
			word-break: break-all;
		}
	}

	:global(.email-button:hover .email-icon) {
		background: hsl(39, 97%, 70%);
	}
</style>
