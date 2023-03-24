
// renders the To-do objects if status is on "Open"
export const statusObjOpen = (todos) =>{
    let html = '';
     for(let i = 0; i < todos.length; i++){
        if( todos[i].statustype  === 'Open' &&   i  < 15 ){
            html += `
            <div class="show-area">
                  <p>Date:
                        <p class="date-inside">
                       ${todos[i].Date.toLocaleDateString('en-GB')} 
                        </p>
                  </p>
                  <p>Task:
                        <p class="task-inside">
                            ${todos[i].task} 
                        </p>
                  </p>
                  <p>Status:
                        <p class="status-inside">
                            ${todos[i].statustype}
                        </p>
                  </p>
                   <div class="op-area">
                        <form action="/input/${ todos[i].id}" method="GET">
                        <button class="btn-s"><img src="/public/assets/setting.png" alt="" class="set-btn"></button>
                        </form>
                        <form action="/input/${ todos[i].id}/delete" method="GET">
                        <button class="btn-d"><img src="/public/assets/bin.png" class="bin" alt=""></button>
                        

                        </form>
                 </div> 
            </div>
            `;

        } 
    }
    return html
};

// renders the To-do objects if status is on "Process" 
export const statusObjProcess = (todos) => {
    let html = '';
    for(let i = 0; i < todos.length; i++){
       if( todos[i].statustype  === 'Process' &&   i < 15 ){
           html += `
           <div class="show-area">
                 <p>Date:
                       <p class="date-inside">
                      ${todos[i].Date.toLocaleDateString('en-GB')} 
                       </p>
                 </p>
                 <p>Task:
                       <p class="task-inside">
                           ${todos[i].task} 
                       </p>
                 </p>
                 <p>Status:
                       <p class="status-inside">
                           ${todos[i].statustype}
                       </p>
                 </p>
                  <div class="op-area">
                       <form action="/input/${ todos[i].id}" method="GET">
                       <button class="btn-s"><img src="/public/assets/setting.png" alt="" class="set-btn"></button>
                       </form>
                       <form action="/input/${ todos[i].id}/delete" method="GET">
                       <button class="btn-d"><img src="/public/assets/bin.png" class="bin" alt=""></button>
                       

                       </form>
                </div> 
           </div>
           `;

       } 
   }
   return html

}

// renders the To-do objects if status is on "Done"
export const statusObjDone = (todos) => {
    let html = '';
    for(let i = 0; i < todos.length; i++){
       if( todos[i].statustype  === 'Done' &&   i < 15 ){
           
           html += `
           <div class="show-area">
                 <p>Date:
                       <p class="date-inside">
                      ${todos[i].Date.toLocaleDateString('en-GB')} 
                       </p>
                 </p>
                 <p>Task:
                       <p class="task-inside">
                           ${todos[i].task} 
                       </p>
                 </p>
                 <p>Status:
                       <p class="status-inside">
                           ${todos[i].statustype}
                       </p>
                 </p>
                  <div class="op-area">
                       <form action="/input/${ todos[i].id}" method="GET">
                       <button class="btn-s"><img src="/public/assets/setting.png" alt="" class="set-btn"></button>
                       </form>
                       <form action="/input/${ todos[i].id}/delete" method="GET">
                       <button class="btn-d"><img src="/public/assets/bin.png" class="bin" alt=""></button>
                       

                       </form>
                </div> 
           </div>
           `;

       } 
   }
   return html
}

// renders the limit Banner 
export const limitBanner = (todos) => {
    let html = '';
    for( let i = 0; i < todos.length; i++)
    {
        if(i === 14){
            html += `
            <div class="limit-word">
                <p>I'm sorry but you have reached the limit :/</p>
            </div>
            `;
        }
    }
    return html
};
