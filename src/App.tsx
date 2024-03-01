import "./App.css";
import { lighten, Select, useMantineTheme } from "@mantine/core";

export default function App() {
  const theme = useMantineTheme();

  return (
    <div className="app">
      <h1>ss</h1>
      <Select
        label={"Select your favorite framework"}
        placeholder="Pick one"
        data={[
          { value: "react", label: "React" },
          { value: "angular", label: "Angular" },
          { value: "vue", label: "Vue" },
        ]}
      />
    </div>
  );
}
