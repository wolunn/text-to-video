<template>
  <div>
    <AppHeader />
    <div class="flex mx-auto w-full max-w-7xl px-5 py-12">
      <!-- Article List Section with Custom Height and Scrollable -->
      <aside class="w-1/3 p-4 overflow-y-auto h-[32rem]"> <!-- 修改这里的高度 -->
        <ContentList :path="`/blog/${locale}`" v-slot="{ list }">
          <div v-for="article in list" :key="article._path" class="mb-4">
            <h2 class="text-lg font-semibold">
              <a href="#" @click.prevent="selectArticle(article)">
                {{ article.title }}
              </a>
            </h2>
            <p class="text-sm">{{ article.description }}</p>
          </div>
        </ContentList>
      </aside>

      <!-- Article Content Section -->
      <main class="w-2/3 p-4">
        <article v-if="selectedArticle">
          <h1 class="text-2xl font-bold mb-4">{{ selectedArticle.title }}</h1>
          <ContentRenderer :value="selectedArticle" />
        </article>
        <div v-else class="text-2xl font-bold mb-4">Select an article to read</div>
      </main>
    </div>
  </div>
</template>

<script setup>

const selectedArticle = ref(null);

const selectArticle = (article) => {
  selectedArticle.value = article;
};

const { locale } = useI18n();
</script>

<style>
/* Add additional Tailwind CSS styles if needed */
</style>
