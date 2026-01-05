
import { Globe } from 'lucide-react'

export default function SpinningGlobe() {
  return (
    <div className="relative mx-auto mb-8 flex size-32 items-center justify-center perspective-1000">
      <div className="relative flex size-full items-center justify-center preserve-3d animate-spin-slow">
        {/* Core Globe */}
        <div className="absolute inset-0 rounded-full border-2 border-accent/30 shadow-[0_0_30px_rgba(37,99,235,0.3)]"></div>
        
        {/* Meridians / Latitudes simulation */}
        <div className="absolute inset-0 rounded-full border border-accent/20 rotate-x-60"></div>
        <div className="absolute inset-0 rounded-full border border-accent/20 rotate-y-60"></div>
        <div className="absolute inset-0 rounded-full border border-accent/20 -rotate-y-60"></div>
        
        {/* The Icon inside or as part of it */}
        <Globe className="size-full text-accent opacity-80" strokeWidth={1} />
      </div>
      
      {/* Outer Glow Ring */}
      <div className="absolute -inset-4 rounded-full border border-accent/10 animate-pulse-slow"></div>
    </div>
  )
}
