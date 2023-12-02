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
            <h1 id="wwj" class="mb-4 text-4xl font-bold md:text-6xl">{{ $t('mainTitle') }}</h1>
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
          <img src="~/assets/img/texttovideo.png" alt="title picture AI Text to Video" class="inline-block h-full w-full max-w-[640px]" />
        </div>
      </div>
    </header>

    <section>
      <!-- Container -->
      <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 ">
        <!-- Title -->
        <div class="flex flex-col items-center text-center">
          <h2 class="text-3xl font-bold md:text-5xl">{{ $t('mainTweetTitle') }}</h2>
          <p class="mb-8 mt-4 max-w-xl text-base text-[#636262] md:mb-12 md:text-lg lg:mb-16">{{ $t('subTweetTitle') }}</p>
        </div>

        <ul class="tweet-list w-full">
          <li class="tweet-one break-inside-avoid">
            <blockquote class="twitter-tweet"><p lang="en" dir="ltr">We got AI AI Text to Video generation before we got GTA 6 <a href="https://twitter.com/hashtag/ad?src=hash&amp;ref_src=twsrc%5Etfw">#ad</a> <a href="https://t.co/PXgQ1Gto0q">pic.twitter.com/PXgQ1Gto0q</a></p>&mdash; Ian Zelbo (@ianzelbo) <a href="https://twitter.com/ianzelbo/status/1729526022570234169?ref_src=twsrc%5Etfw">November 28, 2023</a></blockquote>
          </li>
          <li class="tweet-one break-inside-avoid">
            <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Pika 1.0 is finally out, bringing the power of AI text-to-video generation and editing together with new styles such as 3D animation, cartoon, and cinematic.<br><br>Check it out: <a href="https://t.co/YxBhloTog5">https://t.co/YxBhloTog5</a><a href="https://twitter.com/pika_labs?ref_src=twsrc%5Etfw">@pika_labs</a> <a href="https://twitter.com/hashtag/AI?src=hash&amp;ref_src=twsrc%5Etfw">#AI</a> <a href="https://twitter.com/hashtag/GenerativeAI?src=hash&amp;ref_src=twsrc%5Etfw">#GenerativeAI</a> <a href="https://twitter.com/hashtag/videoediting?src=hash&amp;ref_src=twsrc%5Etfw">#videoediting</a> <a href="https://twitter.com/hashtag/tech?src=hash&amp;ref_src=twsrc%5Etfw">#tech</a> <a href="https://twitter.com/hashtag/technews?src=hash&amp;ref_src=twsrc%5Etfw">#technews</a> <a href="https://twitter.com/hashtag/technology?src=hash&amp;ref_src=twsrc%5Etfw">#technology</a> <a href="https://twitter.com/hashtag/animation?src=hash&amp;ref_src=twsrc%5Etfw">#animation</a> <a href="https://t.co/VN7BzKgTT0">pic.twitter.com/VN7BzKgTT0</a></p>&mdash; 80 LEVEL (@80Level) <a href="https://twitter.com/80Level/status/1730134572061388887?ref_src=twsrc%5Etfw">November 30, 2023</a></blockquote>
          </li>
          <li class="tweet-one break-inside-avoid">
            <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Introducing SDXL Turbo: A real-time text-to-image generation model.<br><br>SDXL Turbo achieves state-of-the-art performance with a new distillation technology, enabling single-step image generation with unprecedented quality, reducing the required step count from 50 to just one.<br><br>The… <a href="https://t.co/0NA4aUqKkD">pic.twitter.com/0NA4aUqKkD</a></p>&mdash; Stability AI (@StabilityAI) <a href="https://twitter.com/StabilityAI/status/1729589510155948074?ref_src=twsrc%5Etfw">November 28, 2023</a></blockquote>
          </li>
          <li class="tweet-one break-inside-avoid">
            <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Brace yourselves for more AI magic! Stability AI&#39;s SDXL Turbo just hit the scene. Real-time text-to-image generation in a single step—talk about pushing boundaries! The AI video space is buzzing with innovation. <a href="https://twitter.com/hashtag/StabilityAI?src=hash&amp;ref_src=twsrc%5Etfw">#StabilityAI</a> <a href="https://twitter.com/hashtag/AI?src=hash&amp;ref_src=twsrc%5Etfw">#AI</a> <a href="https://t.co/93wmcElkBp">pic.twitter.com/93wmcElkBp</a></p>&mdash; ommtech (@ommtech1) <a href="https://twitter.com/ommtech1/status/1730042404588367984?ref_src=twsrc%5Etfw">November 30, 2023</a></blockquote>
          </li>
          <li class="tweet-one break-inside-avoid">
            <blockquote class="twitter-tweet"><p lang="en" dir="ltr">KIDS PLAYING WITH AI <a href="https://t.co/H8DMuB9BrG">pic.twitter.com/H8DMuB9BrG</a></p>&mdash; beeple (@beeple) <a href="https://twitter.com/beeple/status/1729939792035561641?ref_src=twsrc%5Etfw">November 29, 2023</a></blockquote>
          </li>
          <li class="tweet-one break-inside-avoid">
            <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Why pay $500 for video editing?<br><br>Now you can create videos in 30 seconds with this AI for FREE.<br><br>Here&#39;s how it&#39;s done in 3 simple steps:👇<br><br>[Bookmark 🔖 now] <a href="https://t.co/kLbDaa0GGt">pic.twitter.com/kLbDaa0GGt</a></p>&mdash; D-Coder (@Damn_coder) <a href="https://twitter.com/Damn_coder/status/1730106911683756238?ref_src=twsrc%5Etfw">November 30, 2023</a></blockquote>
          </li>
          <li class="tweet-one break-inside-avoid">
            <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Another Result of the <a href="https://twitter.com/hashtag/TMC?src=hash&amp;ref_src=twsrc%5Etfw">#TMC</a> AI Generator<a href="https://twitter.com/hashtag/Crypto?src=hash&amp;ref_src=twsrc%5Etfw">#Crypto</a> <a href="https://twitter.com/hashtag/CryptoNews?src=hash&amp;ref_src=twsrc%5Etfw">#CryptoNews</a> <a href="https://twitter.com/hashtag/CryptoCommunity?src=hash&amp;ref_src=twsrc%5Etfw">#CryptoCommunity</a> <a href="https://twitter.com/hashtag/cryptocurrency?src=hash&amp;ref_src=twsrc%5Etfw">#cryptocurrency</a> <a href="https://twitter.com/hashtag/CryptoMarket?src=hash&amp;ref_src=twsrc%5Etfw">#CryptoMarket</a> <a href="https://twitter.com/hashtag/cryptoenthusiast?src=hash&amp;ref_src=twsrc%5Etfw">#cryptoenthusiast</a> <a href="https://twitter.com/hashtag/CryptoGem?src=hash&amp;ref_src=twsrc%5Etfw">#CryptoGem</a> <a href="https://t.co/n2a2SrFFE6">pic.twitter.com/n2a2SrFFE6</a></p>&mdash; TheMinerzCoin (@TheMinerzCoin) <a href="https://twitter.com/TheMinerzCoin/status/1730136890198667576?ref_src=twsrc%5Etfw">November 30, 2023</a></blockquote>
          </li>
          <li class="tweet-one break-inside-avoid">
            <blockquote class="twitter-tweet"><p lang="en" dir="ltr">the botanist<a href="https://twitter.com/hashtag/Midjourney?src=hash&amp;ref_src=twsrc%5Etfw">#Midjourney</a> <a href="https://twitter.com/hashtag/aifilm?src=hash&amp;ref_src=twsrc%5Etfw">#aifilm</a> <a href="https://twitter.com/hashtag/aivideo?src=hash&amp;ref_src=twsrc%5Etfw">#aivideo</a> <a href="https://twitter.com/hashtag/aicinema?src=hash&amp;ref_src=twsrc%5Etfw">#aicinema</a> <a href="https://twitter.com/hashtag/AIArtwork?src=hash&amp;ref_src=twsrc%5Etfw">#AIArtwork</a> <a href="https://twitter.com/hashtag/aiart?src=hash&amp;ref_src=twsrc%5Etfw">#aiart</a> <a href="https://twitter.com/hashtag/runwayml?src=hash&amp;ref_src=twsrc%5Etfw">#runwayml</a> <a href="https://t.co/c154Kn4k3M">pic.twitter.com/c154Kn4k3M</a></p>&mdash; štårhañd.įø (@Starhand_io) <a href="https://twitter.com/Starhand_io/status/1729996591589634136?ref_src=twsrc%5Etfw">November 29, 2023</a></blockquote>
          </li>
          <li class="tweet-one break-inside-avoid">
            <blockquote class="twitter-tweet"><p lang="en" dir="ltr">I just setup and tested the &quot;self-operating computer&quot; and WOW was it scary. <br><br>AI literally took over my mouse and keyboard and did what I told it to do. <br><br>Video coming soon.<a href="https://t.co/q3gOzYspxe">https://t.co/q3gOzYspxe</a></p>&mdash; MatthewBerman (@MatthewBerman) <a href="https://twitter.com/MatthewBerman/status/1729973197859401751?ref_src=twsrc%5Etfw">November 29, 2023</a></blockquote>
          </li>
          <li class="tweet-one break-inside-avoid">
            <blockquote class="twitter-tweet"><p lang="en" dir="ltr">We got AI AI Text to Video generation before we got GTA 6 <a href="https://twitter.com/hashtag/ad?src=hash&amp;ref_src=twsrc%5Etfw">#ad</a> <a href="https://t.co/PXgQ1Gto0q">pic.twitter.com/PXgQ1Gto0q</a></p>&mdash; Ian Zelbo (@ianzelbo) <a href="https://twitter.com/ianzelbo/status/1729526022570234169?ref_src=twsrc%5Etfw">November 28, 2023</a></blockquote>
          </li>
          <li class="tweet-one break-inside-avoid">
            <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Meet EWO’s! Hardworking robots that power our everyday lives - the unsung heroes, but even they deserve a break!<br><br>First time trying Runway 🤖 <a href="https://twitter.com/runwayml?ref_src=twsrc%5Etfw">@runwayml</a> <a href="https://twitter.com/hashtag/Runway?src=hash&amp;ref_src=twsrc%5Etfw">#Runway</a> <a href="https://twitter.com/hashtag/AIArtcommunity?src=hash&amp;ref_src=twsrc%5Etfw">#AIArtcommunity</a> <a href="https://twitter.com/hashtag/AIVideo?src=hash&amp;ref_src=twsrc%5Etfw">#AIVideo</a> <a href="https://t.co/tHPCs9YlAF">pic.twitter.com/tHPCs9YlAF</a></p>&mdash; Evatron (@twisted_evatron) <a href="https://twitter.com/twisted_evatron/status/1729666685643157639?ref_src=twsrc%5Etfw">November 29, 2023</a></blockquote>
          </li>
          <li class="tweet-one break-inside-avoid">
            <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Some joker asked AI to generate the most German image ever, and then asked it to make it more German.<br><br>They&#39;re funny, but I do have thoughts:<br><br>- The amount of Lederhosen will annoy northerners<br><br>- Not enough bread<br><br>- Cars driving through a river in the last one feels all too real <a href="https://t.co/KydLfYexea">pic.twitter.com/KydLfYexea</a></p>&mdash; Nic Houghton (@40PercentGerman) <a href="https://twitter.com/40PercentGerman/status/1730127019663380924?ref_src=twsrc%5Etfw">November 30, 2023</a></blockquote>
          </li>
        </ul>
      </div>
    </section>
    <AppFooter />
  </div>
</template>

<script setup>
const { t } = useI18n();
onMounted(() => {
  const script = document.createElement('script');
  script.src = "https://platform.twitter.com/widgets.js";
  script.async = true;
  script.charset = 'utf-8';
  document.body.appendChild(script);
});
</script>

<style scoped>
.tweet-list {
  column-gap: 1rem;
  /* 设置列之间的间距 */
}

.tweet-one {
  width: 380px;
  /* 设置元素宽度 */
  break-inside: avoid;
  /* 防止元素在列内部断开 */
}

/* 当屏幕宽度小于 1280px 时，显示 1 列 */
@media (max-width: 979px) {
  .tweet-list {
    column-count: 1;
  }
}
/* 当屏幕宽度在 1280px 到 1679px 之间时，显示 2 列 */
@media (min-width: 980px) and (max-width: 1779px) {
  .tweet-list {
    column-count: 2;
  }
}
/* 当屏幕宽度在 1280px 到 1679px 之间时，显示 2 列 */
@media (min-width: 1280px) and (max-width: 1779px) {
  .tweet-list {
    column-count: 3;
  }
}

/* 当屏幕宽度大于等于 1680px 时，显示 3 列 */
@media (min-width: 1780px) and (max-width: 2359px) {
  .tweet-list {
    column-count: 3;
  }
}

/* 当屏幕宽度大于等于 2360px 时，显示 4 列 */
@media (min-width: 2360px) {
  .tweet-list {
    column-count: 3;
  }
}
</style>
