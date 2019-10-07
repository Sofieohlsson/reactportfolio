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
                    title: 'Dev Grub', 
                    subTitle: 'The cookbook for developers', 
                    imgSrc: devgrub,
                    link: 'https://devgrub.com', 
                    selected: false 
                },
                {
                    id: 1, 
                    title: 'Garrett Love', 
                    subTitle: 'YouTube channel', 
                    imgSrc: youtube, 
                    link: 'https://youtube.com',
                    selected: false
                },
                {
                    id: 2, 
                    title: 'Evverest', 
                    subTitle: 'A social network for developers', 
                    imgSrc: evverest, 
                    link: 'https://github.com',
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