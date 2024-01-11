// Import the necessary modules from Glimmer
import Component from '@glimmer/component';

// Define the Glimmer component
export default class TaskListItemComponent extends Component {
  // Constructor for initializing the component
  constructor() {
    // Make sure to call the super constructor
    super(...arguments);
    console.log(this.args);
    // Access the arguments passed to the component
    this.subject = this.args.subject;
    this.description = this.args.description;
    console.log(this.args.createdAt);
    this.createdAt = new Date(this.args.createdAt).toLocaleString();
    console.log(this.createdAt);
  }
}
