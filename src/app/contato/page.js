import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

export default function ContatoPage() {
  const links = {
    email: "contato@draangelamathylde.com",
    whatsapp: "5531984389518",
    instagram: "https://www.instagram.com/draangelamathylde",
    facebook: "https://www.facebook.com/angelamathyldesoares",
    linkedin: "https://www.linkedin.com/in/angela-mathylde-soares-47452522",
    youtube: "https://www.youtube.com/@aprendizagemecompanhia3109",
  };

  const emailHref = `mailto:${links.email}`;
  const whatsHref = `https://wa.me/${links.whatsapp}`;

  const redes = [
    { href: links.instagram, label: "Instagram", icon: <FaInstagram size={26} /> },
    { href: links.facebook, label: "Facebook", icon: <FaFacebookF size={26} /> },
    { href: links.linkedin, label: "LinkedIn", icon: <FaLinkedinIn size={26} /> },
    { href: links.youtube, label: "YouTube", icon: <FaYoutube size={26} /> },
  ];

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>Contato</h1>
        <p style={styles.subtitle}>
          Estes são os canais oficiais do IPAMS Education e da Dra. Ângela Mathylde.
        </p>
      </header>

      <section style={styles.grid}>
        {/* Card WhatsApp */}
        <a
          href={whatsHref}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.card}
        >
          <div style={styles.cardTop}>
            <span style={styles.badge}>Resposta mais rápida</span>
          </div>

          <div style={styles.cardIcon}>
            <FaWhatsapp size={26} color="rgba(236, 231, 208, 0.96)" />
          </div>

          <div style={styles.cardTitle}>WhatsApp</div>
          <div style={styles.cardText}>(31) 98438-9518</div>

          <div style={styles.cardHint}>Clique para abrir a conversa</div>
        </a>

        {/* Card E-mail */}
        <a href={emailHref} style={styles.card}>
          <div style={styles.cardTop}>
            <span style={styles.badgeAlt}>Documentos / solicitações</span>
          </div>

          <div style={styles.cardIcon}>
            <FaEnvelope size={26} color="rgba(236, 231, 208, 0.96)" />
          </div>

          <div style={styles.cardTitle}>E-mail</div>
          <div style={styles.cardText}>{links.email}</div>

          <div style={styles.cardHint}>Clique para abrir seu aplicativo de e-mail</div>
        </a>

        {/* Card Redes */}
        <div style={{ ...styles.card, ...styles.cardNoLink }}>
          <div style={styles.cardTop}>
            <span style={styles.badgeSoft}>Acompanhe conteúdos e novidades</span>
          </div>



          <div style={styles.socialRow} aria-label="Redes sociais">
            {redes.map((r) => (
              <a
                key={r.label}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialBtn}
                aria-label={r.label}
                title={r.label}
              >
                {r.icon}
              </a>
            ))}
          </div>

          <div style={styles.cardTitle}>Redes sociais</div>

          <div style={styles.cardTextSmall}>
            Acesse os perfis oficiais <strong>acima</strong> para acompanhar conteúdos e novidades.
          </div>
        </div>
      </section>

      {/* Bloco institucional */}
      <section style={styles.info}>
        <h2 style={styles.infoTitle}>Canais oficiais</h2>
        <p style={styles.infoText}>
          Para informações institucionais, parcerias, eventos, palestras e cursos, utilize os
          canais acima. Quando necessário, inclua no e-mail seu nome, assunto e o motivo do contato.
        </p>
      </section>
    </main>
  );
}

const styles = {
  page: {
    maxWidth: "var(--maxw)",
    margin: "0 auto",
    padding: "48px 24px 28px",
  },

  header: {
    marginBottom: 22,
  },
  title: {
    fontSize: 40,
    margin: 0,
    color: "var(--wine)",
    letterSpacing: "-0.6px",
  },
  subtitle: {
    marginTop: 10,
    color: "rgba(0,0,0,0.65)",
    maxWidth: 720,
    lineHeight: 1.6,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 18,
    marginTop: 18,
  },

  card: {
    textDecoration: "none",
    color: "inherit",
    borderRadius: 20,
    border: "1px solid rgba(95, 2, 31, 0.14)",
    background: "rgba(236, 231, 208, 0.40)",
    padding: "18px 18px 16px",
    boxShadow: "0 8px 22px rgba(0,0,0,0.06)",
    transition:
      "transform 0.12s ease, box-shadow 0.12s ease, background 0.12s ease",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },

  cardNoLink: {
    cursor: "default",
  },

  cardTop: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 10,
  },
  badge: {
    fontSize: 12,
    fontWeight: 900,
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(95, 2, 31, 0.14)",
    color: "var(--wine)",
    border: "1px solid rgba(95, 2, 31, 0.18)",
  },
  badgeAlt: {
    fontSize: 12,
    fontWeight: 900,
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(95, 2, 31, 0.10)",
    color: "var(--wine)",
    border: "1px solid rgba(95, 2, 31, 0.16)",
  },
  badgeSoft: {
    fontSize: 12,
    fontWeight: 900,
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(95, 2, 31, 0.08)",
    color: "var(--wine)",
    border: "1px solid rgba(95, 2, 31, 0.12)",
  },

  cardIcon: {
    width: 52,
    height: 52,
    borderRadius: 16,
    display: "grid",
    placeItems: "center",
    background: "rgba(95, 2, 31, 0.92)",
    color: "rgba(236, 231, 208, 0.96)",
    border: "1px solid rgba(236, 231, 208, 0.28)",
    marginBottom: 12,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: 900,
    color: "rgba(0,0,0,0.86)",
    marginBottom: 6,
  },
  cardText: {
    fontSize: 14,
    fontWeight: 800,
    color: "rgba(0,0,0,0.72)",
    marginBottom: 10,
  },
  cardTextSmall: {
    fontSize: 13,
    fontWeight: 700,
    color: "rgba(0,0,0,0.64)",
    marginBottom: 12,
    lineHeight: 1.5,
  },
  cardHint: {
    fontSize: 12,
    fontWeight: 700,
    color: "rgba(95, 2, 31, 0.74)",
  },

  socialRow: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  socialBtn: {
    width: 52,
    height: 52,
    borderRadius: 16,
    display: "grid",
    placeItems: "center",
    textDecoration: "none",
    color: "rgba(236, 231, 208, 0.95)",
    background: "rgba(95, 2, 31, 0.92)",
    border: "1px solid rgba(236, 231, 208, 0.22)",
    transition: "transform 0.12s ease, filter 0.12s ease",
  },

  info: {
    marginTop: 26,
    borderRadius: 20,
    border: "1px solid rgba(95, 2, 31, 0.12)",
    background: "rgba(255,255,255,0.7)",
    padding: "18px 18px",
  },
  infoTitle: {
    margin: 0,
    fontSize: 18,
    fontWeight: 900,
    color: "var(--wine)",
  },
  infoText: {
    marginTop: 10,
    marginBottom: 0,
    lineHeight: 1.7,
    color: "rgba(0,0,0,0.68)",
    maxWidth: 920,
  },
};
