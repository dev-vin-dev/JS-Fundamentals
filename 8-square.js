//Printing a Square

const square = Number(process.argv[2]);
if (Number.isInteger(square)){
    let i=0;
    while (i < square){
        console.log("X".repeat(square))
        i++
    }
}else {
    console.log("Missing size")
};