import React from "react";
import classes from "./Case.module.css";
import { useNavigate } from "react-router-dom";

const Case = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.main}>
      <h1>Case Study</h1>
      <div className={classes.main2}>
        <div onClick={() => navigate("/page1")} className={classes.main3}>
          <h2>Dr. B.R. Ambedkar</h2>
          <p>
            was an Indian jurist, economist, and social reformer who played a
            key role in drafting the Indian Constitution and championing the
            rights of marginalized communities, especially the Dalits.
          </p>
        </div>
        <div onClick={() => navigate("/page2")} className={classes.main3}>
          <h2>Posh act (Bhanwari Devi)</h2>
          <p>
            The Protection of Women from Sexual Harassment (PoSH) Act, 2013, was
            enacted in India to prevent and address sexual harassment in the
            workplace, inspired by the landmark Bhanwari Devi case, which
            highlighted the need for legal protection against workplace
            harassment.
          </p>
        </div>
      </div>
      <div className={classes.main2}>
        <div onClick={() => navigate("/page3")} className={classes.main3}>
          <h2>Justice k Chandru ( jai bhim)</h2>
          <p>
            {" "}
            a former judge of the Madras High Court, is known for his
            progressive judgments and social activism, and his work inspired the
            2021 Tamil film Jai Bhim, which portrays his legal battle for the
            rights of oppressed communities.
          </p>
        </div>
        <div onClick={() => navigate("/page4")} className={classes.main3}>
          <h2> Kamaraj ( mathiya unavu thittam)</h2>
          <p>
            former Chief Minister of Tamil Nadu, introduced the Mathiya Unavu
            Thittam (Midday Meal Scheme) in 1957, a pioneering initiative to
            provide free nutritious meals to school children, aiming to improve
            their health and educational outcomes.
          </p>
        </div>
      </div>

      {/* <h1>
        Title: Empowering Rural Women through Sustainable Livelihood Initiatives
      </h1>
      <h2>Introduction: </h2>
      <p>
        In many rural communities around the world, women often face significant
        socio-economic challenges, including limited access to education,
        healthcare, and economic opportunities. This case study explores how a
        non-profit organization implemented a sustainable livelihood initiative
        to empower marginalized women in a rural village in India.
      </p>
      <h2>Objective:</h2>
      <p>
        The objective of this case study is to highlight the impact of the
        sustainable livelihood program on the lives of rural women, including
        their economic empowerment, social inclusion, and overall well-being.
      </p>
      <div className={classes.main2}>
        <h3>Case Study Details:</h3>
        <ul>
          <li>
            <span>Background: </span>Provide background information on the rural
            village, its socio-economic conditions, and the challenges faced by
            marginalized women in the community.
          </li>
          <li>
            <span>Program Implementation: </span>Describe the sustainable
            livelihood initiative implemented by the non-profit organization.
            This may include details on training programs, skill development
            workshops, access to resources, and community engagement activities.
          </li>
          <li>
            <span>Impact Assessment: </span>Present data and anecdotes
            showcasing the impact of the program on participating women. This
            could include statistics on increased income levels, improvements in
            health and nutrition, enhanced decision-making abilities, and
            changes in social dynamics within the community.
          </li>
          <li>
            <span>Success Stories: </span>Share personal stories of women who
            have benefitted from the program. Highlight their journey,
            challenges overcome, and achievements attained as a result of their
            participation in the livelihood initiative.
          </li>
          <li>
            <span>Sustainability and Scalability: </span>Discuss the
            sustainability of the program model and its potential for
            scalability to other rural communities. Consider factors such as
            long-term viability, local ownership, and opportunities for
            expansion or replication.
          </li>
          <li>
            <span>Lessons Learned: </span>Reflect on key lessons learned from
            implementing the program, including best practices, challenges
            encountered, and recommendations for future initiatives targeting
            marginalized groups.
          </li>
        </ul>
      </div>

      <h2>Conclusion:</h2>
      <p>
        In conclusion, the case study demonstrates the transformative impact of
        sustainable livelihood initiatives in empowering marginalized women and
        promoting inclusive development in rural communities. By investing in
        the economic empowerment of women, organizations can contribute to
        breaking the cycle of poverty and fostering sustainable change at the
        grassroots level.
      </p>
      <h2>Call to Action:</h2>
      <p>
        Encourage readers to support similar initiatives or get involved in
        empowering marginalized communities through donations, volunteering, or
        advocacy efforts.
      </p> */}
    </div>
  );
};

export default Case;
