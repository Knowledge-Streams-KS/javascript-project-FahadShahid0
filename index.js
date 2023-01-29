
const btnSearch = document.getElementById("btn");

const txtSearch = document.getElementById("mname");
const yearsearch = document.getElementById("myear");

btnSearch.addEventListener("click", ()=>getData(txtSearch.value))


const getData = async(MovieName) => {
    
    const name = await fetch(`http://www.omdbapi.com/?s=${MovieName}&apikey=5806a43b`);
    
    const data = await name.json();
    
    const data1 = data.Search;
    const yearData = data1.filter(function(y)
    {
         if(y.Year === yearsearch)
         {
             return y;
         }
     })
     console.log(yearData);

}


// const getData = async(myear) => {
//     const 
// }


// loginform.addEventListener("submit", ()=>{

    
//     e.preventDefault();
//     const moviename = document.getElementById("mname").value;
//     const moviedate = document.getElementById("myear").value;

//     if(moviename==""||moviedate=="")
//     {
//         alert("No input");
//     }
//     else{
//         for (let [k, v] of data.entries()) { 
//             console.log(k, v); }
//         return false;
//     }

// })

// function myFunction() {
//     var x = document.getElementById("frm1").target;
//     document.getElementById("demo").innerHTML = x;
//   }