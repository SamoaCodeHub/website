<script>
	import {
		IconMailFilled,
		IconPhoneFilled,
		IconMapPinFilled,
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

<section class="py-10 bg-surface-300">
	<div class="grid justify-center gap-4 p-10 text-black">
		<h1 class="font-bold text-center h1">Contact Us</h1>
		<h3>Any questions or remarks? Just write us a message!</h3>
	</div>
	<div class="w-3/5 gap-4 p-1 mx-auto rounded-lg opacity-95 bg-slate-100 md:flex md:grid-cols-2">
		<div class="p-6 card lg:w-1/3">
			<header class="font-medium card-header h3">Contact Information</header>
			<section class="grid gap-5 mt-8 lg:mt-10 lg:gap-10">
				<div class="flex gap-5">
					<IconPhoneFilled class="" />
					<span>+685 1234567</span>
				</div>
				<div class="flex gap-5">
					<IconMailFilled class=""/>
					<span>admin@sso.com</span>
				</div>
				<div class="flex gap-5">
					<IconMapPinFilled class=""/>
					<span>Apia, Samoa</span>
				</div>
			</section>
		</div>
		
		<form class="grid p-2 mx-auto lg:p-8" on:submit|preventDefault={handleSubmit}>
			<div class="grid w-full text-black lg:gap-4 lg:grid-cols-2 md:gap-6">
				<label class="text-sm label">
					<span>First Name</span>
					<input class="text-sm input variant-form-material" type="text" placeholder="Enter first name" bind:value={firstname} required />
				</label>

				<label class="text-sm label">
					<span>Last Name</span>
					<input class="text-sm input variant-form-material" type="text" placeholder="Enter last name" bind:value={lastname} required />
				</label>

				<label class="text-sm label">
					<span>Email</span>
					<input class="text-sm input variant-form-material" type="text" placeholder="Enter email address" bind:value={email} required />
				</label>

				<label class="text-sm label">
					<div class="flex gap-2">
						<span>Phone
						</span>
						<span class="text-gray-400">(Optional)</span>
					</div>
					<input class="text-sm input variant-form-material" type="text" placeholder="Enter phone number" bind:value={phone} />
				</label>
			</div>
			<label class="mt-8 text-sm text-black label">
				<span>Message</span>
				<textarea class="text-sm textarea variant-form-material" rows="4" placeholder="Write your message." bind:value={message} required/>
			</label>
			
			<button type="submit" class="mt-2 mb-6 rounded-lg md:justify-self-end btn variant-filled-secondary">
				Send Message
			</button>
		</form>
	</div>
</section>