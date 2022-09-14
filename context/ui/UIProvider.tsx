import React from "react";

import { UIContext, uiReducer } from "./";

interface Props {
  children: React.ReactNode;
}

export interface UIState {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
};

export const UIProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(uiReducer, UI_INITIAL_STATE);

  const setIsAddingEntry = (isAddingEntry: boolean) => {
    dispatch({ type: "UI - AddingEntry", payload: isAddingEntry });
  };

  const openSideMenu = () => {
    dispatch({ type: "UI - OpenSidebar" });
  };

  const closeSideMenu = () => {
    dispatch({ type: "UI - CloseSidebar" });
  };

  const startDragging = () => {
    dispatch({ type: "UI - Start Dragging" });
  };

  const endDragging = () => {
    dispatch({ type: "UI - End Dragging" });
  };

  return (
    <UIContext.Provider value={{ ...state, openSideMenu, closeSideMenu, setIsAddingEntry, startDragging, endDragging }}>
      {children}
    </UIContext.Provider>
  );
};
