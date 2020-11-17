import React from 'react';

import './app.css';
import 'antd/dist/antd.css';
import {Layout} from "antd";

import ListOfFilms from "../list-of-films/list-of-films";

const {Content} = Layout

const App = () => {
  return (
      <Layout>
        <Content className="site-layout">
            <ListOfFilms/>
        </Content>
      </Layout>

  );
}

export default App;