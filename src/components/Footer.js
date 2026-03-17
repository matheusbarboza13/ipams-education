import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const links = {
    email: "contato@draangelamathylde.com",
    whatsapp: "5531984389518", // só números (DDI+DDD+numero)
    instagram: "https://www.instagram.com/draangelamathylde",
    facebook: "https://www.facebook.com/angelamathyldesoares",
    linkedin: "https://www.linkedin.com/in/angela-mathylde-soares-47452522",
    youtube: "https://www.youtube.com/@aprendizagemecompanhia3109",
  };

  const emailHref = `mailto:${links.email}`;
  const whatsHref = `https://wa.me/${links.whatsapp}`;

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid}>
          {/* Coluna 1 */}
          <div>
            <div style={styles.title}>IPAMS Education</div>
            <div style={styles.subtitle}>Instituto Professora Ângela Mathylde Soares</div>

            <p style={styles.text}>
              Educação, ciência e inclusão para transformar vidas — com atuação nacional e internacional.
            </p>
          </div>

          {/* Coluna 2 */}
          <div>
            <div style={styles.sectionTitle}>Contato</div>

            <div style={styles.contactList}>
              <a className="ipamsLink" href={emailHref} style={styles.contactItem}>
                <span style={styles.contactIcon}>
                  <FaEnvelope size={18} />
                </span>
                <span style={styles.contactText}>{links.email}</span>
              </a>

              <a className="ipamsLink" href={whatsHref} target="_blank" rel="noopener noreferrer" style={styles.contactItem}>
                <span style={styles.contactIcon}>
                  <FaWhatsapp size={18} />
                </span>
                <span style={styles.contactText}>WhatsApp: (31) 98438-9518</span>
              </a>
            </div>
          </div>

          {/* Coluna 3 */}
          <div>
            <div style={styles.sectionTitle}>Redes</div>

            <div style={styles.iconBar} aria-label="Redes sociais e contato">
              <a className="ipamsIconBtn" href={links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
                <FaInstagram size={20} />
              </a>

              <a className="ipamsIconBtn" href={links.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook">
                <FaFacebookF size={20} />
              </a>

              <a className="ipamsIconBtn" href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                <FaLinkedinIn size={20} />
              </a>

              <a className="ipamsIconBtn" href={links.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div style={styles.bottom}>
          <span>© {new Date().getFullYear()} IPAMS Education — Instituto Professora Ângela Mathylde Soares</span>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: 64,
    background: "rgba(95, 2, 31, 0.95)",
    borderTop: "1px solid rgba(236, 231, 208, 0.22)",
    color: "rgba(236, 231, 208, 0.92)",
  },
  container: {
    maxWidth: "var(--maxw)",
    margin: "0 auto",
    padding: "34px 24px 18px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr 1fr",
    gap: 22,
  },
  title: {
    fontSize: 18,
    fontWeight: 900,
    letterSpacing: "0.2px",
  },
  subtitle: {
    fontSize: 13,
    marginTop: 4,
    color: "rgba(236, 231, 208, 0.82)",
    fontWeight: 600,
  },
  text: {
    marginTop: 12,
    maxWidth: 520,
    lineHeight: 1.6,
    color: "rgba(236, 231, 208, 0.78)",
    fontSize: 13,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 900,
    marginBottom: 10,
    color: "rgba(236, 231, 208, 0.95)",
  },
  contactList: {
    display: "grid",
    gap: 10,
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    textDecoration: "none",
    color: "rgba(236, 231, 208, 0.92)",
    padding: "10px 12px",
    borderRadius: 14,
    border: "1px solid rgba(236, 231, 208, 0.18)",
    background: "rgba(236, 231, 208, 0.06)",
  },
  contactIcon: {
    width: 34,
    height: 34,
    display: "grid",
    placeItems: "center",
    borderRadius: 12,
    border: "1px solid rgba(236, 231, 208, 0.18)",
    background: "rgba(236, 231, 208, 0.08)",
    flex: "0 0 auto",
  },
  contactText: {
    fontSize: 13,
    fontWeight: 700,
  },
  iconBar: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    alignItems: "center",
  },
  bottom: {
    marginTop: 24,
    paddingTop: 14,
    borderTop: "1px solid rgba(236, 231, 208, 0.18)",
    fontSize: 12,
    color: "rgba(236, 231, 208, 0.72)",
    textAlign: "center",
    letterSpacing: "0.2px",
  },
};
