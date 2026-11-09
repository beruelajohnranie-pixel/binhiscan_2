const V="binhiscan-v7";
const CORE=["./","index.html","style.css","seeds.js","app.js","manifest.webmanifest","icon-192.png","icon-512.png","lib/tf.min.js","model/model.json","model/metadata.json","model/weights.bin"];
self.addEventListener("install",e=>e.waitUntil((async()=>{
  const c=await caches.open(V);
  await Promise.all(CORE.map(async u=>{try{const r=await fetch(u,{cache:"no-store"});if(r.ok)await c.put(u,r)}catch(_){}}));
  self.skipWaiting();
})()));
self.addEventListener("activate",e=>e.waitUntil((async()=>{
  for(const k of await caches.keys())if(k!==V)await caches.delete(k);
  await clients.claim();
})()));
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  const u=new URL(e.request.url);
  const isModel=u.pathname.includes("/model/");
  if(isModel){
    // Never return index.html as a fake model file. Prefer network, then exact cache match.
    e.respondWith(fetch(e.request).then(r=>{
      if(r.ok){const copy=r.clone();caches.open(V).then(c=>c.put(e.request,copy));}
      return r;
    }).catch(async()=>{
      const c=await caches.open(V);return (await c.match(e.request))||new Response("Model file unavailable",{status:503});
    }));
    return;
  }
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).then(n=>{
    if(n.ok){const copy=n.clone();caches.open(V).then(c=>c.put(e.request,copy));}
    return n;
  }).catch(()=>caches.match("index.html"))));
});
