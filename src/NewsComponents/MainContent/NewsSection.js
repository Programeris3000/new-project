import MainNewsList from "./MainNewsList/MainNewsList"
import SecondaryNewsList from "./SecondaryNewsContent/SecondaryNewsList"
import Buttons from "../Buttons"
function NewsSection(){
  return(
    <section className="news-section">
    <h1 className="page-title">Naujienos</h1>

    <MainNewsList />
    <SecondaryNewsList />


    <Buttons text="Visos naujienos"/>
  </section>
  )
}

export default NewsSection