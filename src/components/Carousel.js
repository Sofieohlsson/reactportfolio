import React from 'react'; 
import Row from 'react-bootstrap/Row'; 

import Card from '../components/Card'; 

import devgrub from '../assets/images/devgrub.jpg'; 
import youtube from '../assets/images/youtube.jpg'; 
import evverest from '../assets/images/evverest.jpg'; 
import Container from 'react-bootstrap/Container';

class Carousel extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {
            items: [
                {
                    id: 0, 
                    title: 'Travel', 
                    subTitle: 'Hike, sun or city trip?', 
                    imgSrc: devgrub,
                    link: 'https://www.airbnb.com/', 
                    selected: false 
                },
                {
                    id: 1, 
                    title: 'Nature', 
                    subTitle: 'Take me on an adventure', 
                    imgSrc: youtube, 
                    link: 'https://www.thrillist.com/travel/nation/the-most-beautiful-forests-in-the-world',
                    selected: false
                },
                {
                    id: 2, 
                    title: 'Squirrel', 
                    subTitle: 'Want to see more squirrels?', 
                    imgSrc: evverest, 
                    link: 'https://www.google.com/search?q=squirrel&sxsrf=ACYBGNRqchKVGz3r3cdjkKs3mJBsonMmAw:1570518816211&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjA15zBjozlAhUpi8MKHdmBCpoQ_AUIEigB&biw=1440&bih=729',
                    selected: false
                }
            ]

        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items]; 

        items[id].selected = items[id].selected ? false : true; 

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false; 
            }
        });

        this.setState({
            items
        }); 
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }

}

export default Carousel; 