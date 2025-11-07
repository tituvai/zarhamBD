import React from 'react';
import Heading from '../common/Heading';
import Flex from '../common/Flex';
import { FaTruck, FaLock } from 'react-icons/fa6';
import { FaTags } from 'react-icons/fa';
import { FiBox } from 'react-icons/fi';
import Container from '../common/Container';

// Renamed for clarity and to correct the likely typo (Derybely -> DeliveryFeatures)
const DeliveryFeatures = () => {
  return (
    // Outer container for background and padding
    <div className="bg-darkText lg:p-10 p-3 my-5">
      {/* Inner container with dashed border */}
      <div className="border-white border-3 border-dashed lg:p-10 p-4">
        {/* Using the custom Container component for max-width and centering */}
        <Container>
          {/* Section Headings */}
          <div className="text-center">
            <Heading
              className={'text-2xl text-lightText font-normal uppercase'}
              text={'Well Come To The'}
              as={'h3'}
            />
            <Heading
              className={'text-4xl text-accent font-semibold tracking-[1px] uppercase py-2'}
              text={'zarhan bd'}
              as={'h3'}
            />
            <Heading
              className={'text-xl text-white font-normal tracking-[1px] uppercase'}
              text={'online shop'}
              as={'h3'}
            />
          </div>

          {/* Feature Blocks */}
          <Flex className={'pt-10 flex-wrap gap-y-5 justify-center'}>
            {/* Feature 1: Delivery (Corrected spelling) */}
            <div className="lg:w-[250px] w-[48%] bg-black lg:p-10 p-3 rounded lg:mx-3">
              <FaTruck className=" lg:size-10 size-7 m-auto text-accent" />
              <Heading
                className={'lg:text-xl text-sm text-lightText font-normal tracking-wider text-center pt-4'}
                text={'Fast Delivery All Over Bangladesh'} // Corrected spelling
                as={'h4'}
              />
            </div>

            {/* Feature 2: Return */}
            <div className="lg:w-[250px] w-[48%] bg-black lg:p-10 p-3 rounded lg:mx-3">
              <FiBox className=" lg:size-10 size-7 m-auto text-accent" />
              <Heading
                className={'lg:text-xl text-sm text-lightText font-normal tracking-wider text-center pt-4'}
                text={'Easy 7 days return'}
                as={'h4'}
              />
            </div>

            {/* Feature 3: Security */}
            <div className="lg:w-[250px] w-[48%] bg-black lg:p-10 p-3 rounded lg:mx-3">
              <FaLock className=" lg:size-10 size-7 m-auto text-accent" />
              <Heading
                className={'lg:text-xl text-sm text-lightText font-normal tracking-wider text-center pt-4'}
                text={'Secure Transaction'}
                as={'h4'}
              />
            </div>

            {/* Feature 4: Selection */}
            <div className="lg:w-[250px] w-[48%] bg-black lg:p-10 p-3 rounded lg:mx-3">
              <FaTags className=" lg:size-10 size-7 m-auto text-accent" />
              <Heading
                className={'lg:text-xl text-sm text-lightText font-normal tracking-wider text-center pt-4'}
                text={'Curated Selection'}
                as={'h4'}
              />
            </div>
          </Flex>
        </Container>
      </div>
    </div>
  );
};

export default DeliveryFeatures; // Exporting the renamed component