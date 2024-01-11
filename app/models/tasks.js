import Model, { attr } from '@ember-data/model';

export default class TasksModel extends Model {
  @attr('string') subject;
  @attr('string') description;
  @attr('string') created_at;
}
