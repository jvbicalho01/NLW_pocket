import { Dialog } from "./components/ui/Dialog";
import { CreateGoal } from "./components/CreateGoal";
import { EmptyGoals } from "./components/EmptyGoals";
import { WeeklySummary } from "./components/WeeklySummary";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getSummary } from "./http/get-summary";

export function App() {
  const { data } = useQuery({
    queryKey: ["summary"],
    queryFn: getSummary,
    staleTime: 1000 * 60, // 60 seconds
  });

  return (
    <Dialog>
      {data?.total && data?.total > 0 ? <WeeklySummary /> : <EmptyGoals />}

      <CreateGoal />
    </Dialog>
  );
}
