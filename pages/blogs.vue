<template>
  <div>
    <div class="bg-white">
      <AppHeader />
    </div>
    <div class="py-12">
      <div class="mx-auto max-w-7xl px-5">
        <!-- Grid layout for articles with 2 columns -->
        <div class="grid md:grid-cols-2 gap-4">
          <a v-for="article in pagedArticles" :key="article.slug" :href="`${article._path}`" target="_blank" class="block">
            <div class="bg-white p-4 border border-black rounded-lg hover:shadow-lg transition-shadow relative">
              <div class="flex space-x-4">
                <img :src="article.image" alt="Article Image" class="w-1/2 object-cover rounded-lg">
                <div class="flex flex-col justify-between flex-grow">
                  <div>
                    <h2 class="text-lg font-semibold text-gray-900">{{ article.title }}</h2>
                    <p class="text-sm text-gray-600 mb-4">{{ article.description }}</p>
                  </div>
                  <div class="flex items-center text-gray-500 ">
                    <!-- Date icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V5m8 2V5m-8 4h8m-8 4h8m-8 4h8m-8 0H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v11a2 2 0 01-2 2H7z" />
                    </svg>
                    <time class="ml-1 text-xs">{{ formatDate(article.publishDate) }}</time>
                    <!-- Like icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5H6m8 0a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2m8 0h2a2 2 0 012 2v12a2 2 0 01-2 2h-2.5" />
                    </svg>
                    <span class="ml-1 text-xs">{{ article.likes }}</span>
                  </div>
                </div>
              </div>
              <!-- Views icon at the bottom right -->
              <div class="absolute bottom-4 right-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.86 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.402 7-9.542 7S3.732 16.057 2.458 12z" />
                </svg>
                <span class="ml-2 text-xs">{{ article.views }}</span>
              </div>
            </div>
          </a>
        </div>
        <!-- Pagination controls -->
        <div class="flex justify-center items-center mt-8 space-x-1">
          <button @click="prevPage" class="px-4 py-2 border rounded text-sm" :class="{ 'cursor-not-allowed opacity-50': currentPage === 1 }" :disabled="currentPage === 1">
            上一页
          </button>
          <span>第 {{ currentPage }} 页，共 {{ totalPages }} 页</span>
          <button @click="nextPage" class="px-4 py-2 border rounded text-sm" :class="{ 'cursor-not-allowed opacity-50': currentPage === totalPages }" :disabled="currentPage === totalPages">
            下一页
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

// 定义状态和计算属性
const itemsPerPage = ref(6);
const currentPage = ref(1);
const { locale } = useI18n();

// 异步获取数据和刷新函数
const { data: articles, refresh } = useAsyncData(
    'articles',
    () => queryContent(`/blog/${locale.value}`).find()
);

// 计算总页数和当前页的文章
const totalPages = computed(() => Math.ceil(articles.value.length / itemsPerPage.value));
const pagedArticles = computed(() =>
    articles.value.slice(
        (currentPage.value - 1) * itemsPerPage.value,
        currentPage.value * itemsPerPage.value
    )
);

// 分页函数
const prevPage = () => currentPage.value > 1 && currentPage.value--;
const nextPage = () => currentPage.value < totalPages.value && currentPage.value++;

// 监听 locale 变化来刷新数据
watch(locale, () => {
  refresh(); // 这里调用 refresh 方法来重新获取数据
});

// 格式化日期函数
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(dateString).toLocaleDateString('zh-CN', options);
};
</script>



