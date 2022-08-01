import Search from "./components/Search";
import Stories from "./components/Stories";
import Pagination from "./components/Pagination";

function App() {
  return (
    <div className="max-w-md mx-auto space-y-5 py-10">
      {/* <h1 className="text-3xl text-center font-semibold p-10">
        Users Data Fetching by axios
      </h1> */}
      <Search />
      <Pagination />
      <Stories />
    </div>
  );
}

export default App;
