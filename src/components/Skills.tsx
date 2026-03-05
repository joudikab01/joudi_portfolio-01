import {
  Container,
  Title,
  Box,
  SimpleGrid,
  Paper,
  Group,
  Badge,
  Text,
} from "@mantine/core";
import { motion } from "framer-motion";
import { skillCategories, languages } from "../data/portfolioData";
import { processSkillCategories } from "../utils/dataProcessors";
import { GlitchText } from "./GlitchText";

const processedSkillCategories = processSkillCategories(skillCategories);

export function Skills() {
  return (
    <Box
      id="skills"
      style={{
        padding: "80px 0",
        backgroundColor: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(i) * 50, 0],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          style={{
            position: "absolute",
            width: "3px",
            height: "3px",
            borderRadius: "50%",
            backgroundColor: i % 2 === 0 ? "#00a1e6" : "#9333ea",
            left: `${(i * 7) % 100}%`,
            top: `${(i * 5) % 100}%`,
            filter: "blur(1px)",
          }}
        />
      ))}

      <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <Box style={{ textAlign: "center", marginBottom: "1rem" }}>
            <Title order={2} style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, display: "inline-block" }}>
              <GlitchText
                text="Skills & Technologies"
                style={{
                  background: "linear-gradient(135deg, #0062a3, #7c3aed)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "-0.01em",
                }}
              />
            </Title>
          </Box>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
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
              Comprehensive technical expertise across mobile, web, and software
              development
            </Text>
          </motion.div>
        </motion.div>

        <SimpleGrid cols={{ base: 1, md: 2, lg: 2 }} spacing="xl">
          {processedSkillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: (index % 2) * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.03,
                  rotateX: -3,
                  rotateY: index % 2 === 0 ? 3 : -3,
                  z: 30,
                }}
                transition={{ duration: 0.3 }}
                style={{
                  transformStyle: "preserve-3d",
                  height: "100%",
                }}
              >
                <Paper
                  shadow="sm"
                  radius="xl"
                  p="xl"
                  style={{
                    cursor: "pointer",
                    border: "1px solid rgba(147, 51, 234, 0.08)",
                    height: "100%",
                    background: "rgba(255, 255, 255, 0.85)",
                    backdropFilter: "blur(8px)",
                    boxShadow: "0 4px 24px rgba(109, 40, 217, 0.06), 0 1px 2px rgba(0,0,0,0.04)",
                  }}
                >
                  <Group mb="md">
                    <motion.div
                      whileHover={{
                        rotate: [0, -15, 15, -15, 0],
                        scale: 1.2,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <Box
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background:
                            category.color === "cyan"
                              ? "linear-gradient(45deg, #00a1e6, #0088cc)"
                              : "linear-gradient(45deg, #9333ea, #7c3aed)",
                        }}
                      >
                        <category.icon color="white" />
                      </Box>
                    </motion.div>
                    <Title order={3} size="h4">
                      {category.title}
                    </Title>
                  </Group>

                  <Group gap="xs">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: 0.3 + skillIndex * 0.05,
                          type: "spring",
                          stiffness: 200,
                        }}
                        whileHover={{
                          scale: 1.15,
                          rotate: [0, -5, 5, 0],
                          y: -3,
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge
                          variant="light"
                          color={category.color}
                          size="md"
                          radius="md"
                          style={{
                            cursor: "pointer",
                          }}
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </Group>
                </Paper>
              </motion.div>
            </motion.div>
          ))}
        </SimpleGrid>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Paper
            shadow="lg"
            radius="lg"
            p="xl"
            mt="xl"
            style={{
              background: "linear-gradient(135deg, #e0f7ff 0%, #f3e8ff 100%)",
              border: "none",
            }}
          >
            <Title order={3} size="h4" mb="md" ta="center">
              Languages
            </Title>
            <Group justify="center" gap="xl">
              {languages.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + i * 0.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                  }}
                >
                  <Box ta="center">
                    <Badge
                      size="xl"
                      variant="gradient"
                      gradient={
                        i === 0
                          ? { from: "cyan", to: "blue", deg: 45 }
                          : { from: "violet", to: "grape", deg: 45 }
                      }
                      style={{ marginBottom: "0.5rem" }}
                    >
                      {item.lang}
                    </Badge>
                    <Text size="sm" c="dimmed">
                      {item.level}
                    </Text>
                  </Box>
                </motion.div>
              ))}
            </Group>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}
