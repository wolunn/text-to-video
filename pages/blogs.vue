<template>
  <div>
    <div class="bg-white">
      <AppHeader />
    </div>
    <div >
      <div class="bg-white dark:bg-slate-800 rounded border-slate-200 p-5">
        <h1 class="text-2xl text-center font-semibold">{{ $t('blogsTitle') }}</h1>
        <h2 class="font-medium mt-2 mb-1 text-center">{{ $t('blogsDesc1') }}</h2>
        <h2 class="font-medium mt-2 mb-1 text-center">{{ $t('blogsDesc2') }}<a :href="localePath({ name: 'index' })" title="Use the free AI Text To Video service at text-to-video.top" style="color:#fe3839;">text-to-video.top</a></h2>
        <div class="flex items-center justify-center mx-auto w-full max-w-7xl px-4">
          <div class="flex items-center justify-center space-x-2 mx-auto" style="width: 50%;">
            <input
                type="text"
                v-model="searchQuery"
                @keyup.enter="searchArticles"
                :placeholder="$t('blogsTip')"
                class="flex-grow px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            />
            <button v-if="searchQuery" @click="clearSearch" class="absolute right-10 top-0 mt-2 mr-2 text-gray-500 hover:text-gray-700">
              ×
            </button>
            <button
                @click="searchArticles"
                class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              {{ $t('blogsButton') }}
            </button>
          </div>
        </div>
      </div>

      <div class="mx-auto max-w-7xl px-5">
        <!-- Grid layout for articles with 2 columns -->
        <div class="grid md:grid-cols-2 gap-4">
          <a v-for="article in displayedArticles" :key="article.slug" :href="`${article._path}`" target="_blank" class="block">
            <div class="bg-white p-4 border border-black rounded-lg hover:shadow-lg transition-shadow relative">
              <div class="flex space-x-4">
                <img :src="article.image" alt="Article Image" class="w-1/2 object-cover rounded-lg">
                <div class="flex flex-col justify-between flex-grow">
                  <div>
                    <h2 class="text-lg font-semibold text-gray-900">{{ article.title }}</h2>
                    <p class="text-sm text-gray-600 mb-4 line-clamp-2">{{ article.description }}</p>
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
    <AppFooter />
  </div>
</template>

<script setup>

const { t } = useI18n();

// 定义状态和计算属性
const itemsPerPage = ref(6);
const currentPage = ref(1);
const { locale } = useI18n();

// 异步获取数据和刷新函数
const { data: articles, refresh } = useAsyncData(
    'articles',
    () => queryContent(`/blogsmd/${locale.value}`).sort({ date: 1}).find()
);

//搜索功能
const searchQuery = ref('');

const searchedArticles = ref(null); // 用于存储搜索结果

const searchArticles = async () => {
  currentPage.value = 1; // 重置当前页码
  if (searchQuery.value.trim()) {
    searchedArticles.value = await queryContent(`/blogsmd/${locale.value}`)
        .where({
          title: { $contains: searchQuery.value }
        }).find();
  } else {
    searchedArticles.value = null; // 清空搜索结果
    refresh(); // 重新获取原始数据
  }
};

const clearSearch = () => {
  searchQuery.value = '';
};

const displayedArticles = computed(() => {
  return searchedArticles.value
      ? searchedArticles.value.slice(
          (currentPage.value - 1) * itemsPerPage.value,
          currentPage.value * itemsPerPage.value
      )
      : articles.value.slice(
          (currentPage.value - 1) * itemsPerPage.value,
          currentPage.value * itemsPerPage.value
      );
});


// 计算总页数和当前页的文章
const totalPages = computed(() => {
  return Math.ceil(
      (searchedArticles.value ? searchedArticles.value.length : articles.value.length) / itemsPerPage.value
  );
});
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



