import './App.css';
import HeaderCOmponent from './components/header';
import ChatModal from './pages/chatModal';
import Home from './pages/home';
import Bot from './contextApi/chatBotContext';

function App() {
  return (
    <div className="App">
      <HeaderCOmponent />
      <Home />
      <Bot>
      <ChatModal />
      </Bot>
      
     
    </div>
  );
}

export default App;
