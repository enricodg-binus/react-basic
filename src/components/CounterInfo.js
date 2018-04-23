import React from 'react';
/*stateless*/
const CounterInfo = (props) => {
    return (
        <div>
            <h1>
                {props.counter}
            </h1>
        </div>
    );
}

// class CounterInfo extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>
//                     {this.props.counter}
//                 </h1>
//             </div>
//         );
//     }
// }

export default CounterInfo;