export async function getData(url){
    try {
        let res= await fetch(url);
         let data= await res.json();
    //    console.log(res);
         return data.meals;
    } catch (error) {
        console.log(error);
    }
}

export function displayData(response,mainContainer){
  
  
   if(response!== null){
   
        response.map(function(elm){
           console.log(elm)
      
            let box1=document.createElement("div");
            box1.id="box1"
            let img=document.createElement("img");
            img.src=elm.strMealThumb;
            let name=document.createElement("b");
            name.textContent=elm.strMeal;
            box1.append(name,img)
            mainContainer.append(box1);

         });
    }else{
        let b=document.createElement("b");
        b.id="B"
        b.textContent="No Information Available of Entered Recipe, Try with Another Recipe"
        mainContainer.append(b);
                
                 
    }

}






