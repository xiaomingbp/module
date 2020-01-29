require.config({
    baseUrl:"js"
})
require(["data","mod"],function(data,M){
    new M({
        data:data,
        container:document.querySelector(".menu")
    })
})