// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

function generate_quote (arr) {
    const button = document.getElementById("btn-quote");
    button.style.backgroundColor = "#50c802";

    const quoteDisplay = document.getElementById("quote");

    //random quote generting here
    button.addEventListener("click", () => {
        quoteDisplay.innerHTML = arr[Math.floor(Math.random() * arr.length)];
    });
}
fetch("https://type.fit/api/quotes")
    .then(response => {
        // handle the response
        return response.json();
    })
    .then(data => {
        //get all quotes from data. data is an array
        const quote_array = []
        data.forEach(e => {
            quote_array.push(Object.values(e)[0])
        });
        console.log(quote_array)   
         //generate random quote
         generate_quote(quote_array)
    })
    .catch(error => {
        // handle the error
    });


// fetch("https://type.fit/api/quotes")
//     .then(response => {
//         // handle the response
//         return response.json();
//     })
//     .then(data => {
//         //get all quotes from data. data is an array
//         const quote_array = []
//         data.forEach(e => {
//             //get an array of quotes from data
//             quote_array.push(Object.values(e)[0])
//         })
   
//         // console.log(quote_array)   
//         //generate random quote
//         const button = document.getElementById("btn-quote");
//         button.style.backgroundColor = "#50c802";
    
//         const quoteDisplay = document.getElementById("quote");
    
//         //random quote generting here
//         button.addEventListener("click", () => {
//             quoteDisplay.innerText = quote_array[Math.floor(Math.random() * quote_array.length)];
//             console.log(quote_array)
//         })        
//     })
//     .catch(error => {
//         console.log(error)
//     });
  
    



    

