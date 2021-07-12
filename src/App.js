
import Booklist from './components/BookList'
import NavBar from './components/NavBar'
import ThemContextProvider from './components/ThemeContext'
import ThemeToggle from './components/ThemeToggle'
import Hooks from './components/Hooks'
function App() {
  return (
    <div className="App">
    <ThemContextProvider>
      <NavBar/>
      <Booklist/>
      <ThemeToggle />
    </ThemContextProvider>
    {/* <Hooks/> */}
    </div>
  );
}

export default App;
