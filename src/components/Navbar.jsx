import { BsCart } from 'react-icons/bs'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const { amount } = useSelector((state) => state.card)
  return (
    <>
      <nav>
        <div className='nav-center'>
          <h3>Redux Toolkit</h3>
          <div className='nav-contaner'>
            <div className='cart-icon'>
              <i>
                <BsCart />
              </i>
              <div className='amount-contaner'>
                <p className='total-amount'>{amount}</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar
