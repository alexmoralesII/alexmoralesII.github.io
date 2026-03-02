async function loadImage(){

}
loadImage();
let option = document.querySelector("#dropdown");
option.addEventListener("focus",async function(){
    let url = `https://pixabay.com/api/?key=20426927-497d14db9c234faf7d0df8317&per_page=50&orientation=horizontal&q=${option.value}`;
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("Error fetching url");
        }
        const data = await response.json();
        // if(option.value === "ocean"){
        //     img.src = data.[ocean].webformatURL;
        // }else if(option.value === "flowers"){
        //     img.src = data.
        // }else if(options.value === "clouds"){
        //     img.src =
        // }else if(option.value === "space"){
        //
        // }

    //     Dont know hwo to access/ grab the array of images

    }catch(err){
        if(err instanceof TypeError){
            alert("Error accessing API endpoint");
        }else{
            alert(err.message);
        }

    }
});

function randomeImg(){
    // let
}
