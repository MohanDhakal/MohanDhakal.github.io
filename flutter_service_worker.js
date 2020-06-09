'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "151c076d35180e942455c8c2ee932b9c",
"main.dart.js": "068758eb1f5fc24dab9807cd67efaef7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/AssetManifest.json": "bfc993b4b8a2b8d8d56462c49926c982",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/images/logo.png": "1ae4f5b888cc28f121d07ccf67a7d6f0",
"assets/images/facebook.png": "ba3f0be9c8b654c2ab476bf78963a0b2",
"assets/images/back1.png": "3ac8e85d1aeea4f2494f3a47a597acb9",
"assets/images/9.jpg": "64f9588d519a81937638cb88ae74bff7",
"assets/images/5.jpg": "e452680b7fc216e66089af2e59e30c6f",
"assets/images/7.jpg": "32922805e0346daab837318035080520",
"assets/images/8.jpg": "42605f0f19d06d717b685ab62afb110e",
"assets/images/insta.png": "bb7d6c1ffabad208dc24a66edea42721",
"assets/images/back2.png": "0331543c4b8f4e3d2167cf5d343c5dcf",
"assets/images/github.png": "e483f823c0a13b99cb399befa08980c3",
"assets/images/2.jpg": "a454b9d931aadd8f4e8715cf76f21702",
"assets/images/4.jpg": "d9db25156c6330a9887de7545f9191c4",
"assets/images/photo.jpg": "46d5b9dff092cf6f2080dd37f923f292",
"assets/images/back3.jpeg": "fcd23fd3314dfa11e53edf731ac759dd",
"assets/images/back4.jpg": "fa025ae2dd41ec6bc4b6828cac8bc921",
"assets/images/man.jpg": "344b22b0e4ba2cab7a09f2708bf964ec",
"assets/images/6.jpg": "fb6ae173f9f4883a86e0f4485024df56",
"assets/images/1.jpg": "20e5ef46f2aebb333037c1258015bf02",
"assets/images/linkedin.png": "468ade1f72afd195019d650dddcb47bd",
"assets/images/3.jpg": "ce93b4dc707ea938cbb340072dbc74c7",
"assets/LICENSE": "538de67010d3201d084a9228fbfc811b",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/COMMIT_EDITMSG": "02ee931d8436df262db4335b0ae4f0b8",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/refs/remotes/origin/master": "b73741a2fd7c81370dd4f0c961f7548f",
".git/refs/heads/master": "b73741a2fd7c81370dd4f0c961f7548f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/logs/refs/remotes/origin/master": "2ebee376a50b628d760f5325a8e45501",
".git/logs/refs/heads/master": "29d50480c6497f017d1c0a18a6a5b509",
".git/logs/HEAD": "29d50480c6497f017d1c0a18a6a5b509",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/15/666fb78d7ec7dd7f45decf8a409421c805d621": "cbe68de4acbc42d15f3376080c23a7ac",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/88/786afe65d32c7c23878dfa1ec37d2d675bf3a8": "a0f219274bbd738606eb62514341076b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/a7/3e69ad8b52bc58122926f3a90f1c4f89c770a0": "fe2e8c115d097cc4dc56cffe9270ed4b",
".git/objects/39/389e49fc9939b2a4870b523899312544d766e2": "c1361047b1aacbc6255c6e8bc8729827",
".git/objects/f6/7b09a7a514a563b66b26660fab876c8af9d7c9": "111cb02e43eb09ed9d63b2bde310997e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/76/0c8c634eb9da104077e78b73c4b84c39b800cc": "9afbfd5a51ed5952c61769644b8a9b8f",
".git/objects/05/542e742bab1e600fb8916096a275561a3cb438": "9c029babb6f25ae1184474572cec2ce9",
".git/objects/c0/8bbfe01f48d00cea35d112d2210867af951b85": "3c15e8915ed4cc450d551fae0fb93be0",
".git/objects/7d/d7944b30e70cd987af524c7966096f9b762881": "c564f9036385bdbf863e7edeca46cd8d",
".git/objects/28/cd8240ba6d306d53db89259544f518f0d86a19": "e523644c1da5880f1913a5b81360cab1",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/9c/c6e7ea9faed76794f888f00279fec64bc33013": "cd356b375b2e348a29565b1acd49eaa4",
".git/objects/96/2fc857f6a6f5fab7cfa3814f40f6777f76b8dd": "aa90b6a1a3e16b096b301e395b9e1b64",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/07/f4a7c3be40cb823981610ee9b6fa0ea520ed67": "6bfffd484497ab31c51ea4a822ee288d",
".git/objects/af/bee272151eaa454d51d0ce39730289fef26395": "3686688347c40d6ba5563437137c555e",
".git/objects/e6/051522d1f07e9d2466b94f903ed4af3a34483e": "df3096ffd392c8b59ee18a3683067b08",
".git/objects/1c/27ac34202bfb5a523d74ddc0c3c38b83b108a0": "4c78cb4c3a46f9f485100e1250f18be1",
".git/objects/41/e6f7f24d547bca7a3d4e144107b89d70964952": "51591b4165da30a339b9616566b0ba40",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/44/48cd74d966c22140ccece231b4a1496d3ecc10": "fa1755a8c76ebabc57592ee2c3ad6b2e",
".git/objects/32/d31b13ce3891e863ab7410330cd982b87cb896": "be9dce045caf43b9f97f07cf2c0b75f7",
".git/objects/31/96f74604f29c187a56b6e9bcfbfb60c806ff2e": "bcaff08994d65406da2be963977a1398",
".git/objects/fe/8e393e57e10701feeb5cdb2a5826290d791ac0": "dda32b73a1400870739660c006cef757",
".git/objects/80/4ce3675a3330b7e8b3179589626875d51ed671": "5c5a3c6356ecfb7e418bcd0c72b27628",
".git/objects/22/60a7e924eb2faade91c60ee11653caeadf9477": "8c406bd36097a2ae30924b9bdb574930",
".git/objects/0c/cfc792f98fb3fb90681e41df52ea883840c666": "f0d94495fa7b25497fe0fb2d5c5cafb9",
".git/objects/dc/c42cd00ea56e08c9b2b6d83db91240a487c520": "a312e2414045a715b6a1b51ca442f5c5",
".git/objects/dc/02feb5d141ed0366411bef0605d18d169a91be": "4a13d512649eae068f16e49a957770a2",
".git/objects/dc/c003ac8dca6dc1c629c79db00c350a490885cf": "24150fb9c0506b4d519fad3754f0f28d",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/23/915fea4dba65b18218c77c6a5cc08e079006fd": "781a8717c53fc410a6055a8c52b29fb5",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/fc/2294bd2471cf0ed9c52af1cfdb848f8e20c601": "7d8dbb1562c29e4e3f3c1804d1d9c81d",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/dd/f78c98ac32add22abe0e871dd9147ddb9d6791": "d72d26c7c67ad42c222433d53b6f54a7",
".git/objects/df/cb77f7f5e4fe734d21bf2f90182ce7684fcf39": "61348199b2492ba2b70d0c701e347cdf",
".git/index": "06e50a212e772c509b5cac73f896aae0",
".git/config": "2620d6f883a0677808b386e670076316",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"index.html": "0bc6f18e96a5b8b8089697c792c5423e",
"/": "0bc6f18e96a5b8b8089697c792c5423e"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
