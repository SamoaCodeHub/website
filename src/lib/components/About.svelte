<script>
	import { IconDiscountCheckFilled } from '@tabler/icons-svelte';
</script>

<!-- component -->
<div class="container bg-transparent py-10 mx-auto w-full">
	<h1 class="text-4xl font-bold text-center">A brief history of Samoa Stack Overflow</h1>
	<div class="relative wrap overflow-hidden p-10 h-full">
		<div
			class="border-2-2 absolute border-opacity-20 border-gray-200 h-full border"
			style="left: 50%"
		/>
		<!-- right timeline -->
		<div class="mb-8 flex justify-between items-center w-full right-timeline">
			<div class="order-1 w-5/12" />
			<div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
				<h1 class="mx-auto font-semibold text-lg text-white"><IconDiscountCheckFilled /></h1>
			</div>
			<div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
				<h3 class="font-bold text-gray-800 text-xl">Launched SSO Facebook Group</h3>
				<h4 class="mb-2 text-sm font-semibold text-gray-700">16 August 2021</h4>
			</div>
		</div>

		<!-- left timeline -->
		<div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
			<div class="order-1 w-5/12" />
			<div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
				<h1 class="mx-auto text-white font-semibold text-lg"><IconDiscountCheckFilled /></h1>
			</div>
			<div class="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
				<h3 class="font-bold text-white text-xl">Created SSO Discord Channel</h3>
				<h4 class="mb-2 text-sm font-semibold text-gray-700">16 August 2021</h4>
			</div>
		</div>

		<!-- right timeline -->
		<div class="mb-8 flex justify-between items-center w-full right-timeline">
			<div class="order-1 w-5/12" />
			<div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
				<h1 class="mx-auto font-semibold text-lg text-white"><IconDiscountCheckFilled /></h1>
			</div>
			<div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
				<h3 class="font-bold text-gray-800 text-xl">Completed SITA Membership Database Project</h3>
				<h4 class="mb-2 text-sm font-semibold text-gray-700">16 August 2021</h4>
			</div>
		</div>

		<!-- left timeline -->
		<div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
			<div class="order-1 w-5/12" />
			<div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
				<h1 class="mx-auto text-white font-semibold text-lg"><IconDiscountCheckFilled /></h1>
			</div>
			<div class="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
				<h3 class="font-bold text-white text-xl">Launched Official SSO Website</h3>
				<h4 class="mb-2 text-sm font-semibold text-gray-700">05 December 2025</h4>
				<!-- <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industry's standard dummy text ever since the 1500s, when an unknown printer took
					a galley of type and scrambled it to make a type specimen book.
				</p> -->
			</div>
		</div>
	</div>
</div>
