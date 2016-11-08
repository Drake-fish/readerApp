import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import Document from './Components/Document';
import store from './store';
const container= document.getElementById('container');

const Router = Backbone.Router.extend({
    routes: {
        '': 'home'
    },
    home() {
      ReactDom.render(<Document docs={store}/>, container);
    }
})
export default new Router();
