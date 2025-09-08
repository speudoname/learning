import Link from 'next/link';

export default function Navigation() {
  return (
    <nav style={{ 
      backgroundColor: 'gold', 
      padding: '15px',
      marginBottom: '20px',
      borderRadius: '10px'
    }}>
      <h3>🧭 Navigation (Click to see how {`{children}`} changes!)</h3>
      <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
        <Link href="/" style={{ 
          padding: '8px 15px', 
          backgroundColor: 'white', 
          borderRadius: '5px',
          textDecoration: 'none',
          border: '2px solid black'
        }}>
          🏠 Home (/)
        </Link>
        <Link href="/about" style={{ 
          padding: '8px 15px', 
          backgroundColor: 'white', 
          borderRadius: '5px',
          textDecoration: 'none',
          border: '2px solid black'
        }}>
          📖 About (/about)
        </Link>
        <Link href="/blog" style={{ 
          padding: '8px 15px', 
          backgroundColor: 'white', 
          borderRadius: '5px',
          textDecoration: 'none',
          border: '2px solid black'
        }}>
          📝 Blog (/blog)
        </Link>
        <Link href="/contact" style={{ 
          padding: '8px 15px', 
          backgroundColor: 'white', 
          borderRadius: '5px',
          textDecoration: 'none',
          border: '2px solid black'
        }}>
          📞 Contact (/contact)
        </Link>
        <Link href="/how-it-works" style={{ 
          padding: '8px 15px', 
          backgroundColor: 'yellow', 
          borderRadius: '5px',
          textDecoration: 'none',
          border: '2px solid red',
          fontWeight: 'bold'
        }}>
          🔍 HOW IT WORKS
        </Link>
      </div>
    </nav>
  );
}