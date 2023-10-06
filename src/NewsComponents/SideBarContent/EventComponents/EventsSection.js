import EventItem from "./EventItem"
import Buttons from "../../Buttons"

function EventsSection(){
  return(
    
    <section className="events-section">
      <h2 className="section-title">Renginiai</h2>

      <div className="events-list">

       <EventItem image="https://codeacademy.lt/wp-content/uploads/2023/08/77307444_1014197978913829_6397086150799917056_n-300x188.jpg" date="25" month="Sep" location="Vilnius, Lithuania & Online" title="SMALL CONFERENCE EUROPE 2023"/>

       <EventItem date="19" month="Jun" location="Kaunas, Lithuania & Offline" title="BIG DATA CONFERENCE EUROPE 2023"/>

       <EventItem date="16" month="Oct" location="Mažeikiai, Lithuania & Online" title="EUROPE CUP 2023"/>


      </div>

      <Buttons text="Daugiau"/>

    </section>
  )
}

export default EventsSection