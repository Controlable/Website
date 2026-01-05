/* eslint-disable prettier/prettier */
import content from '../data/content.json'

interface FooterProps {
  year: number
}

function Footer({ year }: FooterProps) {
  const { footer } = content
  return (
    <footer className="section-border p-8 text-center">
      <p className="text-xs text-slate-500 dark:text-slate-400">
        © <span>{year}</span> {footer.copyright}
      </p>
    </footer>
  )
}

export default Footer
