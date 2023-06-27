import "./App.css";
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";
import Facilities from "./components/Facilities";
import CampusTour from "./components/CampusTour";
import SectionFour from "./components/SectionFour";
import CardCarousel from "./components/CardCarousel";

let name = "Mukul";
function App() {
  const response = [
    {
      ItemName: "Nirma2",
      ItemDay: "28",
      ItemMonth: "September",
      ItemYear: "2504",
    },
    {
      ItemName: "Nirma3",
      ItemDay: "15",
      ItemMonth: "December",
      ItemYear: "8451",
    },
    {
      ItemName: "Nirma4",
      ItemDay: "24",
      ItemMonth: "May",
      ItemYear: "3556",
    },
  ];

  return (
    <>
      {/* <CardCarousel></CardCarousel> */}
      <SectionFour></SectionFour>
      <Card>
        <Item name="Nirma">Hello Ji mai hoon apki first item</Item>
        <ItemDate day="17" month="June" year="2023"></ItemDate>

        <Item name="SurfExcel"></Item>
        <ItemDate day="22" month="December" year="1990"></ItemDate>

        <Item name="Airel"></Item>
        <ItemDate day="7" month="February" year="2145"></ItemDate>

        <Item name={response[0].ItemName}></Item>
        <ItemDate
          day={response[0].ItemDay}
          month={response[0].ItemMonth}
          year={response[0].ItemYear}
        ></ItemDate>

        <Item name={response[1].ItemName}></Item>
        <ItemDate
          day={response[1].ItemDay}
          month={response[1].ItemMonth}
          year={response[1].ItemYear}
        ></ItemDate>

        <Item name={response[2].ItemName}></Item>
        <ItemDate
          day={response[2].ItemDay}
          month={response[2].ItemMonth}
          year={response[2].ItemYear}
        ></ItemDate>

        <Facilities></Facilities>
        <Footer></Footer>
        <CampusTour></CampusTour>
        <div className="App">Hello Ji</div>
      </Card>

      <Footer2></Footer2>
    </>
  );
}

export default App;
