import { Container, Text, Box } from "@mantine/core";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <Box
      style={{
        padding: "20px 0 0px",
        background: "linear-gradient(135deg, #0088cc 0%, #9333ea 100%)",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        style={{
          position: "absolute",
          top: "-0%",
          right: "-10%",
          width: "200px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <Container size="lg" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box
            style={{
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Text
                size="lg"
                fw={600}
                style={{
                  marginBottom: "1rem",
                  letterSpacing: "0.5px",
                }}
              >
                © {new Date().getFullYear()} Judy Ghiyath Alqabbani
              </Text>
            </motion.div>

            <Text
              size="sm"
              style={{
                opacity: 0.85,
                marginBottom: "0.5rem",
              }}
            >
              Flutter Developer & Software Engineer
            </Text>

            <Text
              size="xs"
              style={{
                opacity: 0.75,
              }}
            >
              All rights reserved
            </Text>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
