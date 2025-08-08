import "./App.css";
import Header from "./components/Header/Header";
import Introduction from "./components/Intoduction/Introduction";
import Ilya from "./components/Friends/Ilya/Ilya";
import Misha from "./components/Friends/Misha/Misha";
import Ivan from "./components/Friends/Ivan/Ivan";

export default function App() {
  return (
    <>
      <Header />
      <Introduction />
      <Ilya />
      <Misha />
      <Ivan />
    </>
  );
}
