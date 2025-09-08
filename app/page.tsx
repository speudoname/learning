export default function Home() {
  return (
    <div style={{ 
      border: '5px solid red', 
      padding: '20px',
      margin: '20px',
      backgroundColor: 'lightyellow' 
    }}>
      <h1>🏠 I am PAGE.TSX</h1>
      <p>I am ONLY the content inside the red box!</p>
      <p>I don&apos;t have {'<html>'} or {'<body>'} tags</p>
      <p>I&apos;m just a piece of content that needs a wrapper!</p>
    </div>
  );
}