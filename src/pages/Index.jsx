import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="text-center">
        <h1 className="text-3xl mb-4">Welcome to Your Bare-Bones App</h1>
        <p className="mb-6">
          This is a minimal web application. Click the button below to start customizing your app.
        </p>
        <Button onClick={() => navigate("/customize")}>Start Customizing</Button>
      </div>
    </main>
  );
}

export default Index;