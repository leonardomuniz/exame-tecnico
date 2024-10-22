export function BoxShadowTest() {
  return (
    <div style={{
      width: '200px',
      height: '100px',
      backgroundColor: '#fff',
      boxShadow: '-1px 4px 13px -1px rgba(0, 0, 0, 0.75)',
      margin: '20px auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      Teste Box Shadow
    </div>
  );
}
