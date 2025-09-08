export default function Blog() {
  return (
    <div style={{ 
      border: '5px solid purple', 
      padding: '20px',
      margin: '20px',
      backgroundColor: 'lavender' 
    }}>
      <h1>📝 I am BLOG/PAGE.TSX</h1>
      <p>My URL is: <strong>/blog</strong></p>
      <p>I live in: <strong>app/blog/page.tsx</strong></p>
      <p>Next.js knew to load me because:</p>
      <ol>
        <li>You visited <code>/blog</code></li>
        <li>Next.js looked for <code>app/blog/page.tsx</code></li>
        <li>Found me and passed me to layout as <code>children</code>!</li>
      </ol>
    </div>
  );
}