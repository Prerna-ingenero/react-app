import React from "react";
import "./App.css";
import Mysqlconnection from "./Api/Mysqlconnection";
import Navbar from "./Api/Navbar";
import AllProjectDetails from "./Api/AllProjectDetails";
import Topsection from "./Api/Topsection";
import Lagging from "./Api/Lagging";
import Offstatus from "./Api/Offstatus";
import Projectdetailpage from "./Api/Projectdetailpage";
import Projectconfigtable from "./Api/Projectconfigtable";
import Projectdropdown from "./Api/Projectdropdown";
import Bilaxicalchart from "./Api/Bilaxicalchart";

function Home() {
  return (
    <main>
      <Navbar />
      <Topsection />
      <Mysqlconnection />
      <AllProjectDetails />
      <Lagging />
      <Offstatus />
      <Projectdropdown />
      <Projectdetailpage />
      <Projectconfigtable />
    </main>
  );
}

export default Home;
