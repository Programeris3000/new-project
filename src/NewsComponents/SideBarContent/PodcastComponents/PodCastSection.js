import PodcastItem from "./PodcastItem"

function PodCastSection(){
  return(
    <section className="podcast-section">
    <h2 className="section-title">Podcastai ir radijo laidos</h2>

    <div className="podcast-list">

    
    <PodcastItem duration="7:55" title="Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas" date="2023-02-06"/>
    <PodcastItem duration="6:24" title="Pojūčius pirštų galiukams sugrąžinti gali pažastų dezodorantas" date="2023-09-02"/>
    <PodcastItem duration="4:53" title="Pojūčius pirštų galiukams sugrąžinti gali puikus hidrantas" date="2023-01-20"/>
    <PodcastItem duration="3:00" title="Pojūčius pirštų galiukams sugrąžinti gali praktikantas solenizantas" date="2023-11-18"/>
  
    </div>
  </section>
  )
}

export default PodCastSection