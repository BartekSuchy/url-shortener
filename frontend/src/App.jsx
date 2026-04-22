import { useState, useEffect } from 'react'
import ShortenForm from './components/ShortenForm'
import LinkList from './components/LinkList'

function App() {
  const [links, setLinks] = useState([])

  const fetchLinks = () => {
    fetch('http://localhost:3001/api/links')
      .then(res => res.json())
      .then(data => setLinks(data))
  }

  useEffect(() => {
    fetchLinks()
  }, [])

  return (
    <div style={{ maxWidth: '700px', margin: '40px auto', fontFamily: 'sans-serif', padding: '0 20px' }}>
      <h1>🔗 Skracacz linków</h1>
      <ShortenForm onAdded={fetchLinks} />
      <LinkList links={links} />
    </div>
  )
}

export default App