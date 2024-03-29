import EmberRouter from '@ember/routing/router';
import config from 'library-ui/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('author');
  this.route('tasks');
  this.route('create');
  this.route('edit');
});
