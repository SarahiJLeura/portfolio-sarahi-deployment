const GlassCard = ({ children, className = "" }) => {
  return (
    <div className={`glass-card rounded-xl overflow-hidden transition-transform duration-500 hover:scale-[0.99] ${className}`}>
      {children}
    </div>
  )
}

export default GlassCard