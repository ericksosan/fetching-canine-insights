
import { Navigate, Route, Routes } from 'react-router-dom'
import { DogManagementPage, DogsPage } from './pages'
import { Layout } from './components'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/list' />} />

      <Route path='/' element={<Layout />}>
        <Route path='/list' element={<DogsPage />} />
        <Route path='/management' element={<DogManagementPage />} />
      </Route>

      <Route path='/*' element={<Navigate to='/list' />} />
    </Routes>
  )
}

export default App
