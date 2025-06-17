import './App.css';
import ChatLog from './components/ChatLog';
import messagesData from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [messages, setMessages] = useState(messagesData);

  const toggleLike = (messageId) => {
    setMessages(prevMessages =>
      prevMessages.map(message =>
        message.id === messageId
          ? { ...message, liked: !message.liked }
          : message
      )
    );
  };

  const getTotalLikes = () => {
    return messages.filter(message => message.liked).length;
  };

  const totalLikes = getTotalLikes();

  return (
    <div id="App">
      <header>
        <h1>Ada Chat Log</h1>
        <section>
          <span className="widget">
            {totalLikes} ❤️s
          </span>
        </section>
      </header>
      <main>
        <ChatLog 
          entries={messages} 
          onToggleLike={toggleLike}
        />
      </main>
    </div>
  );
};

export default App;