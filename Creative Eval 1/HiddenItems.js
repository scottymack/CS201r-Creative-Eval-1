var pigeonclick = document.getElementById("HiddenPigeon");
var explosionclick = document.getElementById("HiddenExplosion");
var spiralclick = document.getElementById("HiddenSpiral");
var bearclick=document.getElementById("HiddenBear");
var carclick=document.getElementById("HiddenCar");
spiralclick.addEventListener("click",function()
{
    var SpiralNoise = document.getElementById("SpiralAudio");
    SpiralNoise.play();    
});
explosionclick.addEventListener("click",function()
{    
    var explodenoise=document.getElementById("ExplodeAudio");
    explodenoise.play();    
});
pigeonclick.addEventListener("click",function()
{
    var pigeonnoise=document.getElementById("PigeonAudio");
    pigeonnoise.play();    
}
);
bearclick.addEventListener("click",function()
{
    var bearnoise=document.getElementById("BearAudio");
    bearnoise.play();    
}
);
carclick.addEventListener("click",function()
{
    var carnoise=document.getElementById("CarAudio");
    carnoise.play();    
}
);
