
let films=[]
let regexpass=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
let regexMail=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
let userName=$("#validName")
let userMail=$("#userMail")
let phone=$("#phone")
let age=$("#age")
let password=$("#password")
let rePassword=$("#rePassword")
let sWord=$("#sWord")
let searchlitter=$("#searchlitter")



async function getApi(){
    let apiRsponse = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR3FxmB_CZ8k8Kg8pE1-sotzccFaMe0tJllFdezOyHpLeFHHKm20Q1xlBu8`)
    let respons= await apiRsponse.json()
    films=respons.results
    console.log(films)
    displayFilms()
    
}
getApi()

function displayFilms(){
    let cartona=``
    for(let i=0 ; i<films.length ; i++)
    {
        cartona+=` <div class="col-md-4 mb-5 filmsContainer  ">
        <div class="items W-100 ">
            <img src="https://image.tmdb.org/t/p/w500/${films[i].poster_path}" class="w-100">
            <div class="layer d-flex align-items-center justify-content-center flex-column text-dark">
                <h3>${films[i].title}</h3>
                <p>${films[i].overview}</p>
                  <h6>${films[i].vote_average}</h6>
                  <h6>${films[i].release_date}</h6>
            </div>
        </div>

    </div>
        `
    }
    document.getElementById("myRow").innerHTML=cartona
}


function searchByWord(searchItem){
  let cartona=``
  for(let i=0 ; i<films.length ; i++)
  {     if(films[i].title.toLowerCase().includes(searchItem.toLowerCase())==true)
    {
      cartona+=` <div class="col-md-4 mb-5 filmsContainer">
      <div class="items ml-3 ">
          <img src="https://image.tmdb.org/t/p/w500/${films[i].poster_path}" class="w-100">
          <div class="layer d-flex align-items-center justify-content-center text-dark flex-column">
              <h3>${films[i].title}</h3>
              <p>${films[i].overview}</p>
                <h6>${films[i].vote_average}</h6>
                <h6>${films[i].release_date}</h6>
          </div>
      </div>

  </div>
      `
    }
  }
  document.getElementById("myRow").innerHTML=cartona
}


function search(litter){
  let cartona=``
  for(let i=0 ; i<films.length ; i++)
  {     if(films[i].title.toLowerCase().match(litter.toLowerCase()))
    {
      cartona+=` <div class="col-md-4 mb-5 filmsContainer  ">
      <div class="items W-100  ">
          <img src="https://image.tmdb.org/t/p/w500/${films[i].poster_path}" class="w-100">
          <div class="layer d-flex align-items-center justify-content-center flex-column text-dark ">
              <h3>${films[i].title}</h3>
              <p>${films[i].overview}</p>
                <h6>${films[i].vote_average}</h6>
                <h6>${films[i].release_date}</h6>
          </div>
      </div>

  </div>
      `
    }
  }
  document.getElementById("myRow").innerHTML=cartona
}





$(".fa-align-justify").click(
  function(){
  $(".fa-align-justify").toggleClass("fa-times")
    
  $(".totalNav").animate({left:"0"},1000,function(){
    $(".active").eq(0).slideDown(500,function(){
      $(".item1").slideDown(600,function(){
        $(".item2").slideDown(600,function(){
          $(".item3").slideDown(600,function(){
            $(".item4").slideDown(600,function(){
              $(".item5").slideDown(600)  
              })
            })
          })
        })
      })
     
    }) 
  })
  
    
let y=$(".navbar").outerWidth(true)
console.log(y)
  




$("#contact").click(function(){
  let aHref= $(this).attr("href")
 
  $("aHref").animate({scrollTop:aHref} , 1000)
 })

  
  /*function  validateName() {

    if (userName.value ==null )
     {
        $(".alertName").css("display","none")
       
    }
    else
    {
        $(".alertName").css("display","block")
         
    }

  }
*/
  function validateMail() {

    if ( userMail.value == "" && regexMail.test(userMail)==true  )
     {
        $(".alertMail").css("display","none")
      return false;
    }
    
    else{
        $(".alertMail").css("display","block")
    }

  }
  
  

  function validatePhone() {

    if ( phone.value == ""  )
     {
      $(".alertPhone").css("display","none")
        $(".alertPhone").css("display","block")
      return false;
    }
    
    else{
      $(".alertPhone").css("display","block")
        $(".alertPhone").css("display","none")
    }

  }
  
  

  function validateAge() {

    if ( age.value == ""  )
     {
        $(".alertAge").css("display","none")
      return false;
    }
    
    else{
        $(".alertAge").css("display","block")
    }

  }

  function validateRepass() {

    if ( rePassword.value == "" || rePassword.value==password.value  )
     {
        $(".alertRe").css("display","none")
      return false;
    }
    
    else{
        $(".alertRe").css("display","block")
    }

  }

  
  function validatePass(){
    if(regexpass.test(password.value)==true )
    {
      $(".checkpass").css("display","none")
      return true
    }
    else{
      $(".checkpass").css("display","block")
    }
  }


  
  function validateName()
  {
      
      if(  userName.value != "" ) 
      {
       
         $(".alertName").css("display","none")
        
         return true;
       }
     else
      {
         
          $(".alertName").css("display","block")
          return false;
  
      }
  
  }  
 


  