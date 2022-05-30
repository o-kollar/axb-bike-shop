<template>
  <div class="wrapper content-block">
  <div class="card">
    <div class="front">
         <h1>Bicykel 1</h1>
        <p>velmy kvalitny</p>
        <br>
      <p class="price">889.00</p>
    </div>
    <div class="right">
      <p>Lorem ipsum dolor sit amet, te legimus splendide definiebas sit. Choro facilisi tincidunt qui at. Vim illum viderer theophrastus ne, mea recusabo euripidis ne. Id vix harum lucilius, per suas errem pericula ut, eu eius iuvaret habemus eum.</p>
    <button type="button" class="btn btn-danger">Do Košíka</button>
    </div>
  </div>
  <div class="img-wrapper">
       <img src='https://www.freeiconspng.com/uploads/road-mountain-bicycle-png-29.png' alt=''>    
  </div>
</div>
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
.wrapper{
  width: 280px;
  height: 480px;
  perspective: 800px;
  position: relative;
}

.card{

  width: 320px;
  height: 450px;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-140px);
  transition: transform 350ms cubic-bezier(0.390, 0.575, 0.565, 1.000);
  cursor: pointer;
}

.card > div{
  position: absolute;
  border-radius: 20px;
  width: 320px;
  height: 450px;
  padding: 34px 21px;
  transition: all 350ms cubic-bezier(0.390, 0.575, 0.565, 1.000);
}

.front{
  background-image: linear-gradient(180deg, rgb(12, 230, 168) 0%, rgba(92,91,94,0) 100%);
  transform: rotateY(0deg) translateZ(160px); 
  border-radius: 34px 3px 0 0;
}

.right{ 
 background-image: linear-gradient(180deg, rgb(12, 230, 168) 0%, rgba(92,91,94,0) 100%);
  opacity: 0.08;
  transform: rotateY(90deg) translateZ(160px);
  border-radius: 0 0 3px 34px;
}

.card:hover{
  transform: translateZ(-160px) rotateY( -90deg);
}

.card:hover .front{
  opacity: 0; 
}

.card:hover .right{
  opacity: 1; 
}

h1,h2{
  margin: 0;
  font-size: 38px;
  letter-spacing: -.25px;
  transform: translateX(-44px);
  font-family: 'Sarala'; 
  font-weight: 700;
}

h2{
  font-size: 21px;
  transform: translateX(-34px);
}

p{
  margin: 0;
  font-weight: 300;
  font-size: 16px;
}

span{
  margin-left: 13px;
  opacity: .55;
}

img{
  transform-origin: top right;
  transition: transform 300ms cubic-bezier(0.390, 0.575, 0.565, 1.000);
  transition-delay: 100ms;
  transform: translateX(21%) rotateZ(13deg) skewX(3deg);
  pointer-events: none;
}

.img-wrapper{
  animation: float 4s cubic-bezier(0.390, 0.575, 0.565, 1.000) infinite alternate;
  position: absolute;
  top: 0; right: 0;
  pointer-events: none;
  backface-visibility: hidden;
}

@keyframes float{
  0%{
    transform: translateZ(20px);
  }
  100%{
    transform: translateY(-21px) translateX(-13px) translateZ(30px);
  }
}

.card:hover ~ .img-wrapper img{
  transform: scale(0.5);
}

ul{
  margin-left: 21px;
  padding: 0;
  font-size: 16px;
  font-weight: 300;
  list-style: none;
}

li{
  padding-bottom: 8px;
  position: relative;
}

li:before{
  content: 'x';
  position: absolute;
  left: -21px;
  opacity: .55;
}


.card:hover button{
   transform: scale(1) skewY(0);
}

.card:not(:hover) button{
opacity: 0;
}

button:hover{
  background-position: left;
}

.price{
  position: absolute;
  bottom: 34px;
  left: 21px;
  font-size: 34px;
  color:black;
}

@keyframes fadeIn{
  0%{
    opacity: 0.33;
    transform: scale(.89);
  }
}

</style>
