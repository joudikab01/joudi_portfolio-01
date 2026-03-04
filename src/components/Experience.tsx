import {
  Container,
  Title,
  Timeline,
  Text,
  Box,
  Badge,
  Group,
  Paper,
} from "@mantine/core";
import { IconBriefcase } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { experiences } from "../data/portfolioData";
import { processExperiences } from "../utils/dataProcessors";

const processedExperiences = processExperiences(experiences);

export function Experience() {
  return (
    <Box
      id="experience"
      style={{
        padding: "80px 0",
        background:
          "linear-gradient(135deg, #f8f9fa 0%, #e0f7ff 50%, #f3e8ff 100%)",
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
              marginBottom: "3rem",
              background: "linear-gradient(45deg, #0088cc, #9333ea)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Professional Experience
          </Title>
        </motion.div>

        <Timeline
          active={processedExperiences.length}
          bulletSize={30}
          lineWidth={3}
          color="cyan"
        >
          {processedExperiences.map((exp, index) => (
            <Timeline.Item
              key={index}
              bullet={<IconBriefcase size={16} />}
              title={
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  <motion.div
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Paper
                      shadow="md"
                      radius="lg"
                      p="xl"
                      style={{
                        cursor: "pointer",
                        backgroundColor: "#ffffff",
                        border: "1px solid #e0e0e0",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow =
                          "0 12px 24px rgba(0, 161, 230, 0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow =
                          "0 1px 3px rgba(0, 0, 0, 0.1)";
                      }}
                    >
                      <Group justify="space-between" mb="xs">
                        <Title order={3} size="h4">
                          {exp.role}
                        </Title>
                        <Badge
                          variant="gradient"
                          gradient={
                            exp.color === "cyan"
                              ? { from: "cyan", to: "blue", deg: 45 }
                              : { from: "violet", to: "grape", deg: 45 }
                          }
                          size="lg"
                        >
                          {exp.period}
                        </Badge>
                      </Group>

                      <Text
                        fw={500}
                        size="md"
                        style={{ color: "#9333ea", marginBottom: "1rem" }}
                      >
                        {exp.company}
                      </Text>

                      <Box
                        component="ul"
                        style={{ marginLeft: "1.5rem", color: "#4a5568" }}
                      >
                        {exp.description.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + i * 0.06 }}
                            style={{ marginBottom: "0.5rem", lineHeight: 1.6 }}
                          >
                            <Text size="sm">{item}</Text>
                          </motion.li>
                        ))}
                      </Box>
                    </Paper>
                  </motion.div>
                </motion.div>
              }
              style={{ marginBottom: "2rem" }}
            />
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}
