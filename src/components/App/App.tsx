//@flow
import React from "react";
import { connect } from "react-redux";
import * as AC from "src/actions";
import style from "./styleApp.scss";
import { RootState } from "src/reducers/root";


type TStateProps = { counter: number };
type TDispatchProps = { onClick: React.ReactEventHandler };
type Props = TStateProps & TDispatchProps;

const App: React.FC<Props> = props => (
  <div>
    <div className={style.text}>{props.counter}</div>
    <div className={style.button} onClick={props.onClick}>
      Click
    </div>
  </div>
);

const AppConnected = connect<TStateProps, TDispatchProps, {}, RootState>(
  ({ counter }) => ({ counter, hello: 5 }),
  dispatch => ({
    onClick(e: React.MouseEvent) {
      dispatch({ type: AC.INCREMENT });
    }
  })
)(App);

export default AppConnected;
