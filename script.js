// function gettingReady(callback){
//     setTimeout(() => {
//         const status="ready"
//         callback(status);
//     },2000);
// }

// gettingReady((r)=>{
//     console.log(r);
// })

function Promiiise() {
    return new Promise((re, req) => {
        res("data okay")
    })
}


Promiiise()
    .then((data) => {
        console.log(data);

    })