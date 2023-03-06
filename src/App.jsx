import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Card from "./components/Card"

function App() {


  return (
    <div className="min-h-screen">
      {/* navbar o barra de navegacion */}
      <Header />
      <main className="h-[90vh] flex gap-8 p-8 overflow-y-scroll">
        <Sidebar />
        <div className=" flex-1 h-full ">
          {/*  Portada */}
          <div className="rounded-2xl ">
            <img 
             src="https://guiagame.com/wp-content/uploads/2022/01/halo-3-cover-realizzata-modello-master-chief-halo-infinite-artista-v3-499860.jpg" 
             className="w-full h-[500px] object-cover rounded-2xl" 
            />
          </div>
          {/* cards */}
          <div className="flex md:grid md:grid-cols-2 lg:flex items-center justify-around flex-wrap gap-8">
            {/* card 1 */}
            <Card 
              img="https://as01.epimg.net/meristation/imagenes/2018/07/24/header_image/539536481532422790.jpg"
              title="Marvel's Spider-Man"
              category="PS5"
              price="51"
            />
            {/* card 2 */}
            <Card 
              img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hogwarts-legacy-1-1601466696.jpg"
              title="hogwarts Legacy"
              category="PS5"
              price="62"
            />
            {/* card 3 */}
            <Card 
              img="https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/TLOU_P2_Box_Art_2.png/220px-TLOU_P2_Box_Art_2.png"
              title="The Last Of Us"
              category="PS5"
              price="80"
            />
            {/* card 4 */}
            <Card 
              img="https://cdn.thetealmango.com/wp-content/uploads/2022/12/Uncharted-5-Graphic.jpg"
              title="Uncharted 5"
              category="PS5"
              price="75"
            />
            {/* card 5 */}
            <Card 
              img="https://static.wikia.nocookie.net/callofduty/images/2/27/ModernWarfareII_Keyart_MWII.jpg"
              title="Call Of Duty MW 2"
              category="PS5"
              price="90"
            />
            {/* card 6 */}
             <Card 
              img="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5358/5358600cv23d.jpg"
              title="God of War Ragnarok"
              category="PS4"
              price="60"
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
