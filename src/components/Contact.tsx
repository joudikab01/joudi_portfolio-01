import {
  Container,
  Title,
  Box,
  Paper,
  SimpleGrid,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { IconMail, IconPhone, IconMapPin } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { GlitchText } from "./GlitchText";

const cards = [
  {
    icon: IconMail,
    label: "Email",
    value: "joudi.kab01@gmail.com",
    href: "mailto:joudi.kab01@gmail.com",
    gradient: { from: "cyan", to: "blue", deg: 45 } as const,
    shadow: "rgba(0, 161, 230, 0.2)",
    color: "#0088cc",
  },
  {
    icon: IconPhone,
    label: "Phone",
    value: "+963 945475943",
    href: "tel:+963945475943",
    gradient: { from: "violet", to: "grape", deg: 45 } as const,
    shadow: "rgba(147, 51, 234, 0.2)",
    color: "#9333ea",
  },
  {
    icon: IconMapPin,
    label: "Location",
    value: "Damascus, Syria",
    href: undefined,
    gradient: { from: "cyan", to: "blue", deg: 45 } as const,
    shadow: "rgba(0, 161, 230, 0.2)",
    color: "#0088cc",
  },
];

export function Contact() {
  return (
    <Box
      id="contact"
      style={{
        padding: "80px 0",
        background: "linear-gradient(160deg, #f0f9ff 0%, #faf5ff 50%, #f0f4ff 100%)",
      }}
    >
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box style={{ textAlign: "center", marginBottom: "1rem" }}>
            <Title order={2} style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, display: "inline-block" }}>
              <GlitchText
                text="Get In Touch"
                style={{
                  background: "linear-gradient(135deg, #0062a3, #7c3aed)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "-0.01em",
                }}
              />
            </Title>
          </Box>

          <Text
            size="lg"
            style={{
              textAlign: "center",
              maxWidth: "500px",
              margin: "1.5rem auto 3rem",
              color: "#6b7280",
              lineHeight: 1.8,
              fontWeight: 400,
            }}
          >
            I'm always open to new opportunities and collaborations. Feel free to
            reach out!
          </Text>
        </motion.div>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" mb="xl">
          {cards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Paper
                shadow="sm"
                radius="xl"
                p="xl"
                style={{
                  cursor: "pointer",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.9)",
                  height: "100%",
                  background: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                  transition: "box-shadow 0.3s ease, transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 12px 32px ${card.shadow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)";
                }}
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                >
                  <ThemeIcon
                    size={60}
                    radius="md"
                    variant="gradient"
                    gradient={card.gradient}
                    style={{ margin: "0 auto 1rem" }}
                  >
                    <card.icon size={30} />
                  </ThemeIcon>
                </motion.div>

                <Title order={4} mb="xs">
                  {card.label}
                </Title>

                <Text
                  size="sm"
                  c="dimmed"
                  component={card.href ? "a" : "p"}
                  href={card.href}
                  style={{
                    textDecoration: "none",
                    color: card.color,
                  }}
                >
                  {card.value}
                </Text>
              </Paper>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
