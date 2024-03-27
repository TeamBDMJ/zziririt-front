import Accordion from '../../components/features/support/Accordion';

export default function Support() {
  return (
    <div className="flex justify-center min-h-[720px]">
      <div className="min-w-[70%]">
        <h1 className="font-bold text-4xl m-10">고객지원 - FAQ</h1>
        <Accordion title={'1. 질문'} content={'1. 답'} />
        <Accordion title={'2. 질문'} content={'2. 답'} />
        <Accordion title={'3. 질문'} content={'3. 답'} />
        <Accordion title={'4. 질문'} content={'4. 답'} />
      </div>
    </div>
  );
}
