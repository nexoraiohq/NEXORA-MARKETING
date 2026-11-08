export const SITE_URL = "https://nexoraio.vercel.app";
export const SITE_NAME = "Nexora Studio";
export const WHATSAPP_NUMBER = "254713324672";

export function whatsappLink(text: string, encodeApos = false): string {
  const encoded = encodeURIComponent(text).replace(/'/g, encodeApos ? "%27" : "'");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
