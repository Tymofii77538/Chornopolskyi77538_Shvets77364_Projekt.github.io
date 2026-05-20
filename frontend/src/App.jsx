import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BookList from './pages/BookList'
import BookDetail from './pages/BookDetail'
import AddBook from './pages/AddBook'
import AuthorList from './pages/AuthorList'
import AuthorDetail from './pages/AuthorDetail'
import EditBook from './pages/EditBook'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/authors" element={<AuthorList />} />
        <Route path="/authors/:id" element={<AuthorDetail />} />
        <Route path="/books/:id/edit" element={<EditBook />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
