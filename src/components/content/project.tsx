import { Modal } from "antd";
import { useState } from "react";
import { IoLogoReact } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import { DiNodejsSmall } from "react-icons/di";
import { AiFillFacebook } from "react-icons/ai";

interface IProject {
    image: JSX.Element;
    title: string;
    shortDescription: string;
    detail: {
        description: string;
        frontend: string;
        backend: string;
        member: number;
        role: string;
        img: string;
        github: string;
    };
}

const Project = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [dataDetail, setDataDetail] = useState<IProject | null>(null);

    const dataProjects: IProject[] = [
        {
            image: <IoLogoReact size={50} color={"#2bebfd"} />,
            title: "Clone Trello",
            shortDescription: "Building and developing some features of Trello",
            detail: {
                description:
                    "Building and developing some Trello-like features for the purpose of learning", //miêu tả dự án làm gì
                frontend: "React (Javascript), Redux Toolkit, ", //công nghệ sử dụng
                backend: "Node.JS (Express), MongoDB", //công nghệ sử dụng
                member: 6, // bao nhiêu members
                role: "Developer", // vai trò trong dự án
                img: "https://github.com/tuan782000/Idea_for_School/blob/main/img/product_01.png?raw=true", //link video,  link deploy
                github: "https://github.com/tuan782000/mern-stack-trello-web", //link github,
            },
        },
        {
            image: <DiNodejsSmall size={50} color={"#00a80c"} />,
            title: "University Idea",
            shortDescription: "A system for contributing ideas to universities",
            detail: {
                description:
                    "A system for contributing ideas to universities, we have built a website for submitting ideas to the universities", //miêu tả dự án làm gì
                frontend: "Html, Css, Javascript", //công nghệ sử dụng
                backend: "Asp.Net MVC, Entity framework", //công nghệ sử dụng
                member: 2, // bao nhiêu members
                role: "Developer", // vai trò trong dự án
                img: "https://github.com/tuan782000/Idea_for_School/blob/main/img/project_03.png?raw=true", //link video,  link deploy
                github: "https://github.com/tuan782000/Idea_for_School", //link github,
            },
        },
        {
            image: <AiFillFacebook size={50} color={"#4096ff"} />,
            title: "Ecommerce website",
            shortDescription:
                "Building an e-commerce website that provides online shopping services",
            detail: {
                description:
                    "Building an e-commerce website specialized in providing food while also developing a page to assist in managing the e-commerce website.", //miêu tả dự án làm gì
                frontend: "Html, Css, Javascript", //công nghệ sử dụng
                backend: "Asp.Net MVC, Entity framework", //công nghệ sử dụng
                member: 1, // bao nhiêu members
                role: "Developer", // vai trò trong dự án
                img: "https://github.com/tuan782000/Final_Project/blob/main/img/product_02.png?raw=true", //link video,  link deploy
                github: "https://github.com/tuan782000/Final_Project", //link github,
            },
        },
    ];

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setDataDetail(null);
    };
    return (
        <>
            <Modal
                title={
                    dataDetail && dataDetail.title
                        ? `Project ${dataDetail.title}`
                        : ""
                }
                open={isModalOpen}
                onOk={() => handleCloseModal()}
                onCancel={() => handleCloseModal()}
                footer={null}
                maskClosable={false}
            >
                {dataDetail && (
                    <ul>
                        <li>
                            Project Description: {dataDetail.detail.description}
                        </li>
                        <li>Frontend: {dataDetail.detail.frontend}</li>
                        <li>Backend: {dataDetail.detail.backend}</li>
                        <li>
                            Number of project members:{" "}
                            {dataDetail.detail.member}
                        </li>
                        <li>Role: {dataDetail.detail.role}</li>
                        <li>
                            Image:
                            {/* <a href={dataDetail.detail.img} target="_blank">
                                {dataDetail.detail.img}
                            </a> */}
                            <img
                                style={{ width: "100%" }}
                                src={dataDetail.detail.img}
                                alt=""
                            />
                        </li>
                        <li>
                            Github:
                            <a href={dataDetail.detail.github} target="_blank">
                                {dataDetail.detail.github}
                            </a>
                        </li>
                    </ul>
                )}
            </Modal>

            <div className="arlo_tm_section" id="project">
                <div className="arlo_tm_services_wrap">
                    <div className="container">
                        <div className="arlo_tm_title_holder">
                            <h3>Projects</h3>
                            <span>
                                Projects participated in building and developing
                            </span>
                        </div>
                        <div className="list_wrap">
                            <ul>
                                {dataProjects.map((item, index) => {
                                    return (
                                        <li key={`${index}-project`}>
                                            <div
                                                className="inner"
                                                title="Xem Chi Tiết"
                                                style={{ cursor: "pointer" }}
                                                onClick={() => {
                                                    setDataDetail(item);
                                                    setIsModalOpen(true);
                                                }}
                                            >
                                                <div className="icon">
                                                    {item.image}
                                                </div>
                                                <div className="title_service">
                                                    <h3>{item.title}</h3>
                                                </div>
                                                <div className="text">
                                                    <p>
                                                        {item.shortDescription}
                                                    </p>
                                                </div>
                                                <div
                                                    className="view_detail"
                                                    style={{ padding: "5px 0" }}
                                                >
                                                    <span
                                                        style={{
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        <BsArrowRight />
                                                        &nbsp; More Details
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project;
