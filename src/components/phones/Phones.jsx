import Phone from "../phone/Phone";

const Phones = ({phones}) => {
    // console.log(phones);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                phones?.map(phone => <Phone key={phone.id} phone={phone}></Phone>)
            }
        </div>
    );
};

export default Phones;