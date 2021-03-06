/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Students from 'containers/Students/Loadable';
import Header from 'components/Header';
import StudentDetail from 'containers/StudentDetail/Loadable';
// import Student from '../Student/Student';
import Class from '../Class/Class';
import Subject from '../Subject/Subject';

import GlobalStyle from '../../global-styles';
import Sidebar from '../../components/Sidebar/Sidebar';

const AppWrapper = styled.div`
  overflow-x: hidden;
  box-sizing: border-box;
  background-color: #f4ffef;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>

      <Header />
      <Sidebar />

      <Switch>
        {/* <Route path="/students" component={Students} /> */}
        <Route path="/student/:id" component={StudentDetail} />
        <Route exact path="/" component={Students} />
        <Route path="/classes" component={Class} />
        <Route path="/subjects" component={Subject} />
        <Route path="/homepage" component={HomePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      {/* <Footer /> */}
      <GlobalStyle />
    </AppWrapper>
  );
}
