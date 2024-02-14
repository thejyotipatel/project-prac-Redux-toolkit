import { IoIosRemoveCircleOutline } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { removeItem, increase, decrease } from '../features/card/cardSlice'
const CardItem = ({ id, title, img, price, amount }) => {
  const dispatch = useDispatch()
  return (
    <>
      <div className='profile-card'>
        <div className='remove-btn-contaner'>
          <button
            className='btn remove-btn'
            onClick={() => dispatch(removeItem(id))}
          >
            <i>
              <IoIosRemoveCircleOutline />
            </i>
          </button>
        </div>
        <img src={img} alt={title} className='profile-img' />
        <div className='profile-info'>
          <h2>
            Name: <span>{title}</span>
          </h2>
          <h2>
            Price: <span> {price}</span>
          </h2>
          <h2 className='btns'>
            total:
            <button
              className='btn total-btn'
              onClick={() => {
                dispatch(decrease({ id }))
                if (amount === 1) {
                  dispatch(removeItem(id))
                  return
                }
              }}
            >
              -
            </button>
            <span> {amount}</span>
            <button
              className='btn total-btn'
              onClick={() => dispatch(increase({ id }))}
            >
              +
            </button>
          </h2>
        </div>
      </div>
    </>
  )
}
export default CardItem
