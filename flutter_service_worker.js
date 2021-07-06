'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "15c11c8a2f02639e924cff027afed673",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/00/1e74bf5ce599bcbeb2b2a90e8b5483439a247b": "f978c7ec650f5ef1316ec4254d4325fa",
".git/objects/17/4b307fa04372b8eae1eec4e81ae8c73f4b266e": "eecca0d60e01219cb6e5c034377926de",
".git/objects/22/50913fef307865486ca54446fe866b53277ae7": "cf7fd2553f27e868f09ce241acc056ff",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/c85d4e1cc650c2845cc15bd187df92403eac53": "9cebaea38f98e681fcc81a86382556bd",
".git/objects/54/4c7ab0b196600aacfe313719685e466e3d0f39": "78f69c55f0010d721b81d938f16c5e04",
".git/objects/5c/3422fe75d6b1a80fc89cf26d06d6d82580089c": "7901450606f1eb51c89ce66d0e00409b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/94c3dbf414242103497e44a5836a3b5cc23dfb": "0ae0c24ff84b227de2090e45f4944e3e",
".git/objects/aa/d799d3e14430b8cc156e7bc89a7b3318532e65": "79ea14853ada1a0ff3da6013b574cac2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/bf/6b2771144f6b0b2b0d4f38aa3a5bcfa265eda2": "45314a269dd7f8626fb6afb8b69be0d6",
".git/objects/e3/8a2724694df391bd6a2e04616d4189a46497c8": "3798b391926a335cdfce9b702e392af6",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
"assets/AssetManifest.json": "a9b1732620365ae786b1548895a21c32",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/aboutme.JPG": "4166c1c2191d6ffa69b36f38f1da7085",
"assets/images/Suprim.png": "5215b516778f383db3962630f4f90b7f",
"assets/NOTICES": "1376e4ef1c33480c01c38e19fcb6812f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "b89a0e8c8d94d3ebac0784f4b0f06297",
"/": "428c75cd3850dc0e5df3a1204ec3b5f8",
"main.dart.js": "6c5f554a2342978d494067292787d595",
"manifest.json": "08825c0efa82da35380c86c41dd71df6",
"suprimpoudel.com.io/.git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
"suprimpoudel.com.io/.git/config": "7698b7a22936f19882bd914174a93280",
"suprimpoudel.com.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"suprimpoudel.com.io/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"suprimpoudel.com.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"suprimpoudel.com.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"suprimpoudel.com.io/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"suprimpoudel.com.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"suprimpoudel.com.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"suprimpoudel.com.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"suprimpoudel.com.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"suprimpoudel.com.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"suprimpoudel.com.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"suprimpoudel.com.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"suprimpoudel.com.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"suprimpoudel.com.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"suprimpoudel.com.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"suprimpoudel.com.io/.git/index": "fb4ee4cfe565d17f0204eb3193512581",
"suprimpoudel.com.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"suprimpoudel.com.io/.git/logs/HEAD": "0d46927da6ed4bcf930a55aa2da91469",
"suprimpoudel.com.io/.git/logs/refs/heads/master": "0d46927da6ed4bcf930a55aa2da91469",
"suprimpoudel.com.io/.git/logs/refs/remotes/origin/master": "42546710ebd985c323947eb3a127352b",
"suprimpoudel.com.io/.git/objects/00/1e74bf5ce599bcbeb2b2a90e8b5483439a247b": "f978c7ec650f5ef1316ec4254d4325fa",
"suprimpoudel.com.io/.git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
"suprimpoudel.com.io/.git/objects/17/4b307fa04372b8eae1eec4e81ae8c73f4b266e": "eecca0d60e01219cb6e5c034377926de",
"suprimpoudel.com.io/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"suprimpoudel.com.io/.git/objects/20/7d3178b7711e9a66b587a09b04e750d7bdd271": "a0e79dd8783f2b095a5a2066153f4342",
"suprimpoudel.com.io/.git/objects/22/50913fef307865486ca54446fe866b53277ae7": "cf7fd2553f27e868f09ce241acc056ff",
"suprimpoudel.com.io/.git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
"suprimpoudel.com.io/.git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
"suprimpoudel.com.io/.git/objects/4e/c85d4e1cc650c2845cc15bd187df92403eac53": "9cebaea38f98e681fcc81a86382556bd",
"suprimpoudel.com.io/.git/objects/54/4c7ab0b196600aacfe313719685e466e3d0f39": "78f69c55f0010d721b81d938f16c5e04",
"suprimpoudel.com.io/.git/objects/5c/3422fe75d6b1a80fc89cf26d06d6d82580089c": "7901450606f1eb51c89ce66d0e00409b",
"suprimpoudel.com.io/.git/objects/5c/cf6e2d69eaaafe7aa0c5e79d23587312ca8a85": "ce56ad78c1b837fd0e39fb2dd8a4a43f",
"suprimpoudel.com.io/.git/objects/6a/59d081ec9cf6b58d18cab5fba6d18697d276ca": "a899630a7222576fbf5552d667c7f0c2",
"suprimpoudel.com.io/.git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
"suprimpoudel.com.io/.git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
"suprimpoudel.com.io/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"suprimpoudel.com.io/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"suprimpoudel.com.io/.git/objects/8c/c0486417fa186f76bb5546a9fea77fd570d325": "7ce06baec101e76245a2db4164cbb283",
"suprimpoudel.com.io/.git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
"suprimpoudel.com.io/.git/objects/93/eb6acffe5839c8669a695af22137e8017e727e": "f29b203493d74349b44db0b4391cb52f",
"suprimpoudel.com.io/.git/objects/94/94c3dbf414242103497e44a5836a3b5cc23dfb": "0ae0c24ff84b227de2090e45f4944e3e",
"suprimpoudel.com.io/.git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
"suprimpoudel.com.io/.git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
"suprimpoudel.com.io/.git/objects/aa/d799d3e14430b8cc156e7bc89a7b3318532e65": "79ea14853ada1a0ff3da6013b574cac2",
"suprimpoudel.com.io/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"suprimpoudel.com.io/.git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
"suprimpoudel.com.io/.git/objects/bf/6b2771144f6b0b2b0d4f38aa3a5bcfa265eda2": "45314a269dd7f8626fb6afb8b69be0d6",
"suprimpoudel.com.io/.git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
"suprimpoudel.com.io/.git/objects/e3/8a2724694df391bd6a2e04616d4189a46497c8": "3798b391926a335cdfce9b702e392af6",
"suprimpoudel.com.io/.git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
"suprimpoudel.com.io/.git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
"suprimpoudel.com.io/.git/refs/heads/master": "4d1dc3939f470d701d28e31627a987fd",
"suprimpoudel.com.io/.git/refs/remotes/origin/master": "4d1dc3939f470d701d28e31627a987fd",
"suprimpoudel.com.io/assets/AssetManifest.json": "a9b1732620365ae786b1548895a21c32",
"suprimpoudel.com.io/assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"suprimpoudel.com.io/assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"suprimpoudel.com.io/assets/images/aboutme.JPG": "4166c1c2191d6ffa69b36f38f1da7085",
"suprimpoudel.com.io/assets/images/Suprim.png": "5215b516778f383db3962630f4f90b7f",
"suprimpoudel.com.io/assets/NOTICES": "1b90ab05346ccf9e419594852e67b0b8",
"suprimpoudel.com.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"suprimpoudel.com.io/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"suprimpoudel.com.io/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"suprimpoudel.com.io/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"suprimpoudel.com.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"suprimpoudel.com.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"suprimpoudel.com.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"suprimpoudel.com.io/index.html": "428c75cd3850dc0e5df3a1204ec3b5f8",
"suprimpoudel.com.io/main.dart.js": "45bea685f951686de2a8d32ca8f01c02",
"suprimpoudel.com.io/manifest.json": "08825c0efa82da35380c86c41dd71df6",
"suprimpoudel.com.io/version.json": "281f2a7b1646c3dea6feea25f04fa556",
"version.json": "281f2a7b1646c3dea6feea25f04fa556"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
