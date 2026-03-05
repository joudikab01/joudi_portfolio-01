import { useState, useRef } from "react";
import { Container, Title, Text, Box, Anchor } from "@mantine/core";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  IconChevronLeft,
  IconChevronRight,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { recommendations } from "../data/portfolioData";
import { GlitchText } from "./GlitchText";

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
};

export function Recommendations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (next: number) => {
    setDirection(next > current ? 1 : -1);
    setCurrent(next);
  };

  const prev = () =>
    go((current - 1 + recommendations.length) % recommendations.length);
  const next = () => go((current + 1) % recommendations.length);

  const rec = recommendations[current];
  const initials = rec.name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");

  return (
    <Box
      id="recommendations"
      ref={ref}
      style={{
        padding: "80px 0",
        background:
          "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(0,136,204,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <Container size="md" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Title
            order={2}
            style={{
              textAlign: "center",
              marginBottom: "0.75rem",
              fontSize: "clamp(2rem, 4vw, 2.5rem)",
              fontWeight: 700,
              display: "block",
            }}
          >
            <GlitchText
              text="Recommendations"
              style={{
                background: "linear-gradient(135deg, #60b8f5, #c084fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "0.04em",
              }}
            />
          </Title>
          <Text
            style={{
              textAlign: "center",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "3rem",
              fontSize: "1rem",
            }}
          >
            What colleagues say about working with me
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Box
            style={{
              position: "relative",
              border: "1px solid rgba(0,136,204,0.25)",
              borderRadius: "20px",
              padding: "3rem 3.5rem",
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)",
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(0,136,204,0.15)",
              minHeight: "320px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              overflow: "hidden",
            }}
          >
            <Box
              style={{
                position: "absolute",
                top: "-0.5rem",
                left: "2rem",
                fontSize: "9rem",
                lineHeight: 1,
                color: "#0088cc",
                opacity: 0.08,
                fontFamily: "Georgia, serif",
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              "
            </Box>

            <Box style={{ position: "relative", flex: 1 }}>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <Text
                    style={{
                      color: "rgba(255,255,255,0.88)",
                      fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
                      lineHeight: 1.9,
                      fontStyle: "italic",
                      marginBottom: "2.5rem",
                      fontWeight: 400,
                    }}
                  >
                    "{rec.message}"
                  </Text>

                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.25rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <Box
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #0088cc, #9333ea)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "#fff",
                        boxShadow: "0 4px 12px rgba(0,136,204,0.4)",
                      }}
                    >
                      {initials}
                    </Box>

                    <Box>
                      <Text
                        style={{
                          color: "#fff",
                          fontWeight: 700,
                          fontSize: "1rem",
                          lineHeight: 1.3,
                        }}
                      >
                        {rec.name}
                      </Text>
                      <Text
                        style={{
                          color: "#0088cc",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                        }}
                      >
                        {rec.title}
                      </Text>
                      <Text
                        style={{
                          color: "rgba(255,255,255,0.4)",
                          fontSize: "0.8rem",
                          marginTop: "0.1rem",
                        }}
                      >
                        {rec.relationship}
                      </Text>
                      {rec.linkedin && (
                        <Anchor
                          href={rec.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.3rem",
                            marginTop: "0.4rem",
                            color: "#0088cc",
                            fontSize: "0.8rem",
                            fontWeight: 500,
                            textDecoration: "none",
                            transition: "color 0.2s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#9333ea";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#0088cc";
                          }}
                        >
                          <IconBrandLinkedin size={14} />
                          LinkedIn
                        </Anchor>
                      )}
                    </Box>

                    <Box style={{ marginLeft: "auto" }}>
                      <Box
                        style={{
                          background: "rgba(0,136,204,0.12)",
                          border: "1px solid rgba(0,136,204,0.35)",
                          borderRadius: "999px",
                          padding: "0.3rem 1rem",
                          display: "inline-block",
                        }}
                      >
                        <Text
                          style={{
                            color: "#0088cc",
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {rec.expertise}
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              </AnimatePresence>
            </Box>
          </Box>

          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.5rem",
              marginTop: "2rem",
            }}
          >
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              disabled={recommendations.length <= 1}
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1px solid rgba(0,136,204,0.4)",
                backgroundColor: "rgba(0,136,204,0.12)",
                color: "#fff",
                cursor: recommendations.length <= 1 ? "default" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: recommendations.length <= 1 ? 0.3 : 1,
              }}
            >
              <IconChevronLeft size={20} />
            </motion.button>

            <Box
              style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
            >
              {recommendations.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => go(i)}
                  whileHover={{ scale: 1.2 }}
                  style={{
                    width: i === current ? "24px" : "8px",
                    height: "8px",
                    borderRadius: "999px",
                    border: "none",
                    background:
                      i === current
                        ? "linear-gradient(90deg, #0088cc, #9333ea)"
                        : "rgba(255,255,255,0.25)",
                    cursor: "pointer",
                    padding: 0,
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </Box>

            <motion.button
              onClick={next}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              disabled={recommendations.length <= 1}
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1px solid rgba(147,51,234,0.4)",
                backgroundColor: "rgba(147,51,234,0.12)",
                color: "#fff",
                cursor: recommendations.length <= 1 ? "default" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: recommendations.length <= 1 ? 0.3 : 1,
              }}
            >
              <IconChevronRight size={20} />
            </motion.button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
