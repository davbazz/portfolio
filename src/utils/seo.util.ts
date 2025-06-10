export const getSeoKeywords = (string: string): string[] =>
  string.split(/\s*,\s*|\s+/)

export const slugToTitle = (slug: string): string =>
  slug.replace(/(^\w{1}|-\w{1})/g, (letter) => letter.toUpperCase())
