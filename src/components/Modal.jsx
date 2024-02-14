import { useDispatch } from 'react-redux'
import { openModel, closeModel } from '../features/model/modelSlice'
import { clearCard } from '../features/card/cardSlice'

const Modal = () => {
  const dispatch = useDispatch()
  return (
    <>
      <aside className='modal-contaner'>
        <div className='modal'>
          <h4>Remove all items from your shopping bag?</h4>
          <div className='btn-contaner'>
            <button
              className='btn confirm-btn'
              onClick={() => {
                dispatch(clearCard())
                dispatch(closeModel())
              }}
            >
              confirm
            </button>
            <button
              className='btn cancle-btn'
              onClick={() => dispatch(closeModel())}
            >
              cancle
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}
export default Modal
