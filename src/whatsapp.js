export const WHATSAPP_NUMBER = '916355255733';

export const whatsappLink = (lines) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
