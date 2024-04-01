import PingPong from '../components/PingPong';

function HealthCheck() {
  const url = process.env.REACT_APP_API_URL;
  return (
    <div className="flex justify-center">
      <div>{url}</div>
      <div>v1.0.0</div>
      <div>2024-04-01 12:00</div>
      <PingPong />
    </div>
  );
}

export default HealthCheck;
