import Navbar from "./Components/Layout/Navbar/Navbar"
import Features from "./Components/Sections/Features/Features"
import Hero from "./Components/Sections/Hero/Hero"

const App = ()=>{
    return(
        <>
        <Navbar />
        <main className="mt-10"></main>
        <Hero />
        <Features />
        </>
    )
}
export default App