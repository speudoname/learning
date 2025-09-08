export default function HowItWorks() {
  return (
    <div style={{ 
      padding: '20px',
      backgroundColor: 'white',
      borderRadius: '10px',
      margin: '20px'
    }}>
      <h1>🔍 The EXACT Mechanism</h1>
      
      <div style={{ 
        backgroundColor: '#fffacd', 
        padding: '20px', 
        borderRadius: '10px',
        marginTop: '20px'
      }}>
        <h2>📋 The {`{children}`} Prop - Line by Line</h2>
        
        <div style={{ 
          fontFamily: 'monospace', 
          backgroundColor: '#f0f0f0', 
          padding: '15px',
          borderRadius: '5px',
          marginTop: '10px'
        }}>
          <div style={{ color: 'green' }}>// layout.tsx</div>
          <div>export default function RootLayout({`{`}</div>
          <div style={{ paddingLeft: '20px', color: 'blue' }}>
            children  <span style={{ color: 'red' }}>← THIS receives the page component!</span>
          </div>
          <div>{`}`}: {`{`} children: React.ReactNode {`}`}) {`{`}</div>
          <div style={{ paddingLeft: '20px' }}>return (</div>
          <div style={{ paddingLeft: '40px' }}>{`<html>`}</div>
          <div style={{ paddingLeft: '60px' }}>{`<body>`}</div>
          <div style={{ paddingLeft: '80px', color: 'blue' }}>
            {`{children}`} <span style={{ color: 'red' }}>← THIS renders the page!</span>
          </div>
          <div style={{ paddingLeft: '60px' }}>{`</body>`}</div>
          <div style={{ paddingLeft: '40px' }}>{`</html>`}</div>
          <div style={{ paddingLeft: '20px' }}>)</div>
          <div>{`}`}</div>
        </div>
      </div>

      <div style={{ 
        backgroundColor: '#e6f3ff', 
        padding: '20px', 
        borderRadius: '10px',
        marginTop: '20px'
      }}>
        <h2>🎯 What Next.js Does Behind the Scenes</h2>
        
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <thead>
            <tr style={{ backgroundColor: '#0070f3', color: 'white' }}>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>When you visit...</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Next.js does this...</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                <code>/</code>
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd', fontFamily: 'monospace', fontSize: '12px' }}>
                {`<RootLayout>`}<br/>
                &nbsp;&nbsp;{`<Home />`} {`← app/page.tsx`}<br/>
                {`</RootLayout>`}
              </td>
            </tr>
            <tr style={{ backgroundColor: '#f5f5f5' }}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                <code>/about</code>
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd', fontFamily: 'monospace', fontSize: '12px' }}>
                {`<RootLayout>`}<br/>
                &nbsp;&nbsp;{`<About />`} {`← app/about/page.tsx`}<br/>
                {`</RootLayout>`}
              </td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                <code>/blog</code>
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd', fontFamily: 'monospace', fontSize: '12px' }}>
                {`<RootLayout>`}<br/>
                &nbsp;&nbsp;{`<Blog />`} {`← app/blog/page.tsx`}<br/>
                {`</RootLayout>`}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ 
        backgroundColor: '#ffe6e6', 
        padding: '20px', 
        borderRadius: '10px',
        marginTop: '20px'
      }}>
        <h2>🎭 The Magic Formula</h2>
        <div style={{ 
          fontSize: '20px', 
          fontWeight: 'bold',
          textAlign: 'center',
          padding: '20px',
          backgroundColor: 'white',
          borderRadius: '10px',
          marginTop: '10px'
        }}>
          URL Path = Folder Structure = Which page.tsx loads
        </div>
        
        <div style={{ marginTop: '15px' }}>
          <p><strong>There&apos;s NO configuration needed!</strong></p>
          <p>You don&apos;t write any code to tell Next.js which page to load.</p>
          <p>It&apos;s automatic based on your folder structure!</p>
        </div>
      </div>

      <div style={{ 
        backgroundColor: '#e6ffe6', 
        padding: '20px', 
        borderRadius: '10px',
        marginTop: '20px'
      }}>
        <h2>✅ Answer to Your Questions</h2>
        <ol>
          <li><strong>What triggers the page to load?</strong><br/>
            The URL path automatically triggers it. Next.js matches URL to folder structure.
          </li>
          <br/>
          <li><strong>Can one layout have several pages?</strong><br/>
            YES! That&apos;s the whole point! One layout.tsx wraps ALL pages in that folder and subfolders.
          </li>
          <br/>
          <li><strong>How do you indicate which page to load?</strong><br/>
            You DON&apos;T! The folder structure IS the indication. <code>/about</code> = <code>app/about/page.tsx</code>
          </li>
          <br/>
          <li><strong>What is telling it?</strong><br/>
            The Next.js router! It reads the URL, finds the matching page.tsx file, and passes it as <code>children</code> to layout.tsx
          </li>
        </ol>
      </div>
    </div>
  );
}