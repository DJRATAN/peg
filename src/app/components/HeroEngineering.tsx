import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

const HeroEngineering = () => {
  return ( 
      <section className="relative w-full py-24 md:py-32 flex flex-col items-center justify-center border-b bg-white">
        {/* Subtle Engineering Grid Overlay */}
        <div className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
        
        <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-8 z-10">
          <div className="space-y-4 max-w-4xl">
            <div className="inline-block px-3 py-1 rounded-full bg-[#1B79EE]/10 text-[#1B79EE] text-sm font-bold tracking-wide uppercase mb-4">
              Precast Engineering Group
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-[#004aad]">
              High-Performance <span className="text-[#1B79EE]">Precast</span> Data
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              from conception to execution the futurstic highway of precast concrete engineering and Technologies......
            </p>
          </div>

          {/* Search Bar - ARCAT Style (Bold & Functional) */}
          <div className="w-full max-w-3xl flex items-center gap-0 bg-white border-2 border-[#004aad] rounded-lg overflow-hidden shadow-[8px_8px_0px_rgba(0,74,173,0.1)]">
            <div className="pl-4">
              <Search className="w-6 h-6 text-slate-400" />
            </div>
            <Input
              type="text"
              placeholder="Search structural precast, architectural panels, BIM objects..."
              className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-lg py-8 placeholder:text-slate-400"
            />
            <Button className="rounded-none h-16 px-10 bg-[#004aad] hover:bg-[#1B79EE] text-white font-bold transition-all text-lg">
              SEARCH
            </Button>
          </div>
          
          <div className="flex gap-6 text-sm font-medium text-slate-500">
            <span>Popular: Wall Panels</span>
            <span>•</span>
            <span>Hollow-Core Slabs</span>
            <span>•</span>
            <span>Bridge Girders</span>
          </div>
        </div>
      </section>

  )
}

export default HeroEngineering
