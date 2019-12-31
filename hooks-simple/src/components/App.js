import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

//                          ------------- Refactoring this app Component into a Functional Component
// class App extends React.Component {
//   state = { resouce: 'posts' };
//   render() {
//     return (
//       <div className='ui container'>
//         <div>
//           <button
//             onClick={() => this.setState({ resouce: 'posts' })}
//             className='ui button primary '>
//             Posts
//           </button>
//           <button
//             onClick={() => this.setState({ resouce: 'todos' })}
//             className='ui button primary '>
//             Todos
//           </button>
//         </div>
//         {this.state.resouce}
//       </div>
//     );
//   }
// }

// export default App;
//---------------------------------------------

//------------------------ Starting refactoring

const App = () => {
  const [resource, setResource] = useState('posts');
  return (
    <div className='ui container'>
      <UserList />
      <div>
        <button
          onClick={() => setResource('posts')}
          className='ui button primary '>
          Posts
        </button>
        <button
          onClick={() => setResource('todos')}
          className='ui button primary '>
          Todos
        </button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
