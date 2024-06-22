import React, { useState } from "react";
import styles from "./Certificates.module.css";
import certificates from "../../data/certificates.json";
import { getImageUrl } from "../../utils";

export const Certificates = () => {
  const [repeatCount, setRepeatCount] = useState(3); // Initial repeat count

  // Function to handle increasing repeat count
  const increaseRepeatCount = () => {
    setRepeatCount(repeatCount + 1);
  };

  // Function to generate repeated certificates array
  const generateRepeatedCertificates = () => {
    let repeatedCertificates = [];
    for (let i = 0; i < repeatCount; i++) {
      repeatedCertificates = [...repeatedCertificates, ...certificates];
    }
    return repeatedCertificates;
  };

  const repeatedCertificates = generateRepeatedCertificates();

  return (
    <section className={styles.container} id="certificates">
      <h2 className={styles.title}>Certificates</h2>
      <div className={styles.scroller}>
        <div className={styles.scrollerInner}>
          {repeatedCertificates.map((certificate, index) => (
            <div key={index} className={styles.card}>
              <img
                src={getImageUrl(certificate.imageSrc)}
                alt={`${certificate.certificateName} Logo`}
                className={styles.certificateImage}
              />
              <div className={styles.cardDetails}>
                <h3 className={styles.certificateName}>{certificate.certificateName}</h3>
                <p className={styles.issuedBy}>{`Issued by: ${certificate.issuedBy}`}</p>
                <p className={styles.issueDate}>{`Issue Date: ${certificate.issueDate}`}</p>
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
