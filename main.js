function mostrarMenu() {
    return prompt(
        "Selecciona una operación:\n" +
        "1. Suma\n" +
        "2. Resta\n" +
        "3. Multiplicación\n" +
        "4. División\n" +
        "5. Salir"
    );
}

function calcular(operacion, num1, num2) {
    switch (operacion) {
        case "1":
            return num1 + num2;
        case "2":
            return num1 - num2;
        case "3":
            return num1 * num2;
        case "4":
            return num2 !== 0 ? (num1 / num2).toFixed(2) : "Error: División por 0";
        default:
            return "Operación no válida";
    }
}

function ejecutarSimulador() {
    alert("Bienvenido al Simulador de Calculadora");

    for (let i = 0; i < 5; i++) { // Permite hacer hasta 5 operaciones
        let opcion = mostrarMenu();

        if (opcion === "5") {
            alert("Saliendo del simulador...");
            break;
        }

        let num1 = parseFloat(prompt("Ingresa el primer número:"));
        let num2 = parseFloat(prompt("Ingresa el segundo número:"));

        if (isNaN(num1) || isNaN(num2)) {
            alert("Por favor, ingresa números válidos.");
            continue; // Repite el ciclo si la entrada no es válida
        }

        let resultado = calcular(opcion, num1, num2);
        alert("El resultado es: " + resultado);

        let continuar = confirm("¿Quieres realizar otra operación?");
        if (!continuar) {
            alert("Gracias por usar la calculadora. ¡Hasta luego!");
            break;
        }
    }
}

// Iniciar el simulador
ejecutarSimulador();
