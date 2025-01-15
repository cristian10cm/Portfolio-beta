
let header = document.getElementById('nav');
let boton = document.getElementById('open-menu');
let click1 = document.getElementById('click1');
let click2 = document.getElementById('click2');
let click3 = document.getElementById('click3');

let cont = 2
let cont2 =0

if (header.style.maxWidth = '600px'){
    function menu (){
    
        console.log(cont)
        function abrir(){
            header.style.display='flex'
            cont--
        }
        function cerrar(){
                header.style.display='none' 
                cont=2
        }      
        if (cont % 2 ===1){
           cerrar ()  
            
        }else if(cont % 2 ===0){
            abrir()
            
            
        }
        
        function click (){
                cerrar()
        }
        click1.addEventListener('click',click);
    click2.addEventListener('click',click);
    click3.addEventListener('click',click);
    }
    
    
    
    
    boton.addEventListener('click',menu);
}else if (header.style.minWidth = '600px') {
   header.style.backgroundColor = 'red'
}




boton.addEventListener('click',menu);