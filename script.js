const que = document.querySelectorAll(".question")

function cleara() {

    que.forEach(function(q, index){
        const img = document.querySelectorAll(".headline img")
        const para = document.querySelectorAll(".question p")
        if(para[index].style.display == "block"){
            para[index].style.display = "none"
            img[index].setAttribute("src", "icon-plus.svg")
        }else {
            console.log("hello")
        }
    })
}


que.forEach(function(q, index){
    q.addEventListener("click", function showMore() {
        
        const img = document.querySelectorAll(".headline img")
        const para = document.querySelectorAll(".question p")
        
        if(para[index].style.display != "block"){
            cleara()
            img[index].setAttribute("src", "icon-minus.svg")
            para[index].style.display = "block"
            
        } else{
            cleara()
            img[index].setAttribute("src", "icon-plus.svg")
            para[index].style.display = "none"
        }
    })

})

