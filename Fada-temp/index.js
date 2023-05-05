
    const burger = document.querySelector(".burger");
    const slider = document.querySelector(".nav-item");
    const navlink = document.querySelectorAll(".nav-item li")
    const burgerX = document.querySelector(".burger_close");
    const logo = document.querySelector(".logo").style;

    console.log(logo)
    
 

        
   
        burger.addEventListener('click', () =>{
            slider.classList.toggle('nav-active')
            document.querySelector(".logo").style.color = "rgb(248, 248, 99)"
            


   
            
        })


            if(burgerX){
            burgerX.addEventListener('click', () =>{
                slider.classList.remove('nav-active');
                document.querySelector(".logo").style.color = "black"
           
            })  
} 


        

    
   
    
      
    


    
    navlink.forEach((link) => link.addEventListener("click", ()=>{
            slider.classList.remove("nav-active")
            document.querySelector(".logo").style.color = "black"
        })

        )
        



        
      /*  if(burgerX){
            burgerX.addEventListener('click', () =>{
                slider.classList.remove('nav-active')
            })  
} */