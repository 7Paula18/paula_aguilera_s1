// ============================================
// PROYECTO SEMANA 04: Generador de Mensajes
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// Nombre del dominio
const DOMAIN_NAME = "FinTech Asset Manager";

// Nombre de la entidad principal
const rawEntityName = "   Bitcoin Premium Asset   ";

// Categoría o tipo (string)
const entityCategory = "Criptoactivo de Inversión";

// Código identificador (string)
const entityCode = "FT-BTC-2026";

// Descripción corta (string)
const entityDescription = "Activo digital descentralizado basado en tecnología blockchain de alta seguridad.";

// Dato numérico relevante (number)
const mainValue = 45000.75;

// TODO: Define un estado booleano
const isActive = true;


// ============================================
// SECCIÓN 2: Transformaciones de string
// ============================================

// Limpiamos los espacios accidentales al inicio y final
const entityName = rawEntityName.trim();

// Mayúsculas para el encabezado
const entityNameUpper = entityName.toUpperCase();

// Minúsculas para el código
const entityNameLower = entityName.toLowerCase();

// Extrae las primeras letras del código 
const codePrefix = entityCode.slice(0, 3);


// ============================================
// SECCIÓN 3: Validaciones con búsqueda
// ============================================

// Código con el que empieza con el prefijo definido
const hasValidPrefix = entityCode.startsWith("FT-");

// Verifica si la descripción contiene una palabra clave
const descriptionIsRelevant = entityDescription.includes("blockchain");

// Verifica si el código termina con los dígitos
const hasValidSuffix = entityCode.endsWith("2026");


// ============================================
// SECCIÓN 4: Generación de la ficha principal
// ============================================

const separator = "=".repeat(45);
const subSeparator = "-".repeat(45);

// Construcción multilínea con Template Literals
const mainCard = `
${separator}
  ${DOMAIN_NAME.toUpperCase()} — FICHA DE DOMINIO
${separator}
Entidad:      ${entityNameUpper}
Categoría:    ${entityCategory}
Código ID:    ${entityCode}
Ref. Interna: ${codePrefix}
Valor USD:    $${mainValue.toLocaleString()}
Estado:       ${isActive ? "ACTIVO" : "SUSPENDIDO"}

${subSeparator}
Descripción Técnica:
"${entityDescription}"
${separator}
`;

console.log(mainCard);

// ============================================
// SECCIÓN 5: Validaciones
// ============================================

console.log("--- Validaciones ---");
// Validaciones con template literals
console.log(`¿Prefijo '${codePrefix}' válido?: ${hasValidPrefix}`);
console.log(`¿Menciona tecnología 'blockchain'?: ${descriptionIsRelevant}`);
console.log(`¿Vigencia hasta 2026?: ${hasValidSuffix}`);
console.log("");


// ============================================
// SECCIÓN 6: Mensaje de notificación corto
// ============================================

console.log("--- Notificación ---");

// Notificación de una sola línea combinando variables
const notification = `📢 ALERTA: Se ha actualizado el activo ${entityName} [${entityCode}].`;
console.log(notification);
console.log("");