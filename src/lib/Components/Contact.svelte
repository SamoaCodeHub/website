<script>
	import { IconMailFilled, IconPhoneFilled, IconMapPinFilled } from '@tabler/icons-svelte';

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

<section class="px-3 py-5 rounded-none lg:py-10 lg:px-5 card bg-surface-400">
	<div class="grid justify-center gap-4 p-10 text-white">
		<h1 class="font-bold text-center h1">Contact Us</h1>
		<h3>Any questions or remarks? Just write us a message!</h3>
	</div>
	<div
		class="w-auto gap-4 mx-auto border-transparent rounded-md sm:p-1 lg:w-3/5 opacity-95 bg-slate-100 md:flex md:grid-cols-2"
	>
		unded-md sm:p-1 lg:w-3/5 opacity-95 bg-slate-100 md:flex md:grid-cols-2">
		<div class="p-6 text-white rounded-t-md sm:rounded-md bg-surface-600 lg:w-1/3">
			<header class="font-medium card-header h3">Contact Information</header>
			<section class="grid gap-5 mt-8 lg:mt-10 lg:gap-10">
				<div class="flex gap-5">
					<IconPhoneFilled />
					<span>+685 1234567</span>
				</div>
				<div class="flex gap-5">
					<IconMailFilled />
					<span>admin@sso.com</span>
				</div>
				<div class="flex gap-5">
					<IconMapPinFilled />illed/>
					<span>Apia, Samoa</span>
				</div>
			</section>
		</div>
		<form class="grid w-full mx-auto lg:p-5" on:submit|preventDefault={handleSubmit}>
			<div class="grid w-full gap-6 p-3 text-black md:p-5 md:grid-cols-2">
				<label class="text-sm label">
					<span>First Name</span>
					<input
						class="text-sm input variant-form-material"
						type="text"
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
						placeholder="Enter last name"
						bind:value={lastname}
						required
					/>
				</label>

				<label class="text-sm label">
					<span>Email</span>
					<input
						class="text-sm input variant-form-material"
						type="text"
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
						placeholder="Enter phone number"
						bind:value={phone}
					/>
				</label>
			</div>
			<label class="p-3 text-sm text-black lg:mt-4 label">
				<span>Message</span>
				<textarea
					class="text-sm textarea variant-form-material"
					rows="4"
					placeholder="Write your message."
					bind:value={message}
					required
				/>
			</label>
			<div class="mx-2 mt-2 mb-6 text-white bg-blue-500 rounded-xl md:justify-self-end btn">
				<button type="submit"> Send message </button>
			</div>
		</form>
	</div>
</section>
