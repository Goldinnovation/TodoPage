
export const checkProfImg = (imgD) =>{
    let html = '';
    if(imgD.length === 0) { 
        html += `
        <div class="prof-image">
            <img src="/public/uploadStack/profpic.png" class="user-prof-img"  name="profpic" alt="Pic not found">
    
        </div>
     `; 
    }  else if (imgD.length === 1 ) {
        for( let i = 0; i < imgD.length; i++){
            html += `
            <div class="prof-image">
                <img src="/public/uploadStack/${imgD[i].path}" class="user-prof-img"  name="profpic" alt="Pic not found">
            
            </div>` ;    
        }

    } 
   
    return html
}


