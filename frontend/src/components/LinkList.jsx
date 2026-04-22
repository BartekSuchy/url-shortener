function LinkList({ links }) {
  if (links.length === 0) return <p>Brak linków. Dodaj pierwszy!</p>

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ borderBottom: '2px solid #ccc' }}>
          <th style={{ textAlign: 'left', padding: '8px' }}>Oryginalny URL</th>
          <th style={{ textAlign: 'left', padding: '8px' }}>Krótki link</th>
          <th style={{ textAlign: 'left', padding: '8px' }}>Kliknięcia</th>
        </tr>
      </thead>
      <tbody>
        {links.map(link => (
          <tr key={link.id} style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '8px', maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {link.original_url}
            </td>
            <td style={{ padding: '8px' }}>
              <a href={`http://localhost:3001/${link.short_code}`} target="_blank">
                {link.short_code}
              </a>
            </td>
            <td style={{ padding: '8px' }}>{link.clicks}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default LinkList