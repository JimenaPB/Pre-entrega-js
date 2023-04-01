let redes = [];
class Twitter{
    constructor(usuario, contrasenia, ) {
        this.usuario = usuario
        this.contrasenia = contrasenia
    }
}
class Instagram{
    constructor(usuario, contrasenia, ) {
        this.usuario = usuario
        this.contrasenia = contrasenia
    }
}
class Facebook{
    constructor(usuario, contrasenia, ) {
        this.usuario = usuario
        this.contrasenia = contrasenia
    }
}
do {
    var respuesta =  parseInt(prompt("<----INGRESE SUS REDES----->\n1.- Mostrar Redes\n2.- Agregar Twitter\n3. Agregar Instagram\n4. Agregar Facebook\n5.- Salir"));
    switch (respuesta) {
        case 1:
            listarRedes();
            break;
        case 2:
            agregarTwitter();
            break;
        case 3:
            agregarInstagram();
            break;
        case 4:
            agregarFacebook();
            break;
        case 5:
            alert("Hasta Luego!!!");
            break;
        default:
            alert("Opción invalida!!");
            break;
    }
} while (respuesta != 5);

function listarRedes(){
    let mensaje = "Listado de Redes Registrados"
    if (redes.length != 0) {
        for (let i = 0; i < redes.length; i++) {
            mensaje += `\n${i+1}.- Usuario: ${redes[i].usuario}   Contraseña: ${redes[i].contrasenia} `
        }
        alert(`${mensaje}`);
    }else{
        alert("No hay redes registradas");
    }
}

function agregarTwitter(){
    const usuario = prompt("Ingrese su Usuario");
    const contrasenia = prompt("Ingrese su Contaseña");
    const i = new Twitter(usuario,contrasenia);
    redes.push(i)
    alert(`Usuario ${usuario} agregado correctamente.`);
}
function agregarInstagram(){
    const usuario = prompt("Ingrese su Usuario");
    const contrasenia = prompt("Ingrese su Contaseña");
    const i = new Instagram(usuario,contrasenia);
    redes.push(i)
    alert(`Usuario ${usuario} agregado correctamente.`);
}
function agregarFacebook(){
    const usuario = prompt("Ingrese su Usuario");
    const contrasenia = prompt("Ingrese su Contaseña");
    const i = new Facebook(usuario,contrasenia);
    redes.push(i)
    alert(`Usuario ${usuario} agregado correctamente.`);
}



