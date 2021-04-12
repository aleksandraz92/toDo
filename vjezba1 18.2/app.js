var newTask=document.getElementById('newTask');
var buttonNewTask=document.getElementById("addTaskButton");
var toDoTable=document.querySelector('.addedList ul');
var doneTable=document.querySelector('.finishedList ul');
var totalTasks=document.getElementById('totalTasks');
var hideButton=document.getElementById("hideButton");
var moreInfo=document.getElementById("moreInfo");
var calend=document.querySelector("jsuites-calendar");
var deletedNmTask=document.getElementById("deletedNmTask");
var brojac=0;
var ifImportant=false;
var calendarValue="";
// pojava dugmeta edit; kad kliknem da se moze editovati; sacuvati ; sklanjanje dugmeta kad se prebaci u finished task

var createTaskLi=function(taskText){
     var li=document.createElement('li');
     var label=document.createElement('label');
     var box=document.createElement('input');
     var kalendarskiLabel=document.createElement("label");
     box.type="checkbox";
     var editButton=document.createElement("button");
     editButton.innerText= "Edit me";
     editButton.className="edit";
  

     var isChecked=document.getElementById("ifImportant");
     if (isChecked.checked){
         ifImportant=true;
     }
     if (calendarValue!=""){
        label.innerHTML=taskText;
      //*************************** */
        kalendarskiLabel.innerHTML= " ("+ calendarValue+ ")"+"&#9200";;
        kalendarskiLabel.style.color="green";
       
        
     }
     else{
        label.innerText=taskText;

     }
     if (ifImportant){
      label.style.color="red";
      label.innerHTML=taskText +"&#9889;";
         //*************************** */

     }
    
     li.appendChild(box);
     li.appendChild(label);
     li.appendChild(kalendarskiLabel);
     li.appendChild(editButton);
     editButton.onclick=editTask;
     
     return li;
}
var addNewTask=function(){
     if (!moreInfo.value.length==0){
        createTaskWithMoreInfo(newTask.value,moreInfo.value) ;
     } 
     else{
     var addedLi=createTaskLi(newTask.value);
     if (ifImportant){
       toDoTable.insertBefore(addedLi, toDoTable.childNodes[0]);
     } else{
        toDoTable.appendChild(addedLi);
     }
     ifImportant=false;
     var checkbox1=addedLi.querySelector("input[type=checkbox]");
     checkbox1.onchange=moveTask;
     newTask.value=" ";
    } 
}

var moveTask=function(){
   var li=this.parentNode;
   var deleteButton=document.createElement('button');
   deleteButton.innerText="Delete Task";
   deleteButton.className="delete";
   li.appendChild(deleteButton);
   //********************** */
   var checkBox=li.querySelector("input[type=checkbox]");
   checkBox.remove();
   //***************************** */
   var novi=document.createElement("label");
   novi.innerHTML=" &#10004;";
   novi.style.color="red";
   li.appendChild(novi);
   //*************************** */
   toDoTable.removeChild(li);
   doneTable.appendChild(li);
   
   
   var deleteBtn=li.querySelector(".delete");
   deleteBtn.onclick=removeTask;
  
   var editButton=li.querySelector(".edit");
   editButton.remove();
}
var removeTask=function(){
    var li=this.parentNode;
     brojac++;
     doneTable.removeChild(li);
    

}

var countTotal=function(){
    var p=document.getElementById("numberofTasks");
     p.innerText=toDoTable.children.length;     // innerText da stavi text u paragraf = ID a children kao sva polja unutar tabele todotable
}
var hideTotal=function(){
    var p=document.getElementById("numberofTasks");
    p.innerText="";
}
//**************************** ******************************/
var countRemove=function(){
    var p=document.getElementById("deletedTask");
    p.innerText=brojac;
 
  }


//**************************** **********************************/
var createTaskWithMoreInfo= function(taskText,moreInfo){
     var li=document.createElement('li');
     var ul=document.createElement('ul');  //
     var nestedLi = document.createElement('li'); //
     var label=document.createElement('label');
     var labelNested = document.createElement('label'); //
     var box=document.createElement('input');
     box.type="checkbox";

     label.innerText=taskText;
     var string=" - ";
     labelNested.innerText= string + moreInfo;
     labelNested.style.fontSize="medium";
     nestedLi.appendChild(labelNested);
     ul.appendChild(nestedLi);
     li.appendChild(box);
     li.appendChild(label);
     
     li.appendChild(ul);
    

     toDoTable.appendChild(li);
     var checkbox1=li.querySelector("input[type=checkbox]");
     checkbox1.onchange=moveTask;
     moreInfo.value=" ";
}
var editTask=function(){
    var li=this.parentNode;
    var label=li.querySelector("label");
    label.contentEditable="true";
    var editButton=li.querySelector(".edit");
    editButton.innerText="Save";

    editButton.onclick=saveTask;
}
var saveTask=function(){
    var li=this.parentNode;
    var label=li.querySelector("label");
    label.contentEditable="false";
    var editButton=li.querySelector(".edit");

    editButton.innerText="Edit me";
    editButton.onclick=editTask;

}
totalTasks.addEventListener("click",countTotal);
buttonNewTask.addEventListener("click",addNewTask);
hideButton.addEventListener("click",hideTotal);
deletedNmTask.addEventListener("click",countRemove);
calend.addEventListener("onchange",function(e){
    calendarValue=e.target.value;
})
