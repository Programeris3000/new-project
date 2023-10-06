import './News.css'
import MainContent from './NewsComponents/MainContent/MainContent'
import SideBarContent from './NewsComponents/SideBarContent/SideBarContent'

function News(){
  return(
    <div className="container">
    <div className="page-content-wrapper">
      <MainContent />
      <SideBarContent />
    </div>
  </div>
  )
}

export default News