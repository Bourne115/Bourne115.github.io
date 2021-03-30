/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2020-winter.jpg",
    "revision": "50b05dcb8959936e87b233f611d3c452"
  },
  {
    "url": "404.html",
    "revision": "67e004a39a1b2dc141a8e67f957d9850"
  },
  {
    "url": "about/index.html",
    "revision": "c9a06d35957f036b7202af39caee6a61"
  },
  {
    "url": "assets/css/0.styles.75186a46.css",
    "revision": "9fbbdae9fd2d29d12cd9af776f7f3325"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.c81f02ca.js",
    "revision": "72e452965d00bea3833daccc2ce5ae20"
  },
  {
    "url": "assets/js/10.6d0e53da.js",
    "revision": "75d151045bf6265a488b8a3643f774eb"
  },
  {
    "url": "assets/js/11.8644cc70.js",
    "revision": "a44c6d4e81527025277b96f38603b103"
  },
  {
    "url": "assets/js/12.b79ca555.js",
    "revision": "b18d32948517e1e57638a8c2205ff4ed"
  },
  {
    "url": "assets/js/13.e5f997ee.js",
    "revision": "b1657e1190be3ee477ce1b35834b38b7"
  },
  {
    "url": "assets/js/14.a55e0164.js",
    "revision": "37ffc6669784169b4e6afed73ceb407d"
  },
  {
    "url": "assets/js/15.08e9a52c.js",
    "revision": "c5846f3f8f2eeef93f6a2399bead243c"
  },
  {
    "url": "assets/js/16.54f94120.js",
    "revision": "2843d449cf89dcb0bf1004f93bab5020"
  },
  {
    "url": "assets/js/17.105c0aba.js",
    "revision": "83c986df62aff64a226d2a1f354a1053"
  },
  {
    "url": "assets/js/18.9c8d78c3.js",
    "revision": "cd48d1ed5c58b382ecfc996bdd9ed1e5"
  },
  {
    "url": "assets/js/19.4a929ec9.js",
    "revision": "99032603ca72dfe2328ddd6d5ee66c27"
  },
  {
    "url": "assets/js/20.83816014.js",
    "revision": "37cd9d98ea7fe77d1b569baccc8fb25b"
  },
  {
    "url": "assets/js/21.fa42f2ad.js",
    "revision": "75fddc9087734811b6349f594f234688"
  },
  {
    "url": "assets/js/22.da5162b5.js",
    "revision": "0e9c61ca5e6867c71597459d2d483663"
  },
  {
    "url": "assets/js/23.1c222822.js",
    "revision": "8690e9739acc879f2781f5028de2cf5c"
  },
  {
    "url": "assets/js/24.dae02486.js",
    "revision": "26cd1efc0f1178cfe255d92f6e44226b"
  },
  {
    "url": "assets/js/25.1f4bc187.js",
    "revision": "0ce71b74c02d94688df2337da838f166"
  },
  {
    "url": "assets/js/26.aeb9a82a.js",
    "revision": "fa470f699134cc71f5df08f8ed1c62b3"
  },
  {
    "url": "assets/js/3.0301dcda.js",
    "revision": "520632c7a1121b0016e7aac733b8c06d"
  },
  {
    "url": "assets/js/4.4c5df216.js",
    "revision": "b41d7ce823ef004b528f35844fb22bee"
  },
  {
    "url": "assets/js/5.d5eae744.js",
    "revision": "194a5c2708d71a05d54ce0a77faab7b6"
  },
  {
    "url": "assets/js/6.1ff75603.js",
    "revision": "145b3629b12eb36519c93d496bab534f"
  },
  {
    "url": "assets/js/7.110d8b5f.js",
    "revision": "4d9e6ebe11cbf88533eab35feacaa61d"
  },
  {
    "url": "assets/js/8.cd5fd359.js",
    "revision": "3791ed930d68769b42f06fa308adf36b"
  },
  {
    "url": "assets/js/9.2ffee5da.js",
    "revision": "7cd185de0b54c95c199cf714d7a8be8b"
  },
  {
    "url": "assets/js/app.190b334c.js",
    "revision": "4bc9d1b3c7b54185d0c4a9b1c2fa8a78"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "402ceef930d6a7aa472c1605fddb06e7"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "9bee32d455d725e97fed75bb3fc3403d"
  },
  {
    "url": "categories/摘记/index.html",
    "revision": "cdfcce7d712faddbeaf9530f2d11e455"
  },
  {
    "url": "categories/about me/index.html",
    "revision": "8443a967e2daea99a1cceecda2939b47"
  },
  {
    "url": "categories/index.html",
    "revision": "2541537d1092cfbae62434e2fb3b9631"
  },
  {
    "url": "icon.jpg",
    "revision": "1ecb693fa82880c2434b80d8f516eb86"
  },
  {
    "url": "index.html",
    "revision": "278ad909ceb0a5f23f50722801c603c5"
  },
  {
    "url": "lufeiavatar.png",
    "revision": "de30421ca3637a569fb4d549f19ce152"
  },
  {
    "url": "lufeismile.jpeg",
    "revision": "3737e5f77677dd4c93e64238b43bb270"
  },
  {
    "url": "lufeiye.png",
    "revision": "46a6ed57dbc8e77683de16dff3a65565"
  },
  {
    "url": "notes/index.html",
    "revision": "67c4c0dd993e3975e01d928f5d645afe"
  },
  {
    "url": "notes/study-css/css3新特性.html",
    "revision": "6226ceefb51064294c1291ee12f57a8b"
  },
  {
    "url": "notes/study-html/canvas.html",
    "revision": "68ffa53abc8a1d2854c9461888f83e4d"
  },
  {
    "url": "notes/study-html/HTML5语义元素.html",
    "revision": "52de5c67aeed32f061ec56566ff792a7"
  },
  {
    "url": "notes/study-html/web-worker.html",
    "revision": "0ab00659b7539b6418acf5b172116be8"
  },
  {
    "url": "notes/study-js/js函数的调用方式.html",
    "revision": "98e32bde4e4ee95d2778dc4c2fe54c95"
  },
  {
    "url": "notes/study-js/js数组常用Api.html",
    "revision": "89375743600cc32e614429184f7eb6d0"
  },
  {
    "url": "notes/study-js/ts基础01.html",
    "revision": "b6175938daf15933f43e2c77ea52aa28"
  },
  {
    "url": "notes/study-js/ts基础02.html",
    "revision": "79bd9bf1547d67331eb38b64bbf13fa5"
  },
  {
    "url": "sea02.jpg",
    "revision": "d2b85fd7e47db39ec5d16a0abb9ae577"
  },
  {
    "url": "tag/单元测试/index.html",
    "revision": "08e35912207736cd2753fe689fc06fd6"
  },
  {
    "url": "tag/读书/index.html",
    "revision": "93e0f1f4c532efcd2b30886dbbb53c5a"
  },
  {
    "url": "tag/Canvas/index.html",
    "revision": "885b7d01d816701984b25c0fc5fcf800"
  },
  {
    "url": "tag/css3/index.html",
    "revision": "abd0d4c89535355ca4c00c2d757de5e4"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "2aa88a9dc8937b2535f4322dc4f155b3"
  },
  {
    "url": "tag/index.html",
    "revision": "8c176564d9702f5667fe7c8b07020ec7"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "83b0dae27337fdb3ca719ff203a07342"
  },
  {
    "url": "tag/js/index.html",
    "revision": "2c5867fce4a9bb985605ba13cd7ee47e"
  },
  {
    "url": "tag/resume/index.html",
    "revision": "c5a1a19b125629f6269f6398c18802c2"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "bba7c37cb862972f8137b8baab9adf13"
  },
  {
    "url": "tag/webwork/index.html",
    "revision": "5ae79768eda331565bc5f9d6ada5a89f"
  },
  {
    "url": "tag/work-loader/index.html",
    "revision": "529adbfb7be1a84d5379d32c0f90a454"
  },
  {
    "url": "timeline/index.html",
    "revision": "afe68b959ae338604c3ffdcadbc12287"
  },
  {
    "url": "view/前端/fe-unit-test/Vue-cli3中单元测试环境的搭建.html",
    "revision": "80638838b1c7123af4f42100d5b688e3"
  },
  {
    "url": "view/摘记/2020/三体.html",
    "revision": "934ce621534d1fe0361bdfe5c4ee893c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
