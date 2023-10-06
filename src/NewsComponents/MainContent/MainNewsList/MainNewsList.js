import NewsItem from "./NewsItem"
function MainNewsList(){
  return(
    <div className="main-news-list">

    <NewsItem 
    image="https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg" 
    category="AI & Deep learning" 
    title="Ar „ChatGPT“ užims mūsų darbo vietas?"
    date="2023-01-27"/>
    <NewsItem 
    image="https://codeacademy.lt/wp-content/uploads/2022/12/2022_11_10-Code-Academy-221-1024x683.jpg"
    category="Naujienos" 
    title="Įmonių kova dėl IT specialistų: kaip sėkmingai atrasti savo talentus?"
    date="2023-03-01"/>

  </div>
  )
}
export default MainNewsList
