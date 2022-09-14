import React, { DragEvent } from "react";

import { List, Paper } from "@mui/material";

import { EntriesContext } from "../../context/entries";
import { UIContext } from "../../context/ui/UIContext";
import { EntryStatus } from "../../interfaces";

import { EntryCard } from "./EntryCard";

interface Props {
  status: EntryStatus;
}

export const EntryList: React.FC<Props> = ({ status }) => {
  const { entries, updateEntry } = React.useContext(EntriesContext);
  const { isDragging, endDragging } = React.useContext(UIContext);

  const entriesByStatus = React.useMemo(() => entries.filter((entry) => entry.status === status), [entries]);

  const onDropEntry = (e: DragEvent<HTMLDivElement>) => {
    const id = e.dataTransfer.getData("text");
    const entry = entries.find((entry) => entry._id === id)!;
    entry.status = status;
    updateEntry(entry);
    endDragging();
  };

  const allowDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div onDrop={onDropEntry} onDragOver={allowDrop}>
      <Paper
        sx={{ height: "calc(100vh - 180px)", overflow: "scroll", backgroundColor: "transparent", padding: "3px 5px" }}
      >
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: "all .3s " }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
