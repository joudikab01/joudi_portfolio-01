import { Container, Title, Text, Button, Group, Box } from "@mantine/core";
import {
  IconBrandLinkedin,
  IconMail,
  IconDownload,
} from "@tabler/icons-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { cvPath } from "../data/portfolioData";
import { GlitchText } from "./GlitchText";

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 30,
        y: (e.clientY - window.innerHeight / 2) / 30,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Box
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background:
          "linear-gradient(160deg, #f0f9ff 0%, #faf5ff 40%, #f0f9ff 70%, #f5f0ff 100%)",
        paddingTop: "60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        style={{ y: y1, opacity }}
        animate={{
          borderRadius: [
            "30% 70% 70% 30% / 30% 30% 70% 70%",
            "70% 30% 30% 70% / 70% 70% 30% 30%",
            "50% 50% 50% 50% / 50% 50% 50% 50%",
            "30% 70% 70% 30% / 30% 30% 70% 70%",
          ],
          scale: [1, 1.3, 1.1, 1],
          rotate: [0, 90, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "5%",
            right: "5%",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(0,161,230,0.25) 0%, rgba(0,161,230,0.05) 50%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: y2, opacity }}
        animate={{
          borderRadius: [
            "70% 30% 30% 70% / 70% 70% 30% 30%",
            "30% 70% 70% 30% / 30% 30% 70% 70%",
            "50% 50% 50% 50% / 50% 50% 50% 50%",
            "70% 30% 30% 70% / 70% 70% 30% 30%",
          ],
          scale: [1, 1.2, 1.4, 1],
          rotate: [360, 270, 90, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "0%",
            width: "700px",
            height: "700px",
            background:
              "radial-gradient(circle, rgba(147,51,234,0.25) 0%, rgba(147,51,234,0.05) 50%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
      </motion.div>

      <motion.div
        animate={{
          x: mousePosition.x * 2,
          y: mousePosition.y * 2,
          scale: [1, 1.1, 1],
        }}
        transition={{
          x: { type: "spring", stiffness: 50, damping: 20 },
          y: { type: "spring", stiffness: 50, damping: 20 },
          scale: { duration: 3, repeat: Infinity },
        }}
        style={{
          position: "absolute",
          top: "25%",
          right: "15%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,161,230,0.2) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -200 - i * 10, 0],
            x: [0, Math.sin(i) * 150, 0],
            scale: [1, 2, 1],
            opacity: [0.2, 1, 0.2],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 10 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            bottom: `${5 + ((i * 3) % 90)}%`,
            left: `${(i * 3.3) % 100}%`,
            width: `${3 + (i % 4) * 2}px`,
            height: `${3 + (i % 4) * 2}px`,
            borderRadius: "50%",
            backgroundColor:
              i % 3 === 0 ? "#00a1e6" : i % 3 === 1 ? "#9333ea" : "#c084fc",
            boxShadow: `0 0 ${15 + (i % 20)}px ${
              i % 3 === 0 ? "#00a1e6" : i % 3 === 1 ? "#9333ea" : "#c084fc"
            }`,
            filter: "blur(1px)",
          }}
        />
      ))}

      <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
        <motion.div style={{ scale, opacity }}>
          <Box
            style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
          >
             <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ marginBottom: "1.5rem" }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.4rem 1.2rem",
                  borderRadius: "999px",
                  background: "rgba(0, 136, 204, 0.08)",
                  border: "1px solid rgba(0, 136, 204, 0.2)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#0088cc",
                  letterSpacing: "0.03em",
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    backgroundColor: "#22c55e",
                    boxShadow: "0 0 0 2px rgba(34, 197, 94, 0.3)",
                    display: "inline-block",
                  }}
                />
                Available for opportunities
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100, rotateX: 90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.2,
                type: "spring",
                stiffness: 100,
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              <Title
                order={1}
                style={{
                  fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
                  fontWeight: 800,
                  marginBottom: "1rem",
                  background:
                    "linear-gradient(135deg, #0062a3 0%, #6d28d9 60%, #9333ea 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                }}
              >
                Judy Ghiyath Alqabbani
              </Title>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.5,
                type: "spring",
                stiffness: 80,
              }}
            >
              <Title
                order={2}
                style={{
                  fontSize: "clamp(1.2rem, 4vw, 2rem)",
                  fontWeight: 500,
                  marginBottom: "1.5rem",
                  letterSpacing: "0.01em",
                  display: "block",
                }}
              >
                <GlitchText
                  words={["Software Engineer", "Flutter Developer", "Project Manager", "Product Owner"]}
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #0062a3)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    letterSpacing: "0.01em",
                  }}
                />
              </Title>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <Text
                size="lg"
                style={{
                  marginBottom: "2rem",
                  lineHeight: 1.8,
                  color: "#6b7280",
                  maxWidth: "620px",
                  margin: "0 auto 2rem",
                  fontSize: "clamp(1rem, 2vw, 1.15rem)",
                  fontWeight: 400,
                }}
              >
                Results-driven Product Owner and System Analyst with a strong software engineering background and hands-on experience leading cross-functional teams, owning product lifecycles, and driving business aligned technical solutions.
                Proven ability to translate complex business needs into clear product requirements, prioritize backlogs, manage stakeholders, and ensure high-quality delivery across multiple large-scale systems. 
                Strong advocate of Agile practices, continuous improvement, and user-centered product design.
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <Group justify="center" gap="md" style={{ marginBottom: "2rem" }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  whileHover={{
                    scale: 1.1,
                    rotateY: 10,
                    rotateX: -5,
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <Button
                    component="a"
                    href="#contact"
                    size="lg"
                    radius="xl"
                    style={{
                      background: "linear-gradient(135deg, #0062a3, #7c3aed)",
                      boxShadow: "0 8px 24px rgba(0, 98, 163, 0.3)",
                      paddingLeft: "2rem",
                      paddingRight: "2rem",
                      fontWeight: 600,
                      letterSpacing: "0.02em",
                    }}
                    leftSection={<IconMail size={18} />}
                  >
                    Get In Touch
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  whileHover={{
                    scale: 1.1,
                    rotateY: -10,
                    rotateX: 5,
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <Button
                    component="a"
                    href={cvPath}
                    download="Eng. Judy Alqabbani - Product Owner.pdf"
                    variant="outline"
                    size="lg"
                    radius="xl"
                    style={{
                      borderWidth: "1.5px",
                      borderColor: "rgba(0, 98, 163, 0.4)",
                      color: "#0062a3",
                      paddingLeft: "2rem",
                      paddingRight: "2rem",
                      fontWeight: 600,
                      letterSpacing: "0.02em",
                      boxShadow: "0 4px 12px rgba(0, 98, 163, 0.1)",
                    }}
                    leftSection={<IconDownload size={18} />}
                  >
                    Download CV
                  </Button>
                </motion.div>
              </Group>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Group justify="center" gap="lg">
                {[
               
                  {
                    icon: IconBrandLinkedin,
                    href: "https://www.linkedin.com/in/judy-alqabbani-2bb5b81b4/",
                    color: "blue",
                    label: "LinkedIn",
                  },
                  {
                    icon: IconMail,
                    href: "mailto:joudi.kab01@gmail.com",
                    color: "red",
                    label: "Email",
                  },
                ].map((social, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 1.3 + i * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{
                      scale: 1.3,
                      rotate: [0, -10, 10, 0],
                      y: -5,
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      component="a"
                      href={social.href}
                      target="_blank"
                      variant="subtle"
                      color={social.color}
                      leftSection={<social.icon size={24} />}
                    >
                      {social.label}
                    </Button>
                  </motion.div>
                ))}
              </Group>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
