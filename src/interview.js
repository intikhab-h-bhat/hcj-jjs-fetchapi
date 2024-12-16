//https://jsonplaceholder.typicode.com/users/1'
const search=document.getElementById("searchUser");
const user=document.getElementById("userid");
const header=document.getElementById("header");

//async function GetData(id){
async function GetData(){
//let dataFromserver=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
let dataFromserver=await fetch(`https://jsonplaceholder.typicode.com/users/`)

return await dataFromserver.json();
}

search.addEventListener("click",async ()=>{
//alert(user.value)
const result= await GetData();// GetData(user.value);
console.log(result);

result.forEach(item => {
    header.innerText=`${item.name}`;
   // console.log(item); // Perform any operation with each item
});


    header.innerText=`${result[i].name}`;
    
})






// fetch("https://jsonplaceholder.typicode.com/users/1")
// .then((promise)=>{
//     // console.log(promise);
//     return promise.json();
// })
// .then((data)=> {
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)}
// );

