const participantes = new Set();

function agregarParticipante() {
    let nombre = prompt("Ingrese el nombre del participante:").trim();
    
    if (nombre === "") {
        alert("El nombre no puede estar vacío.");
        return;
    }
    
    if (participantes.has(nombre)) {
        alert("Este nombre ya ha sido ingresado. Intente con otro.");
        return;
    }
    
    participantes.add(nombre);
    alert(`Participante ${nombre} agregado correctamente.`);
}

function realizarSorteo() {
    if (participantes.size < 2) {
        alert("Debe haber al menos 2 participantes para realizar el sorteo.");
        return;
    }
    
    let nombres = Array.from(participantes);
    let asignaciones = {};
    let nombresDesordenados = [...nombres];
    
    do {
        nombresDesordenados = nombresDesordenados.sort(() => Math.random() - 0.5);
    } while (nombres.some((nombre, i) => nombre === nombresDesordenados[i]));
    
    nombres.forEach((nombre, i) => {
        asignaciones[nombre] = nombresDesordenados[i];
    });
    
    console.log("Resultados del Amigo Secreto:", asignaciones);
    alert("El sorteo se ha realizado. Revisa la consola para ver los resultados.");
}

function iniciar() {
    let opcion;
    do {
        opcion = prompt("Seleccione una opción:\n1. Agregar participante\n2. Realizar sorteo\n3. Salir");
        
        switch(opcion) {
            case "1":
                agregarParticipante();
                break;
            case "2":
                realizarSorteo();
                break;
            case "3":
                alert("Saliendo...");
                break;
            default:
                alert("Opción no válida. Intente nuevamente.");
        }
    } while(opcion !== "3");
}

iniciar();
