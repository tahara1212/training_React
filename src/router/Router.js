import { Switch, Route } from "react-router";
import { Home } from "../Home";
import { Page1Routes } from "./Page1Routes";
import { Page2Routes } from "./Page2Routes";

export const Router = () => {
    return (
        <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/page1" render={({match: {url}}) => (
                        <Switch>
                            {Page1Routes.map((route) => (
                                <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
                                    {route.children}
                                </Route>
                            ))}
                        </Switch>
                    )}
                />
                <Route path="/page2" render={({match: {url}}) => (
                        <Switch>
                            {Page2Routes.map((route) => (
                                <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
                                    {route.children}
                                </Route>
                            ))}
                        </Switch>
                    )}
                />
            </Switch>
    )
}