import axios from 'axios'
import { useState } from 'react'
// import ClassComponent from './ClassComponent'
// import FunctionalComponent from './FunctionalComponent';
import Products from './Products'


function App() {
  // const [showComponent, setShowComponent] = useState(true);

  return (
    <>
    {/* <FunctionalComponent><FunctionalComponent/> */}
      {/* {showComponent ? <ClassComponent showComponent={showComponent}/> : null}
      <button onClick={() => setShowComponent(!showComponent)}>{showComponent ? 'Hide' : 'Show'}component</button> */}
      <Products/>
    </>
  )
}

export default App