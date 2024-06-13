<script lang="ts">
import HeaderMain from '@/components/HeaderMain.vue'
import BannerSinglePost from '@/components/BannerSinglePost.vue'
import RelatedContent from '@/components/RelatedContent.vue'
import FooterMain from '@/components/FooterMain.vue'
import NewsLetter from '@/components/CallToAction.vue'
export default {
  components: {
    HeaderMain,
    FooterMain,
    NewsLetter,
    BannerSinglePost,
    RelatedContent
  }
}
</script>

<template>
  <HeaderMain />
  <router-view />
  <BannerSinglePost />
  <RelatedContent />
  <NewsLetter />
  <FooterMain />
</template>
