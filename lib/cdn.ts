// Update this URL if the Team OS site uses a different R2 bucket
export const CDN = 'https://aipowered-assets.com'

export function getCDN(filename: string): string {
  return `${CDN}/${filename}`
}
