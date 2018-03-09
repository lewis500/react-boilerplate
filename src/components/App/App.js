//@flow
import React from "react";
import { connect } from "react-redux";
import * as AC from "src/actionNames";
import style from "./styleApp.scss";
import type { State } from "src/types/State";
import type { Dispatch } from "src/types/Dispatch";

export default connect(
  ({ counter }: State) => ({ counter }),
  (dispatch: Dispatch) => ({
    onClick() {
      dispatch({ type: AC.INCREMENT });
    }
  })
)(({ counter, onClick }) => {
  return (
    <div>
      <div className={style.text}>{counter}</div>
      <div className={style.button} onClick={onClick}>
        Click
      </div>
    </div>
  );
});
