import SecondaryNewsItem from "./SecondaryNewsItem"
function SecondaryNewsList(){
  return(
    <div className="secondary-news-list">
      <SecondaryNewsItem image="https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg" category="Deep learning" title="Visagine griūva malkinės?" date="2021-01-01"/>

      <SecondaryNewsItem image="https://codeacademy.lt/wp-content/uploads/2022/12/2022_11_10-Code-Academy-221-1024x683.jpg" category="AI & Deep learning" title="Naudoti Rietavo automobiliai" date="2023-08-02"/>

      <SecondaryNewsItem image="https://codeacademy.lt/wp-content/uploads/2022/12/2022_11_10-Code-Academy-221-1024x683.jpg" category="Not deep learning" title="Ar „ChatGPT“ užims mūsų darbo vietas?" date="2019-07-06"/>

      <SecondaryNewsItem image="https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg" category="Something smart" title="Kieteku paroda?" date="2023-08-30"/>
    </div>
  )
}
export default SecondaryNewsList