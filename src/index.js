// React Imports ( Libraries and Frameworks )
// -------------------------
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// React Imports ( CSS )
// -------------------------
import "./CSS/index.css";

// React Imports ( Components and Pages )
// -------------------------
import Main from './Pages/main.js'
import AlFatiha from './Pages/001'
import AlBaqara from './Pages/002'
import AlImran from './Pages/003'
import AlNisaa from './Pages/004'
import AlMaada from './Pages/005'
import AlAnaam from './Pages/006'
import AlAaraf from './Pages/007'
import AlAnfal from './Pages/008'
import AlTawba from './Pages/009'
import Yunus from './Pages/010'
import Hud from './Pages/011'
import Yusuf from './Pages/012'
import AlRaad from './Pages/013'
import Ibrahim from './Pages/014'
import AlHegr from './Pages/015'
import AlNahl from './Pages/016'
import AlIsraa from './Pages/017'
import AlKahf from './Pages/018'
import Mariam from './Pages/019'
import Taha from './Pages/020'
import AlAnbiaa from './Pages/021'
import AlHag from './Pages/022'
import AlMoamenon from './Pages/023'
import AlNoor from './Pages/024'
import AlFurqan from './Pages/025'
import AlShuaara from './Pages/026'
import AlNaml from './Pages/027'
import AlQasas from './Pages/028'
import AlAnkabot from './Pages/029'
import AlRoom from './Pages/030'
import Luqman from './Pages/031'
import AlSagda from './Pages/032'
import AlAhzab from './Pages/033'
import Sabaa from './Pages/034'
import Fater from './Pages/035'
import Yassin from './Pages/036'
import AlSaffat from './Pages/037'
import Sad from './Pages/038'
import AlZumr from './Pages/039'
import Ghafer from './Pages/040'
import Fuslat from './Pages/041'
import AlShura from './Pages/042'
import AlZukhruf from './Pages/043'
import AlDukhan from './Pages/044'
import AlJathia from './Pages/045'
import AlAhqaf from './Pages/046'
import Mohamed from './Pages/047'
import AlFath from './Pages/048'
import AlHogorat from './Pages/049'
import Qaf from './Pages/050'
import AlZariat from './Pages/051'
import AlTor from './Pages/052'
import AlNagm from './Pages/053'
import AlQamr from './Pages/054'
import AlRahman from './Pages/055'
import AlWaqaa from './Pages/056'
import AlHaded from './Pages/057'
import AlMugadala from './Pages/058'
import AlHashr from './Pages/059'
import AlMomtahna from './Pages/060'
import AlSaff from './Pages/061'
import AlGomaa from './Pages/062'
import AlMunafqon from './Pages/063'
import AlTaghabn from './Pages/064'
import AlTalaq from './Pages/065'
import AlTahrem from './Pages/066'
import AlMulk from './Pages/067'
import AlQalm from './Pages/068'
import AlHaqa from './Pages/069'
import AlMaarg from './Pages/070'



// React Content
// -------------------------
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: 
    <h1 style={{
      backgroundColor: "whitesmoke" , 
      height : '100vh' ,
      margin: '0' ,
      display: 'flex' ,
      justifyContent: 'center' ,
      alignItems: 'center' ,
      color: 'white' ,
      textShadow: '1px 1px 10px black' ,
      fontSize: '30px'
      }}>
      Page Not Found
    </h1>
  },
  {
    path: "/001",
    element: <AlFatiha />,
  },
  {
    path: "/002",
    element: <AlBaqara />
  },
  {
    path: "/003",
    element: <AlImran />
  },
  {
    path: "/004",
    element: <AlNisaa />
  },
  {
    path: "/005",
    element: <AlMaada />
  },
  {
    path: "/006",
    element: <AlAnaam />
  },
  {
    path: "/007",
    element: <AlAaraf />
  },
  {
    path: "/008",
    element: <AlAnfal />
  },
  {
    path: "/009",
    element: <AlTawba />
  },
  {
    path: "/010",
    element: <Yunus />
  },
  {
    path: "/011",
    element: <Hud />
  },
  {
    path: "/012",
    element: <Yusuf />
  },
  {
    path: "/013",
    element: <AlRaad />
  },
  {
    path: "/014",
    element: <Ibrahim />
  },
  {
    path: "/015",
    element: <AlHegr />
  },
  {
    path: "/016",
    element: <AlNahl />
  },
  {
    path: "/017",
    element: <AlIsraa />
  },
  {
    path: "/018",
    element: <AlKahf />
  },
  {
    path: "/019",
    element: <Mariam />
  },
  {
    path: "/020",
    element: <Taha />
  },
  {
    path: "/021",
    element: <AlAnbiaa />
  },
  {
    path: "/022",
    element: <AlHag />
  },
  {
    path: "/023",
    element: <AlMoamenon />
  },
  {
    path: "/024",
    element: <AlNoor />
  },
  {
    path: "/025",
    element: <AlFurqan />
  },
  {
    path: "/026",
    element: <AlShuaara />
  },
  {
    path: "/027",
    element: <AlNaml />
  },
  {
    path: "/028",
    element: <AlQasas />
  },
  {
    path: "/029",
    element: <AlAnkabot />
  },
  {
    path: "/030",
    element: <AlRoom />
  },
  {
    path: "/031",
    element: <Luqman />
  },
  {
    path: "/032",
    element: <AlSagda />
  },
  {
    path: "/033",
    element: <AlAhzab />
  },
  {
    path: "/034",
    element: <Sabaa />
  },
  {
    path: "/035",
    element: <Fater />
  },
  {
    path: "/036",
    element: <Yassin />
  },
  {
    path: "/037",
    element: <AlSaffat />
  },
  {
    path: "/038",
    element: <Sad />
  },
  {
    path: "/039",
    element: <AlZumr />
  },
  {
    path: "/040",
    element: <Ghafer />
  },
  {
    path: "/041",
    element: <Fuslat />
  },
  {
    path: "/042",
    element: <AlShura />
  },
  {
    path: "/043",
    element: <AlZukhruf />
  },
  {
    path: "/044",
    element: <AlDukhan />
  },
  {
    path: "/045",
    element: <AlJathia />
  },
  {
    path: "/046",
    element: <AlAhqaf />
  },
  {
    path: "/047",
    element: <Mohamed />
  },
  {
    path: "/048",
    element: <AlFath />
  },
  {
    path: "/049",
    element: <AlHogorat />
  },
  {
    path: "/050",
    element: <Qaf />
  },
  {
    path: "/051",
    element: <AlZariat />
  },
  {
    path: "/052",
    element: <AlTor />
  },
  {
    path: "/053",
    element: <AlNagm />
  },
  {
    path: "/054",
    element: <AlQamr />
  },
  {
    path: "/055",
    element: <AlRahman />
  },
  {
    path: "/056",
    element: <AlWaqaa />
  },
  {
    path: "/057",
    element: <AlHaded />
  },
  {
    path: "/058",
    element: <AlMugadala />
  },
  {
    path: "/059",
    element: <AlHashr />
  },
  {
    path: "/060",
    element: <AlMomtahna />
  },
  {
    path: "/061",
    element: <AlSaff />
  },
  {
    path: "/062",
    element: <AlGomaa />
  },
  {
    path: "/063",
    element: <AlMunafqon />
  },
  {
    path: "/064",
    element: <AlTaghabn />
  },
  {
    path: "/065",
    element: <AlTalaq />
  },
  {
    path: "/066",
    element: <AlTahrem />
  },
  {
    path: "/067",
    element: <AlMulk />
  },
  {
    path: "/068",
    element: <AlQalm />
  },
  {
    path: "/069",
    element: <AlHaqa />
  },
  {
    path: "/070",
    element: <AlMaarg />
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);