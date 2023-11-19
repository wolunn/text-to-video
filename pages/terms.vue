<template>
  <div>
    <AppHeader />
    <div class="bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full px-4 mb-6">
            <div class="p-8 border border-gray-200 rounded-lg shadow-md">
              <h2 class="text-xl font-semibold text-gray-800 mb-3">{{ $t('termsTitle1') }}</h2>
              <p class="text-gray-600">
                {{ $t('termsDesc1') }}
              </p>
            </div>
          </div>

          <div class="w-full px-4 mb-6">
            <div class="p-8 border border-gray-200 rounded-lg shadow-md">
              <h2 class="text-xl font-semibold text-gray-800 mb-3">{{ $t('termsTitle2') }}</h2>
              <p class="text-gray-600">
                {{ $t('termsDesc2') }}
              </p>
            </div>
          </div>

          <div class="w-full px-4 mb-6">
            <div class="p-8 border border-gray-200 rounded-lg shadow-md">
              <h2 class="text-xl font-semibold text-gray-800 mb-3">{{ $t('termsTitle3') }}</h2>
              <p class="text-gray-600">
                {{ $t('termsDesc3') }}
              </p>
            </div>
          </div>

          <div class="w-full px-4">
            <div class="p-8 border border-gray-200 rounded-lg shadow-md">
              <h2 class="text-xl font-semibold text-gray-800 mb-3">{{ $t('termsTitle4') }}</h2>
              <p class="text-gray-600">
                {{ $t('termsDesc4') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n();
</script>
