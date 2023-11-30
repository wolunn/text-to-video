<template>
  <div>
    <footer>
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="py-8 md:py-12">

          <!-- Bottom area -->
          <div class="text-center md:flex md:items-center md:justify-between">

            <!-- Left links -->
            <div class="font-medium md:order-1 mb-2 md:mb-0">
              <ul class="inline-flex flex-wrap text-sm font-medium">
                <li class="after:content-['·'] last:after:hidden after:text-gray-400 after:px-2">
                  <a class="text-gray-500 hover:text-gray-500 hover:underline" :href="localePath({ name: 'terms' })">{{ $t('Terms') }}</a>
                </li>
                <li class="after:content-['·'] last:after:hidden after:text-gray-400 after:px-2">
                  <a class="text-gray-500 hover:text-gray-500 hover:underline" :href="localePath({ name: 'about' })">{{ $t('About') }}</a>
                </li>
              </ul>
            </div>

            <!-- Copyright -->
            <div class="text-gray-500">
              © <a href="https://text-to-video.top">text-to-video.top</a> | All rights reserved | <span>Not affiliated with Stability.AI .</span>
            </div>

          </div>

          <!--<hr class="w-96 h-1 mx-auto my-2 bg-gray-200 border-0 rounded md:my-2 dark:bg-gray-700">-->

          <div class="font-medium md:order-1 mb-2 md:mb-0 ht">
            <ul class="inline-flex flex-wrap text-sm font-medium">
              <li class="after:content-['·'] last:after:hidden after:text-gray-400 after:px-2">
                <a class="text-gray-500 hover:text-gray-500 hover:underline" target="_blank" href="https://text-to-video.top">AI Text to Video</a>
              </li>

              <li class="after:content-['·'] last:after:hidden after:text-gray-400 after:px-2">
                <a class="text-gray-500 hover:text-gray-500 hover:underline" target="_blank" href="https://text-to-video.top">Ai video</a>
              </li>

              <li class="after:content-['·'] last:after:hidden after:text-gray-400 after:px-2">
                <a class="text-gray-500 hover:text-gray-500 hover:underline" target="_blank" href="https://text-to-video.top">SVD</a>
              </li>

            </ul>
          </div>

        </div>

      </div>
    </footer>
  </div>
</template>
<script setup>

const route = useRoute();
const { t } = useI18n();

const isActive = (name) => {
  return route.name === name;
};
</script>

