<template>
  <section>
    <HomeBackground></HomeBackground>
    <AboutSection></AboutSection>
    <Features> </Features>
    <Tourse></Tourse>
    <Stories></Stories>
    <Booking></Booking>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import HomeBackground from "@/components/home/HomeBackground.vue";
import AboutSection from "@/components/home/AboutSection.vue";
import Features from "@/components/home/Features.vue";
import Tourse from "@/components/home/Tourse.vue";
import Stories from "@/components/home/Stories.vue";
import Booking from "@/components/home/Booking.vue";

export default defineComponent({
  components: {
    AboutSection,
    HomeBackground,
    Features,
    Booking,
    Tourse,
    Stories,
  },
});
</script>
