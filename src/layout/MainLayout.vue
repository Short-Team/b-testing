<script lang="ts">
import HeaderMain from '@/components/HeaderMain.vue'
import FooterMain from '@/components/FooterMain.vue'
import NewsLetter from '@/components/CallToAction.vue'
import PhraseMain from '@/components/PhraseTop.vue'

export default {
  components: {
    HeaderMain,
    FooterMain,
    NewsLetter,
    PhraseMain
  }
}
</script>

<template>
  <HeaderMain />
  <PhraseMain />

  <router-view />

  <NewsLetter />
  <FooterMain />
</template>
