import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchLeaderboard } from "@/redux/slices/leaderboardSlice";
import { Leaderboard } from "./Leaderboard";
import { TLeaderboard } from "@/types";

export const LeaderboardContainer = () => {
  const dispatch = useAppDispatch();
  const [period, setPeriod] = useState<"24h" | "7d" | "30d" | "all">("all");
  const [sortBy, setSortBy] = useState<"xp" | "points">("xp");
  const [sortedLeaderboard, setSortedLeaderboard] = useState<TLeaderboard[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const { leaderboard, status, error } = useAppSelector((state) => state.leaderboard);

  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(fetchLeaderboard({ period, sortBy }));
  }, [dispatch, period, sortBy]);
  useEffect(() => {
    setSortedLeaderboard([...leaderboard].sort((a, b) => 
      sortBy === "xp" ? b.overallScore - a.overallScore : b.points - a.points
    ));
  }, [leaderboard, sortBy]);

  return <Leaderboard
    leaderboard={sortedLeaderboard}
    status={status}
    error={error}
    page={page}
    setPage={setPage}
    period={period}
    setPeriod={setPeriod}
    sortBy={sortBy}
    setSortBy={setSortBy}
    isOpen={isOpen}
    setIsOpen={setIsOpen}
  />;
};
