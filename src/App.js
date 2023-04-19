import CreateRow from './components/CreateRow';
import ContentWrapper from './components/ContentWrapper';
import Table from './components/Table/Table';
import SortSelect from './components/SortSelect';
function App() {
  return (
    <ContentWrapper>
      <CreateRow/>
      <SortSelect/>
      <Table/>
    </ContentWrapper>
  );
}

export default App;
