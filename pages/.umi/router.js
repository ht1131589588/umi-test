import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import { routerRedux } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    exact: true,
    component: require('../index.js').default,
    redirect: './goods',
  },
  {
    path: '/',
    component: require('../../layouts/index.js').default,
    routes: [
      {
        path: '/404',
        exact: true,
        component: require('../404.js').default,
      },
      {
        path: '/detail',
        exact: true,
        component: require('../detail.js').default,
        title: '用户中心',
        Routes: [require('../../routes/PrivateRoute.js').default],
      },
      {
        path: '/goods',
        exact: true,
        component: require('../goods.js').default,
        title: '商品中心',
        Routes: [require('../../routes/PrivateRoute.js').default],
      },
      {
        path: '/login',
        exact: true,
        component: require('../login.js').default,
      },
      {
        path: '/users',
        exact: true,
        component: require('../users.js').default,
      },
      {
        path: '/books',
        exact: false,
        component: require('../books/_layout.js').default,
        routes: [
          {
            path: '/books',
            exact: true,
            component: require('../books/index.js').default,
          },
          {
            path: '/books/:id',
            exact: true,
            component: require('../books/$id.js').default,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/hutao/Desktop/my/github/umi-app/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'pages', hasRoutesInConfig: false },
              ),
          },
        ],
      },
      {
        component: () =>
          React.createElement(
            require('/Users/hutao/Desktop/my/github/umi-app/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'pages', hasRoutesInConfig: false },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('/Users/hutao/Desktop/my/github/umi-app/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'pages', hasRoutesInConfig: false },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen = () => {};

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    routeChangeHandler(history.location);
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
