import GlobalOfficeMap from '@/components/GlobalOfficeMap';
import HeroBanner from '@/components/HeroBanner';
import EnquiryForm from '@/components/EnquiryForm';
import '@/components/GlobalOfficeMap.css';

export const metadata = {
  title: "Contact Us | Inchbrick Realty",
  description: "Contact Inchbrick Realty.",
};

export default function Page() {
  return (
    <>
      <HeroBanner />
      <GlobalOfficeMap />
      <EnquiryForm />
      {/* Add your contact form component here if needed */}
    </>
  );
}