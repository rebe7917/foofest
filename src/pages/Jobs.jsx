import "../styles/alternating-sections.scss";
import Job from "../components/jobs/Job";
import Voluenteer from "../components/jobs/Voluenteer";
import ScrollToTop from "react-scroll-to-top";

function Jobs() {
  return (
    <section id="jobs">
      <Job />
      <Voluenteer />
      <ScrollToTop smooth className="scroll-to-top" width="15" height="15" component={<p>🡹</p>} />
    </section>
  );
}

export default Jobs;
