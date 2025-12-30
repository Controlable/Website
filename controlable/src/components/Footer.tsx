interface FooterProps {
  year: number
}

function Footer({ year }: FooterProps) {
  return (
    <footer className="section-border p-8 text-center">
      <p className="text-xs text-slate-500">
        © <span>{year}</span> Controlable Systems. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
