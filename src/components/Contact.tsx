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
        background: "linear-gradient(135deg, #f8f9fa 0%, #e0f7ff 50%, #f3e8ff 100%)",
      }}
    >
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Title
            order={2}
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              textAlign: "center",
              marginBottom: "1rem",
              background: "linear-gradient(45deg, #0088cc, #9333ea)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Get In Touch
          </Title>

          <Text
            size="lg"
            style={{
              textAlign: "center",
              maxWidth: "600px",
              margin: "0 auto 3rem",
              color: "#4a5568",
              lineHeight: 1.7,
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
                shadow="md"
                radius="lg"
                p="xl"
                style={{
                  cursor: "pointer",
                  textAlign: "center",
                  border: "1px solid #e0e0e0",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 12px 24px ${card.shadow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.1)";
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
