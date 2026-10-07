import GlobalOfficeMap from "@/components/GlobalOfficeMap";
import HeroBanner from "@/components/HeroBanner";
import EnquiryForm from "@/components/EnquiryForm";
import "@/components/GlobalOfficeMap.css";
import "@/components/EnquiryForm.css";
import "./contact-split.css";

export const metadata = {
  title: "Contact Us | Inchbrick Realty",
  description: "Contact Inchbrick Realty.",
};

export default function Page() {
  return (
    <>
      <HeroBanner compact />
      <section className="contact-split" aria-label="Contact form and office map">
        <div className="contact-split-inner">
          <div className="contact-split-form">
            <EnquiryForm embedded />
          </div>
          <div className="contact-split-map">
            <GlobalOfficeMap embedded />
          </div>
        </div>
      </section>
    </>
  );
}
