import PhoneView from './app/features/phones/PhoneView'
import TvView from './app/features/tvs/TvView';
import AdminView from './app/features/admin/adminView';

import './App.css'

const App = () => {


  return (
    <>
      <div className="section-one">
        <PhoneView />
        <TvView />
      </div>
      <AdminView />
    </>
  )
}

export default App
