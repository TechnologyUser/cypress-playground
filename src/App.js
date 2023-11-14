import logo from './logo.svg';
import './App.css';
import { SSMClient, GetParameterCommand } from "@aws-sdk/client-ssm";
import { useEffect, useState } from 'react';

const creds = {
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
};

const client = new SSMClient({
  region: process.env.REACT_APP_REGION,
  credentials: creds,
});

function App() {
  const [parameter, setParameter] = useState("");
  useEffect(() => {
    client.send(new GetParameterCommand({
      Name: "sample-parameter",
      WithDecryption: true || false,
    })).then((res) => setParameter(res.Parameter.Value));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          SSM parameter here
        </p>
        <h3 id="parameter">{parameter}</h3>
      </header>
    </div>
  );
}

export default App;
