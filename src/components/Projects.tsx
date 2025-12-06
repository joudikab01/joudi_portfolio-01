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
            Featured Projects
          </Title>

          <Text
            size="lg"
            style={{
              textAlign: "center",
              maxWidth: "700px",
              margin: "0 auto 3rem",
              color: "#4a5568",
              lineHeight: 1.7,
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
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Paper
                  shadow="lg"
                  radius="lg"
                  style={{
                    overflow: "hidden",
                    height: "100%",
                    border: "1px solid #e0e0e0",
                    boxShadow: "0 10px 30px rgba(0, 161, 230, 0.15)",
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

                  <Box p="xl">
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
                      style={{ lineHeight: 1.6, marginBottom: "1rem" }}
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
