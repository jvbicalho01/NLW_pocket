import {
  Dialog
} from "./components/ui/Dialog";
import { CreateGoal } from "./components/CreateGoal";
import { EmptyGoals } from "./components/EmptyGoals";
import { WeeklySummary } from "./components/WeeklySummary";

export function App() {
  return (
    <Dialog>
      {/* <EmptyGoals /> */}

      <WeeklySummary />

      <CreateGoal />
    </Dialog>
  );
}
