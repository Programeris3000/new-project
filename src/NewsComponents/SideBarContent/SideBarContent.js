import PodCastSection from "./PodcastComponents/PodCastSection"
import EventsSection from "./EventComponents/EventsSection"

function SideBarContent(){
  return(
    <aside className="sidebar-content">
      <PodCastSection />
      <EventsSection />
  </aside>
  )
}

export default SideBarContent