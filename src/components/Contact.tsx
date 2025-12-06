import {
  Container,
  Title,
  Box,
  Paper,
  SimpleGrid,
  Text,
  // Button,
  // Group,
  ThemeIcon,
} from "@mantine/core";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  // IconBrandLinkedin,
  // IconBrandGithub,
  // IconSend,
} from "@tabler/icons-react";

export function Contact() {
  return (
    <Box
      id="contact"
      style={{
        padding: "80px 0",
        backgroundColor: "#ffffff",
      }}
    >
      <Container size="lg">
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

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" mb="xl">
          <Paper
            shadow="md"
            radius="lg"
            p="xl"
            style={{
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
              textAlign: "center",
              border: "1px solid #e0e0e0",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 12px 24px rgba(0, 161, 230, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
            }}
          >
            <ThemeIcon
              size={60}
              radius="md"
              variant="gradient"
              gradient={{ from: "cyan", to: "blue", deg: 45 }}
              style={{ margin: "0 auto 1rem" }}
            >
              <IconMail size={30} />
            </ThemeIcon>
            <Title order={4} mb="xs">
              Email
            </Title>
            <Text
              size="sm"
              c="dimmed"
              component="a"
              href="mailto:joudi.kab01@gmail.com"
              style={{ textDecoration: "none", color: "#0088cc" }}
            >
              joudi.kab01@gmail.com
            </Text>
          </Paper>

          <Paper
            shadow="md"
            radius="lg"
            p="xl"
            style={{
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
              textAlign: "center",
              border: "1px solid #e0e0e0",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 12px 24px rgba(147, 51, 234, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
            }}
          >
            <ThemeIcon
              size={60}
              radius="md"
              variant="gradient"
              gradient={{ from: "violet", to: "grape", deg: 45 }}
              style={{ margin: "0 auto 1rem" }}
            >
              <IconPhone size={30} />
            </ThemeIcon>
            <Title order={4} mb="xs">
              Phone
            </Title>
            <Text
              size="sm"
              c="dimmed"
              component="a"
              href="tel:+963945475943"
              style={{ textDecoration: "none", color: "#9333ea" }}
            >
              +963 945475943
            </Text>
          </Paper>

          <Paper
            shadow="md"
            radius="lg"
            p="xl"
            style={{
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
              textAlign: "center",
              border: "1px solid #e0e0e0",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 12px 24px rgba(0, 161, 230, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
            }}
          >
            <ThemeIcon
              size={60}
              radius="md"
              variant="gradient"
              gradient={{ from: "cyan", to: "blue", deg: 45 }}
              style={{ margin: "0 auto 1rem" }}
            >
              <IconMapPin size={30} />
            </ThemeIcon>
            <Title order={4} mb="xs">
              Location
            </Title>
            <Text size="sm" c="dimmed">
              Damascus, Syria
            </Text>
          </Paper>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
