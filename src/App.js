import EngagementMessagesOverTime from "./components/EngamentMessageOverTime";
import { channels, messageCountList } from "./data";

function App() {
  return (
    <div className="App">
      <EngagementMessagesOverTime
        channels={channels}
        messageCountList={messageCountList}
      />
    </div>
  );
}

export default App;
