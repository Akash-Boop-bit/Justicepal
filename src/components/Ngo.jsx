import React from "react";
import classes from "./Ngo.module.css";

const Ngo = () => {
  return (
    <div className={classes.main}>
      <h1>NGOs In INDIA</h1>
      <p>
        NGO stands for Non-Governmental Organization. NGOs are typically
        non-profit, voluntary citizens' groups organized on a local, national,
        or international level. They are driven by people with a common interest
        or goal to address a particular social, environmental, or humanitarian
        issue. NGOs operate independently of government control and are often
        funded by donations, grants, and fundraising efforts. They play a
        crucial role in advocating for social change, providing services to
        communities in need, and raising awareness about various issues.
      </p>
      <h2>Some NGOs in INDIA</h2>
      <div className={classes.main2}>
        <h3>1. Seva Mandir</h3>
        <ul>
          <li>Location: Udaipur, Rajasthan</li>
          <li>Contact Info:</li>
          <li>
            Address: Seva Mandir, Old Fatehpura, Near Saraswati Hospital,
            Udaipur – 313004, Rajasthan, India
          </li>
          <li>Phone: +91-294-256-3933</li>
          <li>Email: info@sevamandir.org</li>
          <li>Website: https://sevamandir.org/</li>
        </ul>
      </div>
      <div className={classes.main2}>
        <h3>2. CRY - Child Rights and You</h3>
        <ul>
          <li>Location: Mumbai, Maharashtra (National Headquarters)</li>
          <li>Contact Info:</li>
          <li>
            Address: CRY – Child Rights and You, 189/A Anand Estate, Sane Guruji
            Marg, Mumbai – 400011, Maharashtra, India
          </li>
          <li>Phone: 022-23096841 / 43 / 45</li>
          <li>Email: support@crymail.org</li>
          <li>Website: https://www.cry.org/</li>
        </ul>
      </div>
      <div className={classes.main2}>
        <h3>3. Pratham</h3>
        <ul>
          <li>Location: Mumbai, Maharashtra (National Headquarters)</li>
          <li>Contact Info:</li>
          <li>
            Address: Pratham Education Foundation, Mumbai Office, B-301, 3rd
            Floor, Dipti Classic, Suren Road, Near WEH Metro Station, Andheri
            (E), Mumbai – 400093, Maharashtra, India
          </li>
          <li>Phone: +91-22-42035197</li>
          <li>Email: info@pratham.org</li>
          <li>Website: https://www.pratham.org/</li>
        </ul>
      </div>
      <div className={classes.main2}>
        <h3>4. Akshaya Patra Foundation</h3>
        <ul>
          <li>Location: Bengaluru, Karnataka (National Headquarters)</li>
          <li>Contact Info:</li>
          <li>
            Address: The Akshaya Patra Foundation, #72, 3rd Floor, 3rd Main
            Road, 1st & 2nd Stage Yeshwantpur Industrial Suburb, Rajajinagar
            Ward No. 10, Bengaluru – 560022, Karnataka, India
          </li>
          <li>Phone: 080-30143400</li>
          <li>Email: infodesk@akshayapatra.org</li>
          <li>Website: https://www.akshayapatra.org/</li>
        </ul>
      </div>
      <div className={classes.main2}>
        <h3>5. HelpAge India</h3>
        <ul>
          <li>Location: New Delhi (National Headquarters)</li>
          <li>Contact Info:</li>
          <li>
            Address: HelpAge India, C-14, Qutab Institutional Area, New Delhi –
            110016, India
          </li>
          <li>Phone: 011-41688955 / 41688956 / 41688957</li>
          <li>Email: headoffice@helpageindia.org</li>
          <li>Website: https://www.helpageindia.org/</li>
        </ul>
      </div>
    </div>
  );
};

export default Ngo;
