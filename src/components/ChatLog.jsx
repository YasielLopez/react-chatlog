import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({ entries, onToggleLike }) => {
  return (
    <section className="chat-log">
      {entries.map(entry => (
        <ChatEntry
          key={entry.id}
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          onToggleLike={onToggleLike}
        />
      ))}
    </section>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
  onToggleLike: PropTypes.func.isRequired,
};

export default ChatLog;