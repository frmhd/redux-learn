import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Page extends Component {
  static PropTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired
  }

  changeYearClick (e) {
    this.props.setYear(+e.target.innerText)
  }

  render() {
    const { year, photos } = this.props
    return (
      <div>
        <div>
          <button onClick={this.changeYearClick.bind(this)}>2015</button>
          <button onClick={this.changeYearClick.bind(this)}>2016</button>
          <button onClick={this.changeYearClick.bind(this)}>2017</button>
        </div>
        <p>У тебя {photos.length} фото за {year} год</p>
      </div>
    )
  }
}
