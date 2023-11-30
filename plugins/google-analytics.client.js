export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
        // Google Analytics 的初始化代码
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-MYZ8HJ0SYW'); // 替换 '你的追踪ID' 为你的实际 Google Analytics 追踪 ID
        console.log("20.3102102222")

        // 动态创建并插入 Google Analytics 脚本标签
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=G-MYZ8HJ0SYW`;
        document.head.appendChild(script);
    }
});
