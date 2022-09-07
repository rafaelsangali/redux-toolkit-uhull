import type { NextPage } from 'next'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slicers/counterSlice'
import { RootState } from '../redux/store'

const Home: NextPage = () => {
  const dispatch = useDispatch()
  const viewNumber = useSelector((state: RootState) => state.operation.counter)

  return (
    <>
      <main className='container'>
        <div className='center'>
          <h1>Other Page</h1>
          <p>{viewNumber}</p>
          <button onClick={() => dispatch(increment())}>Counter Plus</button>
          <button onClick={() => dispatch(decrement())}>Counter Minus</button>
          <Link href='/'><a>Main Page</a></Link>
        </div>
      </main>
    </>
  )
}

export default Home
