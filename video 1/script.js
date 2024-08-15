// alert("stop!");


let arr=[1,9,3,4,6,5];
const newArray=arr.map((val)=>{
    return val+12;
})
console.log(arr);
console.log(newArray);


const newArray1=arr.filter((val)=>{
    return val>3;
})
console.log(newArray1);

async function abcd(){
    const blob=await fetch(`https://randomuser.me/api/`);
    var ans=await blob.json();

    console.log(ans.results[0].name);
}

abcd();