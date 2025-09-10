import React from 'react'
import Container from '../components/Container'

const Cart = () => {
  return (
    <div>
        <Container>
            <div className='mt-[124px] mb-[163px]'>
                <h3 className='text-primary text-[50px] font-bold font-dm'>Cart</h3>
            </div>
            <div className='flex justify-between'>
                <div>
                    <p>
                        product
                    </p>
                </div>
                 <div>
                    <p>
                       Price
                    </p>
                </div>
                 <div>
                    <p>
                      Quantity
                    </p>
                </div>
                 <div>
                    <p>
                       Total
                    </p>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Cart