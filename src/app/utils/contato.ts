export function isPlaceholder(value: string): boolean {
  return !value.trim() || /\[[^\]]+\]/.test(value);
}
export function externalUrl(value: string): string | null {
  if (isPlaceholder(value)) return null;
  try {
    const url = new URL(value);
    return ['https:', 'http:'].includes(url.protocol) ? url.href : null;
  } catch {
    return null;
  }
}
export function emailUrl(value: string): string | null {
  return !isPlaceholder(value) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ? `mailto:${encodeURIComponent(value)}`
    : null;
}
export function whatsappUrl(value: string): string | null {
  const digits = value.replace(/\D/g, '');
  return !isPlaceholder(value) && digits.length >= 10 && digits.length <= 15
    ? `https://wa.me/${digits}`
    : null;
}
