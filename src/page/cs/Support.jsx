import Accordion from '../../components/features/support/Accordion';

export default function Support() {
  return (
    <support>
      <h1>고객지원 - FAQ</h1>
      <Accordion title={'1. 질문'} content={'1. 답'} />
      <Accordion title={'2. 질문'} content={'2. 답'} />
      <Accordion title={'3. 질문'} content={'3. 답'} />
      <Accordion title={'4. 질문'} content={'4. 답'} />
    </support>
  );
}
