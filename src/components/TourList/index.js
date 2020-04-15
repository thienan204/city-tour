import React, { Component } from 'react';
import "./TourList.scss"
import Tour from '../Tour/Tour'
import { tourData } from './tourData'
export default class TourList extends Component {
    state = {
        tours: tourData
    }
    removeTour = id => {
        console.log(id)
        const { tours } = this.state
        const sortedTours = tours.filter(tour => tour.id !== id)
        this.setState({
            tours: sortedTours
        })
    }
    render() {
        //console.log(this.state.tour)
        const { tours } = this.state

        return (
            <section className="tourlist">
                {
                    tours.map((tour, index) => {
                        return <Tour
                            key={index}
                            id={tour.id}
                            tour={tour}
                            removeTour={this.removeTour}
                        />
                    })
                }
            </section>
        );
    }
}
