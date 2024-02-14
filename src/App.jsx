import { useEffect } from 'react'
import Navbar from './components/Navbar'
import CardContanter from './components/CardContanter'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotal } from './features/card/cardSlice'
import Modal from './components/Modal'
function App() {
  const { cardItems } = useSelector((store) => store.card)
  const { isOpen } = useSelector((store) => store.model)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotal())
  }, [cardItems])

  return (
    <>
      {isOpen && <Modal />}
      <Navbar />
      <CardContanter />
    </>
  )
}

export default App
