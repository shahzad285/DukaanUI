import './App.css'
import { Dashboard } from './components/Dashboard'
import { LeftMenu } from './components/LeftMenu'
import { TopMenu } from './components/TopMenu'

function App() {

  return (
    <div className="flex">
      <LeftMenu/>
      <div className='flex flex-col flex-grow'>
      <TopMenu/>
      <Dashboard/>
      </div>
    </div>
  )
}

export default App
