import { useDispatch, useSelector } from 'react-redux'
import CardItem from './CardItem'
import { clearCard } from '../features/card/cardSlice'
import { openModel } from '../features/model/modelSlice'

const CardContanter = () => {
  const dispatch = useDispatch()
  const { cardItems, total, amount } = useSelector((state) => state.card)
  if (amount < 1) {
    return (
      <div className='contaner'>
        <header>
          <h1>Your bag</h1>
          <h4 className='card-empty'>is currently empty</h4>
        </header>
      </div>
    )
  }

  return (
    <>
      <div className='contaner'>
        <header>
          <h1>Your bag</h1>
        </header>
        <div className='card-contaner'>
          {cardItems.map((item) => {
            return <CardItem key={item.id} {...item} />
          })}
        </div>

        <hr />
        <footer>
          <div className='total-contaner'>
            <div className='total-contant'>
              <h3>Total</h3>
              <h3 className='total'>${total.toFixed(2)}</h3>
            </div>
            <button
              className='btn clear-all'
              onClick={() => dispatch(openModel())}
            >
              clear all
            </button>
          </div>
        </footer>
      </div>
    </>
  )
}
export default CardContanter
