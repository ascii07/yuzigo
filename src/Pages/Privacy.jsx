import React from 'react';
import Privacy from '../Assets/Privacy.png';
const PrivacyPolicy = () => {
  return (
    <div style={styles.card}>
    <div style={styles.container}>
        <div style={styles.container}>
      <img src={Privacy} alt="Terms and Conditions" style={styles.image} />
      </div>
    
      <h1 style={styles.header}>Privacy Policy for YUZI GO Fantasy Platform</h1>
      <p style={styles.section}>
        YUZI GO Fantasy is India's most trusted fantasy sports promoter, providing a platform for a community of skilled gamers all over the country. YUZI GO Fantasy is an Indian fantasy sports platform that allows users to play fantasy cricket, hockey, football, kabaddi, handball, basketball, volleyball, rugby, football, and baseball. We understand the needs and requirements for online fantasy sports in India and therefore provide you with a safe space to enjoy playing online. We strive to provide our users with better and faster results as well as a better and improved online fantasy sports experience. While providing our users a better experience, we also have a huge interest in promoting responsible games. The fantasy sports platforms that we provide are purely a source of entertainment. We want to make sure that users are here for the right reasons. We only promote online fantasy sports, with absolutely no opportunity to win anything of value, such as prizes and money.
      </p>
      
      <h2 style={styles.subHeader}>What is Fantasy Sports?</h2>
      <p style={styles.section}>
        Fantasy Sports is a form of virtual or online sports, where a user can create an online ID to play virtual matches or tournaments. The players are selected based on the player’s recent performances, the opposition, and the playing conditions, among other factors. Ever since its advent in the late 90s that coincided with the internet boom, Fantasy Sports has taken off and is played by millions of people worldwide. In India, Fantasy Sports has been an absolute revelation. Over 120 million people are a part of this bandwagon and the number is ever-growing.
      </p>
      <p style={styles.section}>
        YUZI GO Fantasy is a virtual platform for users to select players from a fixture (Cricket/Football/Kabaddi/Basketball/Baseball/Volleyball), earn points based on the player’s performance in fantasy games, and compete against thousands of fantasy sports players. It is one of India’s finest and most creative fantasy sports websites. The game interface ensures that the user has the most amazing gameplay experience. Including players who’ve had a good run of form have to be preferred over personal choices.
      </p>

      <h2 style={styles.subHeader}>Secure Platform</h2>
      <p style={styles.section}>
        Fantasy Sports on YUZI GO Fantasy is super safe, secure, and legal. Fantasy cricket is a skill-based game and isn’t considered gambling. It is 100% legal in India. Go to YUZI GO Fantasy now and start playing.
      </p>

      <h2 style={styles.subHeader}>Terms and Conditions</h2>
      <p style={styles.section}>
        Disclaimer: This Website is only for 18+ users. Please leave this site if you are from Telangana, Orissa, Assam, Sikkim, and Nagaland. Beware of fraudsters, we only deal via WhatsApp. We only promote online fantasy sports, with absolutely no opportunity to win anything of value, such as prizes and money.
      </p>
      <p style={styles.section}>
        You must be at least 18 years old, and must not suffer from any disability or impairment which would prevent you from assuming the responsibilities contained in the Agreement, or from getting an online ID for fantasy sports.
      </p>

      <h2 style={styles.subHeader}>Introduction</h2>
      <p style={styles.section}>
        <strong>1.1</strong> – These user terms & conditions (the “Agreement”), which includes those terms and conditions expressly set out below and those incorporated by reference including the terms of the Privacy Policy and the Game Rules (as defined in section 9 below), is an agreement between you (the “User”, “you” and “your”), and YUZI GO Fantasy which governs your use of the products and services (“Services”) provided by the Company through the YUZI GO Fantasy website. By using any of the Services you are agreeing to all the terms of this Agreement.
      </p>
      <p style={styles.section}>
        <strong>1.2</strong> – If any of the terms of the Agreement are determined to be unlawful, invalid, void, or unenforceable for any reason, it shall not affect the validity and enforceability of the remaining terms. Any failure or delay on our part to act or exercise any right or remedy with respect to a breach of any of the terms of this Agreement by you shall not be construed as a waiver of our right to act with respect to the said breach or any prior, concurrent, subsequent, or similar breaches.
      </p>

      <h2 style={styles.subHeader}>Agreement</h2>
      <p style={styles.section}>
        <strong>2.1</strong> – You should ensure that you read, understand, and agree with all the terms and conditions contained in the Agreement before you may use the Services. You should only use the Services if you have read and understood the Agreement and agree to abide by its terms and conditions. If you have any questions about the Agreement please contact us.
      </p>
      <p style={styles.section}>
        <strong>2.2</strong> – We reserve the right to amend, modify, or change any of the terms of this Agreement at any time, and it is advisable to regularly look at these terms. We shall give notice of such changes (“Notice”) either by notification in the manner as the Company may deem fit or by posting the amended Agreement on the Platform. Such modifications could include changes to any of our Game Rules. If you do not agree with the terms of the amended Agreement, you may terminate your use of the Services by notifying us that you wish to terminate your Accounts. Your continued use of the Services will be deemed to constitute your acceptance of the changes to the Agreement.
      </p>

      <h2 style={styles.subHeader}>Ownership</h2>
      <p style={styles.section}>
        Use of the YUZI GO Fantasy name and any of the other names or marks associated with the Platform, the Services, or the Software is strictly forbidden unless it is used with the express written permission of the Company. The Platform, the Services, and the Software, including its code, documentation, appearance, structure, and organization is an exclusive product of the Company, which retains all rights, tangible and intangible, to the YUZI GO Fantasy website, the games therein, software, codes, copies, modifications, or merged parts.
      </p>

      <h2 style={styles.subHeader}>Game Addiction</h2>
      <p style={styles.section}>
        This game may be addictive, user discretion is advised. Fantasy sports may be addictive to a certain extent; we advise to avoid playing the games continuously and take regular breaks while you play.
      </p>
      <p style={styles.section}>
        Here are some tips you can apply while playing online fantasy sports:
        <ul style={styles.list}>
          <li>Set a time limit for gaming.</li>
          <li>Take regular breaks.</li>
          <li>Stop playing during work.</li>
          <li>Don’t chase losses.</li>
          <li>Play with a good frame of mind.</li>
        </ul>
      </p>
      <p style={styles.section}>
        Working Since 2010.
      </p>
      <p style={styles.section}>
        These points might be helpful for you while playing and might help you in not being addicted to it.
      </p>

      <h2 style={styles.subHeader}>18+ Disclaimer</h2>
      <p style={styles.section}>
        This game involves an element of financial risk and may be addictive. Please play responsibly at your own work. Geographical Restrictions Location Compliance: Our platform is not accessible from states where DFS is prohibited, including Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana.
      </p>
    </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6',
  },
  card: {
    maxWidth: '800px',
    margin: '20px auto',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: '1.6',
  },
  image: {
    width: '75%',  // Adjust this to fit your layout
    height: '50%', // Maintain aspect ratio
    marginBottom: '20px', // Space between the image and text
  },
  header: {
    textAlign: 'center',
    color: '#004c91',
    marginBottom: '20px',
  },
  section: {
    marginBottom: '20px',
  },
  subHeader: {
    marginTop: '30px',
    marginBottom: '10px',
    color: '#004c91',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
  }
};

export default PrivacyPolicy;
