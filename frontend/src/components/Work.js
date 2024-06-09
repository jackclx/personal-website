import { Container } from "react-bootstrap";
import intern1 from "../assets/img/intern1.jpeg";
import intern2 from "../assets/img/intern2.jpeg";
import intern3 from "../assets/img/intern3.jpeg";
import intern4 from "../assets/img/intern4.jpeg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Work = () => {

    const internships = [
        {
            title: "Data Engineer at SVTECH (NUS Overseas College Vietnam)",
            description: (
                <>
                    - Designed and implemented a data warehouse schema for insurance company client using IBM DataStage, including staging, dimension, and fact tables.<br />
                    - Created and optimized ETL jobs to extract, transform, and load data from various sources, ensuring data quality and consistency.<br />
                    - Leveraging Power BI dashboards to visualize performance data to gain real-time sales insights.
                </>
            ),
            imgUrl: intern3,
            date: "May 2024 - August 2024",
            url: "https://svtech.com.vn/sinh-vien-dai-hoc-top-8-the-gioi-thuc-tap-tai-svtech/"
        },
        {
            title: "Data Scientist at Hivebotics",
            description: (
                <>
                    - Optimized Python and OpenCV scripts for advanced image recognition algorithms, enhancing the robot's waste detection accuracy in toilet bowls by 20%.<br />
                    - Led rapid testing and data collection initiatives, and managed product requirement document.
                </>
            ),
            imgUrl: intern2,
            date: "January 2024 - April 2024",
            url: "https://www.linkedin.com/posts/chenlexin_excited-to-share-insights-from-my-transformative-activity-7181598465645244416-qXFN?utm_source=share&utm_medium=member_desktop"
        },
        {
            title: "Software Engineer at Home Team Science and Technology",
            description: (
                <>
                    - Spearheaded UI/UX design for a web application on optimizing schedule using Figma and implemented the frontend development using JavaScript (React).<br />
                    - Developed a network of pedestrian traffic paths and conducted various analysis and search methods, such as Dijkstra algorithm, for Ops Analytics using Python NetworkX, leading to 30% improvement in operational efficiency.
                </>
            ),
            imgUrl: intern1,
            date: "March 2023 - June 2023",
            url: "https://www.linkedin.com/posts/chenlexin_techinternship-gratitude-professionalgrowth-activity-7068964375050539008-r8eT?utm_source=share&utm_medium=member_desktop"
        },
        {
            title: "Founder, Mua.Style (Fashion Accessory Shop)",
            description: (
                <>
                    - Launched a pop-up shop at Far East Plaza, Orchard and grew a successful online fashion accessory shop.<br />
                    - Implemented a pilot testing strategy to identify and select high-demand items, significantly boosting sales, achieving a $20k profit within first 4 months.
                </>
            ),
            imgUrl: intern4,
            date: "December 2020 - December 2021",
        }
    ];

    return (
        <section className="internships" id="internships">
            <Container>
                <h2 style={{ fontSize: '45px', fontWeight: 700, textAlign: 'center' }}>Past Experience</h2>
                <p style={{ color: '#B8B8B8', fontSize: '18px', letterSpacing: '0.8px', lineHeight: '1.5em', margin: '14px auto 30px auto', textAlign: 'center', width: '56%' }}>
                    I have completed three internships as a Data Engineer, Data Scientist, and Software Engineer, and founded a fashion accessory shop.
                </p>
                <div className="internship-items">
                    {internships.map((internship, index) => (
                        <div key={index} className="internship-item">
                            <div className="internship-content">
                                <h3>{internship.title}</h3>
                                <span className="date">{internship.date}</span>
                                <p>{internship.description}</p>
                                {internship.url && <a href={internship.url} target="_blank" rel="noopener noreferrer">Learn more</a>}
                            </div>
                            <div className="internship-img">
                                <img src={internship.imgUrl} alt={internship.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
