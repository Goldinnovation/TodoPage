
export const statusobj = (todos) =>{
    let html = '';
     for(let i = 0; i < todos.length; i++){
        if( todos[i].statustype  === 'Open' &&   i < 5 ){
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
                        <img/>"/public/assets/bin.png"

                        </form>
                 </div> 
            </div>
            `;

        }
    }
    return html
};