<script>
	import {
		IconDeviceMobileMessage,
		IconMail,
		IconLocation,
	} from '@tabler/icons-svelte';

	let firstname = '';
	let lastname = '';
	let email = '';
	let phone = '';
	let message = '';

	const handleSubmit = () => {
		console.log('First Name:', firstname);
		console.log('Last Name:', lastname);
		console.log('Email:', email);
		console.log('Phone:', phone);
		console.log('Message:', message);
	};
</script>

<section class="h-full bg-gradient-to-br lg:px-10">
	<div class="grid p-5 md:gap-8 sm:grid-cols-2">
		<div class="p-10 mx-auto card variant-filled">
			<h1 class="font-bold h1">Contact Information</h1>
			<div class="grid gap-5 mt-8 lg:mt-16 lg:gap-10">
				<div class="flex gap-5">
					<IconDeviceMobileMessage />
					<span>+685 1234567</span>
				</div>
				<div class="flex gap-5">
					<IconMail />
					<span>admin@sso.com</span>
				</div>
				<div class="flex gap-5">
					<IconLocation />
					<span>Apia, Samoa</span>
				</div>
			</div>
		</div>
		
		<form class="grid mt-16 lg:mx-10 lg:p-8" on:submit|preventDefault={handleSubmit}>
			<div class="grid w-full gap-4 md:gap-6 lg:grid-cols-2">
				<label class="label">
					<span>First Name</span>
					<input class="input variant-form-material" type="text" placeholder="Enter first name" bind:value={firstname} required />
				</label>

				<label class="label">
					<span>Last Name</span>
					<input class="input variant-form-material" type="text" placeholder="Enter last name" bind:value={lastname} required />
				</label>

				<label class="label">
					<span>Email</span>
					<input class="input variant-form-material" type="text" placeholder="Enter email address" bind:value={email} required />
				</label>

				<label class="label">
					<span>Phone Number 
						<span class="text-gray-400">(Optional)</span>
					</span>
					<input class="input variant-form-material" type="text" placeholder="Enter phone number" bind:value={phone} />
				</label>
			</div>
			<label class="mt-8 label">
				<span>Message</span>
				<textarea class="textarea variant-form-material" rows="4" placeholder="Write your message." bind:value={message} required/>
			</label>
			
			<button type="submit" class="mt-4 lg:mt-8 justify-self-end btn variant-filled-secondary">
				Send Message
			</button>
		</form>
	</div>
</section>

<style lang="postcss">
	section {
		background-image: url('/images/hero-bg.svg');
		background-size: cover;
		background-position: center;
	}
</style>