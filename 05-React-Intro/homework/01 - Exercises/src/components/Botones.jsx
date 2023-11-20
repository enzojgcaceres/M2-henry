import React, {Component} from 'react';

class Botones extends Component {
    render(){
        const { alerts } = this.props


        return(
            <div>
                <button onClick={() => alert('Aprobado')}>Módulo 1</button>
                <button onClick={() => alert('En curso') }>Módulo 2</button>
            </div>
        );
    }
}

export default Botones