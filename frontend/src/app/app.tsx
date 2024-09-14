import { Button } from "@/components/ui/button";
import { Axe } from "lucide-react";

function App() {
  return (
    <main className="">
      <p>Party time foos</p>
      <div>
        <Button>
          <Axe />
          <div className="p-2">Hello</div>
        </Button>
      </div>
    </main>
  );
}

export default App;
