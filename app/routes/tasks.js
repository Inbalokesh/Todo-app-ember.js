import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TasksRoute extends Route {
  @service store;

  model() {
    let data = this.store.findAll('tasks');
    console.log(data);
    return data;
  }
}
