import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import Document from './Components/Document';
import store from './store';
import Nav from './Components/nav';
const container= document.getElementById('container');
const nav=document.getElementById('nav');
const Router = Backbone.Router.extend({
    routes: {
      ''         : 'home',
        'doc/:id': 'docs'
    },
    home(){
      ReactDom.render(<Nav documents={store}/>, nav);
    },
    docs(id) {
      ReactDom.render(<Document documents={store[id]}/>, container);
    }
})
export default new Router();
