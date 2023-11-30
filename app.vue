<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script setup>
useHead({
  title: 'AI Text to Video',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
})
useSeoMeta({
  title: 'AI Text to Video',
  ogTitle: 'AI Text to Video',
  description: 'AI Text to Video weaves words into visuals, turning text into engaging scenes with ease, crafting your message into motion without the montage.',
  ogDescription: 'AI Text to Video weaves words into visuals, turning text into engaging scenes with ease, crafting your message into motion without the montage.',
  ogImage: '~/assets/img/tubiao.png',
  twitterCard: 'text_to_video_image',
})
</script>
