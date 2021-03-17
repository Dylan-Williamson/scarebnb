import React from 'react';
import '../Home.css';
import Banner from '../components/Banner';
import Card from '../components/Card'

const Home = () => {
    return (
        <div className="home">
            <Banner />

            <div className="home__section">
                <Card
                    src="https://ogden_images.s3.amazonaws.com/www.ljworld.com/images/2009/10/22142629/boyle_haunted001.jpg"
                    title="Group Experiences"
                    description="Spine chilling memories to be made with others."
                />
                <Card
                    src="https://windowseat.ph/wp-content/uploads/2017/10/bucket_bates.jpg"
                    title="Famous Frights"
                    description="Spaces infamously known for hosting the biggest ghouls in the game."
                />
                <Card
                    src="https://i.pinimg.com/736x/b3/a9/71/b3a971618a1e2eb0e2ebe9de5ed633a9.jpg"
                    title="Entire Homes"
                    description="Private hauntings with enough room for the whole family."
                />
            </div>
            <div className="home__section">
            <Card
                    src="https://i.pinimg.com/originals/6b/01/e0/6b01e06d2803b15cfc4c75119ccbbc2f.jpg"
                    title="American Asylum Getaway"
                    description="Abandoned asylum with plenty of horror to offer"
                    price="$75/night"
            />
            <Card
                    src="https://a0.muscache.com/im/pictures/de4c65f8-6e66-475b-a9cb-15cc0e236e4e.jpg?im_w=720"
                    title="The Haunted Bedroom at Talliston"
                    description="Spend a night at Talliston's infamous Haunted Bedroom"
                    price="$99/night"
            />
            <Card
                    src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/71/ac/a6.jpg"
                    title="Rose Hall Haunted House"
                    description="A ghost tour of the historic Rose Hall Great House"
                    price="$80/night"
            />
            </div>
        </div>
    )
}

export default Home
