import type { FC } from "hono/jsx";
import type { MatchIndexRecord } from "../../match-index";
import {
  formatRelativeTime,
  gotvUrl,
  playcastCommand,
} from "../format";

type Props = {
  origin: string;
  indexEnabled: boolean;
  matches: MatchIndexRecord[];
};

export const DashboardMatchSection: FC<Props> = ({
  origin,
  indexEnabled,
  matches,
}) => {
  const hasRows = matches.length > 0;

  return (
    <p>
    </p>
  );
};
