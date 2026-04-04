import './App.css'
import Header from './components/sections/Header'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import TechStack from './components/sections/TechStack'


function App() {
  return (
    <div className='min-w-80'> 
      <div className='fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
      <div className='fixed top-0 left-1/4 size-96 bg-cyan-500/20 blur-3xl rounded-full animate-pulse pointer-events-auto'></div>
      <div className='fixed bottom-0 right-1/4 size-96 bg-purple-500/20 blur-3xl rounded-full animate-pulse pointer-events-auto'></div>
      <Header/> 
      <Hero/>
      <TechStack/>
      <Projects/>
    </div>
  )
}

export default App
