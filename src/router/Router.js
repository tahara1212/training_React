import { BrowserRouter, Route } from "react-router-dom"
import { Top } from "../components/pages/Top"
import { Users } from "../components/pages/Users"
import { DefaultLayout } from "../components/templates/DefaultLayout"
import { HeaderOnly } from "../components/templates/HeaderOnly"

export const Router = () => {


       return (
              <BrowserRouter>
                     <switch>
                            <Route exact path="/">
                                   <DefaultLayout>
                                          <Top />
                                   </DefaultLayout>
                            </Route>
                            <Route exact path="/users">
                                   <HeaderOnly>
                                          <Users />
                                   </HeaderOnly>
                            </Route>
                     </switch>
              </BrowserRouter>
       )
}