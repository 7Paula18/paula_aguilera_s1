// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// Constantes del dominio calculadora financiera
const INITIAL_INVESTMENT = 500000; // Quinientos mil pesos
const ANNUAL_INTEREST_RATE = 0.10; // 10% de interés anual
const TRANSACTION_FEE = 2500; // Comisión fija por operación
const TAX_PERCENTAGE = 0.05; // Impuesto del 5% sobre la ganancia

// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas ===");

// Ganancia bruta anual (Multiplicación)
const annualProfit = INITIAL_INVESTMENT * ANNUAL_INTEREST_RATE;
console.log("Ganancia bruta anual prevista:", annualProfit);
// Total después de impuestos (Resta)
const taxAmount = annualProfit * TAX_PERCENTAGE;const netProfit = annualProfit - taxAmount;
console.log("Ganancia neta (después de impuestos):", netProfit);
// Promedio mensual de ganancia (División)
const monthlyProfit = netProfit / 12;
console.log("Promedio de ganancia mensual:", monthlyProfit);

console.log("");

// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Asignación compuesta ===");

// Simulamos el crecimiento de un fondo acumulado
let portfolioValue = INITIAL_INVESTMENT;
console.log("Valor inicial del portafolio:", portfolioValue);
// Agregamos una nueva inversión (Suma compuesta)
portfolioValue += 200000; console.log("Tras inyección de capital:", portfolioValue);
// Restamos la comisión de mantenimiento (Resta compuesta)
portfolioValue -= TRANSACTION_FEE;
console.log("Tras cobro de comisión fija:", portfolioValue);
// Aplicamos un bono de fidelidad del 5% (Multiplicación compuesta)
portfolioValue *= 1.05;console.log("Valor final con bono de fidelidad:", portfolioValue);

console.log("");

// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con === ===");

const currentBalance = 1500000;
const goalAmount = 1500000;
// Validación de meta alcanzada exactamente
const isGoalReached = currentBalance === goalAmount;
console.log("¿Se alcanzó la meta exacta?", isGoalReached);
// Validación de saldo positivo
const isPositiveBalance = currentBalance > 0;
console.log("¿El saldo es mayor a cero?", isPositiveBalance);

console.log("");

// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones lógicas ===");

const hasMinimunAge = true; // Mayor de edad
const hasIdentifyVerified = true; // Cuenta verificada
const highRiskAccepted = false; // El usuario no quiere alto riesgo
// Operador AND: Para invertir se necesitan ambos requisitos de seguridad
const canInvest = hasMinimunAge && hasIdentifyVerified;
console.log("¿Apto para invertir (Seguridad)?", canInvest);
// Operador OR: Se aprueba si es bajo riesgo O si el usuario aceptó el riesgo
const isApprovedInverstment = !highRiskAccepted || canInvest;
console.log("¿Inversión aprobada por perfil de riesgo?", isApprovedInverstment);

console.log("");

// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen ===");

console.log(`Portafolio Final: $${portfolioValue.toFixed(2)}`);
console.log(`Estado de la meta: ${isGoalReached ? "COMPLETADA" : "EN PROGRESO"}`);
console.log(`Estatus de cuenta: ${canInvest ? "VERIFICADA" : "PENDIENTE"}`);

// Resumen con los valores más importantes calculados en las secciones anteriores

console.log("");