<template>
  <Navigation />
  <div>
    <router-view> </router-view>
  </div>
  <Footer />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Navigation from "@/components/header/Navigation.vue";
import Footer from "@/components/footer/Footer.vue";
export default defineComponent({
  components: { Navigation, Footer },
});
</script>

<style lang="scss">
@import "~@/assets/sass/main";
</style>
