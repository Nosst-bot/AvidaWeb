import Navbar from "./Navbar"
import MapSection from "./MapSection"
import SobreNosotros from "./SobreNosotros"

export default function Home() {
    return(
        <>
        <Navbar type={"user"}/>
        <section className="container text-center mySection">
            <div className="row">
                <h1 className="border border-primary">Para ver comentarios: <br></br><strong><i>localhost:####/comentarios</i></strong></h1>
                <div className="col h1">TEXT</div>
                <div className="col h1">IMG</div>
            </div>
        </section>

        
        <MapSection />
        </>
    )
}  