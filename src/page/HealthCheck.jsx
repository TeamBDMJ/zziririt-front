import PingPong from '../components/PingPong';

function HealthCheck() {
  const url = process.env.REACT_APP_API_URL;
  return (
    <div className="flex justify-center">
      <div>{url}</div>
      <PingPong />
    </div>
  );
}

export default HealthCheck;
