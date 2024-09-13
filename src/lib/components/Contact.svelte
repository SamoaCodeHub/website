<script>
	import { Section } from '$lib/utils';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { IconMailFilled, IconMapPinFilled } from '@tabler/icons-svelte';

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

	function validateEmail(email) {
		const re = /\S+@\S+\.\S+/;
		return re.test(email);
	}

	function triggerToast(message, type = 'success') {
		let background;
		switch (type) {
			case 'success':
				background = 'variant-filled-success';
				break;
			case 'error':
				background = 'variant-filled-error';
				break;
			default:
				background = 'variant-filled-success';
		}
		const t = {
			message,
			background,
			timeout: 2500
		};
		toast.trigger(t);
	}

	async function handleSubmit(_event) {
		if (env === 'development') {
			triggerToast('Thanks for your submission!', 'success');
			clearForm();
			return;
		}
		try {
			if (!validateEmail(email)) {
				triggerToast('Please enter a valid email address', 'error');
				return;
			}
			window.grecaptcha = window.grecaptcha || {};

			const recaptchaResponse = window.document.getElementById('recaptchaResponse').value;
			if (!recaptchaResponse) {
				triggerToast('Please complete the ReCAPTCHA', 'error');
				return;
			}
			const response = await fetch(formSpree, {
				method: 'POST',
				body: JSON.stringify({
					firstname,
					lastname,
					email,
					phone,
					message,
					'g-recaptcha-response': recaptchaResponse
				}),
				headers: {
					Accept: 'application/json'
				}
			});
			if (response.ok) {
				triggerToast('Thanks for your submission!', 'success');
				clearForm();
			} else {
				const data = await response.json();
				if (Object.hasOwn(data, 'errors')) {
					const errorMessages = data['errors'].map((error) => error['message']).join(', ');
					triggerToast(errorMessages, 'error');
				} else {
					triggerToast('Oops! There was a problem submitting your form', 'error');
				}
			}
		} catch (error) {
			triggerToast('Oops! There was a problem submitting your form', 'error');
		} finally {
			if (window.grecaptcha) {
				window.grecaptcha.reset();
			}
		}
	}

	//copy-to-clipboard function for email adress
	function copyEmailToClipboard() {
		const email = document.querySelector('.sch-email').textContent;
		navigator.clipboard
			.writeText(email)
			.then(() => {
				triggerToast('Email copied to clipboard!', 'success');
			})
			.catch((error) => {
				triggerToast('Error copying email to clipboard', 'error');
			});
	}
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
<section id={Section.Contact} class="px-3 py-5 rounded-none lg:py-10 lg:px-5">
	<div class="grid justify-center gap-4 p-10">
		<h1 class="font-bold text-center h1">Contact Us</h1>
		<h3 class="text-[#5d5c5c] dark:text-[#cecece]">
			Any questions or remarks? Just write us a message!
		</h3>
	</div>
	<div
		class="p-0 w-auto gap-4 mx-auto border-transparent rounded-md lg:w-3/5 opacity-95 bg-slate-100 md:flex md:grid-cols-2"
	>
		<div class="p-6 text-white rounded-t-md text-wrap sm:rounded-md bg-surface-600 lg:w-1/3">
			<header class="font-medium card-header h3 p-0">Contact Information</header>
			<section class="grid gap-5 mt-8 lg:mt-10 lg:gap-7">
				<div class="flex items-start justify-start gap-3">
					<IconMailFilled />
					<abbr title="click to copy">
						<button class="sch-email" on:click={() => copyEmailToClipboard()}>
							samoastackoverflow@gmail.com
						</button>
					</abbr>
				</div>
				<div class="flex items-start justify-start gap-3">
					<IconMapPinFilled />
					<span>Apia, Samoa</span>
				</div>
				<div></div>
			</section>
		</div>
		<form
			action={formSpree}
			on:submit|preventDefault={handleSubmit}
			class="grid w-full mx-auto lg:p-5"
			method="POST"
		>
			<div class="grid w-full gap-6 p-3 text-black md:p-5 md:grid-cols-2">
				<label class="text-sm label">
					<span>First Name</span>
					<input
						class="text-sm input variant-form-material"
						type="text"
						name="firstName"
						placeholder="Enter first name"
						bind:value={firstname}
						required
					/>
				</label>

				<label class="text-sm label">
					<span>Last Name</span>
					<input
						class="text-sm input variant-form-material"
						type="text"
						name="lastName"
						placeholder="Enter last name"
						bind:value={lastname}
						required
					/>
				</label>

				<label class="text-sm label">
					<span>Email</span>
					<input
						class="text-sm input variant-form-material"
						type="email"
						name="email"
						placeholder="Enter email address"
						bind:value={email}
						required
					/>
				</label>

				<label class="text-sm label">
					<div class="flex gap-2">
						<span>Phone </span>
						<span class="text-gray-400">(Optional)</span>
					</div>
					<input
						class="text-sm input variant-form-material"
						type="text"
						name="phone"
						placeholder="Enter phone number"
						bind:value={phone}
					/>
				</label>
			</div>
			<label class="p-5 text-sm text-black lg:mt-4 label">
				<span>Message</span>
				<textarea
					class="text-sm textarea variant-form-material"
					rows="4"
					placeholder="Write your message."
					name="message"
					bind:value={message}
					required
				/>
			</label>
			{#if recaptchaSiteKey && env !== 'development'}
				<div
					class="g-recaptcha"
					data-sitekey={recaptchaSiteKey}
					data-callback="recaptchaCallback"
				></div>
				<input id="recaptchaResponse" name="recaptchaResponse" type="hidden" />
			{/if}
			<button
				type="submit"
				class="mx-2 mt-2 mb-6 px-12 text-white bg-blue-500 rounded-xl md:justify-self-center btn"
			>
				Send message
			</button>
		</form>
	</div>
</section>

<style>
	.sch-email {
		word-break: break-word;
		text-align: start;
		cursor: pointer;
	}

	.g-recaptcha {
		padding-left: 0.75rem;
	}

	textarea {
		resize: none;
	}

	.rounded-t-md {
		border-top-left-radius: 0.375rem;
		border-top-right-radius: 0rem;
		border-bottom-right-radius: 0rem;

		@media (max-width: 768px) {
			border-top-right-radius: 0.375rem;
			border-bottom-left-radius: 0rem;
		}
	}
</style>
