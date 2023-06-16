import React from 'react';
import doctor from '../../assets/images/doctor.png';

const MakeAppoinment = () => {
    return (
        <section className='flex'>
            <div>
                <img src={doctor} alt="" />
            </div>
            <div>
                <h3 className='text-xl text-primary'>Appointment</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat
                </p>
            </div>
        </section>
    );
};

export default MakeAppoinment;