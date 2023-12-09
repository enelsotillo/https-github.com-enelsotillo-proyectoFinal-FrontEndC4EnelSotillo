// or less ideally
import { Card } from 'react-bootstrap';
import MyNavbar from './../components/NnavBar.jsx';

const DefaulLayout = (props) => {
    const children = props.children;
    return (
        <>
            <MyNavbar />

            <div style={ { padding: 20 }}>
                <Card>
                    { children }
                </Card>
            </div>
        </>
    );
}

export default DefaulLayout;
