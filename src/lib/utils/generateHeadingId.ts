// Función para generar ID de heading
export function generateHeadingId(text: string): string {
  return text
    .trim()
    .normalize("NFD") // Descompone los caracteres con tildes
    .replace(/[\u0300-\u036f]/g, "") // Elimina los diacríticos (tildes, acentos)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Elimina caracteres especiales excepto espacios y guiones
    .replace(/\s+/g, "-") // Reemplaza espacios por guiones
    .replace(/-+/g, "-") // Reemplaza múltiples guiones por uno solo
    .replace(/^-|-$/g, ''); // Elimina guiones al inicio y al final
}