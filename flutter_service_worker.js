'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f07e523b557a5c3a47942a3e07735c9e",
"version.json": "3137c6a551d4bdc867e3c1ffd8851877",
"index.html": "a0d4707aee672797e039e1b2fd409ea8",
"/": "a0d4707aee672797e039e1b2fd409ea8",
"main.dart.js": "3334e0c0192ba5c2837e6a65bc1f7062",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.mjs": "af6ec170b075b4001334a887fa8c6ac4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "97bd777d9738d91566afabac02e9b65f",
"main.dart.wasm": "09ca6fafd2ed3c5e473a048a44d58f8b",
".git/config": "f18a091e55ae58f5a67da79e9176e03e",
".git/objects/3e/14dfbf859cf0eb0602095c3dd7de63e6c36e0e": "3048ed29d829781487eec30c36ab8e61",
".git/objects/9b/dbfcb9b1ed79ff22483cde3682c00bf3d645d4": "64fd8c161e7c2222ce178735eeae4ba2",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/93/8dac3bfe1d4f1d8ea299b1665531a509bd51b8": "d93e67714438ac855a31ca12bc623a0f",
".git/objects/33/81f0e7a58d87e4614d8d14e455397cdc1992ff": "3f5cde70f5e6516240ad2c9a08ab2227",
".git/objects/9c/43d33824fc0630a6aa1bb8033d267b9d1d8106": "d8c1795ae397716e87f758a01f4346cd",
".git/objects/9c/1a6749caeb5636b02cf2c62c6ea3335b62ab2e": "423d96b61f3cd48491a460ebf7c843ca",
".git/objects/9c/c45674f4c17eab94fd80be4a991101b97fe10e": "de70a6715c111f2438c358e2d5e67efa",
".git/objects/a4/6d504ee0f5d07ab65fe6be5ff7c17e08750a76": "1c96a3b070a0201e0036ca4e3634a2b3",
".git/objects/ad/89ecb1f3e4ac80c115f66893369fe30663af50": "85082040ce85e7483315ead5e6066d75",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "25d25e93b491abda0b2b909e7485f4d1",
".git/objects/a2/0197a9db9d721eb213c1de7daf314dfaa02af1": "df2e4191064aa9679906ea55522d2e23",
".git/objects/d6/ce2004af2f9dfe8af032d1e899d616abeec5b6": "adf6cc86df91ea5ff7bb31b35fb3d811",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "3d15963af0d77c1cd40702fb7c18fa93",
".git/objects/e2/712265ef09a455da7fb6a3de8c750ff0570790": "ba45133a45840f8e1c4e545ec4fb6c8d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/cf/02a4fb4f7e0b462b341e48ee1649ac8f270542": "d430b843808b267bad671359cb7467f1",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/e4/7f4c02e1411bb52e39aa0470f543900501cba1": "9237c2db35ecd3239ec4c3ef245ba6c2",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/c8/5a07677134cce3c03e5085ea3e9fee71e77478": "a22da00f734c3f8393ecedef5ed00790",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/4e/31335df34768e50d87c2c428f99efe95a53a37": "694f7fe62e1349286a2b30585ee1075b",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/20/167be63013861dddd8f1121f58a9610967f5cd": "09df1c6de7af1c069690389e8e2189f8",
".git/objects/4b/77b7d7c4a5018598e67fc246842fd31d512a99": "ab101ecdec00411f39f1fcfea2005279",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/7c/61448f6cc63a9f140e28d204ce38aec22e2df1": "09860f9399f58ef88ad6b0665336d331",
".git/objects/7c/da738e3bc82ff6ac9cf94d489e20706a29cf8e": "02521fb3f66365e48b03d6e2b0d15a3b",
".git/objects/1f/cb8878144b5c0d558e8b2d709f32cf3af273d8": "f0edfae2757ccc02716c3bf0af855567",
".git/objects/8a/3ff8a19f8580c2b85e532edab089ae3d76ac7c": "503dfb326cbc70c8554f93dac4acf127",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/6cb16d70d664f49373bada4c5bf58dd409a18e": "cb243c84eba197b30f9196424f1cfc2d",
".git/objects/19/db4b84bba491d8ab006a63de296954a9f21189": "d9ec4280c3ac770ff122a38454bf9705",
".git/objects/4c/1ba38993a12e04601a3ffd1ccedcb199c9c9bb": "5186eba8f275a53dcbe3dcbcb7059b0b",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/72/9bc4c79a082df9e4b96aa1116e4e49bedfd47d": "d926f87abe0b9f454cbcc61286997a13",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/fc2ee862e8f7e3d9585e0209e865e2514f3387": "ac80433e00dc616809892e33b5da70ee",
".git/objects/00/125bcbd7be46abec2d3aed77b5c891f42708d8": "b84df8c2f940c742406ad35b34d3964b",
".git/objects/6e/893636f0060e2752e297cd68ff05543d3ebf65": "d99d6c7f324cfe8a1d8b18598b64dc71",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/08/74fad51e7a74b6be373f2877a60b2941498776": "f360642d55bdff87483e573d00776aae",
".git/objects/06/5e1499d9baa64109726a6e8b32a1bd9d4a0d45": "903cfba08e62b7323d886db1a453506d",
".git/objects/6c/1dae1f7abd2ecf42d4b7f1a251a18be4883fa2": "187dfb9518a45f68bdd8ce93cf123434",
".git/objects/39/5d24bffde791527014df6327860c3931dbaa0b": "27c120ed2dd915a87f08cc118a654d63",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5ec65bdd138903b10b9d326b6a01855369a9dd": "1ec021fdb6c696ddd9b530ccdd38b27f",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/d2/bd68949a3b255dafd0ff0e088f5941d99b61a3": "6681d055d03cbd227639077121532a27",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/17ba64bef6194873a7b10e24864a98b0aebc3d": "29e14d7838fa78d00918a62e10833490",
".git/objects/a8/569ea1194327d80fff072f965612e5ae7097a1": "fdc34886f5b3d90746b2841c1c4b1fc3",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ea/7c1a9ae8152b78599ea7f10aa98681f51a885c": "751653a63b60423bd7c4b9b3f4188978",
".git/objects/cc/fd4362d16b2fa3a0dbcfb65ea63c97a8e30ab5": "b975d67eb0ef5993c35ac8f7430916a4",
".git/objects/f0/45cc5927a17fa539b40e7c29154c9ab48163a9": "33b1605beb0d759d6c10302ab885eb80",
".git/objects/e9/039afadf55120424518f4997afb41d6523119f": "9ba33f7394f9a7089d80f0ab1feda29d",
".git/objects/e7/375c2480fae76d2daad6a81c98d13f5f465d29": "b35199d02f86d52e42a1afd1165231ae",
".git/objects/e7/15f1a98a6982acafebf8f65d570df263fa1ddb": "6cd741784a29ea41aec8facd2e2a370c",
".git/objects/79/07ea67ed2eef3e89a0e9527bf77434519c761c": "098e52686f6ea0e31f95200b7f25215e",
".git/objects/77/c57148d7724d4414b98561f675b5b75b41a5c9": "149268fb36a6aefd9ccb1f4e96aa2f17",
".git/objects/23/c43c9335272b73df89660a0b8e76b09826e17c": "e039c45a2f014fa7c34cf7b99c7c0fbd",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/85/dd5f0866d935d3faec4aca71cc7f8642a164b6": "9a6227d69c14df4e0a87103adeff5ba3",
".git/objects/13/a1d09b77515cbcb30f579641a604d755362c9c": "64b36f40c1a4e725d4aff8ca23b1b005",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1756e3769fb209bf843f5786a28c26e1",
".git/logs/refs/heads/main": "1756e3769fb209bf843f5786a28c26e1",
".git/logs/refs/remotes/origin/main": "06417e2305de86eebdf0e80ec3f6a50b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "17359af9640ce218f4ac7c98fc43f647",
".git/refs/remotes/origin/main": "17359af9640ce218f4ac7c98fc43f647",
".git/index": "1f77b4fc475559c67dbcdbf92cbff4d3",
".git/COMMIT_EDITMSG": "4c3cbcadf7b8a9ae2932afc00560a0d6",
"assets/AssetManifest.json": "f2993596b8942493ff1047d6599c4760",
"assets/NOTICES": "5f5c52e0b044d47b2d0089202d7ddf46",
"assets/FontManifest.json": "578fa61108a9a871931214344b9060a7",
"assets/AssetManifest.bin.json": "e919603aa37766d39e15c4ee19877c30",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "6ebc7bc5b74956596611c6774d8beb5b",
"assets/packages/syntax_highlight/grammars/java.json": "7650e3188ef96c739532412c78bf2d19",
"assets/packages/syntax_highlight/grammars/swift.json": "8bac845c316a520f0c3bffa1bb47c26e",
"assets/packages/syntax_highlight/grammars/go.json": "3ff3c2b0a4d9ce5bf1fb77dc0074f8b8",
"assets/packages/syntax_highlight/grammars/sql.json": "957a963dfa0e8d634766e08c80e00723",
"assets/packages/syntax_highlight/grammars/serverpod_protocol.json": "cc9b878a8ae5032ca4073881e5889fd5",
"assets/packages/syntax_highlight/grammars/yaml.json": "7c2dfa28161c688d8e09478a461f17bf",
"assets/packages/syntax_highlight/grammars/rust.json": "f54867905f52d2b7b8b4d23b6f80485e",
"assets/packages/syntax_highlight/grammars/javascript.json": "bcd128d423797ec17b3c722dc5faa8e7",
"assets/packages/syntax_highlight/grammars/dart.json": "b533a238112e4038ed399e53ca050e33",
"assets/packages/syntax_highlight/grammars/json.json": "e608a2cc8f3ec86a5b4af4d7025ae43f",
"assets/packages/syntax_highlight/grammars/css.json": "085871a803ab85a39a4263a978a5dd46",
"assets/packages/syntax_highlight/grammars/html.json": "3b5a1a0bfffd56ded9d1792a2c3cd5fa",
"assets/packages/syntax_highlight/grammars/typescript.json": "1d3d743cdc032cad9a50351a30f45489",
"assets/packages/syntax_highlight/grammars/kotlin.json": "28b00e41cb639cc2d6468531a12f9232",
"assets/packages/syntax_highlight/grammars/python.json": "56cc793c1fb3dcb9fa6f09ea48ff7dc5",
"assets/packages/syntax_highlight/themes/dark_vs.json": "2839d5be4f19e6b315582a36a6dcd1c3",
"assets/packages/syntax_highlight/themes/light_vs.json": "8025deae1ca1a4d1cb803c7b9f8528a1",
"assets/packages/syntax_highlight/themes/dark_plus.json": "b212b7b630779cb4955e27a1c228bf71",
"assets/packages/syntax_highlight/themes/light_plus.json": "2a29ad892e1f54e93062fee13b3688c6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "8d6c50b1894332c02250352320e04856",
"assets/fonts/MaterialIcons-Regular.otf": "c18f948b30db67f0584e01bee8531dab",
"assets/assets/images/bg_bad_img.webp": "29e369079e5490344449dad569e92047",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
