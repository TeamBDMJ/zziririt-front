export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] p-4">
      <div className="container mx-auto text-white grid place-items-center">
        <span className={'grid place-items-center'}>
          <span>© 2024 찌리릿</span>
          <div>
            <a href="/docs/policy.html" target="_blank">
              이용약관
            </a>
            <span> | </span>
            <a href="/docs/privacy.html" target="_blank">
              개인정보처리방침
            </a>
            <span> | </span>
            <a href="/support">고객센터</a>
          </div>
          <span>찌리릿은 치지직에서 운영하는 사이트가 아닙니다.</span>
        </span>
      </div>
    </footer>
  );
}
