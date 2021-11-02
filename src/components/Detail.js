import React from "react";
import "./Detail.css";

class Detail extends React.Component {

    componentDidMount() {
        const { location, history } = this.props;
        console.log(location.state);
        if (location.state === undefined) {
            history.push("/"); // go back home
        }
    }

    render() {
        const { genres, title, year, summary, poster } = this.props.location.state;
        return (
            <div className="detail">
                <img src={poster} alt={title} title={title}/>
                <div className="detail__data">
                    <h3 className="detail__title">{title}</h3>
                    <h5 className="detail__year">{year}</h5>
                    <ul className="detail__genres">{genres.map((genre, index) => (
                        <li className="detail__genre" key={index}>{genre}</li>
                    ))}
                    </ul>
                    <p className="detail__summary">{summary}</p>
                </div>
            </div>
        );
    }
}

export default Detail;