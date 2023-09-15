import './App.css'
import { PersonalInformation, AddressInformation, Registration } from './containers';
const App = () => {
  
  return (
    <>
    <PersonalInformation onNext={undefined} />
    <AddressInformation onNext={undefined} />
    <Registration onNext={undefined} />
    </>
  )
}

export default App
