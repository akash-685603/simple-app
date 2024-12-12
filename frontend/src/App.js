import azureDevopsImage from './images/azure-devops.webp';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the frontend of my React app!</h1>
      <div>
        <h2>Azure DevOps Image</h2>
        <img src={azureDevopsImage} alt="Azure DevOps" />
      </div>
    </div>
  );
}

export default App;

