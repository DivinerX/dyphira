import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchLeaderboard } from "@/redux/slices/leaderboardSlice";
import { Leaderboard } from "./Leaderboard";

export const LeaderboardContainer = () => {
  const dispatch = useAppDispatch();
  const { leaderboard, status, error } = useAppSelector((state) => state.leaderboard);

  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(fetchLeaderboard());
  }, [dispatch]);

  return <Leaderboard leaderboard={leaderboard} status={status} error={error} page={page} setPage={setPage} />;
};
