function show()
{
   let n=document.querySelector("#name").value;
   let c=document.querySelector("#city").value;
   document.querySelector(".sec").innerHTML= `<h1>${n} and ${c}</h1>`;
}