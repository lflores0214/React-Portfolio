import React, { lazy, Suspense } from "react";
import Navbar from "./components/nav/navbar";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import "./App.css";
const Heading = lazy(() => import("./pages/home/heading"));
const Projects = lazy(() => import("./pages/projects/projects"));

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin-left: 170px;
  justify-content: center;
  align-items: center;
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
          </Suspense>
        </Switch>
      </PageContainer>
    </div>
  );
}

export default App;
