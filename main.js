var students =[
    {'serial':0, name:'Manu',age:20}
];

function addStudent(){
    console.log('Estudiante');
    var name_var= document.getElementById('name').value;
    var age_var =document.getElementById('age').value;
    //forma1
    var objectStudent={}
    objectStudent.serial=students.length;
    objectStudent.name=name_var;
    objectStudent.age=age_var;
//forma2
    //var object={name:name_var,age:age_var}

    //froma 3
    var objectS={name_var,age_var};
    students.push(objectStudent);
    console.log(objectStudent);
    console.log(object);
    console.log(students);

//document.getElementById('studentsList').innerText=JSON.stringify(students);
getAll();
document.getElementById('name').value='';
   document.getElementById('age').value='';
}

function getAll(){
    //document.getElementById('studentsList').innerText=JSON.stringify(students);
   
    var row='';
    if(students.length>0){
        for(let index=0;index<students.length;index++){
            const element= students[index];
            console.log(element)
            row+='<tr>'
            row+='<td>'+index+'</td>'
            row+='<td>'+element.name+'</td>'
            row+='<td>'+element.age+'</td>'
            row+='<td><button id="Editar" onclick="editItem('+index+')">Editar</button></td>'
            row+='<td><button id="Eliminar" onclick="deleteitem('+index+')">Eliminar</button></td>'
            row+='</tr>'
            
            console.log(document.getElementById('studentsListTable'))
        }
    }else{
        row+='<tr>'
        row+='<td colspan="5">No se ecnontraron datos</td>'
         row+='</tr>'
    }
    document.getElementById('studentsListTable').innerHTML=row
    students.forEach(element=>{
        
    });
}
getAll();

function deleteitem(index){
    console.log('Estoy eliminando'+ index)
    students.splice(index,1)
    getAll()
}

function confirmEdition(){
    console.log('Estudiante');
    var serial_var=document.getElementById('serial').value;
    var name_var= document.getElementById('name').value;
    var age_var =document.getElementById('age').value;
    //forma1
    var objectStudent={}
    objectStudent.serial=students.length;
    objectStudent.name=name_var;
    objectStudent.age=age_var;
    if(objectStudent.name){
        students.splice(serial_var,1,objectStudent)
    }else{
        alert('ingrese el nombre')
    }
    
  
    getAll();
    document.getElementById('confirm').style.display='none';
   document.getElementById('saveElement').style.display='inline';
   document.getElementById('name').value='';
   document.getElementById('age').value='';
}

function editItem(index){
    document.getElementById('serial').value=students[index].serial;
   document.getElementById('name').value=students[index].name;
   document.getElementById('age').value=students[index].age;
   document.getElementById('confirm').style.display='inline';
   document.getElementById('saveElement').style.display='none';
}