document.addEventListener("DOMContentLoaded",()=>{
    
    let s_btn, s_form, s_warning, s_btn_form, s_login, s_mdp
    s_btn = document.querySelector(".connect")
    s_form = document.querySelector(".form")
    s_warning = document.querySelector(".warning")
    s_btn_form = document.getElementsByTagName("input")[2]
    s_login = localStorage.getItem("login")
    s_mdp = localStorage.getItem("mdp")

    s_btn.addEventListener("click",()=>{
        console.log("Vous êtes logué")
        s_form.classList.add('appear')
    })
    

    let connect=(e)=>{
        e.preventDefault()
        let User = {
     
            login:document.getElementsByTagName("input")[0].value,
            mdp:document.getElementsByTagName("input")[1].value,
        }
        
        if(s_login == User.login && s_mdp == User.mdp){
            s_warning.style.display="block";
            s_warning.classList.add("success")
        //warning.classList.remove("success")
        s_warning.textContent ="Vous êtes logué"
        /* lien avec la 3ème page */
        document.location.assign("espace_membre.html")
            
        }
       
        
        else{
            s_warning.style.display="block";
            s_warning.classList.add("warning")
            s_warning.classList.remove("success")
            s_warning.textContent ="Remplir les champs"
            
        }
    }
    /*s_btn_form.addEventListener("click",(e)=>{
        connect()
        window.location.assign("espace_membre.html")
    })*/
    s_btn_form.addEventListener("click", connect)
    

})