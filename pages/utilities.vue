<template>
  <div>
    <AppHeader />
    <section>
      <!-- Blog Container -->
      <div class="mx-auto w-full max-w-7xl px-5  md:px-10 ">
        <iframe
            src="https://damo-vilab-modelscope-text-to-video-synthesis.hf.space"
            frameborder="0"
            width="100%"
            height="1100"
        ></iframe>
      </div>
    </section>

    <section>
      <!-- Section Container -->
      <div class="flex flex-col items-center justify-center px-5 md:px-10">
        <!-- AI Text to Video Container -->
        <div class="mx-auto w-full max-w-5xl">
          <p class="mb-5 text-base font-extrabold uppercase">{{ $t('utilitiesTitle') }}</p>
          <div class="mb-6 min-h-[1px] min-w-full bg-[#e2e2e2]"></div>
          <!-- Term -->
          <div class="mb-6 flex flex-col items-start gap-y-3">
            <p class="text-sm font-bold uppercase sm:text-base">{{ $t('utilitiesTitle1') }}</p>
            <p class="text-sm sm:text-base">{{ $t('utilitiesDesc1') }}</p>
          </div>
          <!-- Term -->
          <div class="mb-6 flex flex-col items-start gap-y-3">
            <p class="font-bold uppercase sm:text-base">{{ $t('utilitiesTitle2') }}</p>
            <p class="text-sm sm:text-base">{{ $t('utilitiesDesc2') }}</p>
          </div>
          <!-- Term -->
          <div class="mb-6 flex flex-col items-start gap-y-3">
            <p class="font-bold uppercase sm:text-base">{{ $t('utilitiesTitle3') }}</p>
            <p class="text-sm sm:text-base">{{ $t('utilitiesDesc3') }}</p>
          </div>
          <!-- Term -->
          <div class="mb-6 flex flex-col items-start gap-y-3">
            <p class="font-bold uppercase sm:text-base">{{ $t('utilitiesTitle4') }}</p>
            <p class="text-sm sm:text-base">{{ $t('utilitiesDesc4') }}</p>
          </div>
          <!-- Term -->
          <div class="mb-6 flex flex-col items-start gap-y-3">
            <p class="font-bold uppercase sm:text-base">{{ $t('utilitiesTitle5') }}</p>
            <p class="text-sm sm:text-base">{{ $t('utilitiesDesc5') }}</p>
          </div>
          <!-- Term -->
          <div class="mb-6 flex flex-col items-start gap-y-3">
            <p class="font-bold uppercase sm:text-base">{{ $t('utilitiesTitle6') }}</p>
            <p class="text-sm sm:text-base">{{ $t('utilitiesDesc6') }}</p>
          </div>
          <!-- Term -->
          <div class="mb-6 flex flex-col items-start gap-y-3">
            <p class="font-bold uppercase sm:text-base">{{ $t('utilitiesTitle7') }}</p>
            <p class="text-sm sm:text-base">{{ $t('utilitiesDesc7') }}</p>
          </div>
          <!-- Term -->
          <div class="mb-6 flex flex-col items-start gap-y-3">
            <p class="font-bold uppercase sm:text-base">{{ $t('utilitiesTitle8') }}</p>
            <p class="text-sm sm:text-base">{{ $t('utilitiesDesc8') }}</p>
          </div>
          <!-- Term -->
          <div class="mb-10 mt-10 min-h-[1px] min-w-full bg-[#e2e2e2]"></div>
          <p class="mb-6 text-sm sm:text-base">{{ $t('utilitiesDescLast') }}</p>
        </div>
      </div>
    </section>
    <AppFooter />
  </div>
</template>

<script setup>
const { t } = useI18n();
</script>
