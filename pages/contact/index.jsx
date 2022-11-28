import Head from "next/head";
import ContactForm from "../../sections/ContactForm";
import ContactHero from "../../sections/ContactHero";

const ContactPage = () => {
  return (
    <>
      {/* <ContactHero /> */}
      <Head>
        <title>Contact &mdash; Batuhan</title>
      </Head>
      <ContactForm />
    </>
  );
};

export default ContactPage;
