<script>
	let name = '';
	let email = '';
	let phone = '';
	let message = '';

	const handleSubmit = () => {
		console.log('Name:', name);
		console.log('Email:', email);
		console.log('Phone:', phone);
		console.log('Message:', message);
	};
</script>

<article class="px-10 mt-6">
	<header class="text-3xl">Contact Us</header>
	<form class="px-8" on:submit|preventDefault={handleSubmit}>
		<label for="name" class="block mt-2">Name:</label>
		<input
			type="text"
			id="name"
			class="w-full p-2 mt-2 text-black border rounded "
			bind:value={name}
			required
		/>

		<label for="email" class="block mt-2">Email:</label>
		<input
			type="email"
			id="email"
			class="w-full p-2 mt-2 text-black border rounded"
			bind:value={email}
			required
		/>

		<label for="phone" class="block mt-2">Phone (Optional):</label>
		<input
			type="phone"
			id="phone"
			class="w-full p-2 mt-2 text-black border rounded"
			bind:value={phone}
		/>

		<label for="message" class="block mt-2">Message:</label>
		<textarea
			id="message"
			class="w-full p-2 mt-2 text-black border rounded"
			bind:value={message}
			required
		/>

		<button
			class="p-2 mt-2 mb-6 bg-blue-500 border-none rounded cursor-pointer hover:bg-blue-600"
			type="submit">Submit</button
		>
	</form>
</article>
