import React from "react";

import { Entry } from "../../interfaces";

interface ContextProps {
  entries: Entry[];

  addNewEntry: (description: string) => void;
  updateEntry: (entry: Entry, showSnackbar?: boolean) => void;
  deleteEntry: (entry: Entry) => void;
}

export const EntriesContext = React.createContext({} as ContextProps);
