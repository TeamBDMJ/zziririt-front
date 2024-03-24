import PingPong from './PingPong';
import Ad from './common/rightSideBar/Ad';

export default function AsideRight() {
  return (
    <aside className="col-span-2">
      <div className="sticky top-4 space-y-4">
        <PingPong />
        <div className="bg-[#1a1a1a] p-4 rounded">
          <div className="mt-2 space-y-2">
            <div className="flex items-center justify-between bg-[#2d2d2d] p-2 rounded">
              <div className="pl-3">
                <h2 className="text-white text-2xl">인기 검색어 순위</h2>
              </div>
            </div>
            <div className="text-white">
              <div className="m-4 text-2xl">1. 박미소 짱!</div>
              <div className="m-4 text-2xl">2. 치치</div>
              <div className="m-4 text-2xl">3. 두주</div>
              <div className="m-4 text-2xl">4. 찌리릿!</div>
              <div className="m-4 text-2xl">5. 요즘 게임</div>
            </div>
          </div>
        </div>
        <Ad />
      </div>
    </aside>
  );
}
