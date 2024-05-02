import React from 'react'
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section id="about" className="text-justify my-16 max-w-2xl mx-auto flex flex-col gap-4">
      <SectionTitle subTitle="" title="About Us" />
      <p className=" text-gray-600 mt-4 text-xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos ab, animi
        molestiae esse nihil obcaecati dignissimos illo accusantium distinctio
        error, consequuntur dolorem dolor perferendis nemo sed corrupti, sint
        illum optio?
      </p>
      <p className="text-gray-600 mt-4 text-xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos ab, animi
        molestiae esse nihil obcaecati dignissimos illo accusantium distinctio
        error, consequuntur dolorem dolor perferendis nemo sed corrupti, sint
        illum optio? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Quos ab, animi molestiae esse nihil obcaecati dignissimos illo
        accusantium distinctio error, consequuntur dolorem dolor perferendis
        nemo sed corrupti, sint illum optio?
      </p>
      <div className="h-24"></div>
    </section>
  );
}

export default About