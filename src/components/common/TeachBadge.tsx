const TechBadge = ({ children }) => {
  return (
    <span className="px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm uppercase border border-tertiary/10">
      {children}
    </span>
  )
}

export default TechBadge