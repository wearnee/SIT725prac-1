
// class for simulation
class Biosensor {
    constructor(name){
// initislise and keep track of heart rste
this.owner = name;
this.heartRate = 0;
this.live()
}
getRandomRate(min,max){
    
    return parseInt(Math.random() * (max - min) +min) ;
    }
// function to generate heart rate and record
beat(){
   let heartRate = this.getRandomRate(60, 70);
   this.hr=heartRate
   console.log('[owner]:' +this.owner+ 'Heart Rate: ' + this.hr);
    }

    //living function starts a beat
live(){
    setInterval(()=>{this.beat()},1000);
        
    
}
}
let Emily = new Biosensor('Emily');
let Morgan = new Biosensor('Morgan')
console.log(Emily);
console.log(Morgan)