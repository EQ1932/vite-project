
import { useState } from "react";
import "./App.css";
import { Button } from "antd";
import { Input } from "antd";
import { Space } from "antd";

function App() {
  const [count, setCount] = useState(0);
  const [bt, setBT] = useState("点击按钮次数加1");
  const [newTitle, setNewTitle] = useState("");
  return (
    <>
      <h1>{bt}</h1>
      <div className="card">
        <Button
          color="primary"
          variant="solid"
          onClick={() => setCount((count) => count + 1)}
        >
          你按了 {count} 次按钮
        </Button>
      </div>

      <Space.Compact style={{ width: "100%" }}>
        <Input
          placeholder="改标题"
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <Button
          color="primary"
          variant="solid"
          onClick={() => setBT((bt) => newTitle)}
        >
          提交
        </Button>
      </Space.Compact>
    </>
  );
}

export default App;