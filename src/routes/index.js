import React from 'react';
import { Switch,Route } from 'react-router-dom';
import WorkSchedule from './work-schedule/WorkSchedule';
const Routes = () => {
    return (
      <Switch>
        <Route exact path="/График работы">
         <WorkSchedule/>
        </Route>
      </Switch>
    );
}

export default Routes;
