export interface LinkModel
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  url: string
  children: React.ReactNode
  isExternal?: boolean
}
