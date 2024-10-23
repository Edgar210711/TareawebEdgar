function enviarFormulario() {
    const name = document.getElementById("name").value;
    const mail = document.getElementById("mail").value;
    const año = document.getElementById("año").value;
    const phone = document.getElementById("phone").value;
    
    
    
    
    
    
    const xmlData = `<usuario>
    <nombre>${name}</nombre>
    <email>${mail}</email>
    <anio>${año}</anio>
    <telefono>${phone}</telefono>
    </usuario>`
    ;
    
    localStorage.setItem('usuarioXML', xmlData)
    
    
    window.location.href = 'datos.html';
    
    return false;
    }