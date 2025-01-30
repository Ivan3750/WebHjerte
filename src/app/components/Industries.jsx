import Industry from "../components/Industry";
import s from "../styles/industries.module.css";
import eCommerce from "@/app/assets/eCommerce.jpg";
import Education from "@/app/assets/Education.jpg";
import Manufactyring from "@/app/assets/Manufactyring.jpg";
import Finance from "@/app/assets/Finance.jpg";
import Retail from "@/app/assets/Retail.jpg";
import Hospitality from "@/app/assets/Hospitality.jpg";
import Entertainment from "@/app/assets/Entertainment.jpg";
import Estate from "@/app/assets/Real Estate.jpg";
const Industries = () => {
  return (
    <>
        <h2 className={s.IndustyTitle}>Industries</h2>
      <div className={s.IndustryBlock}>
        <Industry
          title="eCommerce"
          img={eCommerce}
          categories={[
            "Online shop",
            "B2B portal",
            "Marketplaces",
            "POS system",
            "Cross Platform App",
          ]}
        ></Industry>
        <Industry
          title="Education"
          img={Education}
          categories={[
            "LMS system",
            "Electronic diary",
            "Distance learning",
            "Virtual classroom",
          ]}
        ></Industry>
        <Industry
          title="Manufactyring"
          img={Manufactyring}
          categories={[
            "Corporate websites",
            "CRM",
            "Personal accounts",
            "UX/UI Design",
            "Artificial intelligence",
          ]}
        ></Industry>
        <Industry
          img={Finance}
          title="Finance"
          categories={[
            "Online Banking",
            "Investment Platforms",
            "Insurance Portals",
            "Fraud Detection Systems",
          ]}
        />
        <Industry
          img={Retail}
          title="Retail"
          categories={[
            "Inventory Management",
            "Customer Loyalty Programs",
            "eCommerce Platforms",
            "POS Systems",
          ]}
        />
        <Industry
          img={Hospitality}
          title="Hospitality"
          categories={[
            "Online Booking Systems",
            "Travel Planning Apps",
            "Guest Feedback Tools",
          ]}
        />
        <Industry
          img={Entertainment}
          title="Entertainment"
          categories={[
            "Streaming Platforms",
            "Ticket Booking Systems",
            "Event Management Tools",
          ]}
        />
        <Industry
          img={Estate}
          title="Real Estate"
          categories={[
            "Property Management Systems",
            "Real Estate Marketplaces",
            "Smart Home Integrations",
          ]}
        />{" "}
      </div>
    </>
  );
};

export default Industries;
