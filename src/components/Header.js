"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

export default function Header() {
    const pathname = usePathname();
    const [openMenu, setOpenMenu] = useState(null); // "instituto" | "formacao" | "conteudos" | null
    const navRef = useRef(null);
    const closeTimer = useRef(null);

    // Fecha dropdown ao clicar fora
    useEffect(() => {
        function onDocMouseDown(e) {
            if (!navRef.current) return;
            if (!navRef.current.contains(e.target)) {
                setOpenMenu(null);
            }
        }
        document.addEventListener("mousedown", onDocMouseDown);
        return () => document.removeEventListener("mousedown", onDocMouseDown);
    }, []);

    // Fecha dropdown ao apertar ESC
    useEffect(() => {
        function onKeyDown(e) {
            if (e.key === "Escape") setOpenMenu(null);
        }
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, []);

    const navItems = useMemo(
        () => [
            { type: "link", href: "/", label: "Home" },

            {
                type: "menu",
                key: "instituto",
                label: "Instituto",
                items: [
                    { href: "/instituto", label: "Sobre o IPAMS" },
                    { href: "/instituto/fundadora", label: "Dra. Ângela" },
                    { href: "/instituto/parceiros", label: "Parceiros" },
                    { href: "/instituto/premiacoes", label: "Premiações" },
                    { href: "/instituto/na-midia", label: "Na Mídia" },
                    { href: "/instituto/feedbacks", label: "Feedbacks" },
                ],
            },

            {
                type: "menu",
                key: "formacao",
                label: "Formação",
                items: [
                    { href: "/formacao/cursos", label: "Palestras e Cursos" },
                    { href: "/formacao/eventos", label: "Eventos" },
                    { href: "/formacao/ppai-m", label: "PPAI-M" },
                ],
            },

            {
                type: "menu",
                key: "conteudos",
                label: "Conteúdos",
                items: [
                    { href: "/conteudos/ebooks", label: "Ebooks" },
                    { href: "/conteudos/livros", label: "Livros" },
                    { href: "/conteudos/galeria", label: "Galeria" },
                ],
            },

            { type: "link", href: "/loja", label: "Loja" },
            { type: "link", href: "/contato", label: "Contato" },
        ],
        []
    );

    function isActiveLink(href) {
        if (href === "/") return pathname === "/";
        return pathname === href || pathname.startsWith(href + "/");
    }

    function isMenuActive(items) {
        return items.some((i) => isActiveLink(i.href));
    }

    function open(key) {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setOpenMenu(key);
    }

    function scheduleClose() {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
    }


    return (
        <header style={styles.header}>
            <div style={styles.container}>
                <Link href="/" style={styles.brand} onClick={() => setOpenMenu(null)}>
                    <div style={styles.logoWrap}>
                        <Image
                            src="/logo-ipams.png"
                            alt="IPAMS Education - Instituto Professora Ângela Mathylde Soares"
                            fill
                            priority
                            style={{ objectFit: "contain" }}
                        />
                    </div>

                    <div style={styles.brandText}>
                        <div style={styles.brandTitle}>IPAMS Education</div>
                        <div style={styles.brandSubtitle}>
                            Instituto Professora Ângela Mathylde Soares
                        </div>
                    </div>
                </Link>

                <nav style={styles.nav} ref={navRef}>
                    {navItems.map((item) => {
                        if (item.type === "link") {
                            const active = isActiveLink(item.href);
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    style={{
                                        ...styles.link,
                                        ...(active ? styles.linkActive : null),
                                    }}
                                    onClick={() => setOpenMenu(null)}
                                >
                                    {item.label}
                                </Link>
                            );
                        }

                        // Dropdown
                        const active = isMenuActive(item.items);
                        const isOpen = openMenu === item.key;

                        return (
                            <div
                                key={item.key}
                                style={styles.menuWrap}
                                onMouseEnter={() => open(item.key)}
                                onMouseLeave={() => scheduleClose()}
                            >
                                <button
                                    type="button"
                                    style={{
                                        ...styles.menuButton,
                                        ...(active ? styles.linkActive : null),
                                    }}
                                    onClick={() => setOpenMenu(isOpen ? null : item.key)}
                                    aria-haspopup="menu"
                                    aria-expanded={isOpen ? "true" : "false"}
                                >
                                    {item.label}
                                    <span style={styles.chevron}>{isOpen ? "▴" : "▾"}</span>
                                </button>

                                {isOpen && (
                                    <div
                                        style={styles.dropdown}
                                        role="menu"
                                        onMouseEnter={() => open(item.key)}
                                        onMouseLeave={() => scheduleClose()}
                                    >
                                        {item.items.map((sub) => {
                                            const subActive = isActiveLink(sub.href);
                                            return (
                                                <Link
                                                    key={sub.href}
                                                    href={sub.href}
                                                    style={{
                                                        ...styles.dropdownItem,
                                                        ...(subActive ? styles.dropdownItemActive : null),
                                                    }}
                                                    onClick={() => setOpenMenu(null)}
                                                    role="menuitem"
                                                >
                                                    {sub.label}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
}

const styles = {
    header: {
  position: "sticky",
  top: 0,
  zIndex: 20,
  background: "rgba(95, 2, 31, 0.92)",
  backdropFilter: "blur(10px)",
  borderBottom: "1px solid rgba(236, 231, 208, 0.20)",
},

    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "var(--maxw)",
        margin: "0 auto",
        padding: "12px 24px",
        gap: "16px",
    },

    brand: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        textDecoration: "none",
        minWidth: 0,
    },
    logoWrap: {
  width: 48,
  height: 48,
  borderRadius: "50%",
  overflow: "hidden",
  border: "1px solid rgba(236, 231, 208, 0.35)",
  background: "var(--cream)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: "0 0 auto",
  position: "relative",
},



    brandText: {
        display: "flex",
        flexDirection: "column",
        lineHeight: 1.15,
        minWidth: 0,
    },
    brandTitle: {
  color: "var(--cream)",
  fontSize: 16,
  fontWeight: 900,
  letterSpacing: "0.3px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
},
    brandSubtitle: {
  color: "rgba(236, 231, 208, 0.82)",
  fontSize: 12,
  fontWeight: 600,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
},


    nav: {
        display: "flex",
        gap: "10px",
        alignItems: "center",
        flex: "0 0 auto",
    },

    link: {
  textDecoration: "none",
  color: "rgba(236, 231, 208, 0.88)",
  fontSize: 14,
  padding: "10px 12px",
  borderRadius: 12,
  transition: "background .15s ease, color .15s ease",
},
    linkActive: {
  color: "var(--cream)",
  background: "rgba(236, 231, 208, 0.16)",
  fontWeight: 800,
},


    menuWrap: {
        position: "relative",
        display: "flex",
        alignItems: "center",
    },
    menuButton: {
  border: "none",
  cursor: "pointer",
  background: "transparent",
  color: "rgba(236, 231, 208, 0.88)",
  fontSize: 14,
  padding: "10px 12px",
  borderRadius: 12,
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  transition: "background .15s ease, color .15s ease",
},
    chevron: {
        fontSize: 12,
        opacity: 0.9,
        transform: "translateY(-1px)",
    },

    dropdown: {
  position: "absolute",
  top: "100%",
  right: 0,
  marginTop: 0,
  minWidth: 220,
  background: "rgba(236, 231, 208, 0.98)",
  border: "1px solid rgba(95, 2, 31, 0.18)",
  borderRadius: 14,
  padding: 8,
  boxShadow: "0 16px 40px rgba(0,0,0,0.22)",
},


    dropdownItem: {
  display: "block",
  padding: "10px 12px",
  borderRadius: 10,
  textDecoration: "none",
  color: "rgba(55, 10, 24, 0.95)",
  fontSize: 14,
  fontWeight: 700,
  transition: "background .15s ease, transform .15s ease",
},
    dropdownItemActive: {
  background: "rgba(95, 2, 31, 0.10)",
},

};
