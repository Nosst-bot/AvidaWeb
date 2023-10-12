import Navbar from "./Navbar"
import MapSection from "./MapSection"

export default function Home() {
    return(
        <>
        <Navbar />
        <section className="container text-center mySection">
            <div className="row">
                <div className="col h1">TEXT</div>
                <div className="col h1">IMG</div>
            </div>
        </section>

        
        <MapSection />
        </>
    )
}  