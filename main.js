function trasureHunter(dailyLog) {
    let treasure = 0;
  
    for (let i = 0; i < dailyLog.length; i++){
  
      if(dailyLog[i] === "$"){ 
        //jika harta karun ditemukan di tambah 100 
        treasure = treasure + 100;
  
      }else if (dailyLog[i] === "x"){
        // jika hunterny jatoh ke laut maka harta dikurang 10 jika harta yang dimiliki lebih dari 10 otomatis misal 100 - 10 = 90
        if (treasure > 10 ) {
          treasure = treasure-10;
          //jika hunter gk punya harta jatoh ke laut nilai tetap 0
        }else{
          treasure = 0;
        }
  
      }else{
        //jika hunternya jatohny  dijurang dikurang 50% dari harta total
        if(treasure !== 0)
        treasure = treasure - treasure*0.5; 
      }
  
  
  }return treasure;
}

console.log(trasureHunter("$x$#x$")); // 185
console.log(trasureHunter("$$#x$$")); // 290
console.log(trasureHunter("x$#x$#x$")); // 160
console.log(trasureHunter("xx$#$#$#$###xx")); // 3.4375

module.exports = trasureHunter;
