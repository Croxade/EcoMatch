const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const IMG={
plastic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxq9025nfPW3cSna5rTZJkAm3FhQueweA3-1ISzZlFJZ2vEZKwq3IZBEr&s=10",
cardboard:"https://www.onepresso.net/wp-content/uploads/2018/11/Packing04.jpg",
clothes:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//92/MTA-3171836/kaos-urban_-kaos-urban-custom-e-sport-game-mobile-legends--ml---fk0011--_full02.jpg",
metal:"https://upload.wikimedia.org/wikipedia/commons/1/11/Konservendose-1.jpg",
laptop:"https://dlcdnwebimgs.asus.com/gain/B239AD46-0C86-422B-BF95-B2AC08FE96DF/w750/h470/fwebp",
eco:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSo-GRMVvPAH_dva2Lzl95Jfyl6nRZi9lgkozRYKTfbul22RA6UiZdI4Du&s=10",
paper:"https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
textile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5mB1oW7DwpQSeABJPzZsigivaV8hpVD9hvPnJ_SOsIz6jg6sVv9lfL8pd&s=10"
};
let products=[
{id:1,cat:"Plastik",name:"Botol PET Bening",img:IMG.plastic,price:2750,weight:"10 kg",loc:"Jakarta Selatan",seller:"GreenSaver",match:92,condition:"Clean & sorted"},
{id:2,cat:"Kertas",name:"Kardus Corrugated",img:IMG.cardboard,price:1800,weight:"35 kg",loc:"Jakarta Selatan",seller:"Dina Home",match:88,condition:"Dry & sorted"},
{id:3,cat:"Kain",name:"Pakaian Layak Pakai",img:IMG.clothes,price:8500,weight:"18 kg",loc:"Depok",seller:"Ruang Berbagi",match:84,condition:"Good condition"},
{id:4,cat:"Logam",name:"Kaleng Aluminium",img:IMG.metal,price:16500,weight:"22 kg",loc:"Tangerang",seller:"Ari Workshop",match:81,condition:"Compressed"},
{id:5,cat:"Elektronik",name:"Laptop Rusak / Parts",img:IMG.laptop,price:18500,weight:"7 kg",loc:"Jakarta Barat",seller:"TechCycle",match:79,condition:"For parts"},
{id:6,cat:"Plastik",name:"Jerigen HDPE",img:IMG.plastic,price:3200,weight:"26 kg",loc:"Bekasi",seller:"Nanda",match:76,condition:"Clean"},
{id:7,cat:"Kertas",name:"Majalah & HVS",img:IMG.paper,price:1600,weight:"12 kg",loc:"Jakarta Timur",seller:"Kampus Hijau",match:73,condition:"Dry"},
{id:8,cat:"Kain",name:"Sisa Kain Katun",img:IMG.textile,price:6500,weight:"31 kg",loc:"Tangerang",seller:"SewLab",match:71,condition:"Sorted"}
];
let matches=[
["ER","EcoRecycle Indonesia","PET Bening","50–100 kg","Jakarta · Pickup","92%", "Rp 2.750/kg"],
["PL","PaperLoop","Kardus Corrugated","30–80 kg","Jakarta · Drop-off","88%", "Rp 1.800/kg"],
["RW","ReWear Indonesia","Textile / Cotton","10–50 kg","Depok · Pickup","84%", "Rp 8.500/kg"],
["MC","MetalCycle","Aluminium","20–100 kg","Tangerang · Pickup","81%", "Rp 16.500/kg"]
];
let learn=[
["Mitos atau Fakta: Plastik Bisa Terurai?",IMG.eco,"2 min","+50 EC"],
["Kenapa Kardus Bekas Punya Nilai Tinggi?",IMG.cardboard,"3 min","+40 EC"],
["Textile Waste: Masalah yang Tak Terlihat",IMG.textile,"4 min","+80 EC"],
["Cara Memilah Sampah di Rumah",IMG.eco,"2 min","+30 EC"],
["Circular Economy untuk Anak Muda",IMG.paper,"3 min","+60 EC"],
["Dari Limbah Jadi Bahan Baku",IMG.metal,"4 min","+100 EC"]
];
let state={coins:12850,filter:"all",query:"",sort:"match",history:[
["Listing Botol PET · #ECM-1842","+Rp 27.500","Today"],["EcoLearn · Plastic 101","+50 EC","Today"],["Pickup Kardus · #ECM-1809","+Rp 63.000","Yesterday"],["Challenge · 5 kg plastic","+100 EC","Yesterday"]
]};
const meta={
dashboard:["EcoMatch / Overview","Good afternoon, GreenSaver.","Hari ini adalah hari yang bagus untuk mengubah sesuatu yang tidak terpakai menjadi bernilai."],
market:["EcoMatch / Marketplace","Find value in what you already have.","Temukan material, buyer, dan supplier di sekitar ekosistemmu."],
matches:["EcoMatch / Smart Match","We found your next opportunity.","Match berdasarkan material, volume, lokasi, harga, dan kebutuhan buyer."],
sell:["EcoMatch / Sell","Turn waste into value.","Post dalam kurang dari 2 menit. EcoMatch akan mencarikan buyer yang relevan."],
orders:["EcoMatch / Transactions","Orders & Pickup","Kelola proses dari deal sampai material diterima buyer."],
messages:["EcoMatch / Messages","Talk to your circular network.","Negosiasi, konfirmasi pickup, dan koordinasi dengan buyer."],
learn:["EcoMatch / EcoLearn","Scroll. Learn. Earn. Impact.","Konten singkat tentang circular economy yang memberikan reward."],
challenge:["EcoMatch / Community","Small actions. Collective impact.","Bangun kebiasaan baik bersama komunitas EcoMatch."],
impact:["EcoMatch / Impact","Make your waste visible.","Lihat dampak lingkungan dan nilai ekonomi yang kamu ciptakan."],
wallet:["EcoMatch / EcoWallet","Your circular rewards.","Kelola EcoCoin yang kamu dapatkan dari aktivitas di EcoMatch."],
settings:["EcoMatch / Account","Settings","Atur pengalaman EcoMatch sesuai kebutuhanmu."]
};
function rupiah(n){return"Rp "+Number(n).toLocaleString("id-ID")}
function toast(t){const x=$("#toast");x.textContent=t;x.classList.add("show");clearTimeout(toast.t);toast.t=setTimeout(()=>x.classList.remove("show"),2200)}
function sync(){["sideCoins","dashCoins","walletCoins"].forEach(id=>{const x=$("#"+id);if(x)x.textContent=state.coins.toLocaleString("id-ID")})}
function page(name){
  $$(".page").forEach(x=>x.classList.remove("active"));$("#"+name).classList.add("active");
  $$(".nav").forEach(x=>x.classList.toggle("active",x.dataset.page===name));
  if(meta[name]){ $("#crumb").textContent=meta[name][0];$("#pageTitle").textContent=meta[name][1];$("#pageDesc").textContent=meta[name][2];}
  window.scrollTo({top:0,behavior:"smooth"});render(name);
}
function render(name){
  if(name==="dashboard")renderDash();
  if(name==="market")renderMarket();
  if(name==="matches")renderMatches();
  if(name==="orders")renderOrders();
  if(name==="messages")renderConversations();
  if(name==="learn")renderLearn();
  if(name==="challenge")renderChallenge();
  if(name==="wallet")renderWallet();
}
function renderDash(){
 $("#dashMatches").innerHTML=matches.slice(0,3).map(m=>`<div class="match-row"><div class="company-logo">${m[0]}</div><main><b>${m[1]}</b><small>Needs ${m[2]} · ${m[3]}</small></main><div class="match-score-mini"><b>${m[5]}</b><small>${m[6]}</small></div></div>`).join("");
 $("#dashActivity").innerHTML=state.history.slice(0,4).map(a=>`<div class="activity"><span><b>${a[0]}</b><small>${a[2]}</small></span><strong>${a[1]}</strong></div>`).join("");
}
function productCard(p){
 return `<article class="product"><div class="product-photo"><img src="${p.img}" alt="${p.name}" loading="lazy"><button class="heart" data-save="${p.id}">♡</button></div><div class="product-body"><span class="badge">${p.cat}</span><h3>${p.name}</h3><p>${p.condition} · ${p.weight}</p><div class="product-price">${rupiah(p.price)} <small>/kg</small></div><div class="product-meta"><span>⌖ ${p.loc}</span><span>${p.match}% match</span></div><button data-product="${p.id}">View listing →</button></div></article>`;
}
function renderMarket(){
 let a=products.filter(p=>(state.filter==="all"||p.cat===state.filter)&&(!state.query||(`${p.name} ${p.cat} ${p.loc} ${p.seller}`).toLowerCase().includes(state.query)));
 if(state.sort==="high")a.sort((x,y)=>y.price-x.price);if(state.sort==="low")a.sort((x,y)=>x.price-y.price);if(state.sort==="new")a.sort((x,y)=>y.id-x.id);if(state.sort==="match")a.sort((x,y)=>y.match-x.match);
 $("#resultCount").textContent=a.length;$("#marketGrid").innerHTML=a.map(productCard).join("");
}
function renderMatches(){
 $("#matchList").innerHTML=matches.map(m=>`<article class="match-card"><div class="company-logo">${m[0]}</div><main><h3>${m[1]}</h3><p>Looking for <b>${m[2]}</b> · Volume ${m[3]}</p><div class="tags"><span>⌖ ${m[4]}</span><span>Verified buyer</span></div></main><div class="score-box"><strong>${m[5]}</strong><small>match score</small><small>${m[6]}</small></div><button class="btn primary" data-contact="${m[1]}">Contact buyer</button></article>`).join("");
}
function renderOrders(){
 const rows=[
 ["#ECM-1842","EcoRecycle Indonesia","Waiting pickup","Rp 27.500","Tomorrow 09:00","orange"],
 ["#ECM-1809","PaperLoop","Completed","Rp 63.000","Jul 13",""],
 ["#ECM-1762","ReWear Indonesia","In transit","Rp 153.000","Jul 12","blue"],
 ["#ECM-1711","MetalCycle","Completed","Rp 352.000","Jul 09",""],
 ["#ECM-1689","TechCycle","Completed","Rp 129.500","Jul 05",""],
 ["#ECM-1624","PlastCycle","Waiting pickup","Rp 83.200","Jul 03","orange"]
 ];
 $("#ordersRows").innerHTML=rows.map(r=>`<div class="tr"><span><b>${r[0]}</b><small style="display:block;color:#9aa39e;font-size:6px">Marketplace</small></span><span>${r[1]}</span><span><em class="status ${r[5]}">${r[2]}</em></span><span>${r[3]}</span><span>${r[4]}</span><button class="text-btn" data-order="${r[0]}">•••</button></div>`).join("");
}
function renderConversations(){
 const c=[["ER","EcoRecycle Indonesia","PET 10 kg · offer sent","5m"],["PL","PaperLoop","Can you supply 30 kg?","1h"],["RW","ReWear Indonesia","Pickup confirmed","3h"],["MC","MetalCycle","Thanks!","Yesterday"]];
 $("#conversationList").innerHTML=c.map((x,i)=>`<div class="conversation ${i===0?"active":""}" data-conversation="${x[1]}"><div class="avatar">${x[0]}</div><main><b>${x[1]}</b><small>${x[2]}</small></main><small>${x[3]}</small></div>`).join("");
}
function renderLearn(){
 $("#learnGrid").innerHTML=learn.map((x,i)=>`<article class="learn-card"><div class="learn-photo"><img src="${x[1]}" alt="" loading="lazy"><span>${i%2?"VIDEO":"ARTICLE"}</span></div><div class="learn-body"><h3>${x[0]}</h3><p>Pelajari konsep penting circular economy dalam waktu singkat.</p><div class="learn-foot"><b>${x[3]} · ${x[2]}</b><button data-learn="${i}">Learn + earn</button></div></div></article>`).join("");
}
function renderChallenge(){
 const a=[["♻","Divert 5 kg plastic","2 / 5 kg",100,"40%"],["▧","Complete 2 EcoLearn","1 / 2 lessons",60,"50%"],["＋","Publish one listing","Not started",150,"0%"],["⌁","Make a Smart Match","Not started",110,"0%"],["♡","Invite a friend","Not started",100,"0%"]];
 $("#challengeList").innerHTML=a.map(x=>`<div class="mission"><div class="mission-icon">${x[0]}</div><main><b>${x[1]}</b><small>${x[2]}</small><div class="progress"><i style="width:${x[4]}"></i></div></main><strong>+${x[3]} EC</strong></div>`).join("");
 const leaders=[["1","AR","Andi R.","2.840 EC"],["2","MN","Maya N.","2.420 EC"],["3","GS","GreenSaver","2.180 EC"],["4","FK","Fikri K.","1.940 EC"],["5","SA","Salsa A.","1.760 EC"]];
 $("#leaderboard").innerHTML=leaders.map(x=>`<div class="leader"><span class="rank">${x[0]}</span><div class="avatar">${x[1]}</div><main><b>${x[2]}</b><small>Eco Warrior</small></main><strong>${x[3]}</strong></div>`).join("");
}
function renderWallet(){
 $("#walletActivity").innerHTML=state.history.concat([["Daily streak bonus","+20 EC","Jul 11"],["Referral reward","+100 EC","Jul 10"]]).slice(0,7).map(a=>`<div class="activity"><span><b>${a[0]}</b><small>${a[2]}</small></span><strong>${a[1]}</strong></div>`).join("");
}
function addCoins(n,label){state.coins+=n;state.history.unshift([label,"+"+n+" EC","Just now"]);sync();renderWallet();renderDash();toast(`+${n} EcoCoin berhasil masuk.`)}
function openProduct(id){
 const p=products.find(x=>x.id==id);if(!p)return;
 $("#modalImg").src=p.img;$("#modalBadge").textContent=p.cat;$("#modalTitle").textContent=p.name;$("#modalInfo").textContent=`${p.condition} · ${p.weight}. Material ini tersedia di ${p.loc} dan cocok untuk buyer yang mencari ${p.cat.toLowerCase()}.`;$("#modalPrice").textContent=rupiah(p.price)+"/kg";$("#modalLoc").textContent="⌖ "+p.loc;$("#modalSeller").textContent="Seller: "+p.seller;$("#modalMatch").textContent=p.match+"% match";
 $("#detailModal").classList.add("open");
 $("#contactSeller").onclick=()=>{closeModals();page("messages");toast("Conversation dengan seller dibuka.")};
 $("#saveListing").onclick=()=>toast("Listing disimpan ke Saved.");
}
function closeModals(){$$(".modal").forEach(x=>x.classList.remove("open"))}
const SETTINGS_KEY="ecomatch.settings.v2";
const SETTINGS_DEFAULTS={
 name:"GreenSaver",city:"Jakarta Selatan",material:"Plastik",account:"Individual",about:"Interested in reducing household waste and finding responsible buyers.",
 matchNotify:true,showPartners:true,notifMatch:true,notifOrder:true,notifReward:true,notifWeekly:false,
 publicProfile:true,approxLocation:true,leaderboard:true,pickupMethod:"EcoMatch Pickup",pickupRadius:"0–10 km",pickupDay:"Weekdays",pickupTime:"09:00–12:00",autoPickup:true,pickupConfirm:true
};
function settingValue(id){const x=$("#"+id);return x?.type==="checkbox"?x.checked:(x?.value??"")}
function collectSettings(){return {
 name:settingValue("setName"),city:settingValue("setCity"),material:settingValue("setMaterial"),account:settingValue("setAccount"),about:settingValue("setAbout"),
 matchNotify:settingValue("setMatchNotify"),showPartners:settingValue("setShowPartners"),notifMatch:settingValue("setNotifMatch"),notifOrder:settingValue("setNotifOrder"),notifReward:settingValue("setNotifReward"),notifWeekly:settingValue("setNotifWeekly"),
 publicProfile:settingValue("setPublicProfile"),approxLocation:settingValue("setApproxLocation"),leaderboard:settingValue("setLeaderboard"),pickupMethod:settingValue("setPickupMethod"),pickupRadius:settingValue("setPickupRadius"),pickupDay:settingValue("setPickupDay"),pickupTime:settingValue("setPickupTime"),autoPickup:settingValue("setAutoPickup"),pickupConfirm:settingValue("setPickupConfirm")
}}
function applySettings(v){const x={...SETTINGS_DEFAULTS,...v};
 ["setName","setCity","setMaterial","setAccount","setAbout","setPickupMethod","setPickupRadius","setPickupDay","setPickupTime"].forEach(id=>{const el=$("#"+id),key={setName:"name",setCity:"city",setMaterial:"material",setAccount:"account",setAbout:"about",setPickupMethod:"pickupMethod",setPickupRadius:"pickupRadius",setPickupDay:"pickupDay",setPickupTime:"pickupTime"}[id];if(el)el.value=x[key]});
 ["setMatchNotify","setShowPartners","setNotifMatch","setNotifOrder","setNotifReward","setNotifWeekly","setPublicProfile","setApproxLocation","setLeaderboard","setAutoPickup","setPickupConfirm"].forEach(id=>{const el=$("#"+id),key={setMatchNotify:"matchNotify",setShowPartners:"showPartners",setNotifMatch:"notifMatch",setNotifOrder:"notifOrder",setNotifReward:"notifReward",setNotifWeekly:"notifWeekly",setPublicProfile:"publicProfile",setApproxLocation:"approxLocation",setLeaderboard:"leaderboard",setAutoPickup:"autoPickup",setPickupConfirm:"pickupConfirm"}[id];if(el)el.checked=!!x[key]});
 const name=x.name||"GreenSaver";$$('.profile-mini b').forEach(el=>el.textContent=name);const topUser=$(".user-btn span");if(topUser)topUser.textContent=name;const save=$("#settingsSaved");if(save){save.textContent="All changes saved";save.classList.remove("dirty")}
}
function loadSettings(){try{applySettings(JSON.parse(localStorage.getItem(SETTINGS_KEY)||"{}"))}catch(e){applySettings(SETTINGS_DEFAULTS)}}
function saveSettings(){const data=collectSettings();localStorage.setItem(SETTINGS_KEY,JSON.stringify(data));applySettings(data);toast("Settings saved successfully.")}
function markSettingsDirty(){const x=$("#settingsSaved");if(x){x.textContent="Unsaved changes";x.classList.add("dirty")}}
function initSettings(){
 loadSettings();
 $$("[data-settings-tab]").forEach(tab=>tab.addEventListener("click",()=>{$$("[data-settings-tab]").forEach(t=>t.classList.toggle("active",t===tab));$$("[data-settings-pane]").forEach(p=>p.classList.toggle("active",p.dataset.settingsPane===tab.dataset.settingsTab))}));
 $$("#settings input,#settings select,#settings textarea").forEach(el=>el.addEventListener("input",markSettingsDirty));
 $$("#settings input,#settings select").forEach(el=>el.addEventListener("change",markSettingsDirty));
 $("#saveSettings").onclick=saveSettings;
 $("#resetSettings").onclick=()=>{applySettings(SETTINGS_DEFAULTS);localStorage.removeItem(SETTINGS_KEY);toast("Settings direset ke default.")};
}

function estimate(){
 const kg=Number($("#sellWeight")?.value||0),price=Number($("#sellPrice")?.value||0);if($("#estimate"))$("#estimate").textContent=rupiah(kg*price);if($("#previewName"))$("#previewName").textContent=$("#sellName").value||"Botol PET bening";if($("#previewPrice"))$("#previewPrice").innerHTML=rupiah(price)+' <small>/ kg</small>';if($("#previewDesc"))$("#previewDesc").textContent=$("#sellCondition").value;if($("#previewCat"))$("#previewCat").textContent=(selectedCat||"Plastik").toUpperCase();
}
let selectedCat="Plastik";
document.addEventListener("click",e=>{
 const p=e.target.closest("[data-page]");if(p){e.preventDefault();page(p.dataset.page);return}
 const prod=e.target.closest("[data-product]");if(prod){openProduct(prod.dataset.product);return}
 if(e.target.closest("[data-close]")){closeModals();return}
 const f=e.target.closest("[data-filter]");if(f){state.filter=f.dataset.filter;$$(".filter").forEach(x=>x.classList.toggle("active",x===f));renderMarket();return}
 const save=e.target.closest("[data-save]");if(save){save.textContent="♥";toast("Listing disimpan.");return}
 const learnBtn=e.target.closest("[data-learn]");if(learnBtn){const x=learn[Number(learnBtn.dataset.learn)];addCoins(Number(x[3].replace(/\D/g,"")),"EcoLearn · "+x[0]);learnBtn.textContent="Completed ✓";learnBtn.disabled=true;return}
 const contact=e.target.closest("[data-contact]");if(contact){page("messages");toast("Chat dibuka dengan "+contact.dataset.contact);return}
});
$("#globalSearch").addEventListener("keydown",e=>{if(e.key==="Enter"){state.query=e.target.value.trim().toLowerCase();page("market");$("#marketSearch").value=e.target.value}});
$("#globalSearch").addEventListener("input",e=>{if($("#market").classList.contains("active")){state.query=e.target.value.toLowerCase();renderMarket()}});
$("#marketSearch").addEventListener("input",e=>{state.query=e.target.value.toLowerCase();renderMarket()});
$("#marketSort").addEventListener("change",e=>{state.sort=e.target.value;renderMarket()});
$("#distanceRange").addEventListener("input",e=>$("#distanceVal").textContent=e.target.value+" km");
$("#resetFilters").onclick=()=>{state.filter="all";state.query="";$("#marketSearch").value="";$$(".filter").forEach(x=>x.classList.toggle("active",x.dataset.filter==="all"));renderMarket();toast("Filter direset.")};
$("#notifBtn").onclick=()=>$("#notifModal").classList.add("open");
$("#helpBtn").onclick=()=>toast("Support EcoMatch tersedia 08.00–22.00.");
$("#mobileMenu").onclick=()=>$("#sidebar").classList.toggle("open");
$("#profileMenu").onclick=()=>page("settings");
$("#acceptOffer").onclick=()=>{toast("Offer diterima. Pickup sedang dijadwalkan.");$("#acceptOffer").textContent="Accepted ✓";$("#acceptOffer").disabled=true};
$("#chatForm").onsubmit=e=>{e.preventDefault();const v=$("#chatMessage").value.trim();if(!v)return;$("#chatBody").insertAdjacentHTML("beforeend",`<div class="bubble me">${v}</div>`);$("#chatMessage").value="";$("#chatBody").scrollTop=$("#chatBody").scrollHeight;setTimeout(()=>{$("#chatBody").insertAdjacentHTML("beforeend",`<div class="bubble other">Got it. Aku cek dulu availability dan update kamu ya.</div>`);$("#chatBody").scrollTop=$("#chatBody").scrollHeight},700)};
$$(".cat").forEach(b=>b.onclick=()=>{$$(".cat").forEach(x=>x.classList.remove("active"));b.classList.add("active");selectedCat=b.dataset.cat;$("#previewCat").textContent=selectedCat.toUpperCase();toast("Kategori "+selectedCat+" dipilih.");});
["sellName","sellWeight","sellPrice","sellCondition","sellLocation","sellDesc"].forEach(id=>{const x=$("#"+id);if(x)x.addEventListener("input",estimate);if(x)x.addEventListener("change",estimate)});
$("#sellForm").onsubmit=e=>{e.preventDefault();const name=$("#sellName").value.trim()||"Material baru",kg=Number($("#sellWeight").value),price=Number($("#sellPrice").value);products.unshift({id:Date.now(),cat:selectedCat,name,img:IMG[selectedCat==="Plastik"?"plastic":selectedCat==="Kertas"?"cardboard":selectedCat==="Kain"?"clothes":selectedCat==="Logam"?"metal":selectedCat==="Elektronik"?"laptop":"eco"],price,weight:kg+" kg",loc:$("#sellLocation").value,seller:"GreenSaver",match:97,condition:$("#sellCondition").value});state.history.unshift(["Listing baru · "+name,"+"+rupiah(kg*price),"Just now"]);addCoins(100,"Listing bonus");page("market");toast("Listing live. Smart Match sedang mencari buyer.")};
$$("[data-redeem]").forEach(b=>b.addEventListener("click",()=>{const n=Number(b.dataset.redeem);if(state.coins<n){toast("EcoCoin belum cukup.");return}state.coins-=n;state.history.unshift(["Redeemed EcoCoin","-"+n+" EC","Just now"]);sync();renderWallet();toast("Redemption berhasil diproses.")}));
$("#downloadReport").onclick=()=>{const blob=new Blob(["ECOMATCH IMPACT REPORT\n\nWaste diverted: 42.8 kg\nCO2 avoided: 31.2 kg\nValue generated: Rp184.500\nWater saved: 1,820 L\n\nGenerated by EcoMatch prototype."],{type:"text/plain"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="EcoMatch-Impact-Report.txt";a.click();URL.revokeObjectURL(a.href);toast("Impact report dibuat.")};

const THEME_KEY = "ecomatch.theme";

function applyTheme(theme) {
  const isDark = theme === "dark";

  document.body.classList.toggle("dark", isDark);

  const icon = $("#themeIcon");

  if (icon) {
    icon.textContent = isDark ? "☀" : "☾";
  }

  const toggle = $("#themeToggle");

  if (toggle) {
    toggle.title = isDark
      ? "Switch to light mode"
      : "Switch to dark mode";
  }
}

function loadTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);

  if (savedTheme) {
    applyTheme(savedTheme);
    return;
  }

  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  applyTheme(prefersDark ? "dark" : "light");
}

function toggleTheme() {
  const isDark = document.body.classList.contains("dark");
  const newTheme = isDark ? "light" : "dark";

  localStorage.setItem(THEME_KEY, newTheme);
  applyTheme(newTheme);

  toast(
    newTheme === "dark"
      ? "Dark Mode aktif 🌙"
      : "Light Mode aktif ☀"
  );
}

$("#themeToggle").onclick = toggleTheme;

loadTheme();

initSettings();render("dashboard");renderLearn();renderChallenge();renderOrders();renderConversations();sync();estimate();
