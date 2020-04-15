import React, { Component } from 'react';
import "./Tour.scss"
export default class Tour extends Component {
    state = {
        showInfo: false,
    }
    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }
    render() {
        const { tour,id } = this.props
        const {removeTour}=this.props
        return (
            <article className="tour">
                <div className="img-container">
                    <img src={tour.img} alt="tour list" />
                    <span className="close-btn" onClick={()=>{removeTour(id)}} >
                        <i className="fas fa-window-close"></i>
                    </span>
                </div>
                <div className="tour-info">
                    <h3>City: {tour.city}</h3>
                    <h4>Name: {tour.name}</h4>
                    <h5>Info <span onClick={this.handleInfo}><i className="fas fa-caret-square-down"></i></span></h5>

                    {this.state.showInfo && <p>{tour.info}</p>}

                </div>
            </article>
        );
    }
}
