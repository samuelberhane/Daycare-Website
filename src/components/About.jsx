import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="About Us"
      className="px-4 md:px-12 lg:px-16 xl:px-20 pt-8 md:pt-12 lg:pt-20 xl:pt-28 relative"
    >
      <img
        src="/white-bg.png"
        alt="bg"
        className="absolute top-[-35px] md:top-[-70px] lg:top-[-60px] xl:top-[-70px] 2xl:top-[-65px] left-0 right-0 w-full"
      />
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8 md:gap-12 xl:gap-16 w-full ">
        <motion.div
          className="relative"
          initial={{ left: -50 }}
          whileInView={{ left: 0 }}
          transition={{
            duration: 0.5,
          }}
        >
          <h1 className="text-[#f38600] title">
            About <span className="text-black">Us</span>
          </h1>
          <p className="mb-[17px] text-[14px] lg:text-[16px]">
            Addis MAYA playschool is established by a passionate duo, Sewbesew
            Tadele and Yamrot Kassa. They possess more than 12 years of
            experience in school operations at the International Community
            School of Addis Ababa (ICS Addis) and hold certifications in
            Montessori, Reggio Emilia early year&apos;s curriculums, and Asian
            preschool management.
          </p>
          <p className="mb-[17px] text-[14px] lg:text-[16px]">
            Furthermore, they have both earned master&apos;s degrees in project
            management and business administration from Addis Ababa and Lincoln
            University. Both moms themselves, they share a strong passion to
            helping children explore and thrive. they have a great commitment to
            employing diverse and effective teaching methodologies. Their
            approaches prioritize hands-on learning, individualized instruction,
            and creating a stimulating environment for young learners.
          </p>
          <p className="mb-4 text-[14px] lg:text-[16px]">
            By combining their extensive experience in school operations,
            diverse teaching methodologies, and strong academic qualifications.
            Sewbesew and Yamrot are well-prepared to lead and manage Addis MAYA
            playschool. Their qualifications and expertise suggest a dedication
            to providing high-quality education and creating a nurturing
            environment for young children to thrive.
          </p>
        </motion.div>

        <motion.div
          className="p-6 bg-[#f38600] rounded-md border-[10px] border-[#28980b] relative"
          initial={{ bottom: -50 }}
          whileInView={{ bottom: 0 }}
          transition={{
            duration: 0.5,
          }}
        >
          <img
            src="/addis5.jpeg"
            alt="program"
            className="w-full h-full rounded"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
