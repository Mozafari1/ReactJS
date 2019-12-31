import React from 'react';
import useResources from './useResources';
//              -----------------------------  Refactoring Class based component to Functional component

// class ResourceList extends React.Component {
//   state = {
//     resources: []
//   };
//   async componentDidMount() {
//     const response = await axios.get(
//       `https://jsonplaceholder.typicode.com/${this.props.resource}`
//     );
//     this.setState({ resources: response.data });
//   }
//   async componentDidUpdate(prevProps) {
//     if (prevProps.resource !== this.props.resource) {
//       const response = await axios.get(
//         `https://jsonplaceholder.typicode.com/${this.props.resource}`
//       );
//       this.setState({ resources: response.data });
//     }
//   }
//   render() {
//     return <div>{this.state.resources.length}</div>;
//   }
// }
//-------------------------------------------- Starting Refactoring

const ResourceList = ({ resource }) => {
  //   const fetchResource = async (resource) => {
  //     const response = await axios.get(
  //       `https://jsonplaceholder.typicode.com/${resource}`
  //     );
  //     setResources(response.data);
  //   };

  //   useEffect(() => {
  //     fetchResource(resource);
  //   }, [resource]);
  //   return <div>{resources.length}</div>;

  const resources = useResources(resource);
  return (
    <ul>
      {resources.map((record) => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};
export default ResourceList;
