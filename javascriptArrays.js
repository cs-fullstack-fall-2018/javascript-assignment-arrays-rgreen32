

function main(){
    var first = [7,9,0,-2];
    console.log(slicer(first, 2))

}



function slicer(array, number){

     var piece = array.slice(0,number);
    return piece;
}

main();

