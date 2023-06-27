interface IProps {
    name: string;     //required
    age: number;      //required
    address?: string; // chỉ cần thêm ? sau : thì requried to optional
}

const video13 = (props: IProps) => {
    //prop là javascript object

    // const person = {
    //     name: "Tuan",
    //     age: 24,
    //     address: "322/37 Hương Lộ 2",
    // };

    const { name, age, address } = props;

    return (
        <div>
            video13 {name} {age} {address}
        </div>
    );
};

export default video13;
