if(!self.define){let e,i={};const c=(c,s)=>(c=new URL(c+".js",s).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,n)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let t={};const r=e=>c(e,a),f={module:{uri:a},exports:t,require:r};i[a]=Promise.all(s.map((e=>f[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-1b51a4a5"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/1008.704491b4ba078e4d.js",revision:"704491b4ba078e4d"},{url:"/_next/static/chunks/1053.adb29a47c34b267a.js",revision:"adb29a47c34b267a"},{url:"/_next/static/chunks/1084.8bd09a422bf924f1.js",revision:"8bd09a422bf924f1"},{url:"/_next/static/chunks/127-e33a8b277ecf5c56.js",revision:"e33a8b277ecf5c56"},{url:"/_next/static/chunks/1377.dab07fcec089356f.js",revision:"dab07fcec089356f"},{url:"/_next/static/chunks/1386.770c3def294b0a82.js",revision:"770c3def294b0a82"},{url:"/_next/static/chunks/1390.c54e7c71c0ffc5e4.js",revision:"c54e7c71c0ffc5e4"},{url:"/_next/static/chunks/1398.56c6592ded221d66.js",revision:"56c6592ded221d66"},{url:"/_next/static/chunks/1446.729b459281b981b9.js",revision:"729b459281b981b9"},{url:"/_next/static/chunks/1460.5bc64440d4463d87.js",revision:"5bc64440d4463d87"},{url:"/_next/static/chunks/1470.40c0496bb6634994.js",revision:"40c0496bb6634994"},{url:"/_next/static/chunks/1557.e3d41c4965c579f3.js",revision:"e3d41c4965c579f3"},{url:"/_next/static/chunks/1576.530a5ca83aea59f5.js",revision:"530a5ca83aea59f5"},{url:"/_next/static/chunks/1627-7d0011fda3be8ff2.js",revision:"7d0011fda3be8ff2"},{url:"/_next/static/chunks/1639.a69f56d8e2858f44.js",revision:"a69f56d8e2858f44"},{url:"/_next/static/chunks/1650.06a77268379b94b2.js",revision:"06a77268379b94b2"},{url:"/_next/static/chunks/1660.76cc05d00e5034ad.js",revision:"76cc05d00e5034ad"},{url:"/_next/static/chunks/1664.5df5fc75dbfcf975.js",revision:"5df5fc75dbfcf975"},{url:"/_next/static/chunks/1706.cc34054ebca747bc.js",revision:"cc34054ebca747bc"},{url:"/_next/static/chunks/177.3359462c66b636ba.js",revision:"3359462c66b636ba"},{url:"/_next/static/chunks/1770.ffd38031b937c10a.js",revision:"ffd38031b937c10a"},{url:"/_next/static/chunks/1834.57754cb0b7b2ec5e.js",revision:"57754cb0b7b2ec5e"},{url:"/_next/static/chunks/1873.ad239337a916524b.js",revision:"ad239337a916524b"},{url:"/_next/static/chunks/1920.69952d11b23d14f9.js",revision:"69952d11b23d14f9"},{url:"/_next/static/chunks/1975.41aaa8a87a888a9c.js",revision:"41aaa8a87a888a9c"},{url:"/_next/static/chunks/1998.65c96083d655e295.js",revision:"65c96083d655e295"},{url:"/_next/static/chunks/2040.2b48b43e5c9bbd94.js",revision:"2b48b43e5c9bbd94"},{url:"/_next/static/chunks/2054.04071aed00fd2c07.js",revision:"04071aed00fd2c07"},{url:"/_next/static/chunks/2062.0a6627b9faec7185.js",revision:"0a6627b9faec7185"},{url:"/_next/static/chunks/2119.56737871073263a3.js",revision:"56737871073263a3"},{url:"/_next/static/chunks/2136.d79aae5ef8b027c6.js",revision:"d79aae5ef8b027c6"},{url:"/_next/static/chunks/2159.d900ca825717a9dd.js",revision:"d900ca825717a9dd"},{url:"/_next/static/chunks/2200.984fffa57a9d939c.js",revision:"984fffa57a9d939c"},{url:"/_next/static/chunks/2224-7a13f163fd0ff9a5.js",revision:"7a13f163fd0ff9a5"},{url:"/_next/static/chunks/2236.f86e47beffd97a47.js",revision:"f86e47beffd97a47"},{url:"/_next/static/chunks/228.bcd421992bab4a0b.js",revision:"bcd421992bab4a0b"},{url:"/_next/static/chunks/2314.ce3a0e1828ad2d06.js",revision:"ce3a0e1828ad2d06"},{url:"/_next/static/chunks/2379-b42dd9f00435bc26.js",revision:"b42dd9f00435bc26"},{url:"/_next/static/chunks/2386.4ea76c10cc41063a.js",revision:"4ea76c10cc41063a"},{url:"/_next/static/chunks/2391.d2715635f5de8769.js",revision:"d2715635f5de8769"},{url:"/_next/static/chunks/2406.04743ed8b26fbb4f.js",revision:"04743ed8b26fbb4f"},{url:"/_next/static/chunks/2486.0bf02443ab518575.js",revision:"0bf02443ab518575"},{url:"/_next/static/chunks/2542.82fcb9f7206aadce.js",revision:"82fcb9f7206aadce"},{url:"/_next/static/chunks/2550.a19cc2cc2593b95d.js",revision:"a19cc2cc2593b95d"},{url:"/_next/static/chunks/2554.1bc5b09592c3089a.js",revision:"1bc5b09592c3089a"},{url:"/_next/static/chunks/2602.b42aa7598d8adcd0.js",revision:"b42aa7598d8adcd0"},{url:"/_next/static/chunks/2629-ccb81fcf6e37b4ca.js",revision:"ccb81fcf6e37b4ca"},{url:"/_next/static/chunks/2675.3af9b237ab623dbf.js",revision:"3af9b237ab623dbf"},{url:"/_next/static/chunks/2807.d9b6fa307dac4dda.js",revision:"d9b6fa307dac4dda"},{url:"/_next/static/chunks/2839-673973d692f6132e.js",revision:"673973d692f6132e"},{url:"/_next/static/chunks/2845.932e23acccf00048.js",revision:"932e23acccf00048"},{url:"/_next/static/chunks/2862-a12582e2de004ed9.js",revision:"a12582e2de004ed9"},{url:"/_next/static/chunks/2992.6da154ef53c053a4.js",revision:"6da154ef53c053a4"},{url:"/_next/static/chunks/305.89841c282a61cef8.js",revision:"89841c282a61cef8"},{url:"/_next/static/chunks/310.95258934d617ae2c.js",revision:"95258934d617ae2c"},{url:"/_next/static/chunks/3118.c9f79ad9cac463c0.js",revision:"c9f79ad9cac463c0"},{url:"/_next/static/chunks/3145.c742f947ce81d3a9.js",revision:"c742f947ce81d3a9"},{url:"/_next/static/chunks/3200.c34b77f98ef16392.js",revision:"c34b77f98ef16392"},{url:"/_next/static/chunks/3203.cbe74052c374223c.js",revision:"cbe74052c374223c"},{url:"/_next/static/chunks/3226-2f0b9ee10bae097e.js",revision:"2f0b9ee10bae097e"},{url:"/_next/static/chunks/3236.167e8c7a6b421cb3.js",revision:"167e8c7a6b421cb3"},{url:"/_next/static/chunks/3249.a78f901e2db85a7a.js",revision:"a78f901e2db85a7a"},{url:"/_next/static/chunks/3283.0c55fd8a1a0f7c80.js",revision:"0c55fd8a1a0f7c80"},{url:"/_next/static/chunks/3297.6d2cecd51fe1fa39.js",revision:"6d2cecd51fe1fa39"},{url:"/_next/static/chunks/3314.141e2dca41748fac.js",revision:"141e2dca41748fac"},{url:"/_next/static/chunks/332.5521364b098bbcd9.js",revision:"5521364b098bbcd9"},{url:"/_next/static/chunks/3465.77dee7ec6cc7e947.js",revision:"77dee7ec6cc7e947"},{url:"/_next/static/chunks/3482.f8558073446e8bd9.js",revision:"f8558073446e8bd9"},{url:"/_next/static/chunks/3509.11f4b2a34d9f2054.js",revision:"11f4b2a34d9f2054"},{url:"/_next/static/chunks/3519.2a44d25a006ebc05.js",revision:"2a44d25a006ebc05"},{url:"/_next/static/chunks/3553.15349468f03cbc62.js",revision:"15349468f03cbc62"},{url:"/_next/static/chunks/3594.9e1a7395d1fc565d.js",revision:"9e1a7395d1fc565d"},{url:"/_next/static/chunks/37.71b0d389f03fb8b9.js",revision:"71b0d389f03fb8b9"},{url:"/_next/static/chunks/370.0a341b2da3b6a0db.js",revision:"0a341b2da3b6a0db"},{url:"/_next/static/chunks/3736.404edb85b9907480.js",revision:"404edb85b9907480"},{url:"/_next/static/chunks/3747.36e9ea225d543396.js",revision:"36e9ea225d543396"},{url:"/_next/static/chunks/3796-279a9e8ccf464247.js",revision:"279a9e8ccf464247"},{url:"/_next/static/chunks/3801.7ea3c8d2c78d847e.js",revision:"7ea3c8d2c78d847e"},{url:"/_next/static/chunks/3883.5e03e3a398cf3720.js",revision:"5e03e3a398cf3720"},{url:"/_next/static/chunks/3892.0150ebdb63fce261.js",revision:"0150ebdb63fce261"},{url:"/_next/static/chunks/3947.a8252dbce4090a6c.js",revision:"a8252dbce4090a6c"},{url:"/_next/static/chunks/3993.45bba5349434ad56.js",revision:"45bba5349434ad56"},{url:"/_next/static/chunks/402.3f3e56dcc798bafe.js",revision:"3f3e56dcc798bafe"},{url:"/_next/static/chunks/4073-d24894d9808b175d.js",revision:"d24894d9808b175d"},{url:"/_next/static/chunks/4114.e9332eb5d146bf98.js",revision:"e9332eb5d146bf98"},{url:"/_next/static/chunks/4144.d7264e550bf9aa39.js",revision:"d7264e550bf9aa39"},{url:"/_next/static/chunks/4163.0e0c9ed3e1aa5112.js",revision:"0e0c9ed3e1aa5112"},{url:"/_next/static/chunks/4212.15885059e8078ec8.js",revision:"15885059e8078ec8"},{url:"/_next/static/chunks/4293.9de2fa8f5848563f.js",revision:"9de2fa8f5848563f"},{url:"/_next/static/chunks/4323.9603162e5cba433d.js",revision:"9603162e5cba433d"},{url:"/_next/static/chunks/4434.7ec75444afd6bf56.js",revision:"7ec75444afd6bf56"},{url:"/_next/static/chunks/4439.7f32805042ce478e.js",revision:"7f32805042ce478e"},{url:"/_next/static/chunks/4511.949892f0fb796cb1.js",revision:"949892f0fb796cb1"},{url:"/_next/static/chunks/4661.8c6b96f62a9a9ede.js",revision:"8c6b96f62a9a9ede"},{url:"/_next/static/chunks/4716-e1b4d085a11d07bd.js",revision:"e1b4d085a11d07bd"},{url:"/_next/static/chunks/4796.c545e50f2ff935e7.js",revision:"c545e50f2ff935e7"},{url:"/_next/static/chunks/4812.8df1cf6b1556ba3d.js",revision:"8df1cf6b1556ba3d"},{url:"/_next/static/chunks/4871.47cba61926bd86dd.js",revision:"47cba61926bd86dd"},{url:"/_next/static/chunks/4879.2d2fd34b79f431f5.js",revision:"2d2fd34b79f431f5"},{url:"/_next/static/chunks/4917.054b83f2f2dd4c4d.js",revision:"054b83f2f2dd4c4d"},{url:"/_next/static/chunks/4ad82c5e-4665064b37b7bd60.js",revision:"4665064b37b7bd60"},{url:"/_next/static/chunks/5063-0f370121f1379795.js",revision:"0f370121f1379795"},{url:"/_next/static/chunks/5076.48ede3497304929b.js",revision:"48ede3497304929b"},{url:"/_next/static/chunks/5134.a121d8d21d1c9247.js",revision:"a121d8d21d1c9247"},{url:"/_next/static/chunks/520.9ac879d0b9da7d2b.js",revision:"9ac879d0b9da7d2b"},{url:"/_next/static/chunks/5209.01676e07f4230fbc.js",revision:"01676e07f4230fbc"},{url:"/_next/static/chunks/525-fd0109832e542cc7.js",revision:"fd0109832e542cc7"},{url:"/_next/static/chunks/5313.de6248e114095fc6.js",revision:"de6248e114095fc6"},{url:"/_next/static/chunks/5329.91d0929928204d18.js",revision:"91d0929928204d18"},{url:"/_next/static/chunks/5372.156686248b75341d.js",revision:"156686248b75341d"},{url:"/_next/static/chunks/5386-314313db221299c8.js",revision:"314313db221299c8"},{url:"/_next/static/chunks/5414-e4c6c38b4327b080.js",revision:"e4c6c38b4327b080"},{url:"/_next/static/chunks/5461-ad2811d7a1e9c775.js",revision:"ad2811d7a1e9c775"},{url:"/_next/static/chunks/5483.b00b75527905088b.js",revision:"b00b75527905088b"},{url:"/_next/static/chunks/5584.f2636c43774cfa50.js",revision:"f2636c43774cfa50"},{url:"/_next/static/chunks/5648.517b7d5b08dc25e0.js",revision:"517b7d5b08dc25e0"},{url:"/_next/static/chunks/5695.c0d6794c93fc3dd9.js",revision:"c0d6794c93fc3dd9"},{url:"/_next/static/chunks/5724.ff22f30ca5854341.js",revision:"ff22f30ca5854341"},{url:"/_next/static/chunks/5736.827a73ab12cceecd.js",revision:"827a73ab12cceecd"},{url:"/_next/static/chunks/5753.e3f8077ac4a7ad1b.js",revision:"e3f8077ac4a7ad1b"},{url:"/_next/static/chunks/5786.06b55d4dc343a882.js",revision:"06b55d4dc343a882"},{url:"/_next/static/chunks/5815.a2728b3992c996c3.js",revision:"a2728b3992c996c3"},{url:"/_next/static/chunks/5819.a59443e62006c745.js",revision:"a59443e62006c745"},{url:"/_next/static/chunks/5879.e0ef43b09c377987.js",revision:"e0ef43b09c377987"},{url:"/_next/static/chunks/5888-2178093f9dc5d64a.js",revision:"2178093f9dc5d64a"},{url:"/_next/static/chunks/5938-040f852d783d83d7.js",revision:"040f852d783d83d7"},{url:"/_next/static/chunks/6062.8312a369a57e3fc3.js",revision:"8312a369a57e3fc3"},{url:"/_next/static/chunks/6092.d604d5262c942c63.js",revision:"d604d5262c942c63"},{url:"/_next/static/chunks/6121.07bf76517bbc2dd2.js",revision:"07bf76517bbc2dd2"},{url:"/_next/static/chunks/617.359b421db498d43e.js",revision:"359b421db498d43e"},{url:"/_next/static/chunks/6243.6c89d9e89f1b6f15.js",revision:"6c89d9e89f1b6f15"},{url:"/_next/static/chunks/6269-75de60bebdb40e51.js",revision:"75de60bebdb40e51"},{url:"/_next/static/chunks/6330.e3bf00b901746657.js",revision:"e3bf00b901746657"},{url:"/_next/static/chunks/6356-6b90bc0d52a4f9c3.js",revision:"6b90bc0d52a4f9c3"},{url:"/_next/static/chunks/6395.6e51d035839ff4ba.js",revision:"6e51d035839ff4ba"},{url:"/_next/static/chunks/6398.b4e423aa3a6d6ff4.js",revision:"b4e423aa3a6d6ff4"},{url:"/_next/static/chunks/6409.88d224ed05447602.js",revision:"88d224ed05447602"},{url:"/_next/static/chunks/6410-e029989c7f4ea142.js",revision:"e029989c7f4ea142"},{url:"/_next/static/chunks/6443.a1c9257ad6c47d80.js",revision:"a1c9257ad6c47d80"},{url:"/_next/static/chunks/6471.8d3d51f0a565139c.js",revision:"8d3d51f0a565139c"},{url:"/_next/static/chunks/65.2b7fe9c5039c5afc.js",revision:"2b7fe9c5039c5afc"},{url:"/_next/static/chunks/6502-421dc8d3157bc1fb.js",revision:"421dc8d3157bc1fb"},{url:"/_next/static/chunks/653-de5273ee0428bcdc.js",revision:"de5273ee0428bcdc"},{url:"/_next/static/chunks/6665.3b98dde37384ff53.js",revision:"3b98dde37384ff53"},{url:"/_next/static/chunks/6670.5d8f6272a3c8106c.js",revision:"5d8f6272a3c8106c"},{url:"/_next/static/chunks/6692.e42dfb241035b482.js",revision:"e42dfb241035b482"},{url:"/_next/static/chunks/673.5310afdb2da5faad.js",revision:"5310afdb2da5faad"},{url:"/_next/static/chunks/6732.03d979fba0acf4db.js",revision:"03d979fba0acf4db"},{url:"/_next/static/chunks/6879.6ee113acbe6a2876.js",revision:"6ee113acbe6a2876"},{url:"/_next/static/chunks/6883-9a39f3df12253bf7.js",revision:"9a39f3df12253bf7"},{url:"/_next/static/chunks/6885.9342e3e960499178.js",revision:"9342e3e960499178"},{url:"/_next/static/chunks/6906-be63579ffd96e09a.js",revision:"be63579ffd96e09a"},{url:"/_next/static/chunks/695-c10ff927f3c5ce23.js",revision:"c10ff927f3c5ce23"},{url:"/_next/static/chunks/6977.d90d402d3e1f3a41.js",revision:"d90d402d3e1f3a41"},{url:"/_next/static/chunks/6991.be0212d2d320173c.js",revision:"be0212d2d320173c"},{url:"/_next/static/chunks/7001.5485d8645b90f0e1.js",revision:"5485d8645b90f0e1"},{url:"/_next/static/chunks/7135.d375bf83305f9c0d.js",revision:"d375bf83305f9c0d"},{url:"/_next/static/chunks/7213.d8a3150d04a604bc.js",revision:"d8a3150d04a604bc"},{url:"/_next/static/chunks/7217.d759d2d0b83a6835.js",revision:"d759d2d0b83a6835"},{url:"/_next/static/chunks/7220.1abbb16e88fb128f.js",revision:"1abbb16e88fb128f"},{url:"/_next/static/chunks/7268.227e212422d7c874.js",revision:"227e212422d7c874"},{url:"/_next/static/chunks/7271-fbec240f4d5663d6.js",revision:"fbec240f4d5663d6"},{url:"/_next/static/chunks/7298-1f0827a640e6b82e.js",revision:"1f0827a640e6b82e"},{url:"/_next/static/chunks/7315.3ca5dd95b74450ea.js",revision:"3ca5dd95b74450ea"},{url:"/_next/static/chunks/7365.72718ce4ca51b05b.js",revision:"72718ce4ca51b05b"},{url:"/_next/static/chunks/7370.20336fca6f462b00.js",revision:"20336fca6f462b00"},{url:"/_next/static/chunks/7406-88801c35a0317dbd.js",revision:"88801c35a0317dbd"},{url:"/_next/static/chunks/7418.059783faabea9bbd.js",revision:"059783faabea9bbd"},{url:"/_next/static/chunks/7421.6e55431a3f7b261d.js",revision:"6e55431a3f7b261d"},{url:"/_next/static/chunks/7475.0017763814cf5003.js",revision:"0017763814cf5003"},{url:"/_next/static/chunks/7525.f7c93eb403c6c9c0.js",revision:"f7c93eb403c6c9c0"},{url:"/_next/static/chunks/7531.11b32e3a14b16ce4.js",revision:"11b32e3a14b16ce4"},{url:"/_next/static/chunks/758.b8b4c9d9c7352c21.js",revision:"b8b4c9d9c7352c21"},{url:"/_next/static/chunks/7590.5339f77c17d3d934.js",revision:"5339f77c17d3d934"},{url:"/_next/static/chunks/75fc9c18.4321f959804bd28d.js",revision:"4321f959804bd28d"},{url:"/_next/static/chunks/7601.1bdb63794564ce90.js",revision:"1bdb63794564ce90"},{url:"/_next/static/chunks/7618.be54e198062edc45.js",revision:"be54e198062edc45"},{url:"/_next/static/chunks/7663.be47fb66e04e4efc.js",revision:"be47fb66e04e4efc"},{url:"/_next/static/chunks/7666.084cc1aca68775af.js",revision:"084cc1aca68775af"},{url:"/_next/static/chunks/7676.d2563dda4aeebcd6.js",revision:"d2563dda4aeebcd6"},{url:"/_next/static/chunks/773-a2c62b29b4e8dc94.js",revision:"a2c62b29b4e8dc94"},{url:"/_next/static/chunks/7741.a66a50938f042536.js",revision:"a66a50938f042536"},{url:"/_next/static/chunks/7762.b997013a52e9b865.js",revision:"b997013a52e9b865"},{url:"/_next/static/chunks/777.e7b9c20985255854.js",revision:"e7b9c20985255854"},{url:"/_next/static/chunks/7802-9d3c0d1564ed0b55.js",revision:"9d3c0d1564ed0b55"},{url:"/_next/static/chunks/7838.7761a498641e25a2.js",revision:"7761a498641e25a2"},{url:"/_next/static/chunks/7917.5c7bddf6daba650e.js",revision:"5c7bddf6daba650e"},{url:"/_next/static/chunks/7938.3b0873aebfc8584b.js",revision:"3b0873aebfc8584b"},{url:"/_next/static/chunks/7988.264688b19c03433e.js",revision:"264688b19c03433e"},{url:"/_next/static/chunks/8007.6987b3bff73d0ba1.js",revision:"6987b3bff73d0ba1"},{url:"/_next/static/chunks/8029.aa6c08cba91dd332.js",revision:"aa6c08cba91dd332"},{url:"/_next/static/chunks/8036.62d63680d36d1bc8.js",revision:"62d63680d36d1bc8"},{url:"/_next/static/chunks/8090.9d81e16eb677206f.js",revision:"9d81e16eb677206f"},{url:"/_next/static/chunks/811-35d6918136836a2b.js",revision:"35d6918136836a2b"},{url:"/_next/static/chunks/8138.e455b9faef00cf7c.js",revision:"e455b9faef00cf7c"},{url:"/_next/static/chunks/8142.ae9991011f01f5e0.js",revision:"ae9991011f01f5e0"},{url:"/_next/static/chunks/8171.da41f4d3690366fc.js",revision:"da41f4d3690366fc"},{url:"/_next/static/chunks/8222.e10d938fe1534e1f.js",revision:"e10d938fe1534e1f"},{url:"/_next/static/chunks/8283.56888ee351ada4c6.js",revision:"56888ee351ada4c6"},{url:"/_next/static/chunks/8318.5387184f0d163846.js",revision:"5387184f0d163846"},{url:"/_next/static/chunks/8393.4276c63baa000f93.js",revision:"4276c63baa000f93"},{url:"/_next/static/chunks/8468.9aa93610d4b2f568.js",revision:"9aa93610d4b2f568"},{url:"/_next/static/chunks/8481-ec414daf2e9724a8.js",revision:"ec414daf2e9724a8"},{url:"/_next/static/chunks/856.5bb91651cf701270.js",revision:"5bb91651cf701270"},{url:"/_next/static/chunks/8561.e0ae2c126e26850c.js",revision:"e0ae2c126e26850c"},{url:"/_next/static/chunks/8625-6c02c86cfc373abf.js",revision:"6c02c86cfc373abf"},{url:"/_next/static/chunks/870.c1277ad0599a1203.js",revision:"c1277ad0599a1203"},{url:"/_next/static/chunks/8768-f2557e1d798b1573.js",revision:"f2557e1d798b1573"},{url:"/_next/static/chunks/8770.44d2f8c73be18acf.js",revision:"44d2f8c73be18acf"},{url:"/_next/static/chunks/8792.c3211ea10b020c9e.js",revision:"c3211ea10b020c9e"},{url:"/_next/static/chunks/8796.2490c1da35e8ab8a.js",revision:"2490c1da35e8ab8a"},{url:"/_next/static/chunks/8813.2bd42d400af2a46c.js",revision:"2bd42d400af2a46c"},{url:"/_next/static/chunks/8824-c613f28e2db5b36e.js",revision:"c613f28e2db5b36e"},{url:"/_next/static/chunks/8840.7573f7cd8b260f6e.js",revision:"7573f7cd8b260f6e"},{url:"/_next/static/chunks/889.64194b207c6ed4a5.js",revision:"64194b207c6ed4a5"},{url:"/_next/static/chunks/8910.ec6846732bff95bc.js",revision:"ec6846732bff95bc"},{url:"/_next/static/chunks/8915.47932f86417996a7.js",revision:"47932f86417996a7"},{url:"/_next/static/chunks/9053.e1be92bd9e59681a.js",revision:"e1be92bd9e59681a"},{url:"/_next/static/chunks/9069.bdb9527c998b5088.js",revision:"bdb9527c998b5088"},{url:"/_next/static/chunks/9071.8c9b70f05e2417d6.js",revision:"8c9b70f05e2417d6"},{url:"/_next/static/chunks/9121.b49c2c698eb6b977.js",revision:"b49c2c698eb6b977"},{url:"/_next/static/chunks/9155.c8b958eb1c154d33.js",revision:"c8b958eb1c154d33"},{url:"/_next/static/chunks/9162-b71eef45b767206f.js",revision:"b71eef45b767206f"},{url:"/_next/static/chunks/9232.61d440e4c3b2b427.js",revision:"61d440e4c3b2b427"},{url:"/_next/static/chunks/9256-d90e8dad70b672e9.js",revision:"d90e8dad70b672e9"},{url:"/_next/static/chunks/9296.32dd1e4dad08fd4a.js",revision:"32dd1e4dad08fd4a"},{url:"/_next/static/chunks/9336-57ff2b6f6cfa7fc7.js",revision:"57ff2b6f6cfa7fc7"},{url:"/_next/static/chunks/9343-421f594f4a4480fc.js",revision:"421f594f4a4480fc"},{url:"/_next/static/chunks/9403.2359b073ef307cec.js",revision:"2359b073ef307cec"},{url:"/_next/static/chunks/9404-3c90b7310b899c77.js",revision:"3c90b7310b899c77"},{url:"/_next/static/chunks/9549.58ee13c7c1d54c19.js",revision:"58ee13c7c1d54c19"},{url:"/_next/static/chunks/9558.9bf5494ebdf03040.js",revision:"9bf5494ebdf03040"},{url:"/_next/static/chunks/9601.f5e40ec387387d40.js",revision:"f5e40ec387387d40"},{url:"/_next/static/chunks/9607.366af86ac9696739.js",revision:"366af86ac9696739"},{url:"/_next/static/chunks/9638-b322ceceaa9fff92.js",revision:"b322ceceaa9fff92"},{url:"/_next/static/chunks/9663.c655ad357c26ad95.js",revision:"c655ad357c26ad95"},{url:"/_next/static/chunks/9686-4338a29f7c11f2dc.js",revision:"4338a29f7c11f2dc"},{url:"/_next/static/chunks/9688.6256bd3e66d244cb.js",revision:"6256bd3e66d244cb"},{url:"/_next/static/chunks/9702.c2140abd34c22c61.js",revision:"c2140abd34c22c61"},{url:"/_next/static/chunks/9713.f1d5b41171c6487d.js",revision:"f1d5b41171c6487d"},{url:"/_next/static/chunks/9781.f87962a71d4ea1e0.js",revision:"f87962a71d4ea1e0"},{url:"/_next/static/chunks/9831.a090f5f3c082ad56.js",revision:"a090f5f3c082ad56"},{url:"/_next/static/chunks/9908.fb0e79a5cb140e11.js",revision:"fb0e79a5cb140e11"},{url:"/_next/static/chunks/9972.2718a68ae9d750c6.js",revision:"2718a68ae9d750c6"},{url:"/_next/static/chunks/9974-c4489e3ac4effd47.js",revision:"c4489e3ac4effd47"},{url:"/_next/static/chunks/cff3e69d-920d199a4cb08a5f.js",revision:"920d199a4cb08a5f"},{url:"/_next/static/chunks/d6e1aeb5-8ae8dd40035ccd02.js",revision:"8ae8dd40035ccd02"},{url:"/_next/static/chunks/ee8b1517-d520e2fdafa0362e.js",revision:"d520e2fdafa0362e"},{url:"/_next/static/chunks/framework-314c182fa7e2bf37.js",revision:"314c182fa7e2bf37"},{url:"/_next/static/chunks/main-e8c8012fd2820122.js",revision:"e8c8012fd2820122"},{url:"/_next/static/chunks/pages/_app-0d43e1d5fd81ceda.js",revision:"0d43e1d5fd81ceda"},{url:"/_next/static/chunks/pages/_error-2b35abdd95bbce4e.js",revision:"2b35abdd95bbce4e"},{url:"/_next/static/chunks/pages/embed/chat/readonly-840df3296080093f.js",revision:"840df3296080093f"},{url:"/_next/static/chunks/pages/embed/chat/readwrite-e5bface337462644.js",revision:"e5bface337462644"},{url:"/_next/static/chunks/pages/embed/video-a51fd2ae4ba85dd0.js",revision:"a51fd2ae4ba85dd0"},{url:"/_next/static/chunks/pages/index-bc79c99145aa0f79.js",revision:"bc79c99145aa0f79"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-8e39db8e10e675bc.js",revision:"8e39db8e10e675bc"},{url:"/_next/static/css/226396fd7a605c95.css",revision:"226396fd7a605c95"},{url:"/_next/static/css/22f76f542c0c1295.css",revision:"22f76f542c0c1295"},{url:"/_next/static/css/25dc33a258f29aa7.css",revision:"25dc33a258f29aa7"},{url:"/_next/static/css/36c06a6d1e31f589.css",revision:"36c06a6d1e31f589"},{url:"/_next/static/css/4b852c938abbe548.css",revision:"4b852c938abbe548"},{url:"/_next/static/css/79a332200ba0e826.css",revision:"79a332200ba0e826"},{url:"/_next/static/css/7e0fea9a6c3abdcb.css",revision:"7e0fea9a6c3abdcb"},{url:"/_next/static/css/87f18c887be77d05.css",revision:"87f18c887be77d05"},{url:"/_next/static/css/8841579222b5034b.css",revision:"8841579222b5034b"},{url:"/_next/static/css/91dee75f0f5d528b.css",revision:"91dee75f0f5d528b"},{url:"/_next/static/css/9ca4489da31a01c6.css",revision:"9ca4489da31a01c6"},{url:"/_next/static/css/a92aaa9cb5a9add1.css",revision:"a92aaa9cb5a9add1"},{url:"/_next/static/css/c1478bc9943d52ed.css",revision:"c1478bc9943d52ed"},{url:"/_next/static/css/c14fe3388348ec80.css",revision:"c14fe3388348ec80"},{url:"/_next/static/css/d14f51de0d46d6eb.css",revision:"d14f51de0d46d6eb"},{url:"/_next/static/css/d29c5cd9368918c4.css",revision:"d29c5cd9368918c4"},{url:"/_next/static/css/d5d50f5506316df5.css",revision:"d5d50f5506316df5"},{url:"/_next/static/css/ef3f4486f04adedc.css",revision:"ef3f4486f04adedc"},{url:"/_next/static/media/airplay.c25573d0.svg",revision:"c25573d0"},{url:"/_next/static/media/inter-cyrillic-300-normal.3b0fe0aa.woff",revision:"3b0fe0aa"},{url:"/_next/static/media/inter-cyrillic-300-normal.786612d8.woff2",revision:"786612d8"},{url:"/_next/static/media/inter-cyrillic-400-normal.5156ecf9.woff2",revision:"5156ecf9"},{url:"/_next/static/media/inter-cyrillic-400-normal.a1abbbeb.woff",revision:"a1abbbeb"},{url:"/_next/static/media/inter-cyrillic-600-normal.20e88899.woff",revision:"20e88899"},{url:"/_next/static/media/inter-cyrillic-600-normal.ac257677.woff2",revision:"ac257677"},{url:"/_next/static/media/inter-cyrillic-800-normal.2ab892f6.woff",revision:"2ab892f6"},{url:"/_next/static/media/inter-cyrillic-800-normal.e12b115f.woff2",revision:"e12b115f"},{url:"/_next/static/media/inter-cyrillic-ext-300-normal.69e88d04.woff",revision:"69e88d04"},{url:"/_next/static/media/inter-cyrillic-ext-300-normal.f894e1d8.woff2",revision:"f894e1d8"},{url:"/_next/static/media/inter-cyrillic-ext-400-normal.4879ddc8.woff2",revision:"4879ddc8"},{url:"/_next/static/media/inter-cyrillic-ext-400-normal.a4fe2f88.woff",revision:"a4fe2f88"},{url:"/_next/static/media/inter-cyrillic-ext-600-normal.21482aa8.woff2",revision:"21482aa8"},{url:"/_next/static/media/inter-cyrillic-ext-600-normal.684dbb71.woff",revision:"684dbb71"},{url:"/_next/static/media/inter-cyrillic-ext-800-normal.635988ed.woff",revision:"635988ed"},{url:"/_next/static/media/inter-cyrillic-ext-800-normal.c396a18b.woff2",revision:"c396a18b"},{url:"/_next/static/media/inter-greek-300-normal.8e40d33d.woff2",revision:"8e40d33d"},{url:"/_next/static/media/inter-greek-300-normal.d8faf285.woff",revision:"d8faf285"},{url:"/_next/static/media/inter-greek-400-normal.0c589a4f.woff2",revision:"0c589a4f"},{url:"/_next/static/media/inter-greek-400-normal.fe3df9bb.woff",revision:"fe3df9bb"},{url:"/_next/static/media/inter-greek-600-normal.7a9219c1.woff2",revision:"7a9219c1"},{url:"/_next/static/media/inter-greek-600-normal.a3d58a50.woff",revision:"a3d58a50"},{url:"/_next/static/media/inter-greek-800-normal.3ae4b10a.woff",revision:"3ae4b10a"},{url:"/_next/static/media/inter-greek-800-normal.aa3c4563.woff2",revision:"aa3c4563"},{url:"/_next/static/media/inter-greek-ext-300-normal.25ff86b8.woff",revision:"25ff86b8"},{url:"/_next/static/media/inter-greek-ext-300-normal.2768fbb6.woff2",revision:"2768fbb6"},{url:"/_next/static/media/inter-greek-ext-400-normal.8225c735.woff2",revision:"8225c735"},{url:"/_next/static/media/inter-greek-ext-400-normal.e1f02a99.woff",revision:"e1f02a99"},{url:"/_next/static/media/inter-greek-ext-600-normal.2c1e268c.woff",revision:"2c1e268c"},{url:"/_next/static/media/inter-greek-ext-600-normal.533d789c.woff2",revision:"533d789c"},{url:"/_next/static/media/inter-greek-ext-800-normal.aaf8c68e.woff",revision:"aaf8c68e"},{url:"/_next/static/media/inter-greek-ext-800-normal.c1dbd103.woff2",revision:"c1dbd103"},{url:"/_next/static/media/inter-latin-300-normal.1e64cb66.woff2",revision:"1e64cb66"},{url:"/_next/static/media/inter-latin-300-normal.80c26b3a.woff",revision:"80c26b3a"},{url:"/_next/static/media/inter-latin-400-normal.779487c6.woff",revision:"779487c6"},{url:"/_next/static/media/inter-latin-400-normal.ac374088.woff2",revision:"ac374088"},{url:"/_next/static/media/inter-latin-600-normal.34227eb1.woff2",revision:"34227eb1"},{url:"/_next/static/media/inter-latin-600-normal.edaa5f1b.woff",revision:"edaa5f1b"},{url:"/_next/static/media/inter-latin-800-normal.7da978cc.woff",revision:"7da978cc"},{url:"/_next/static/media/inter-latin-800-normal.f15de3ac.woff2",revision:"f15de3ac"},{url:"/_next/static/media/inter-latin-ext-300-normal.5212580c.woff",revision:"5212580c"},{url:"/_next/static/media/inter-latin-ext-300-normal.dcb1958c.woff2",revision:"dcb1958c"},{url:"/_next/static/media/inter-latin-ext-400-normal.0cc0c669.woff2",revision:"0cc0c669"},{url:"/_next/static/media/inter-latin-ext-400-normal.c500b98e.woff",revision:"c500b98e"},{url:"/_next/static/media/inter-latin-ext-600-normal.03b16c21.woff2",revision:"03b16c21"},{url:"/_next/static/media/inter-latin-ext-600-normal.5f656274.woff",revision:"5f656274"},{url:"/_next/static/media/inter-latin-ext-800-normal.04eca372.woff2",revision:"04eca372"},{url:"/_next/static/media/inter-latin-ext-800-normal.2dc591bf.woff",revision:"2dc591bf"},{url:"/_next/static/media/inter-vietnamese-300-normal.09dd64fe.woff2",revision:"09dd64fe"},{url:"/_next/static/media/inter-vietnamese-300-normal.edc506b7.woff",revision:"edc506b7"},{url:"/_next/static/media/inter-vietnamese-400-normal.51fad319.woff2",revision:"51fad319"},{url:"/_next/static/media/inter-vietnamese-400-normal.feb85dd6.woff",revision:"feb85dd6"},{url:"/_next/static/media/inter-vietnamese-600-normal.672f1e0b.woff",revision:"672f1e0b"},{url:"/_next/static/media/inter-vietnamese-600-normal.e7c6af30.woff2",revision:"e7c6af30"},{url:"/_next/static/media/inter-vietnamese-800-normal.850d1593.woff",revision:"850d1593"},{url:"/_next/static/media/inter-vietnamese-800-normal.e9acfdc6.woff2",revision:"e9acfdc6"},{url:"/_next/static/media/poppins-devanagari-400-normal.87c72f23.woff2",revision:"87c72f23"},{url:"/_next/static/media/poppins-devanagari-400-normal.f2c29400.woff",revision:"f2c29400"},{url:"/_next/static/media/poppins-devanagari-600-normal.3828f203.woff2",revision:"3828f203"},{url:"/_next/static/media/poppins-devanagari-600-normal.6def6ad7.woff",revision:"6def6ad7"},{url:"/_next/static/media/poppins-latin-400-normal.74033fb9.woff",revision:"74033fb9"},{url:"/_next/static/media/poppins-latin-400-normal.916d3686.woff2",revision:"916d3686"},{url:"/_next/static/media/poppins-latin-600-normal.94625d71.woff",revision:"94625d71"},{url:"/_next/static/media/poppins-latin-600-normal.d8692086.woff2",revision:"d8692086"},{url:"/_next/static/media/poppins-latin-ext-400-normal.591327bf.woff2",revision:"591327bf"},{url:"/_next/static/media/poppins-latin-ext-400-normal.687cae43.woff",revision:"687cae43"},{url:"/_next/static/media/poppins-latin-ext-600-normal.10939fee.woff2",revision:"10939fee"},{url:"/_next/static/media/poppins-latin-ext-600-normal.22fff013.woff",revision:"22fff013"},{url:"/_next/static/p-kv9dilT-rU5sv0sTUtO/_buildManifest.js",revision:"06931e001f1dbe7ba979f8412834a37d"},{url:"/_next/static/p-kv9dilT-rU5sv0sTUtO/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"2f3f8d056ba7cca2dafbdeb51b2d793c"},{url:"/fediverse-white.png",revision:"203a177d28810e5d9e35dd3478bd5d17"},{url:"/fonts/inter/Inter-Black.woff",revision:"d0b121f3a9d3d88afdfd6902d31ee9a0"},{url:"/fonts/inter/Inter-Black.woff2",revision:"661569afe57a38e1529a775a465da20b"},{url:"/fonts/inter/Inter-BlackItalic.woff",revision:"e3329b2b90e1f9bcafd4a36604215dc1"},{url:"/fonts/inter/Inter-BlackItalic.woff2",revision:"a3cc36c89047d530522fc999a22cce54"},{url:"/fonts/inter/Inter-Bold.woff",revision:"99a0d9a7e4c99c17bfdd94a22a5cf94e"},{url:"/fonts/inter/Inter-Bold.woff2",revision:"444a7284663a3bc886683eb81450b294"},{url:"/fonts/inter/Inter-BoldItalic.woff",revision:"3aa31f7356ea9db132b3b2bd8a65df44"},{url:"/fonts/inter/Inter-BoldItalic.woff2",revision:"96284e2a02af46d9ffa2d189eaad5483"},{url:"/fonts/inter/Inter-ExtraBold.woff",revision:"ab70688a1c9d6525584b123575f6c0a5"},{url:"/fonts/inter/Inter-ExtraBold.woff2",revision:"37da9eecf61ebced804b266b14eef98e"},{url:"/fonts/inter/Inter-ExtraBoldItalic.woff",revision:"728a4c7df3ed1b2bc077010063f9ef1c"},{url:"/fonts/inter/Inter-ExtraBoldItalic.woff2",revision:"fcc7d60ef790b43eb520fdc5c7348799"},{url:"/fonts/inter/Inter-ExtraLight.woff",revision:"dd19efda9c6e88ad83a5b052915899f7"},{url:"/fonts/inter/Inter-ExtraLight.woff2",revision:"b3b2ed6a20c538e9c809f4df5c04ac2a"},{url:"/fonts/inter/Inter-ExtraLightItalic.woff",revision:"a6566ae6fa3c58b48f888d7c9c234d52"},{url:"/fonts/inter/Inter-ExtraLightItalic.woff2",revision:"079cd1e71cd4f73bef86f72deced6d03"},{url:"/fonts/inter/Inter-Italic.woff",revision:"f137a90d649b6ab032563856df323f40"},{url:"/fonts/inter/Inter-Italic.woff2",revision:"fd26ff23f831db9ae85a805386529385"},{url:"/fonts/inter/Inter-Light.woff",revision:"5d3776eb78374b0ebbce639adadf73d1"},{url:"/fonts/inter/Inter-Light.woff2",revision:"780dd2adb71f18d7a357ab7f65e881d6"},{url:"/fonts/inter/Inter-LightItalic.woff",revision:"d0fa7cbcf9ca5edb6ebe41fd8d49e1fb"},{url:"/fonts/inter/Inter-LightItalic.woff2",revision:"df29c53403b2e13dc56df3e291c32f09"},{url:"/fonts/inter/Inter-Medium.woff",revision:"c0638bea87a05fdfa2bb3bba2efe54e4"},{url:"/fonts/inter/Inter-Medium.woff2",revision:"75db5319e7e87c587019a5df08d7272c"},{url:"/fonts/inter/Inter-MediumItalic.woff",revision:"a1b588627dd12c556a7e3cd81e400ecf"},{url:"/fonts/inter/Inter-MediumItalic.woff2",revision:"f1e11535e56c67698e263673f625103e"},{url:"/fonts/inter/Inter-Regular.woff",revision:"3ac83020fe53b617b79b5e2ad66764af"},{url:"/fonts/inter/Inter-Regular.woff2",revision:"dc131113894217b5031000575d9de002"},{url:"/fonts/inter/Inter-SemiBold.woff",revision:"66a68ffab2bf40553e847e8f025f75be"},{url:"/fonts/inter/Inter-SemiBold.woff2",revision:"007ad31a53f4ab3f58ee74f2308482ce"},{url:"/fonts/inter/Inter-SemiBoldItalic.woff",revision:"6cd13dbd150ac0c7f337a2939a3d50a8"},{url:"/fonts/inter/Inter-SemiBoldItalic.woff2",revision:"3031b683bafcd9ded070c00d784f4626"},{url:"/fonts/inter/Inter-Thin.woff",revision:"b068b7189120a6626e3cfe2a8b917d0f"},{url:"/fonts/inter/Inter-Thin.woff2",revision:"d52e5e38715502616522eb3e9963b69b"},{url:"/fonts/inter/Inter-ThinItalic.woff",revision:"97bec98832c92f799aeebf670b83ff6c"},{url:"/fonts/inter/Inter-ThinItalic.woff2",revision:"a9780071b7f498c1523602910a5ef242"},{url:"/fonts/inter/Inter-italic.var.woff2",revision:"1f7ca6383ea7c74a7f5ddd76c3d3cef2"},{url:"/fonts/inter/Inter-roman.var.woff2",revision:"66c6e40883646a7ad993108b2ce2da32"},{url:"/fonts/inter/Inter.var.woff2",revision:"8dd26c3dd0125fb16ce19b8f5e8273fb"},{url:"/fonts/inter/inter.css",revision:"178297900cc42c19e1e47fbc2487abe5"},{url:"/img/favicon/android-icon-144x144.png",revision:"3de56fea2ea05c5cb8e42a21d63de48e"},{url:"/img/favicon/android-icon-192x192.png",revision:"dd8a4c74ec2be516a57d40df25540ab8"},{url:"/img/favicon/android-icon-36x36.png",revision:"77887a8a93baed7eaeb316be4b31a7f9"},{url:"/img/favicon/android-icon-48x48.png",revision:"d1ff9fb0528cb9100ad5ee5fd7ece71f"},{url:"/img/favicon/android-icon-72x72.png",revision:"9505e8ef62d1b2d0783adb8d958e8007"},{url:"/img/favicon/android-icon-96x96.png",revision:"8f17da2436060c779c27f3ffb5eac999"},{url:"/img/favicon/apple-icon-114x114.png",revision:"efd8a26a33f16975715ce8c56169d730"},{url:"/img/favicon/apple-icon-120x120.png",revision:"56dcc09f7674f293595117b3181dcf88"},{url:"/img/favicon/apple-icon-144x144.png",revision:"3de56fea2ea05c5cb8e42a21d63de48e"},{url:"/img/favicon/apple-icon-152x152.png",revision:"368ae8346bc9bb8d3f89ef48acb094f9"},{url:"/img/favicon/apple-icon-180x180.png",revision:"c691e02bc0b7df6cb31da017b420cba5"},{url:"/img/favicon/apple-icon-57x57.png",revision:"90555efc26d3a34a3979c133868f9d34"},{url:"/img/favicon/apple-icon-60x60.png",revision:"06dda52763aee5612d79999966488f79"},{url:"/img/favicon/apple-icon-72x72.png",revision:"9505e8ef62d1b2d0783adb8d958e8007"},{url:"/img/favicon/apple-icon-76x76.png",revision:"fedee38a4cf4d5918f8dbd1657c709c9"},{url:"/img/favicon/apple-icon-precomposed.png",revision:"8ad8bbee4eb631f76e89807878622aed"},{url:"/img/favicon/apple-icon.png",revision:"fb7eaf4e8ef1e852bd28b08f46ae6309"},{url:"/img/favicon/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/img/favicon/favicon-16x16.png",revision:"3dba5d08ad8a2a4de265448afa2fd03c"},{url:"/img/favicon/favicon-32x32.png",revision:"0ae932cc803789d645a2409cb67db049"},{url:"/img/favicon/favicon-96x96.png",revision:"8f17da2436060c779c27f3ffb5eac999"},{url:"/img/favicon/ms-icon-144x144.png",revision:"3de56fea2ea05c5cb8e42a21d63de48e"},{url:"/img/favicon/ms-icon-150x150.png",revision:"6224c535c86d618e36a97da48e52056b"},{url:"/img/favicon/ms-icon-310x310.png",revision:"c391dc97d4c01177bd07291c1f694063"},{url:"/img/favicon/ms-icon-70x70.png",revision:"4cb3f77034cab3de7b60cd7d954042d1"},{url:"/img/fediverse-black.png",revision:"b5ede08246f4a691dff8dcefe39c984d"},{url:"/img/fediverse-color.png",revision:"6264c2ac70632db6e3447581da838d1b"},{url:"/img/follow.svg",revision:"8f185615cd7242792c8bd73b359b2498"},{url:"/img/indieauth.png",revision:"7fbf89da18a721dc25a16393b8a62e82"},{url:"/img/like.svg",revision:"2af8fcf2ffc5a028b9b300538a5e766e"},{url:"/img/repost.svg",revision:"12830cd3f1099b40670e8a69b40efa27"},{url:"/manifest.json",revision:"3ebf89ccef77c69bcd65ed8757086c99"},{url:"/serviceWorker.js",revision:"0fefbecf45aefe5354045cbf926e6a25"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:c,state:s})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),e.registerRoute(/\.(?:ts|m3u8)$/i,new e.NetworkOnly,"GET"),e.registerRoute(/^\/admin\/.*$/,new e.NetworkOnly,"GET"),e.registerRoute(/^\/api\/.*$/,new e.NetworkOnly,"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
