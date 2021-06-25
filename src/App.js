import React, { lazy, Suspense } from "react";
import Navbar from "./components/nav/navbar";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import "./App.css";
const Heading = lazy(() => import("./pages/home/heading"));
const Projects = lazy(() => import("./pages/projects/projects"));
const Contact = lazy(() => import("./pages/contact/contact"));

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin-left: 170px;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <div className="app">
      <Navbar />
      <PageContainer>
        <Switch>
          <Suspense fallback="Loading...">
            <Route exact path="/" render={() => <Heading />} />
            <Route path="/projects" render={() => <Projects />} />
            <Route path="/contact" render={() => <Contact />} />
          </Suspense>
        </Switch>
      </PageContainer>
    </div>
  );
}

export default App;
