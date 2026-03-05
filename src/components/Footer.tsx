import { Container, Text, Box, Group, Anchor } from "@mantine/core";
import { IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <Box
      style={{
        padding: "48px 0 32px",
        background: "linear-gradient(160deg, #0a1628 0%, #1a0a2e 50%, #0d1a2e 100%)",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
       <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.06, 0.12, 0.06],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        style={{
          position: "absolute",
          top: "-20%",
          right: "-5%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,136,204,0.4) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.06, 0.1, 0.06],
        }}
        transition={{ duration: 14, repeat: Infinity, delay: 2 }}
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(147,51,234,0.4) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

       <Box
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(0,136,204,0.5), rgba(147,51,234,0.5), transparent)",
        }}
      />

      <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box style={{ textAlign: "center" }}>
             <Text
              style={{
                fontSize: "1.25rem",
                fontWeight: 800,
                marginBottom: "0.25rem",
                background: "linear-gradient(135deg, #60b8f5, #c084fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.01em",
              }}
            >
              Judy Ghiyath Alqabbani
            </Text>

            <Text
              size="sm"
              style={{
                opacity: 0.55,
                marginBottom: "1.5rem",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                fontSize: "0.75rem",
                fontWeight: 500,
              }}
            >
              Flutter Developer & Software Engineer
            </Text>

             <Group justify="center" gap="lg" style={{ marginBottom: "2rem" }}>
              {[
                {
                  icon: IconBrandLinkedin,
                  href: "https://www.linkedin.com/in/judy-alqabbani-2bb5b81b4/",
                  label: "LinkedIn",
                },
                {
                  icon: IconMail,
                  href: "mailto:joudi.kab01@gmail.com",
                  label: "Email",
                },
              ].map((social, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Anchor
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      color: "rgba(255,255,255,0.55)",
                      textDecoration: "none",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.9)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                    }}
                  >
                    <social.icon size={16} />
                    {social.label}
                  </Anchor>
                </motion.div>
              ))}
            </Group>

             <Box
              style={{
                width: "40px",
                height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                margin: "0 auto 1.25rem",
              }}
            />

            <Text
              size="xs"
              style={{
                opacity: 0.4,
                letterSpacing: "0.02em",
              }}
            >
              © {new Date().getFullYear()} · All rights reserved
            </Text>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
