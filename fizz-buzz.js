for (let i = 1; i <= 50; i++){
    if(i % 3 === 0){
        if(i % 5 === 0){
            console.log("fizz buzz");
        } else{
            console.log("fizz");
        }
    } else if(i % 5 === 0){
        console.log("buzz");
    } else {
        console.log(i);
    }
}