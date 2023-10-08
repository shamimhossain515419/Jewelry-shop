
import HomeBanner from "@/Components/Container/HomeBanner/HomeBanner";
import Footer from "@/Components/Footer/Footer";
import OurProducts from "@/Components/OurProducts/OurProducts";



export default function Home() {

  return (
    <main>


      <div>
        <HomeBanner></HomeBanner>
      </div>
      <OurProducts></OurProducts>

      <Footer></Footer>

    </main>
  )
}
