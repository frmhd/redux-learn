import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = styled.button`
  color: black;
  box-shadow: none;
  border: none;
  display: inline-block;
  padding: 10px;
  background: gold;
  margin: 5px;

  &:hover {
    cursor: pointer;
    background: black;
    color: gold;
  }
`

export default class Page extends Component {
  static PropTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    fetching: PropTypes.bool
  }

  componentDidMount () {
    this.props.getPhotos('http://jsonplaceholder.typicode.com/photos')
  }

  renderPhotos () {
    return (
      this.props.photos.map(photo => {
        return (
          <img src={photo.thumbnailUrl} alt={photo.title}/>
        )
      })
    )
  }

  render() {
    const { year, photos, fetching } = this.props
    return (
      <div>
        <p>{year} год</p>
        { fetching ? <p>Загрузка...</p> : <p>У тебя {photos.length} фото</p> }
        <div>
          {/* {this.renderPhotos()} */}
        </div>
      </div>
    )
  }
}
