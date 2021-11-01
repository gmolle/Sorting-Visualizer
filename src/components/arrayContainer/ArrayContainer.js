import { useSelector } from "react-redux"
import ArrayBar from "../arrayBar/ArrayBar"
import './arrayContainer.css'

const ArrayContainer = () => {

  const {arrayNums} = useSelector(state => state.array)

  return (
    <div className="array-container">
        {arrayNums.map((value, idx) => (
          <ArrayBar value={value} key={idx}/>
        ))}
      </div>
  )
}

export default ArrayContainer
