import SphereMap from './SphereMap';
function App() {
  const coords = [
  ]
  for(let i = 0; i < 100; i++){
    let r= Math.random()*2-1
    coords.push([
      r,r,r
    ])
  }
  for(let i = 0; i < 100; i++){
    coords.push([
      Math.random()*2-1,
      Math.random()*2-1,
      Math.random()*2-1
    ])
  }
  return (
    <div className="App">
      <div style={{width: '80vmin',height: '80vmin'}}>
        <SphereMap coords={coords}/>
      </div>
    </div>
  );
}

export default App;
