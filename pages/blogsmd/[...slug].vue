<template>
  <div>
    <div class="bg-white">
      <AppHeader />
    </div>
    <div class="prose mx-auto">
      <ContentDoc :path="`${path}`" v-slot="{ doc }">
        <article class="article-content">
          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const path = ('/blogsmd/'+route.params.slug.join('/')).toLowerCase();
console.log(path)
</script>

<style scoped>
/* 定义文章内容的基本样式 */
.article-content {
  @apply prose prose-sm m-auto;
}

/* 针对标题、段落等元素自定义样式 */
.article-content h1 {
  @apply text-2xl font-bold;
}

.article-content p {
  @apply text-base;
}
</style>

