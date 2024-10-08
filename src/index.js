import React from 'react';
import ReactDOM from 'react-dom/client';
import '@atlaskit/css-reset';
import { DragDropContext } from '@hello-pangea/dnd';
import Column from './column';
import initialData from './initial-data';

class App extends React.Component {
  state = initialData;

  onDragEnd = result => {
    // TODO: reorder our column
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.columnOrder.map(columnId => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </DragDropContext>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
