
class util{
    static round(num, decimal){
        //rounds a number num to a certain number of decimals
        return Math.round(num * 10**decimal) / 10**decimal;
    }
    
    static helloworld(){
        console.log("helloworld");
    }

    static randomBetween(min, max){
        return Math.random() * (max - min) + min;
    }
}
