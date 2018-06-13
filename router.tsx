/**
 *    _____ __
 *   / ___// /_  _____
 *   \__ \/ / / / / _ \
 *  ___/ / / /_/ /  __/
 * /____/_/\__, /\___/
 *       /____/
 *       Copyright 2018 Parsa Ghadimi. All Rights Reserved.
 *       Licence: MIT License
 */

import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import { Editor } from "./editor";
import { IndexPage } from "./index";
import { PlayerPage } from "./player";

export class Router extends Component<{}, {}> {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" component={ IndexPage } s={ 2 } exact />
          <Route path="/editor/:id" component={ Editor } exact />
          <Route path="/player/:id" component={ PlayerPage } exact />
        </Switch>
      </HashRouter>
    );
  }
}