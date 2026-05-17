import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BookList from './pages/BookList'
import BookDetail from './pages/BookDetail'
import AddBook from './pages/AddBook'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/add" element={<AddBook />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
