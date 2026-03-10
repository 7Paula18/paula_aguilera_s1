// ============================================
// SECCIÓN 1: DATOS PRINCIPALES
// ============================================

// Nombre del dominio
const DOMAIN_NAME = "FinTech Asset Manager";

// "Nombre del elemento" 
const itemName = "Bitcoin (BTC)";

// Agrega una categoría, tipo o descripción corta (string)
const itemCategory = "Criptoactivo de alta volatilidad";

// Número relevante a tu dominio (integer o decimal)
const itemQuantity = 25500.50; // Monto de la inversión

// Boolean con prefijo semántico (is/has/can/should)
const isMarketOpen = true;

// Valor null "no asignado aún"
const assignedBroker = null; 

// ============================================
// SECCIÓN 2: MOSTRAR FICHA DE DATOS
// ============================================
console.log("===========================");
console.log(`FICHA DE DATOS: ${DOMAIN_NAME}`);
console.log("===========================");
console.log("");

// 4 datos del dominio
console.log(`Activo:    ${itemName}`);
console.log(`Tipo:      ${itemCategory}`);
// Agrega un console.log para itemQuantity
console.log(`Monto:     $${itemQuantity}`);
// Agrega un console.log para isItemAvailable
console.log(`Mercado:   ${isMarketOpen ? "Abierto" : "Cerrado"}`);
console.log("");

// ============================================
// SECCIÓN 3: VERIFICACIÓN DE TIPOS CON typeof
// ============================================
console.log("--- Tipos de datos ---");

// typeof para mostrar el tipo de al menos 3 variables
console.log("typeof itemName:     ", typeof itemName);
console.log("typeof itemQuantity: ", typeof itemQuantity);
console.log("typeof isMarketOpen: ", typeof isMarketOpen);
console.log("");

// ============================================
// SECCIÓN 4: CONVERSIONES EXPLÍCITAS
// ============================================
console.log("--- Conversiones ---");

// Realiza al menos UNA conversión explícita
// Conversión de número a String para mostrar con formato de moneda
const amountAsText = String(itemQuantity);
console.log("Monto como texto:    ", "$" + amountAsText);
console.log("typeof (convertido): ", typeof amountAsText);

console.log("");

// ============================================
// SECCIÓN 5: VALOR NULL
// ============================================
console.log("--- Valor nulo ---");

console.log("Broker asignado:     ", assignedBroker);
console.log("typeof null:         ", typeof assignedBroker);
console.log("¿Es null?:           ", assignedBroker === null); 
console.log("");

// ============================================
// CIERRE
// ============================================
console.log("===========================");
console.log("FIN DE FICHA");
console.log("===========================");

// 1. Seleccionamos los elementos del HTML por su ID
const uiName = document.getElementById('display-name');
const uiCat = document.getElementById('display-cat');
const uiQty = document.getElementById('display-qty');
const uiBool = document.getElementById('display-bool');
const uiFooter = document.getElementById('display-footer');

// 2. Les asignamos los valores de nuestras variables
uiName.textContent = itemName;
uiCat.textContent = itemCategory;
uiQty.textContent = `$${itemQuantity.toLocaleString()}`; // Formato con comas
uiBool.textContent = isMarketOpen ? "Abierto" : "Cerrado";
uiFooter.textContent = `Dominio: ${DOMAIN_NAME} | 2026`;