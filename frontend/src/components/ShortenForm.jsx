import { useState } from 'react'

function ShortenForm({ onAdded }) {
  const [url, setUrl] = useState('')
  const [result, setResult] = useState(null)

  const handleSubmit = () => {
    if (!url) return

    fetch('http://localhost:3001/api/links', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ original_url: url })
    })
      .then(res => res.json())
      .then(data => {
        setResult(`http://localhost:3001/${data.short_code}`)
        setUrl('')
        onAdded()
      })
  }

  return (
    <div style={{ marginBottom: '30px' }}>
      <input
        type="text"
        placeholder="Wklej długi URL tutaj..."
        value={url}
        onChange={e => setUrl(e.target.value)}
        style={{ width: '70%', padding: '10px', fontSize: '16px' }}
      />
      <button
        onClick={handleSubmit}
        style={{ padding: '10px 20px', marginLeft: '10px', fontSize: '16px', cursor: 'pointer' }}
      >
        Skróć!
      </button>

      {result && (
        <p>Krótki link: <a href={result} target="_blank">{result}</a></p>
      )}
    </div>
  )
}

export default ShortenForm