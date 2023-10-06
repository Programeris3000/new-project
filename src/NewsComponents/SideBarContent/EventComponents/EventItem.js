function EventItem(props){
  let images = props.image
  return(
    <div className="event-item">
    <a href="#">
      <div className="image-wrapper">
      {images ? <img src={props.image} alt=""/> : null}
      </div>

      <div className="event-content">
        <div className="event-date">
          <span className="event-day">{props.date}</span>
          <span className="event-month">{props.month}</span>
        </div>

        <div className="event-info">
          <span className="event-location">{props.location}</span>
          <h3 className="event-title">{props.title}</h3>
        </div>
      </div>
    </a>
  </div>
  )
}

export default EventItem