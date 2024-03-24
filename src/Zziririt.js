import './App.css';
import OldBoard from './components/OldBoard';

export default function Zziririt({ data }) {
  return (
    <OldBoard data={data} /> //{/* data를 Main에 props로 전달 */}
  );
}
