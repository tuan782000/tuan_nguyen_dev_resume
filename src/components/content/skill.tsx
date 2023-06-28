const Skill = () => {
    return (
        <>
            <div
                className="arlo_tm_section"
                id="skills"
                style={{ paddingTop: "100px" }}
            >
                <div className="arlo_tm_skills_wrap">
                    <div className="container">
                        <div
                            className="arlo_tm_title_holder"
                            style={{
                                paddingBottom: "100px",
                                backgroundColor: "#f6f7fd",
                            }}
                        >
                            <h3>Skill</h3>
                            <span>Cumulative skills in the learning process</span>
                        </div>
                        <div className="inner_wrap">
                            <div className="leftbox">
                                <div className="arlo_tm_mini_title_holder">
                                    <h4>Front-end</h4>
                                </div>
                                <ul style={{ margin: "40px" }}>
                                    <li>HTML</li>
                                    <li>CSS/SCSS</li>
                                    <li>Responsive</li>
                                    <li>Convert PSD to HTML </li>
                                </ul>
                            </div>
                            <div className="rightbox">
                                <div className="arlo_tm_mini_title_holder">
                                    <h4>Framework & Library</h4>
                                </div>
                                <ul style={{ margin: "40px" }}>
                                    <li>Bootstrap</li>
                                    <li>React</li>
                                    <li>Vue</li>
                                    <li>Lodash</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div style={{ top: "50px" }} className="container">
                        <div className="inner_wrap">
                            <div className="leftbox">
                                <div className="arlo_tm_mini_title_holder">
                                    <h4>Back-end</h4>
                                </div>
                                <ul style={{ margin: "40px" }}>
                                    <li>C#</li>
                                    <li>JAVACSRIPT</li>
                                    <li>SQL Server</li>
                                </ul>
                            </div>
                            <div className="rightbox">
                                <div className="progress_bar_wrap_total">
                                    <div className="arlo_tm_mini_title_holder">
                                        <h4>Framework</h4>
                                    </div>
                                    <ul style={{ margin: "40px" }}>
                                        <li>Asp.Net MVC</li>
                                        <li>Entity Framework</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skill;
