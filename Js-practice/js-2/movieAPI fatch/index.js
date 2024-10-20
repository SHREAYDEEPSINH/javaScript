// // let url="http://www.omdbapi.com/?t=gadar&apikey=fd8d699a"
// let url2="http://www.omdbapi.com/?t=garder&apikey=fd8d699a"
// let promise=fetch(url2)
// console.log(promise);
// promise.then((res)=>{
//     console.log("first then",res);
//     return res.json();
// })
// .then((res)=>{
//     console.log("second then",res)
// })
// .catch((err)=>{
//     console.log(err);
// })




// let url="http://www.omdbapi.com/?t=garder&apikey=fd8d699a";
// let promise=fetch(url);

// promise.then((res)=>{
//     console.log("seconde then",res);

//     return res.json();
// })
// .then((res)=>{
//     console.log("seconde then",res);
// })
// .catch((error)=>{
//     console.log(error);
// })




let url1 = "http://www.omdbapi.com/?t=Animal&apikey=fd8d699a";
let url2 = "http://www.omdbapi.com/?t=uri&apikey=fd8d699a";
let url3= "http://www.omdbapi.com/?t=yodha&apikey=fd8d699a";
let url4 = "http://www.omdbapi.com/?t=shoorveer&apikey=fd8d699a";
let url5 = "http://www.omdbapi.com/?t=Panipat&apikey=fd8d699a";

let dataArr=[];
let fatchFunction = async () => {
    try {
        let res1 = await fetch(url1);
        let res2 = await fetch(url2);
        let res3= await fetch(url3);
        let res4 = await fetch(url4);
        let res5 = await fetch(url5);

        let data1 = await res1.json();
        let data2 = await res2.json();
        let data3 = await res3.json();
        let data4 = await res4.json();
        let data5 = await res5.json();
        // console.log(data);
        dataArr.push(data1,data2,data3,data4,data5);
        console.log(dataArr,"dataArr")
    }
    catch (error) {
        console.log(error);
    }
    movieRandaringFun();
}

fatchFunction();


let mainDiv=document.querySelector(".mainDiv");

let movieRandaringFun=()=>{

    dataArr.forEach((ele,index)=>{
        console.log(ele,"ele");

        let div=document.createElement("div");

        let img=document.createElement("img");
        img.src=ele.Poster;

        let h3=document.createElement("h3");
        h3.innerText=`${ele.Title} \n \n ${ele.Year} \n \n imdb ${ele.imdbRating}`

        div.append(img,h3);
        mainDiv.append(div);
    })
}

