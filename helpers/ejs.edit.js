

export const editarea = (todosup) =>{
     let html = '';
     html += `
     <div class="edit-area">
     <form action="/input/${todosup.id}" method="POST">
         <h2>Edit To-do-List<h2>
                
         <label for="task"></label>
         
         <input type="text"  name="task" id="task" placeholder="Enter a Task" class="input-task">
         <br>        
         <input list="status" name="statustype" id="statustype" placeholder="Status"class="input-task2">
         <datalist id = "status">
             <option value="Open">Open</option>
             <option value="Process">Process</option>
             <option value="Done">Done</option>
         </datalist>
         <br>
         <button class="submit">Submit</button>
     
     </form>
  </div>
     `; 
     return html
}