import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import BackgroundImage from './backgroundImage';
import "./main.scss";
import TitleBackgroundColor from './title-backgroundColor';
import Quote from './quote';
import Image from './image';
import ListMenu from './listMenu';
import Form from './form';
import Footer from './footer';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
       <BackgroundImage sourceImage="https://www.w3schools.com/w3images/coffeehouse.jpg">
            <h1 className='title'>The Cafe</h1>
            <TitleBackgroundColor text="Open from 6am to 5pm" position='absolute' size="14px" bottom="10px" left="10px" backgroundColor='#000' padding="0.3rem"></TitleBackgroundColor>
            <TitleBackgroundColor text="15 Adr street, 5015" position='absolute' size="14px" bottom="10px" right="10px" padding="0.3rem"></TitleBackgroundColor>
       </BackgroundImage>
       <div className="content">
            <TitleBackgroundColor text="ABOUT THE CAFE" size="20px" backgroundColor='#000' padding="0.3rem" letterSpacing='3px'></TitleBackgroundColor>
            <p className="contant__text">The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>In addition to our full espresso and brew bar menu, we serve fresh made-to-order breakfast and lunch sandwiches, as well as a selection of sides and salads and other good stuff.</p>
            <Quote text='"Use products from nature for what it`s worth - but never too early, nor too late." Fresh is the new sweet.' author='Chef, Coffeeist and Owner: Liam Brown'></Quote>
            <Image sourceImage='https://www.w3schools.com/w3images/coffeeshop.jpg'>
                <div className="image__description">
                    <p><strong>Opening hours:</strong> everyday from 6am to 5pm.</p>
                    <p><strong>Address:</strong> 15 Adr street, 5015, NY</p>
                </div>
            </Image>
            <TitleBackgroundColor text="THE MENU" size="20px" backgroundColor='#000' padding="0.3rem" letterSpacing='3px' margin="4rem 0rem 1rem 0rem"></TitleBackgroundColor>
            <ListMenu></ListMenu>
            <Image sourceImage='https://www.w3schools.com/w3images/coffeehouse2.jpg' margin="3rem 0rem 0rem 0rem"></Image>
            <TitleBackgroundColor text="WHERE TO FIND US" size="20px" backgroundColor='#000' padding="0.3rem" letterSpacing='3px' margin="4rem 0rem 1rem 0rem"></TitleBackgroundColor>
            <p>Find us at some address at some place.</p>
            <Image sourceImage='https://www.w3schools.com/w3images/map.jpg'></Image>
            <span><TitleBackgroundColor text="FLY!" display='inline-block' size="17px" backgroundColor='#000' padding="0.3rem" letterSpacing='3px' ></TitleBackgroundColor> We 
                offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy  
                the biggerst criteria of them all, both look and taste.
            </span>  
            <p><strong>Reserve</strong> a table, ask for today's special or just send us a message:</p>
            <Form></Form>
            <Footer></Footer>
       </div>
    </StrictMode>,
);
