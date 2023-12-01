<template>
  <div>
    <!-- Navbar Dropdown 1 row -->
    <section>
      <div class="h-auto w-full"> <!-- NAVBAR -->
        <nav class="font-inter mx-auto h-auto w-full max-w-[1600px] lg:relative lg:top-0" x-data="{isOpen: false, menuOne:false}"> <!-- CONTAINER -->
          <div class="flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-4 xl:px-20"> <!-- SVG LOGO - YOU CAN REPLACE THIS -->
            <a href="#" class="flex items-center">
              <img src="~/assets/img/tubiao.png" alt="AI Text to Video Icon" class="h-8 w-8 mr-2"> <!-- 图标路径 -->
              <span class="font-bold text-lg text-gray-800">{{ $t('title') }}</span> <!-- 文字样式 -->
            </a>
            <!-- MENU CONTENT 1 -->
            <div class="mt-14 flex flex-col space-y-8 lg:mt-0 lg:flex lg:flex-row lg:space-x-1 lg:space-y-0">
              <a :class="isActive('index') ? activeClass : inactiveClass" :href="localePath({ name: 'index' })">{{ $t('Home') }}</a>
              <a :class="isActive('utilities') ? activeClass : inactiveClass" :href="localePath({ name: 'utilities' })">{{ $t('Utilities') }}</a>
<!--              <a :class="isActive('/blogs') ? activeClass : inactiveClass" :href="localePath({ name: 'blogs' })">{{ $t('Blogs') }}</a>-->
              <a :class="isActive('about') ? activeClass : inactiveClass" :href="localePath({ name: 'about' })">{{ $t('About') }}</a>
              <a :class="isActive('terms') ? activeClass : inactiveClass" :href="localePath({ name: 'terms' })">{{ $t('Terms') }}</a>
            </div>
            <!-- MENU CONTENT 2 -->
            <div class="flex flex-col space-y-8 lg:flex lg:flex-row lg:space-x-3 lg:space-y-0" x-bind:class="isOpen ? 'show' : 'hidden'">
              <div class="relative inline-block text-left">
                <select v-model="$i18n.locale">
                  <option v-for="locale in $i18n.locales" :key="locale.code" :value="locale.code">
                    {{ locale.name }}
                  </option>
                </select>
              </div>

            </div> <!-- BURGER MENU -->
            <a href="#" class="absolute right-5 lg:hidden" x-on:click.prevent="isOpen = !isOpen">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.75 12H20.25" stroke="#160042" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.75 6H20.25" stroke="#160042" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.75 18H20.25" stroke="#160042" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </section>

  </div>
</template>

<script setup>

const route = useRoute();
const { t } = useI18n();

const isActive = (name) => {
  console.log("11111111",route.name,name)
  return route.name.includes(name);
};

const activeClass = 'font-inter rounded-lg lg:px-6 lg:py-4 lg:bg-gray-50 lg:text-gray-800';
const inactiveClass = 'font-inter rounded-lg lg:px-6 lg:py-4';
</script>

