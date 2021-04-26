function getWeather(sehirismi){// girilen şehire göre linkden o yere gidip sehir ismine kayıt ediyor bilgiyi
 

    const url=`http://api.openweathermap.org/data/2.5/weather?q=${sehirismi}&appid=3b9bf25f82e7abc91060392053cd877c&units=metric&lang=tr`//bilgilerin geleceği linki url ye aktarma
  

axios.get(url)//axios ile url değişkeni çekiliyor
.then(function (response) {// içindeki bilgileri response ile çekiyor

  //elementbyid ile index deki bilgileri alıp response yardımı ile bilgiyi çekip index e yazıdırıyor
    document.getElementById("isim").innerText=`${response.data.sys.country}`//ülke ismini çekiyor html deki isim değişkenine yazdırıyor
    document.getElementById("derece").innerText=`Şu an sıcaklık ${Math.round(response.data.main.temp)}°C`//derecenin değerini alıp  html deki dereceye yazdırıyor
    document.getElementById("durum").innerText=`${response.data.weather[0].description}`//havanın durumunun nasıl olduğu bilgisini alıp html deki duruma yazdırıyor
    document.getElementById("minmax").innerText=`min   ${Math.round(response.data.main.temp_min)}°C / mak ${Math.round(response.data.main.temp_max)}°C`//derecenin maksimum ve minimum değerlerini alıp html deki yerine yazdırıyor
    

    
})
  .catch(function (error) {// hata var mı yok mu diye kontrol ediyor
    
    console.log(error);// hata var ise consola error yazıyor
})
  .finally(function () {//işlemin bitip bitmediğini kontrol ediyor
      console.log("bitti");//bittiyse ekrana bitti yazdırıyor
    
});


}
window.onload=function()//html veya css deki  komutu çalıştırmak için kullanılır
{
document.getElementById("button").onclick=function() //html deki butona ulaşıp üzerine tıklanınca mouse1 ile tıklanınca çalışsın
{
 
 const sehirismi=document.getElementById("sehirismi").value;//html sayfasındaki texte yazılan bilgiyi sehirismi adındaki fonksiyona gönderiyor

getWeather(sehirismi);//sehirismi fonksiyonunu çağırıyor
}
}

