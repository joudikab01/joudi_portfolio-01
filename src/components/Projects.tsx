import {
  Container,
  Title,
  Box,
  SimpleGrid,
  Paper,
  Text,
  Badge,
  Group,
  Button,
  Image,
} from "@mantine/core";
import { IconBrandGooglePlay, IconBrandApple } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { projects } from "../data/portfolioData";
import { processProjects } from "../utils/dataProcessors";
import { GlitchText } from "./GlitchText";

const processedProjects = processProjects(projects);

export function Projects() {
  return (
    <Box
      id="projects"
      style={{
        padding: "80px 0",
        background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
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
              <GlitchText text="Featured Projects" style={{ background: "linear-gradient(135deg, #0062a3, #7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "-0.01em" }} />
            </Title>
          </Box>

          <Text
            size="lg"
            style={{
              textAlign: "center",
              maxWidth: "600px",
              margin: "1.5rem auto 3rem",
              color: "#6b7280",
              lineHeight: 1.8,
              fontWeight: 400,
            }}
          >
            Showcase of mobile applications I've developed, delivering
            innovative solutions across various industries
          </Text>
        </motion.div>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          {processedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: (index % 2) * 0.15,
              }}
              style={{ height: "100%" }}
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                style={{ height: "100%" }}
              >
                <Paper
                  shadow="sm"
                  radius="xl"
                  style={{
                    overflow: "hidden",
                    height: "100%",
                    border: "1px solid rgba(0, 136, 204, 0.1)",
                    background: "rgba(255, 255, 255, 0.9)",
                    boxShadow: "0 4px 24px rgba(0, 98, 163, 0.08)",
                    display: "flex",
                    flexDirection: "column",
                    transition: "box-shadow 0.3s ease",
                  }}
                >
                  <Box
                    style={{
                      position: "relative",
                      height: "300px",
                      overflow: "hidden",
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      style={{ height: "100%" }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        height={300}
                        fit="cover"
                      />
                    </motion.div>
                  </Box>

                  <Box
                    p="xl"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                    }}
                  >
                    <Group justify="space-between" mb="xs">
                      <Title order={3} size="h4">
                        {project.title}
                      </Title>
                      <Badge
                        variant="gradient"
                        gradient={
                          project.color === "cyan"
                            ? { from: "cyan", to: "blue", deg: 45 }
                            : { from: "violet", to: "grape", deg: 45 }
                        }
                        size="lg"
                      >
                        {project.period}
                      </Badge>
                    </Group>

                    <Text
                      fw={500}
                      size="sm"
                      c={project.color === "cyan" ? "cyan.7" : "violet.7"}
                      mb="md"
                    >
                      {project.company}
                    </Text>

                    <Text
                      size="sm"
                      c="dimmed"
                      style={{ lineHeight: 1.6, marginBottom: "1rem", flex: 1 }}
                    >
                      {project.description}
                    </Text>

                    <Group gap="xs">
                      {project.playStore && (
                        <Button
                          component="a"
                          href={project.playStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="sm"
                          variant="light"
                          color={project.color}
                          leftSection={<IconBrandGooglePlay size={18} />}
                          style={{ pointerEvents: "auto" }}
                        >
                          Play Store
                        </Button>
                      )}
                      {project.appStore && (
                        <Button
                          component="a"
                          href={project.appStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="sm"
                          variant="light"
                          color={project.color}
                          leftSection={<IconBrandApple size={18} />}
                          style={{ pointerEvents: "auto" }}
                        >
                          App Store
                        </Button>
                      )}
                    </Group>
                  </Box>
                </Paper>
              </motion.div>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
