'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "151c076d35180e942455c8c2ee932b9c",
"main.dart.js": "7dbb5bb4d1737a1c01da68d793473d05",
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
"assets/LICENSE": "5569df419a749c7469c652b016de236e",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
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
