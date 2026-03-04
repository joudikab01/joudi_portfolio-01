import { useState } from "react";
import {
  Container,
  Title,
  Text,
  Box,
  Paper,
  Group,
  Avatar,
  Stack,
  ActionIcon,
  Badge,
} from "@mantine/core";
import { IconChevronLeft, IconChevronRight, IconQuote, IconBrandLinkedin } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { recommendations } from "../data/portfolioData";

export function Recommendations() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (index: number) => {
    setDirection(index > active ? 1 : -1);
    setActive(index);
  };

  const prev = () => goTo((active - 1 + recommendations.length) % recommendations.length);
  const next = () => goTo((active + 1) % recommendations.length);

  const rec = recommendations[active];

  const initials = rec.name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <Box
      id="recommendations"
      style={{
        padding: "80px 0",
        background: "linear-gradient(135deg, #f8f9fa 0%, #e0f7ff 50%, #f3e8ff 100%)",
      }}
    >
      <Container size="md">
        <Title
          order={2}
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "0.75rem",
            background: "linear-gradient(45deg, #0088cc, #9333ea)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Recommendations
        </Title>

        <Text
          size="md"
          style={{ textAlign: "center", color: "#718096", marginBottom: "3rem" }}
        >
          What colleagues say about working with me
        </Text>

        <Box style={{ position: "relative" }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <Paper
                shadow="xl"
                radius="xl"
                p="xl"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(147, 51, 234, 0.12)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                 <Box
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: "linear-gradient(90deg, #0088cc, #9333ea)",
                  }}
                />

                 <Box
                  style={{
                    position: "absolute",
                    top: "1.5rem",
                    right: "1.5rem",
                    opacity: 0.06,
                  }}
                >
                  <IconQuote size={80} color="#9333ea" />
                </Box>

                 <Text
                  size="md"
                  style={{
                    color: "#2d3748",
                    lineHeight: 1.85,
                    fontStyle: "italic",
                    marginBottom: "2rem",
                    marginTop: "1rem",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  "{rec.message}"
                </Text>

                 <Group justify="space-between" align="flex-end">
                  <Group gap="md">
                    <Avatar
                      size={52}
                      radius="xl"
                      style={{
                        background: "linear-gradient(135deg, #0088cc, #9333ea)",
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: "1rem",
                        flexShrink: 0,
                      }}
                    >
                      {initials}
                    </Avatar>
                    <Stack gap={2}>
                      <Text fw={700} size="md" style={{ color: "#1a202c" }}>
                        {rec.name}
                      </Text>
                      <Text size="sm" style={{ color: "#9333ea", fontWeight: 500 }}>
                        {rec.title}
                      </Text>
                      <Text size="xs" style={{ color: "#a0aec0" }}>
                        {rec.relationship}
                      </Text>
                    </Stack>
                  </Group>

                  {rec.linkedin && (
                    <Badge
                      component="a"
                      href={rec.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="light"
                      color="blue"
                      size="lg"
                      radius="md"
                      leftSection={<IconBrandLinkedin size={14} />}
                      style={{
                        cursor: "pointer",
                        textDecoration: "none",
                        border: "1px solid rgba(0,119,181,0.2)",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                        e.currentTarget.style.backgroundColor = "#0077b5";
                        e.currentTarget.style.color = "#fff";
                      }}
                      onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
                        e.currentTarget.style.backgroundColor = "";
                        e.currentTarget.style.color = "";
                      }}
                    >
                      via LinkedIn
                    </Badge>
                  )}
                </Group>
              </Paper>
            </motion.div>
          </AnimatePresence>

           {recommendations.length > 1 && (
            <Group justify="center" gap="md" style={{ marginTop: "2rem" }}>
              <ActionIcon
                variant="light"
                color="blue"
                size="lg"
                radius="xl"
                onClick={prev}
                style={{ border: "1px solid rgba(0,136,204,0.25)" }}
              >
                <IconChevronLeft size={18} />
              </ActionIcon>

              <Group gap={8}>
                {recommendations.map((_, i) => (
                  <Box
                    key={i}
                    onClick={() => goTo(i)}
                    style={{
                      width: i === active ? 24 : 8,
                      height: 8,
                      borderRadius: 4,
                      background:
                        i === active
                          ? "linear-gradient(90deg, #0088cc, #9333ea)"
                          : "#cbd5e0",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                  />
                ))}
              </Group>

              <ActionIcon
                variant="light"
                color="violet"
                size="lg"
                radius="xl"
                onClick={next}
                style={{ border: "1px solid rgba(147,51,234,0.25)" }}
              >
                <IconChevronRight size={18} />
              </ActionIcon>
            </Group>
          )}
        </Box>
      </Container>
    </Box>
  );
}
