import {
  Container,
  Title,
  Text,
  Box,
  Paper,
  SimpleGrid,
  ThemeIcon,
} from "@mantine/core";
import { motion } from "framer-motion";
import { aboutMe, features } from "../data/portfolioData";
import { processFeatures } from "../utils/dataProcessors";
import { GlitchText } from "./GlitchText";

const processedFeatures = processFeatures(features);

export function About() {
  return (
    <Box
      id="about"
      style={{
        padding: "80px 0",
        backgroundColor: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(0,161,230,0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(50px)",
        }}
      />

      <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <Box style={{ textAlign: "center", marginBottom: "1rem" }}>
            <Title
              order={2}
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 700,
                display: "inline-block",
              }}
            >
              <GlitchText
                text={aboutMe.title}
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Text
              size="lg"
              style={{
                textAlign: "center",
                // maxWidth: "700px",
                margin: "1.5rem auto 3rem",
                color: "#6b7280",
                lineHeight: 1.8,
                fontWeight: 400,
              }}
            >
              {aboutMe.description}
            </Text>
          </motion.div>
        </motion.div>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
          {processedFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
                rotateY: 45,
              }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
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
                  scale: 1.05,
                  rotateY: index % 2 === 0 ? 5 : -5,
                  rotateX: -5,
                  z: 50,
                }}
                transition={{ duration: 0.4 }}
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
                    border: "1px solid rgba(0, 136, 204, 0.1)",
                    height: "100%",
                    background: "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(8px)",
                    boxShadow:
                      "0 4px 24px rgba(0, 98, 163, 0.07), 0 1px 2px rgba(0,0,0,0.04)",
                    transition: "box-shadow 0.3s ease, transform 0.3s ease",
                  }}
                >
                  <motion.div
                    whileHover={{
                      rotate: 360,
                      scale: 1.2,
                    }}
                    transition={{ duration: 0.8, type: "spring" }}
                  >
                    <ThemeIcon
                      size={60}
                      radius="md"
                      variant="gradient"
                      gradient={
                        feature.color === "cyan"
                          ? { from: "cyan", to: "blue", deg: 45 }
                          : { from: "violet", to: "grape", deg: 45 }
                      }
                      style={{ marginBottom: "1rem" }}
                    >
                      <feature.icon />
                    </ThemeIcon>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <Title
                      order={3}
                      style={{ marginBottom: "0.5rem", fontSize: "1.25rem" }}
                    >
                      {feature.title}
                    </Title>

                    <Text style={{ color: "#718096", lineHeight: 1.6 }}>
                      {feature.description}
                    </Text>
                  </motion.div>
                </Paper>
              </motion.div>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
