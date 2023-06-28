import tuannguyendev from "@/assets/img/about/tuan_nguyen_dev.jpg";
import myCV from "@/assets/Nguyen_Thai_Tuan.pdf";
import Parallax from "parallax-js";
import { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import logo550 from "@/assets/img/about/550x640.jpg";
const About = () => {
    const sceneEl = useRef(null);
    useEffect(() => {
        if (sceneEl && sceneEl.current) {
            const parallaxInstance = new Parallax(sceneEl.current, {
                relativeInput: true,
                hoverOnly: true,
            });
            parallaxInstance.enable();
            return () => parallaxInstance.disable();
        }
    }, []);
    return (
        <>
            <div
                className="arlo_tm_section relative"
                id="about"
                style={{ paddingTop: 100 }}
            >
                <div className="arlo_tm_about_wrapper_all">
                    <div className="container">
                        <div className="arlo_tm_title_holder">
                            <h3>About Me</h3>
                            <span>Main informations about me</span>
                        </div>
                        <div className="arlo_tm_about_wrap">
                            <div className="author_wrap">
                                <div className="leftbox">
                                    <div
                                        ref={sceneEl}
                                        className="about_image_wrap parallax"
                                        data-relative-input="true"
                                    >
                                        <div
                                            className="image layer"
                                            data-depth="0.1"
                                        >
                                            <img src={logo550} alt="550x640" />
                                            <div
                                                className="inner"
                                                data-img-url={tuannguyendev}
                                                style={{
                                                    backgroundImage: `url(${tuannguyendev})`,
                                                }}
                                            ></div>
                                        </div>
                                        <div
                                            className="border layer"
                                            data-depth="0.2"
                                        >
                                            <img src={logo550} alt="550x640" />
                                            <div className="inner"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rightbox">
                                    <div className="arlo_tm_mini_title_holder">
                                        <h4>
                                            I'm a{" "}
                                            <TypeAnimation
                                                sequence={[
                                                    // Same substring at the start will only be typed out once, initially
                                                    "Freelancer",
                                                    2000, // wait 1s before replacing "Mice" with "Hamsters"
                                                    "UI/UX Designer",
                                                    2000,
                                                    "Web Developer",
                                                    2000,
                                                ]}
                                                wrapper="span"
                                                speed={50}
                                                // style={{
                                                //     fontSize: "2em",
                                                //     display: "inline-block",
                                                // }}
                                                repeat={Infinity}
                                            />
                                        </h4>
                                    </div>
                                    <div className="definition">
                                        <p>
                                            Hi!, My name is{" "}
                                            <strong>Tuan</strong> , a programmer
                                            from Ho Chi Minh City. I graduated
                                            from Greenwich Vietnam University in
                                            March of this year with a Bachelor's
                                            degree in Information Technology.
                                            <br /> <br />
                                            Currently, I aspire to become a
                                            front-end developer and apply the
                                            knowledge and skills I have gained
                                            over the years. I have experience in
                                            programming, particularly in
                                            front-end development. I am
                                            proficient in using technologies
                                            such as HTML, CSS, JavaScript, and
                                            frameworks such as ReactJS, VueJS to
                                            create beautiful and user-friendly
                                            interfaces. I always try to update
                                            and learn new technologies to meet
                                            the demands of my work.
                                        </p>
                                    </div>
                                    <div className="about_short_contact_wrap">
                                        <ul>
                                            <li>
                                                <span>
                                                    <label>Birthday:</label>{" "}
                                                    07.08.2000
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <label>City:</label> Ho Chi
                                                    Minh
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <label>Graduate:</label>{" "}
                                                    University of Greenwich
                                                    Vietnam
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <label>Major:</label>{" "}
                                                    Software engineering
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <label>GPA: </label> 3.0
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <label>GitHub:</label>{" "}
                                                    <a href="https://github.com/tuan782000">
                                                        tuan782000
                                                    </a>
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <label>Mail:</label>{" "}
                                                    <a href="mailto:example@gmail.com">
                                                        thaituan7820&#64;gmail.com
                                                    </a>
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <label>Phone:</label>{" "}
                                                    <a href="#">0778748901</a>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="buttons_wrap">
                                        <ul>
                                            <li>
                                                <a href={myCV} download>
                                                    <span>Download CV</span>
                                                </a>
                                            </li>
                                            {/* <li className="anchor">
                                                <a href="#contact">
                                                    <span>Send Message</span>
                                                </a>
                                            </li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
