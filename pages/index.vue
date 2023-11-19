<template xmlns:x-bind="http://www.w3.org/1999/xhtml" xmlns:x-on="http://www.w3.org/1999/xhtml">
  <div>
    <AppHeader />
    <header>
      <!-- Hero Container -->
      <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 ">
        <!-- Component -->
        <div class="grid items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
          <!-- Hero Content -->
          <div class="flex flex-col">
            <!-- Hero Title -->
            <h1 class="mb-4 text-4xl font-bold md:text-6xl">{{ $t('mainTitle') }}</h1>
            <p class="mb-6 max-w-lg text-sm text-[#636262] sm:text-xl md:mb-10 lg:mb-12">{{ $t('subTitle') }}</p>
            <!-- Hero Button -->
            <a href="/utilities" class="mb-6 mr-6 w-36 rounded-md bg-black px-6 py-3 text-center font-semibold text-white md:mb-10 lg:mb-12 lg:mr-8">Get Started</a>
            <!-- Hero Comment -->
            <div class="max-w-xs">
              <p class="mb-4 text-sm text-[#636262]">{{ $t('review') }}</p>
              <div class="flex items-start gap-11 sm:flex-row">
                <div class="flex">
                  <img src="~/assets/img/touxiang.png" alt="" class="mr-2 inline-block h-7 w-7 sm:h-7" />
                  <p class="text-sm font-bold">{{ $t('personName') }}</p>
                </div>
                <div class="flex">
                  <p class="mr-2 text-sm font-bold">5.0</p>
                  <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg" alt="" class="mr-1.5 inline-block w-4" />
                  <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg" alt="" class="mr-1.5 inline-block w-4" />
                  <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg" alt="" class="mr-1.5 inline-block w-4" />
                  <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg" alt="" class="mr-1.5 inline-block w-4" />
                  <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg" alt="" class="mr-1.5 inline-block w-4" />
                </div>
              </div>
            </div>
          </div>
          <!-- Hero Image -->
          <img src="~/assets/img/texttovideo.png" alt="" class="inline-block h-full w-full max-w-[640px]" />
        </div>
      </div>
    </header>

  </div>

</template>

<script setup>
const { t } = useI18n();
</script>

<style scoped>
/* 在这里添加 CSS 样式 */
#ccc {
  text-align: center;
}
</style>
