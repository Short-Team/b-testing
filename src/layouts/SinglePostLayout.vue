<script lang="ts">
import HeaderMain from '@/components/HeaderMain.vue'
import BannerSinglePost from '@/components/BannerSinglePost.vue'
import RelatedContent from '@/components/RelatedContent.vue'
import FooterMain from '@/components/FooterMain.vue'
import NewsLetter from '@/components/CallToAction.vue'

export default {
  components: {
    HeaderMain,
    BannerSinglePost,
    RelatedContent,
    FooterMain,
    NewsLetter
  }
}
</script>

<template>
  <HeaderMain />

  <!-- <main>
    <slot name="SinglePost"></slot>
  </main> -->
  <router-view />

  <BannerSinglePost />
  <RelatedContent />
  <NewsLetter />
  <FooterMain />
</template>
