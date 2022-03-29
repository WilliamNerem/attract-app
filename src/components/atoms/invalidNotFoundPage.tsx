import React from 'react';
import { Link } from 'react-router-dom';
class NotFoundPage extends React.Component{
    render(){
        return <div>
            <h2 style={{textAlign:"center"}}>
                En feil oppsto! Klikk <Link to="/">her</Link> for å gå tilbake til forsiden
            </h2>
        </div>;
    }
}
export default NotFoundPage;