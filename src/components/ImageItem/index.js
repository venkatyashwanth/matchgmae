import './index.css'

const ImageItem = props => {
  const {itemDetails, isSame} = props
  const {id, thumbnailUrl} = itemDetails

  const isMatched = () => {
    isSame(id)
  }

  return (
    <>
      <button className="buttonStyle" type="button" onClick={isMatched}>
        <img className="image" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </>
  )
}

export default ImageItem
