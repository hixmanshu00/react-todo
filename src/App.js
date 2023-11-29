import { TodoProvider } from "./context/TodoContext";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";
import Home from "./pages/Home";
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <main>
      <TodoProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addTask" element={<AddTask />} />
        <Route path="/editTask/:id" element={<EditTask />} />
      </Routes>
      </TodoProvider>
    </main>
  );
}

export default App;
