import PingPong from '../components/PingPong';

function HealthCheck() {
  const url = process.env.REACT_APP_API_URL;
  return (
    <support>
      <h1>{url}</h1>
      <PingPong />
    </support>
  );
}

export default HealthCheck;
