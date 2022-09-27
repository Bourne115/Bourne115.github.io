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
    "url": "404.html",
    "revision": "3fdf344873f287f9a1287f874e82a5d2"
  },
  {
    "url": "about/index.html",
    "revision": "47192f0fce5d7b848ab450e79dd5c604"
  },
  {
    "url": "assets/css/0.styles.95bdf316.css",
    "revision": "19c7aa12b5b4a7e39a6999604a8c283b"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.f8d9997c.js",
    "revision": "b8187e8d272823bbfd8e4e24b0a08a0f"
  },
  {
    "url": "assets/js/10.c6ab6f3b.js",
    "revision": "c5585da8e28f071b549d6358006ac02a"
  },
  {
    "url": "assets/js/11.3e21aee2.js",
    "revision": "8ab0ce2232938bdbfc85fda10b021442"
  },
  {
    "url": "assets/js/12.516bbe32.js",
    "revision": "acca3798efd31e4bb72d2ab43cb9d3f5"
  },
  {
    "url": "assets/js/13.25bff8fb.js",
    "revision": "2c7f3096bb6598ce1504552cdfeeec11"
  },
  {
    "url": "assets/js/14.a7baa16b.js",
    "revision": "a4ef1855d2dd9cf9474094e6c2a60561"
  },
  {
    "url": "assets/js/15.67e05f50.js",
    "revision": "ffdc2da4d6739e81469bc78af6a2a8e4"
  },
  {
    "url": "assets/js/16.b00cfe87.js",
    "revision": "bbcf190d871fa443f9bbf308cec34d0a"
  },
  {
    "url": "assets/js/17.9d1c250e.js",
    "revision": "3e0283dd1523b4c4aa369b49abc81a61"
  },
  {
    "url": "assets/js/18.ceda1465.js",
    "revision": "91f523c4d12954779e22af21c8fbfb17"
  },
  {
    "url": "assets/js/19.25b2b534.js",
    "revision": "a8669d88f488f4db7ec2dd629113901b"
  },
  {
    "url": "assets/js/20.da425412.js",
    "revision": "46881c7f9793f562c5eb55f435554814"
  },
  {
    "url": "assets/js/21.343016c9.js",
    "revision": "592631e85cc0c60a2b95742800a57bb8"
  },
  {
    "url": "assets/js/22.e0e8e6af.js",
    "revision": "3cc187d91c3c53182c9b98d25302ac29"
  },
  {
    "url": "assets/js/23.4504393e.js",
    "revision": "aa9bf6bea125f795f570e97d9f1021f3"
  },
  {
    "url": "assets/js/24.826ff72a.js",
    "revision": "ebe653a518ef8bdee5b39209445293e8"
  },
  {
    "url": "assets/js/25.bf05db71.js",
    "revision": "dc03f0ea7f096d61ec8bcd5220c58f15"
  },
  {
    "url": "assets/js/26.3a301058.js",
    "revision": "d71fd0ab097f324ff11368d635dab381"
  },
  {
    "url": "assets/js/27.fc764a07.js",
    "revision": "b4a4c2d155e2b90b49b98c6e1efc0ea3"
  },
  {
    "url": "assets/js/28.ccfdedd9.js",
    "revision": "005b60632f033c168530aae6b33992f5"
  },
  {
    "url": "assets/js/29.65b53820.js",
    "revision": "9001dea09019c7ee6c5009a755320450"
  },
  {
    "url": "assets/js/3.e4260465.js",
    "revision": "4291f789545f5587f87a0f1f25d3ec7d"
  },
  {
    "url": "assets/js/30.55adea73.js",
    "revision": "90485cf61598c95ba3fef6bd4537b40b"
  },
  {
    "url": "assets/js/31.9cefee16.js",
    "revision": "34446bef98d3aa14515562c884b2f0b2"
  },
  {
    "url": "assets/js/32.807499fd.js",
    "revision": "e8ef7967e95097d19665612c2e10a464"
  },
  {
    "url": "assets/js/33.2917a8ee.js",
    "revision": "e983f90f815f615a7b8670d51c8e9d65"
  },
  {
    "url": "assets/js/34.ba1a9d7f.js",
    "revision": "e039edfaeecd75454b294047bbbbe33f"
  },
  {
    "url": "assets/js/35.53672099.js",
    "revision": "1788ff6db82f415beaffffe211456063"
  },
  {
    "url": "assets/js/36.dcd5decb.js",
    "revision": "2602f78615285064272b5ce308e5b633"
  },
  {
    "url": "assets/js/37.15d655d5.js",
    "revision": "403827b5a9d1d2dc949b94f65ed236b3"
  },
  {
    "url": "assets/js/38.4181e56c.js",
    "revision": "576e01dd0bafb8d92c01290b103a7c86"
  },
  {
    "url": "assets/js/39.d9a29c58.js",
    "revision": "dd02594e717c74519f256516f2ca4c77"
  },
  {
    "url": "assets/js/4.ee1a0389.js",
    "revision": "90e2c27fd6df63c4abdfd6793dc1db15"
  },
  {
    "url": "assets/js/40.d28a0458.js",
    "revision": "3b25dd5ede88c04f10189c1e55f84da7"
  },
  {
    "url": "assets/js/41.0a4c8116.js",
    "revision": "3f6d73e1fa44cc6e22675f840322e374"
  },
  {
    "url": "assets/js/42.107aa23e.js",
    "revision": "abd8e87b76a86ef0078afadc75daf8d0"
  },
  {
    "url": "assets/js/43.fda1a775.js",
    "revision": "1fb376fe2869f234354c62c7f1783fd3"
  },
  {
    "url": "assets/js/44.0ed14e4f.js",
    "revision": "e7603e6860bb22c0f7cc216fc518c8ef"
  },
  {
    "url": "assets/js/45.0a3cca8c.js",
    "revision": "c1ffa2cfb99cb4c8b42d7d84ac42e776"
  },
  {
    "url": "assets/js/46.b70e7a9a.js",
    "revision": "dafa24e443fd9c2c443c16854ba7600e"
  },
  {
    "url": "assets/js/47.5571c84b.js",
    "revision": "5581cd6e38ddd1ee8d836312bc5f3120"
  },
  {
    "url": "assets/js/48.08e2eb18.js",
    "revision": "6615d3fcd51a28685efc03e010ed54df"
  },
  {
    "url": "assets/js/49.7dc7e463.js",
    "revision": "33980755e7b7322100c9f4d1fb2c23c5"
  },
  {
    "url": "assets/js/5.add2be26.js",
    "revision": "9b7c333fa62e7004c16c2379acacbfc5"
  },
  {
    "url": "assets/js/50.691747ca.js",
    "revision": "b5c038f5d6337eae0fe1dc8dfba05262"
  },
  {
    "url": "assets/js/51.c5b31dfd.js",
    "revision": "f64222d675f25fb52cc2b062ccb8dfe7"
  },
  {
    "url": "assets/js/52.d0e67da1.js",
    "revision": "5156aaaefa85f0c84d049f065b823f6a"
  },
  {
    "url": "assets/js/53.7c06b9e3.js",
    "revision": "59b326075bd3ddab083317935fd0a5c1"
  },
  {
    "url": "assets/js/54.c210fabc.js",
    "revision": "3cc2089913ca7c9aed2d52457cf6b202"
  },
  {
    "url": "assets/js/55.26862f77.js",
    "revision": "90ba52412ec810780e38fe93afa1b4ce"
  },
  {
    "url": "assets/js/56.0fc96a32.js",
    "revision": "830f36d88fdb1625a4ac9e523a2f8ac8"
  },
  {
    "url": "assets/js/57.e2d6c414.js",
    "revision": "312bc247e0af9c560b5a8cc7e8b189ac"
  },
  {
    "url": "assets/js/58.bd2bee29.js",
    "revision": "a610d2539f6fc65dc9b6e6dd5e2693da"
  },
  {
    "url": "assets/js/59.0779560d.js",
    "revision": "f352250da6b00a64baab66013b8970c9"
  },
  {
    "url": "assets/js/6.202844a9.js",
    "revision": "5323c6b2350aa0617263c410fa6adb8f"
  },
  {
    "url": "assets/js/60.7a927dd0.js",
    "revision": "a9e066ab4cf732a67f3b307e09c9c7fb"
  },
  {
    "url": "assets/js/61.ddbd1289.js",
    "revision": "f8ecf802d085e20fcf73f65656618410"
  },
  {
    "url": "assets/js/62.bf7700b5.js",
    "revision": "791af9888ae563bbb012e9c88dd6a894"
  },
  {
    "url": "assets/js/63.ba5171db.js",
    "revision": "335f9c30f8c648e722c84ea5356a1a1f"
  },
  {
    "url": "assets/js/64.356f9541.js",
    "revision": "57773894a1c0cdbca311edf720bcc2ce"
  },
  {
    "url": "assets/js/65.9fb0f8e5.js",
    "revision": "f95a2f37c0032030bd5926645298a58f"
  },
  {
    "url": "assets/js/66.28b3978c.js",
    "revision": "2e06da3a72c7ecdf1395146690ae7a6e"
  },
  {
    "url": "assets/js/67.fb77649c.js",
    "revision": "cd164b2d3b0bc83c55a6f0ed5b80d250"
  },
  {
    "url": "assets/js/68.61bbedbd.js",
    "revision": "95a27de66eebf77e87f17fa74217196b"
  },
  {
    "url": "assets/js/69.c1dd922f.js",
    "revision": "0ef9c0a84baa1d0dc790254ac9d26d7c"
  },
  {
    "url": "assets/js/7.7c67edaa.js",
    "revision": "acbb69c17a389a47ab3b65c567a9e808"
  },
  {
    "url": "assets/js/70.aebd41ee.js",
    "revision": "bef244067e70bfbf2c9de2e00de4820f"
  },
  {
    "url": "assets/js/71.77c0183f.js",
    "revision": "6f3c37496da4423d30216010f322e8da"
  },
  {
    "url": "assets/js/72.9d39b5a3.js",
    "revision": "e85e7d7346ad88d427061ef92596dc1e"
  },
  {
    "url": "assets/js/73.7eee43f8.js",
    "revision": "f1ad4e7ecfbaf72d959a94fbf49b4d94"
  },
  {
    "url": "assets/js/74.2949fcb0.js",
    "revision": "f24c5c8687f76372e8c5a196beebec0f"
  },
  {
    "url": "assets/js/75.09ba33cd.js",
    "revision": "fc7a4485da0ca983af2470685e44b045"
  },
  {
    "url": "assets/js/76.74f2386a.js",
    "revision": "28ca0e0998696dfd8fb5109721b5076d"
  },
  {
    "url": "assets/js/77.aced21d4.js",
    "revision": "4bed53df9ec098b331b3a194e08013a1"
  },
  {
    "url": "assets/js/78.eaa5a303.js",
    "revision": "162e87f58777be82859fdf5210c14ce1"
  },
  {
    "url": "assets/js/79.1bfcde3e.js",
    "revision": "7423b090423fa07ee0b2630d01b20f10"
  },
  {
    "url": "assets/js/8.71e1adb8.js",
    "revision": "fe626a593746ea48a723e1c76bc83a82"
  },
  {
    "url": "assets/js/80.2bc3a4b3.js",
    "revision": "6cd7bcd5f17853c08e55e6f9e4636f95"
  },
  {
    "url": "assets/js/81.b120ed5f.js",
    "revision": "58ecbf47a0f35a124193533faee6fb04"
  },
  {
    "url": "assets/js/82.edd30c18.js",
    "revision": "ec2083f58cad7311f349bc07a74c1f3a"
  },
  {
    "url": "assets/js/83.8acd98e3.js",
    "revision": "7cf9c434a53161be04e310d53f15acce"
  },
  {
    "url": "assets/js/84.2b497d84.js",
    "revision": "5020e29736d8463b384b82188c756e92"
  },
  {
    "url": "assets/js/85.3382b0bf.js",
    "revision": "ebf3860a2cd43241d901bb261403a514"
  },
  {
    "url": "assets/js/9.e93b9d59.js",
    "revision": "88c8535356c31d2f4a707073cf750d6d"
  },
  {
    "url": "assets/js/app.2242126d.js",
    "revision": "c6e62c1b130aaf094b79614b86840c54"
  },
  {
    "url": "categories/index.html",
    "revision": "7f885c0d480d964ac029d1c1330d9354"
  },
  {
    "url": "categories/关于我/index.html",
    "revision": "d1806192983bb025721191ddf39e3a0a"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "08898e6ecb21582796354336d12dbef1"
  },
  {
    "url": "categories/笔记/page/2/index.html",
    "revision": "bb49dd3e2cdf7f958503862546b0584e"
  },
  {
    "url": "categories/笔记/page/3/index.html",
    "revision": "5180ce52f9b2a27e3afa7e4da8cc785c"
  },
  {
    "url": "categories/笔记/page/4/index.html",
    "revision": "f3906cf2ba401726a577cd66ff70545b"
  },
  {
    "url": "categories/笔记/page/5/index.html",
    "revision": "ddd1d0458d3a843914d975a0b38bd000"
  },
  {
    "url": "categories/笔记/page/6/index.html",
    "revision": "4be8a3e0540ebc725c82e6963c98d807"
  },
  {
    "url": "categories/笔记/page/7/index.html",
    "revision": "f4edad992cffdb890ec78d11c98acdda"
  },
  {
    "url": "categories/读书笔记/index.html",
    "revision": "afda5043bbe58dcdeab014be59daab44"
  },
  {
    "url": "icon.jpg",
    "revision": "1ecb693fa82880c2434b80d8f516eb86"
  },
  {
    "url": "index.html",
    "revision": "ad411aac4489ca12080bd26b6cfed299"
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
    "url": "notes/data-structures-algorithms/lian-biao.html",
    "revision": "66f21e710f893207263fb7ab0678bd10"
  },
  {
    "url": "notes/data-structures-algorithms/list2tree.html",
    "revision": "5f37cd0de102a403f5b2183a65e2ed97"
  },
  {
    "url": "notes/data-structures-algorithms/pai-xu-suan-fa.html",
    "revision": "5c02612011bcc25578f9846146a6b019"
  },
  {
    "url": "notes/data-structures-algorithms/recursion.html",
    "revision": "4bb1289ae10800e78cf3c8aed0e2ba75"
  },
  {
    "url": "notes/data-structures-algorithms/ye-wu-suan-fa.html",
    "revision": "fda0a71de55c582d9febc17bb4820b8b"
  },
  {
    "url": "notes/data-structures-algorithms/zhan-shu-ju.html",
    "revision": "6d8994b6c33ea02c652d0d08ab9996f8"
  },
  {
    "url": "notes/data-structures-algorithms/zhi-zhen-si-xiang.html",
    "revision": "4dfc7965202454129339008ebd59f7f5"
  },
  {
    "url": "notes/git/git-01.html",
    "revision": "d918ba40a3a4cd0e8a029799adc92fd4"
  },
  {
    "url": "notes/index.html",
    "revision": "7a9cdf3a2998a066b0809956f1e666b6"
  },
  {
    "url": "notes/k8s-study/k8s-01.html",
    "revision": "1345e39fc3aa7a1504eb059588056c1f"
  },
  {
    "url": "notes/k8s-study/k8s-02.html",
    "revision": "a99d95acc04231d93db98b3be26d09a4"
  },
  {
    "url": "notes/k8s-study/k8s-03.html",
    "revision": "80fd0d167cbcbbef91285402d27222ee"
  },
  {
    "url": "notes/k8s-study/k8s-04.html",
    "revision": "4d1473d409e48812ca94bea4a28739fc"
  },
  {
    "url": "notes/k8s-study/k8s-05.html",
    "revision": "aed64ef5d176f54e5df55c1b730d77aa"
  },
  {
    "url": "notes/k8s-study/k8s-06.html",
    "revision": "e852957956e2a84e525fb760f2b76956"
  },
  {
    "url": "notes/k8s-study/k8s-07.html",
    "revision": "2c113504ffa05ac3dcb43183b5822d22"
  },
  {
    "url": "notes/k8s-study/k8s-08.html",
    "revision": "e23fa962e023fe1020aa7061d0834261"
  },
  {
    "url": "notes/k8s-study/k8s-09.html",
    "revision": "1cb812620c6e368c229c1df795a705c2"
  },
  {
    "url": "notes/k8s-study/k8s-10.html",
    "revision": "55ef7c8dc8c4a0cfda2951183272328c"
  },
  {
    "url": "notes/k8s-study/k8s-11.html",
    "revision": "7e483ab2ec77ece69a37acff5a3416e7"
  },
  {
    "url": "notes/k8s-study/k8s-12.html",
    "revision": "c9fae4db3fdaee2ba946898418a44adb"
  },
  {
    "url": "notes/k8s-study/k8s-13.html",
    "revision": "d34cf38367eec1e4f40ea49fb25efb4f"
  },
  {
    "url": "notes/k8s-study/k8s-14.html",
    "revision": "fae7278eabf039fe023b58054b372f09"
  },
  {
    "url": "notes/k8s-study/k8s-15.html",
    "revision": "eb65d6ac7dc4a8024fa9cbe9a2032e89"
  },
  {
    "url": "notes/network-of-computer/osiqi-ceng-wang-luo-can-kao-mo-xing.html",
    "revision": "f13ae32fec9285fb99170f33ba5ff01d"
  },
  {
    "url": "notes/network-of-computer/tcp3wo-shou-4hui-shou.html",
    "revision": "7db4a4cd84d4b827ba5b1781cb3f7f32"
  },
  {
    "url": "notes/nodejs-study/koa-study01.html",
    "revision": "17ddc6f4be04cf44f74fa5973219e14b"
  },
  {
    "url": "notes/nodejs-study/mongodb-study01.html",
    "revision": "30d7ba410943322d16f5c4442c978846"
  },
  {
    "url": "notes/nodejs-study/mongoose-study01.html",
    "revision": "c5e112cd572f92d4dced7f8382d5d8f1"
  },
  {
    "url": "notes/nodejs-study/restful.html",
    "revision": "b11a2dff23b4e543e7f61abcb29b3f11"
  },
  {
    "url": "notes/performance-optimization/01.html",
    "revision": "aab9f7f04f03acc1c3ed5f8ea78d5ee7"
  },
  {
    "url": "notes/performance-optimization/02.html",
    "revision": "181825389e5aed56ac6b7ba4940aa295"
  },
  {
    "url": "notes/react-study/r-01.html",
    "revision": "7bfcbadadbdf65d81ed499ba95cf2d53"
  },
  {
    "url": "notes/react-study/r-02.html",
    "revision": "2a2c737eafc0e7234a897c76bbbef913"
  },
  {
    "url": "notes/react-study/r-03.html",
    "revision": "292774d4b21dd8e6b1b0f6c444b8d85a"
  },
  {
    "url": "notes/react-study/r-04.html",
    "revision": "aecd1b687d9b53373a4e21cefa03c843"
  },
  {
    "url": "notes/react-study/r-05.html",
    "revision": "c427fa825cd75801d17a41759e11b955"
  },
  {
    "url": "notes/react-study/r-06.html",
    "revision": "ed3d0984ade5a11d67f7b65d328320dc"
  },
  {
    "url": "notes/react-study/r-07.html",
    "revision": "6ceb8ab2d29890eeada218036892d49e"
  },
  {
    "url": "notes/study-css/css3xin-te-xing.html",
    "revision": "18b145fad4a0e62c1466a3edcea6e650"
  },
  {
    "url": "notes/study-html/canvas.html",
    "revision": "3ef576eb1d7e9c4400d79aea95d23f4f"
  },
  {
    "url": "notes/study-html/html5yu-yi-yuan-su.html",
    "revision": "a899e8e65fff265551843eddb8969671"
  },
  {
    "url": "notes/study-html/web-worker.html",
    "revision": "5e1659a71abb46d13c9757460310229b"
  },
  {
    "url": "notes/study-js/bi-bao.html",
    "revision": "1b9764a00118169b0ca03529198a9407"
  },
  {
    "url": "notes/study-js/jshan-shu-de-diao-yong-fang-shi.html",
    "revision": "9229fd523914294a487b0e9d495f1001"
  },
  {
    "url": "notes/study-js/jsshu-zu-chang-yong-api.html",
    "revision": "b3aa9450e330e14b042024decd31f16f"
  },
  {
    "url": "notes/study-js/lei-xing-pan-duan.html",
    "revision": "28bbd7aa2c4997a7d3b694901657c969"
  },
  {
    "url": "notes/study-js/shou-xie-callhe-applyji-bindhan-shu.html",
    "revision": "31e0fae3d900c5d246727380389e332e"
  },
  {
    "url": "notes/study-js/shou-xie-deepclone.html",
    "revision": "37a752fa215f309d6d530528dfd0227a"
  },
  {
    "url": "notes/study-js/shou-xie-promise.html",
    "revision": "0f27882e6be3a9ff5bc40d775133c077"
  },
  {
    "url": "notes/study-js/thisde-zhi-xiang.html",
    "revision": "44c031a06c839fe970249b91d35f1fb5"
  },
  {
    "url": "notes/study-js/tsji-chu-01.html",
    "revision": "de3073bfd6e71a8e62a900bb0dad7092"
  },
  {
    "url": "notes/study-js/tsji-chu-02.html",
    "revision": "7950470e4bed2d24e81a23b75354d18d"
  },
  {
    "url": "notes/study-js/yi-bu-xian-zai-yu-wei-lai.html",
    "revision": "e669c4454c3af87baca6fd9877501b48"
  },
  {
    "url": "notes/study-js/yuan-xing-lian.html",
    "revision": "f0c1c3f7c7d20f2d170fb9cd815d93be"
  },
  {
    "url": "notes/summary/ai-study.html",
    "revision": "406c133d6834235eb24ed635d2b36bc0"
  },
  {
    "url": "notes/summary/shi-me-shi-fei-man-xue-xi-fa.html",
    "revision": "e78926036a69c7a2e49edd4f2d5fe573"
  },
  {
    "url": "notes/summary/shi-yong-single-spalai-shi-xian-qian-duan-wei-ying-yong.html",
    "revision": "375ee5e096e745f80e6852d2cfb24b53"
  },
  {
    "url": "notes/summary/sockettian-jia-xin-tiao-bao.html",
    "revision": "522c787785701c27fec4c75c69c5c2d1"
  },
  {
    "url": "notes/summary/v8shu-ju-ceng-she-ji-si-kao.html",
    "revision": "8fe121aab9b71c8579a6ff0d75dc7716"
  },
  {
    "url": "notes/summary/zai-gitlab-cili-tong-guo-kubectl-set-imagelai-geng-xin-jing-xiang.html",
    "revision": "1bd174dde8f535654f7ca0aff24d45de"
  },
  {
    "url": "notes/uniapp-study/shi-me-shi-uniapp.html",
    "revision": "bd683166b613e8fb08f2da7689a123cf"
  },
  {
    "url": "notes/vue-study/v-01.html",
    "revision": "3480fe1ad63e8bcabd2c41a5913f9502"
  },
  {
    "url": "notes/vue-study/v-02.html",
    "revision": "cf59860404a38dd0af43446a68ae41f1"
  },
  {
    "url": "notes/vue-study/v-03.html",
    "revision": "f2da6ca593bfc2f56556f6e02bf45daa"
  },
  {
    "url": "notes/vue-study/v-04.html",
    "revision": "9218ce317038c9ade46174fbd13385bd"
  },
  {
    "url": "notes/wx-mp/mp01.html",
    "revision": "f1e7b047ff1ea84a6cd0b34bb632de4f"
  },
  {
    "url": "sea02.jpg",
    "revision": "d2b85fd7e47db39ec5d16a0abb9ae577"
  },
  {
    "url": "tag/Ai/index.html",
    "revision": "ac50f45df1bfb61a51f7735f01eb6822"
  },
  {
    "url": "tag/Canvas/index.html",
    "revision": "9b4d0ef081b9a15d580da035b12efc90"
  },
  {
    "url": "tag/css3/index.html",
    "revision": "377fd37494a27b84169c4b629e8cc780"
  },
  {
    "url": "tag/Devops/index.html",
    "revision": "0320a2b87fbcd6bdc3c227fd35480d17"
  },
  {
    "url": "tag/Devops/page/2/index.html",
    "revision": "6f35198f858af258af27f84b46465001"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "55f287d7b29d38bb2098b0603d3e0224"
  },
  {
    "url": "tag/Html5/index.html",
    "revision": "617d8d44dc509dc26ec50cfd10891c86"
  },
  {
    "url": "tag/index.html",
    "revision": "a24c653160d599b479e0576f1e2a7fba"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "6cebdfce69a512539c03f214799401c4"
  },
  {
    "url": "tag/javascript/page/2/index.html",
    "revision": "c9ffba1cf06cf0062f00777ad01818f0"
  },
  {
    "url": "tag/js/index.html",
    "revision": "5d8a61b663883110b39efa6e2f36af61"
  },
  {
    "url": "tag/k8s/index.html",
    "revision": "5593f590166b4762717a4901d444b6c0"
  },
  {
    "url": "tag/k8s/page/2/index.html",
    "revision": "7ac3f7535c634365716c7496d8ff2f1d"
  },
  {
    "url": "tag/Koa/index.html",
    "revision": "3ec87a5ccc79f1a86f5e29954914dadc"
  },
  {
    "url": "tag/Node.js/index.html",
    "revision": "6c04d8aa04e19e9c2b98e15a77e69eee"
  },
  {
    "url": "tag/promise/index.html",
    "revision": "e1b4f0c21197163746a4ddc51f824938"
  },
  {
    "url": "tag/React/index.html",
    "revision": "18cdf32d403c77838da010ae634aa4e7"
  },
  {
    "url": "tag/RESTful/index.html",
    "revision": "f7837347a939fdf5bc598b7c26143168"
  },
  {
    "url": "tag/resume/index.html",
    "revision": "f96666de3e74cb7b62f40c690ccd3c4f"
  },
  {
    "url": "tag/single-spa/index.html",
    "revision": "7656d93db33ca8493ae095500f8a3759"
  },
  {
    "url": "tag/system.js/index.html",
    "revision": "9dfe97190be9d42d334c6e6a04846b98"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "b5b092380c4ced9b8c132f286ce954e0"
  },
  {
    "url": "tag/uni-app/index.html",
    "revision": "7f5ec9c15d0d45ea1e1795f29fe27815"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "58954e5dbedca67ceb8a85520ea0d625"
  },
  {
    "url": "tag/vue2/index.html",
    "revision": "dbc605b1c931794aa1ed8d7660aadf06"
  },
  {
    "url": "tag/websocket/index.html",
    "revision": "135ff0f4e35d0da6e2fd16b291e980a7"
  },
  {
    "url": "tag/webworker/index.html",
    "revision": "9017abf0ee480e7871dfea9da98051a3"
  },
  {
    "url": "tag/work-loader/index.html",
    "revision": "cc1342a4adb9013b47f24c69501fa175"
  },
  {
    "url": "tag/业务笔记/index.html",
    "revision": "af2f84da5794d34a2db9798220693e1b"
  },
  {
    "url": "tag/你不知道的 javascript/index.html",
    "revision": "ce04ce5f4db05878f23ae051252441c0"
  },
  {
    "url": "tag/前端性能优化/index.html",
    "revision": "84538a0feb7b686cbe1c3c0e1e0d3889"
  },
  {
    "url": "tag/单元测试/index.html",
    "revision": "4b72f9c85927b739d160d409ee10de9f"
  },
  {
    "url": "tag/学习笔记/index.html",
    "revision": "c068d4fab15965e3455476c3c616f988"
  },
  {
    "url": "tag/微信小程序/index.html",
    "revision": "3002fb1836ed3b3d5d7e9d3944016448"
  },
  {
    "url": "tag/微前端/index.html",
    "revision": "0a101e2e0511472daf1c36f285f0d338"
  },
  {
    "url": "tag/数据结构与算法/index.html",
    "revision": "fafae837784bfb3a4bfef141bc9be9dc"
  },
  {
    "url": "tag/源码学习/index.html",
    "revision": "09858a274c8eb089f48b6be289e98135"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "b89b99dd13e138924902472f4847d3c8"
  },
  {
    "url": "tag/计网/index.html",
    "revision": "680654a3b826871aa7b76ee3679d5d0f"
  },
  {
    "url": "tag/读书笔记/index.html",
    "revision": "f00951071efb72cdab6a9990a21d148b"
  },
  {
    "url": "tag/随笔/index.html",
    "revision": "d215b81f4d7defbb118e184effad0e25"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "305879c9db3eb910f270361ad02112ab"
  },
  {
    "url": "timeline/index.html",
    "revision": "ceb4baf4dd6064d1b059c047df152220"
  },
  {
    "url": "view/sui-bi/demo.html",
    "revision": "8b5c9f62868ec716783aac395f25ca9c"
  },
  {
    "url": "view/zhai-ji/xing-fu-zhi-lu.html",
    "revision": "59e292528e6296b2cd8e3fb095be56d6"
  },
  {
    "url": "view/zhai-ji/zhuang-zi.html",
    "revision": "125501a37fc6dd865796b90d61eaa2ac"
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
