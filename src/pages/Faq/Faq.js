import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Faq = () => {
    return (
        <div className='bg-base-300 py-12 min-h-[90vh]'>
            <h1 className='text-primary-focus text-2xl md:text-3xl font-semibold pb-12'>FAQ</h1>
            <Accordion className='w-9/12 md:w-2/3 mx-auto'>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <span className='font-semibold text-lg'>How to start any course as a beginner?</span>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className='font-medium text-left'>
                            There are specific requirements for each and every course, they are described in the course description. If you have met the requirements then beginner or intermediate you can start our course an be a pro.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <span className='font-semibold text-lg'>How many devices are permitted to login into the same user account?</span>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className='font-medium text-left'>
                            Maximum three devices are permitted. Any extra device can't login. To do that you need to log out from any other device.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <span className='font-semibold text-lg'>Is there any discount on the courses?</span>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className='font-medium text-left'>
                            There is 50% off the very first course you enroll. Then after every other course enrollment you will get discounts coupon for the next course.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default Faq;