import store from './redux/store/store.jsx'

const App = () => {

  console.log('store: ', store.getState());

  return (
    <div className='App'>
      <h1>Redux tutorials</h1>
    </div>
  )
}

export default App
