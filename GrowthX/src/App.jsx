import Navbar from "./Components/Layout/Navbar/Navbar"
import Features from "./Components/Sections/Features/Features"
import Hero from "./Components/Sections/Hero/Hero"
import WhyUs from "./Components/Sections/WhyUs/WhyUs"

const App = ()=>{
    return(
        <>
        <Navbar />
        <main className="mt-10"></main>
        <Hero />
        <Features />
        <WhyUs />
        </>
    )
}
export default App