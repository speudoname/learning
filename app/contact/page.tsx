export default function Contact() {
  return (
    <div style={{ 
      border: '5px solid teal', 
      padding: '20px',
      margin: '20px',
      backgroundColor: 'lightcyan' 
    }}>
      <h1>📞 I am CONTACT/PAGE.TSX</h1>
      <p>My URL is: <strong>/contact</strong></p>
      <p>I live in: <strong>app/contact/page.tsx</strong></p>
      <p>The magic formula:</p>
      <div style={{ backgroundColor: 'white', padding: '10px', marginTop: '10px' }}>
        <code style={{ fontSize: '18px' }}>
          URL path === Folder structure
        </code>
        <br />
        <br />
        <code>/contact</code> → <code>app/contact/page.tsx</code>
      </div>
    </div>
  );
}