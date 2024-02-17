<script>
	import { Section } from '$lib/utils';
	import lunchSita from '../assets/images/lunch_sita.jpg';
	import sprintMeeting from '../assets/images/sprint_meeting.jpg';
	import ssoLunch1 from '../assets/images/sso_lunch.jpg';
	import ssoLunch2 from '../assets/images/sso_lunch_2.jpg';
	import ssoLunch3 from '../assets/images/sso_lunch_3.jpg';
	import workshop from '../assets/images/workshop.jpg';
</script>

<section id={Section.Media} class="w-full">
	<div class="container px-5 py-2 lg:px-32 lg:py-24 text-white mx-auto">
		<h1
			class="text-center h1 font-bold border-yellow-50 py-7 drop-shadow-xl dark:shadow-none md:pb-[5%]"
		>
			Samoa Stack Overflow <br /> Meet Ups
		</h1>
		<div class="-m-1 flex flex-wrap md:-m-2">
			<div class="flex w-full flex-wrap lg:w-1/2">
				<div class="w-full p-1 md:p-2 md:w-1/2">
					<img
						alt="gallery"
						class="block h-full w-full rounded-lg object-cover object-center"
						src={ssoLunch3}
					/>
				</div>
				<div class="w-full p-1 md:p-2 md:w-1/2">
					<img
						alt="gallery"
						class="block h-full w-full rounded-lg object-cover object-center"
						src={lunchSita}
					/>
				</div>
				<div class="w-full p-1 md:p-2">
					<img
						alt="gallery"
						class="block h-full w-full rounded-lg object-cover object-center"
						src={workshop}
					/>
				</div>
			</div>
			<div class="flex w-full flex-wrap lg:w-1/2">
				<div class="w-full p-1 md:p-2">
					<img
						alt="gallery"
						class="block h-full w-full rounded-lg object-cover object-center"
						src={ssoLunch1}
					/>
				</div>
				<div class="w-full p-1 md:p-2 md:w-1/2">
					<img
						alt="gallery"
						class="block h-full w-full rounded-lg object-cover object-center"
						src={ssoLunch2}
					/>
				</div>
				<div class="w-full p-1 md:p-2 md:w-1/2">
					<img
						alt="gallery"
						class="block h-full w-full rounded-lg object-cover object-center"
						src={sprintMeeting}
					/>
				</div>
			</div>
		</div>
	</div>
</section>
