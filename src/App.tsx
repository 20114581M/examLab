import './App.css'
import Header from '../components/header'
import Members from '../components/members'


function App() {


  return (
    <>
      
      <Header/>
      <Members name="Marlon Ampoon" course="BSIT ICT 2" status = 'Active'  email="marlon@s.ubaguio.edu" phone="09612493229" activities = {["Orientation","Meeting","Practice"]}/>
      <Members name="John Doe" course="BSHRM 3" status = 'Inactive'  email="John@s.ubaguio.edu" phone="09247854525" activities = {["Counseling","Playoff","Exercise"]}/>
      <Members name="Elizabeth Roberts" course="BSN 3" status = 'Active'  email="Elizabeth@s.ubaguio.edu" phone="19191045145" activities = {["Class","Practice","Laboratory"]}/>
    </>
  )
}

export default App
