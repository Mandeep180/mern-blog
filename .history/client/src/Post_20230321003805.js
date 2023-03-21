import {formatISO9075} from "date-fns"

export default function post({title, summary, cover, content,createdAt}){

    return(
        <div className="post">
        <div className="image">
        <img src="https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-1432923096.jpg?w=1390&crop=1"></img>
        </div>     
        <div className="texts">
        <h2>{title}</h2>
        <p className="info">
          <a className="author">Mandeep Kaur</a>
          <time>{formatISO9075()}</time>
        </p>
        <p className="summary">{summary}</p>
        </div>
      </div>
    )
}