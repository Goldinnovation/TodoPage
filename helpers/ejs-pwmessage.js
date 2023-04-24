
// renders the password message: Through missing password requirements 
export const checkmessage = (errorM) =>{
    let html = '';
    if(errorM.length === 1 ){
        html += `
        <p style="color: rgb(174, 15, 15)">${errorM}</p>
            <div class="err-PWbox" style="color:black">
                <p>Please check if the requirments are correct 
                    <br>
                    [minletter: [a-z/A-Z], specialchar:[+!-$/...]]
                </p>
          </div>
        
      
        `; 
    }
   
    return html
}