import { Routes, Route } from 'react-router-dom'

import Header from './components/header'
import Footer from './components/footer'
import HomePage from './pages/home'
import ExperiencePage from './pages/experience'
import SkillPage from './pages/skills'
import EducationPage from './pages/education'

import style from './App.module.scss'

function App() {

  return (
    <div className={style.App}>
      <Header/>

      <Routes>
        <Route path='/Portfolio' element={<HomePage/>} ></Route>
        <Route path='/Portfolio/education' element={<EducationPage/>} ></Route>
        <Route path='/Portfolio/skills' element={<SkillPage/>} ></Route>
        <Route path='/Portfolio/experience' element={<ExperiencePage/>} ></Route>
      </Routes>

      <Footer/>
    </div>
  )
}

export default App
