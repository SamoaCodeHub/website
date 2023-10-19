<script>
	import encode from '../assets/images/encode.jpg';
	import eugeneWorkshop from '../assets/images/eugene_workshop.jpg';
	import lunchSita from '../assets/images/lunch_sita.jpg';
	import sitaExpo from '../assets/images/sita_expo.jpg';
	import sprintMeeting from '../assets/images/sprint_meeting.jpg';
	import ssoLunch1 from '../assets/images/sso_lunch.jpg';
	import ssoLunch2 from '../assets/images/sso_lunch_2.jpg';
	import ssoLunch3 from '../assets/images/sso_lunch_3.jpg';
	import workshop from '../assets/images/workshop.jpg';
</script>

`
<section class="py-24 text-white">
	<div class="max-w-screen-xl mx-auto px-10">
		<div class="container mx-auto py-16">
      <h1 class="text-center text-5xl text-gray-900 font-bold dark:text-gray-600 pb-[10%]">Samoa Stack Overflow Media</h1>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				<div class="p-2 rounded-lg -translate-y-16">
					<img src={ssoLunch1} alt="SSO Lunch at Amanakis" class="w-full h-auto img-card" />
					<img src={ssoLunch2} alt="SSO Lunch at Coffee Roaster" class="w-full h-auto img-card" />
					<img src={encode} alt="Ainsof and Encode team at SITA Expo" class="w-full h-auto img-card" />
				</div>

				<div class="p-2 rounded-lg">
					<img src={sprintMeeting} alt="Sprint Meeting at Vodafone Samoa" class="w-full h-auto img-card" />
					<img src={ssoLunch3} alt="SSO Lunch at Phat Burger" class="w-full h-auto img-card" />
					<img src={eugeneWorkshop} alt="Workshop led by Eugene Barkman" class="w-full h-auto img-card" />
				</div>

				<div class="p-2 rounded-lg -translate-y-16">
					<img src={sitaExpo} alt="Sita Expo Team" class="w-full h-auto img-card" />
					<img src={workshop} alt="SITA Workshop" class="w-full h-auto img-card" />
					<img src={lunchSita} alt="SITA and SSO Lunch at Rose Cafe" class="w-full h-auto img-card" />
				</div>
			</div>
		</div>
	</div>
</section>
`

<style>
	.img-card {
		border-radius: 10px;
		margin: 1.3rem 0;
	}
</style>
