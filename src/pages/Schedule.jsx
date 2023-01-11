import "../styles/Schedule.scss";
import PopUp from "../components/schedule/PopUp";
import ScheduleLayout from "../components/schedule/ScheduleLayout";
import { useState, useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";

function Schedule() {
  const [scheduleData, setScheduleData] = useState([]);
  const [bandsData, setBandsData] = useState([]);

  const [popUpIsOpen, setPopUpIsOpen] = useState(false);
  const [displayData, setDisplayData] = useState({});

  /*
    URL:
    "http://localhost:8080/schedule"
    "https://vjr-foofest.fly.dev/schedule"
    "http://localhost:8080/bands"
    "https://vjr-foofest.fly.dev/bands"
  */
  //const scheduleUrl = "https://vjr-foofest.fly.dev/schedule";
  //const bandsUrl = "https://vjr-foofest.fly.dev/bands";
  const scheduleUrl = "http://localhost:8080/schedule";
 const bandsUrl = "http://localhost:8080/bands";

  useEffect(() => {
    // fetch /schedule
    async function getScheduleData() {
      const response = await fetch(scheduleUrl);
      const data = await response.json();
      setScheduleData(data);
      //console.log(data);
    }
    getScheduleData();
  }, []);

  useEffect(() => {
    // fetch /bands
    async function getBandsData() {
      const response = await fetch(bandsUrl);
      const data = await response.json();
      setBandsData(data);
      //console.log(data);
    }
    getBandsData();
  }, []);

  function handleClosePopUp() {
    // close the pop-up if the user clicks outside the actual pop-up or the close button
    if (event.target.id === "pop-up" || event.target.id === "close-pop-up") {
      setPopUpIsOpen(false);
    }
  }

  function handleOpenPopUp(data) {
    setPopUpIsOpen(true);
    setDisplayData(data);
    //console.log(data);
  }

  return (
    <section id="schedule">
      <h2>FOOFEST PROGRAM</h2>
      <ScheduleLayout onOpenPopUp={handleOpenPopUp} bandsData={bandsData} scheduleData={scheduleData} />
      <PopUp popUpIsOpen={popUpIsOpen} onClosePopUp={handleClosePopUp} data={displayData} />
      <ScrollToTop smooth className="scroll-to-top" width="15" height="15" component={<p>🡹</p>} />
    </section>
  );
}

export default Schedule;
