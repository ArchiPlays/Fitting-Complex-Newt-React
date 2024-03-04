import React from 'react'

import PropTypes from 'prop-types'

import './pasted-image.css'

const PastedImage = (props) => {
  return (
    <div className={`pasted-image-container ${props.rootClassName} `}>
      <img
        alt={props.pastedImageAlt}
        src={props.pastedImageSrc}
        className="pasted-image-pasted-image"
      />
    </div>
  )
}

PastedImage.defaultProps = {
  pastedImageAlt: 'pastedImage',
  pastedImageSrc: 'https://i.imgur.com/1lOv4fK.png',
  rootClassName: '',
}

PastedImage.propTypes = {
  pastedImageAlt: PropTypes.string,
  pastedImageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default PastedImage
