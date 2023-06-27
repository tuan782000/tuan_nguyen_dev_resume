import { useState } from "react";
import "./Video10.css";

interface IUser {
    name: string;
    age: number | string;
    city: string;
}

interface IProps {
    defaultName: string;
    defaultAge: number | string;
}
const Video10 = (props: IProps) => {
    const { defaultName, defaultAge } = props;
    // todo
    const [name, setName] = useState<string>(defaultName);
    const [age, setAge] = useState<number | string>(defaultAge);

    const [city, setCity] = useState<string[]>([
        "Hồ Chí Minh",
        "Hà Nội",
        "Đà Nẵng",
    ]);

    const [users, setUsers] = useState<IUser[]>([]);

    const [selectedCity, setSelectedCity] = useState<string>("Hồ Chí Minh");

    const [isShowBtn, setIsShowBtn] = useState<boolean>(false);

    const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
        // event.preventDefault();
        const user = {
            name: name,
            age: age,
            city: selectedCity
        }
        setUsers([...users, user]);// Spread syntax || dùng dấu ... để copy lại tất cả các phần tử trong array, user để chèn user được thêm vào cuối mãng
        setName("");
        setAge("");
    };

    const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleOnChangeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAge(event.target.value);
    };

    return (
        <>
            <div>Example video 10: hello world </div>
            <div className="form-user">
                <div>
                    <label>Name:</label>
                    <br />
                    <input
                        type="text"
                        value={name}
                        onChange={handleOnChangeName}
                    />
                    <br />
                </div>
                <div>
                    <label>Age:</label>
                    <br />
                    <input
                        type="text"
                        value={age}
                        onChange={handleOnChangeAge}
                    />
                    <br />
                </div>
                <div>
                    <label>City:</label>
                    <br />
                    <select onChange={(e) => setSelectedCity(e.target.value)}>
                        {city.map((item) => {
                            return (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                            );
                        })}
                    </select>
                </div>

                <input type="submit" value="Submit" onClick={handleSubmit} />
            </div>
            <hr />
            <div>List Users:</div>
            <div className="table-user">
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => {
                            return (
                                <tr key={user.name}>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>{user.city}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Video10;
