<script lang="ts">
import HeaderMain from '@/components/HeaderMain.vue'
import FooterMain from '@/components/FooterMain.vue'
import Newsletter from '@/components/CallToAction.vue'
// import PhraseMain from '@/components/PhraseTop.vue'

export default {
  components: {
    HeaderMain,
    FooterMain,
    Newsletter
    // PhraseMain
  }
}
</script>

<template>
  <HeaderMain />
  <!-- <PhraseMain /> -->

  <!-- <main>
    <slot name="main"></slot>
  </main> -->

  <router-view />
  <Newsletter />
  <FooterMain />
</template>
