import React from 'react';
import appointment from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppoinment = () => {
    return (
        <section style={{
            background: `url(${appointment})`}}
            className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                <p className='text-white'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat
                </p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppoinment;