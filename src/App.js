import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import ContentPageWrapper from "./components/content-page-wrapper/ContentPageWrapper";
import Footer from "./components/footer/Footer";
import CanvasBackground from "./components/canvas-background/CanvasBackground";

function App() {
  return (
    <div id={"app"}>
        <Header />
        <ContentPageWrapper />
        <CanvasBackground />
        <Footer />
    </div>
  );
}

export default App;
