import { useTitle } from "../../hooks/useTitle";
import { Featured, Hero, Questions, Testimonials } from "./components";

export const Home = () => {

  useTitle("");
  
  return (
    
    <main>
        <Hero />
        <section className="bg">
            <Featured />
            <Testimonials />
            <Questions />
        </section>
    </main>

  )
}