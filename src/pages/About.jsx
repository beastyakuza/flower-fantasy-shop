
import './About.css'; 

const About = () => {
    return (
        <div className="main-content-wrapper about-page">
            <h1 className="about-title">Our Passion Blooms with You</h1>
            <div className="about-content-container">
                <section className="about-section mission-section">
                    <h2>Our Purpose</h2>
                    <p>
                        At **FLOWER FANTASY**, we believe that every flower tells a story.
Our mission is to bring the beauty, fragrance, and emotion of nature directly into your home.
We carefully select each stem, ensuring freshness and the highest quality in every floral arrangement.
                    </p>
                    <p>
                        We don’t just sell flowers; we create unforgettable moments and celebrate the magic that only a perfectly designed bouquet can offer.
                    </p>
                </section>
                <section className="about-section quality-section">
                    <h2>Quality and Commitment</h2>
                    <p>
                        We work directly with local and international growers to ensure the **longevity and vitality** of every flower.
From the classic rose to exotic hydrangeas, our collection is a testament to our dedication to the art of floral design.
                    </p>
                    <ul>
                        <li>Hand-picked stem selection.</li>
                        <li>Unique and personalized designs.</li>
                        <li>Fast and careful delivery.</li>
                        <li>Commitment to sustainability.</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default About;