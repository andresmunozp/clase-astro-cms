import type { Heading } from "../../interfaces/heading";
import { generateHeadingId } from "./generateHeadingId";

// Función para extraer headings y procesar contenido
export function processContent(htmlContent: string) {
  const headings: Heading[] = [];

  const processedContent = htmlContent.replace(/<h([1-4])([^>]*)>(.*?)<\/h\1>/gi, (match, level, attributes, text) => {
    const cleanText = text.trim();
    const id = generateHeadingId(cleanText);
    
    // Agregar al array de headings
    headings.push({
      level: parseInt(level),
      text: cleanText,
      id: id
    });
    
    // Retornar heading con ID y enlace de ancla
    return `<h${level}${attributes} id="${id}">${cleanText} <a href="#${id}" class="anchor-link">#</a></h${level}>`;
  });
  
  return { processedContent, headings };
}