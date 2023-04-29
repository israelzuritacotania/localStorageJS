const guardar= document.getElementById('guardar');
const mostrar= document.getElementById('mostrar');
const eliminar= document.getElementById('eliminar');

guardar.addEventListener('click',guardar_datos);
mostrar.addEventListener('click',mostrar_datos);
eliminar.addEventListener('click',eliminar_datos);

function eliminar_datos(e) {
    e.preventDefault();
    localStorage.clear();
    location.reload();
}

function guardar_datos(e){
    e.preventDefault();
    if(soporte_storage)
    {
        let name = document.getElementById("nombre").value;
        let age = document.getElementById("edad").value;
        if((name)!=="" && (age)!=="")
        {
            //localStorage.setItem("nombre",name);
            localStorage.nombre = name;
            localStorage.setItem("edad",age);
            alert("Datos guardados");
            //location.reload();
            e.target.parentNode.reset();
        }
        else
        {
            alert("Lo sentimos, debe llenar todo el formulario para guardar datos");
        }
    }
    else
    {
        alert("Lo sentimos, actualize su navegador para usar esta web");
    }

};

function soporte_storage(){
    if(typeof(Storage)!="undefined")
    {
        console.log("El storage es soportado por este navegador :)");
        return true;
    }
    else
    {
        console.log("El storage no es soportado por este navegador :(");
        return false;
    }
    
};

function mostrar_datos(e){
    e.preventDefault();
    if(soporte_storage)
    {
        //let name = localStorage.getItem("nombre");
        let name = localStorage.nombre;
        let age = localStorage.getItem("edad");
        let div = document.getElementById("vista_datos");

        if(name!=undefined && age!=undefined)
        {
            let p_nombre = document.createElement("p");
            let p_edad = document.createElement("p");
            p_nombre.innerText = "Tu nombre es:"+name;
            p_edad.innerText = "Tu edad es:"+age;
            limpiar(div);
            div.classList.add("recuadro");
            div.appendChild(p_nombre);
            div.appendChild(p_edad);
        }
        else
        {
            alert("Lo sentimos, no hay datos para mostrar");
        }
    }
    else
    {
        alert("Lo sentimos, actualize su navegador para usar esta web");
    }

};

function limpiar(elemento){
    while(elemento.firstChild){
        elemento.removeChild(elemento.lastChild);
    }

    console.log("Elemento limpio");
}