<template>
 <div>
     <h1>e-shop</h1>
         <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Bicykle</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Doplnky</a>
  </li>

</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active content-block" id="home" role="tabpanel" aria-labelledby="home-tab">
    <div class="d-flex align-items-start">
        <ul class="nav flex-column" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
                <button
                    class="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                >
                    Bicykle
                </button>
            </li>
            <li class="nav-item" role="presentation">
                <button
                    class="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                >
                    Detské Bicykle
                </button>
            </li>
            <li class="nav-item" role="presentation">
                <button
                    class="nav-link"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                >
                    Elektro Bicykle
                </button>
            </li>
        </ul class="col">
        <div class="tab-content content-block" id="pills-tabContent">
            <div
                class="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
            >
                <figure>
                    <blockquote class="blockquote">
                    <h1>KELLYS Spider 10 Black M 29"</h1>
                    </blockquote>
                    <img class="w-100" src="/asets/bike.png">
                    <p></p>
                    <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" >Zistit Viac</button>
    <button type="button" class="btn btn-primary">Do Košíka</button>
                </div>
                <p id="collapseExample" class="collapse">
                rám KELLYS Alutec RRC 29, tapered HT - Race Ready Concept
veľkosť rámu S (430mm) / M (480mm) / L (530mm)
vidlica SR SUNTOUR XCT HLO (29), 100mm, coil / Speed Lockout
hlav.zloženie semi-integrated
stred.zloženie cartridge (126mm)
kľuky SHIMANO TY501 (42x34x24) - dĺžka 170mm (S), 175mm (M - L)
radenie SHIMANO ST-EF510-8 EZ-fire Plus
prešmykač SHIMANO TY700 (diam 34.9mm)
menič SHIMANO Altus M2000 (direct mount)
počet prevodov 24
kazetový pastorok SHIMANO CS-HG200-8 (12-32)

reťaz KMC Z8 (112 článkov)
brzdy C-STAR CX7 Mechanical Disc
brzdové kotúče predný 160mm / zadný 160mm
brzdové páky SHIMANO ST-EF510-8 EZ-fire Plus
náboje KLS Firework Disc (32 dier)
ráfiky KLS Draft Disc 622x19 (32 dier)
výplet steel
plášte IMPAC Ridgepac 54-622 (29x2.10)
predstavec KLS Active - diam 28.6mm / bar bore 31.8mm / 8° / dĺžka 75mm (S - M), 90mm (L)
riadidlá KLS Active RiseBar - diam 31.8mm / šírka 640mm (S), 660mm (M), 680mm (L)
rukoväte KLS Advancer 2Density
sedlovka KLS Active - diam 30.9mm / dĺžka 350mm (S - M), 400mm (L)
sedlo KLS Sentinel
pedále KLS Master
                </p>



                </figure>

               
            </div>
            <div
                class="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
            >
               <figure>
                    <blockquote class="blockquote">
                        <p>
                            Placeholder
                        </p>
                    </blockquote>
                    
                </figure>
            </div>
            <div
                class="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
            >
              <figure>
                    <blockquote class="blockquote">
                        <p>
                           Placeholder
                        </p>
                    </blockquote>
                </figure>
            </div>
        </div>
    </div>
</div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
</div></div>
</template>

<script>
module.exports = {
    data: function() {
        return {
            who: 'world'
        }
    }
}
</script>

<style>
.content-block{
        background: rgba(255, 255, 255, 0.46);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 1em;
}
hľ{margin-top: 50px;}
.tab-pane {
    background: transparent;
}
.nav-link{
    background-color: transparent;
    border:none;
    color:rgb(0, 0, 0);
}
[aria-selected="true"]{
    font-weight:bolder;
     color:rgb(0, 0, 0);
    
    
}
.nav-link:focus{
   font-weight:bolder;
    color:rgb(0, 0, 0);
    
}

</style>
