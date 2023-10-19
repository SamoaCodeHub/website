
<script>
import encode from '../assets/images/encode.jpg'
import eugeneWorkshop from '../assets/images/eugene_workshop.jpg'
import lunchSita from '../assets/images/lunch_sita.jpg'
import sitaExpo from '../assets/images/sita_expo.jpg'
import sprintMeeting from '../assets/images/sprint_meeting.jpg'
import ssoLunch1 from '../assets/images/sso_lunch.jpg'
import ssoLunch2 from '../assets/images/sso_lunch_2.jpg'
import ssoLunch3 from '../assets/images/sso_lunch_3.jpg'
import workshop from '../assets/images/workshop.jpg'
</script>
<div class="container mx-auto py-16">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="p-2 rounded-lg -translate-y-16">
          <img src={ssoLunch1} alt="Ainsof So'o" class="w-full h-auto img-card">
          <img src={ssoLunch2} alt="" class="w-full h-auto img-card">
          <img src={encode} alt="" class="w-full h-auto img-card">
      </div>

      <div class="p-2 rounded-lg">
          <img src={sprintMeeting} alt="" class="w-full h-auto img-card">
          <img src={ssoLunch3} alt="" class="w-full h-auto img-card">
          <img src={eugeneWorkshop} alt="" class="w-full h-auto img-card">
      </div>

      <div class="p-2 rounded-lg -translate-y-16">
          <img src={sitaExpo} alt="" class="w-full h-auto img-card">
          <img src={workshop} alt="" class="w-full h-auto img-card">
          <img src={lunchSita} alt="" class="w-full h-auto img-card">
      </div>
  </div>
</div>

<style>
  .img-card {
    border-radius: 10px;
    margin: 1.3rem 0;
  }
</style>