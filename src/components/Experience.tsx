import { Container, Title, Text, Box, Badge, Group } from "@mantine/core";
import { IconMapPin, IconCalendar } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { experiences } from "../data/portfolioData";
import { GlitchText } from "./GlitchText";

const PALETTE: Record<
  string,
  { accent: string; light: string; border: string; from: string; to: string }
> = {
  "Pharaon Group": {
    accent: "#0062a3",
    light: "rgba(0,98,163,0.06)",
    border: "rgba(0,98,163,0.15)",
    from: "blue",
    to: "cyan",
  },
  Ikoniks: {
    accent: "#7c3aed",
    light: "rgba(124,58,237,0.06)",
    border: "rgba(124,58,237,0.15)",
    from: "violet",
    to: "grape",
  },
  Plansters: {
    accent: "#0096c7",
    light: "rgba(0,150,199,0.06)",
    border: "rgba(0,150,199,0.15)",
    from: "cyan",
    to: "blue",
  },
  Solunyx: {
    accent: "#059669",
    light: "rgba(5,150,105,0.06)",
    border: "rgba(5,150,105,0.15)",
    from: "teal",
    to: "green",
  },
  WeCan: {
    accent: "#d97706",
    light: "rgba(217,119,6,0.06)",
    border: "rgba(217,119,6,0.15)",
    from: "yellow",
    to: "orange",
  },
  "Future Code": {
    accent: "#e11d48",
    light: "rgba(225,29,72,0.06)",
    border: "rgba(225,29,72,0.15)",
    from: "red",
    to: "pink",
  },
};

function p(company: string) {
  return PALETTE[company] ?? PALETTE["Pharaon Group"];
}

export function Experience() {
  return (
    <Box
      id="experience"
      style={{
        padding: "8rem 0",
        background: "#fafbfc",
        position: "relative",
      }}
    >
      <Container size="lg" style={{ position: "relative" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <Box mb={72} style={{ textAlign: "center" }}>
            <Title
              order={2}
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 800,
                display: "inline-block",
                lineHeight: 1.1,
              }}
            >
              <GlitchText
                text="Professional Experience"
                style={{
                  background:
                    "linear-gradient(135deg, #0062a3 0%, #7c3aed 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "-0.02em",
                }}
              />
            </Title>
          </Box>
        </motion.div>

        <div style={{ display: "flex", gap: "0", alignItems: "stretch" }}>
          <div
            style={{
              width: 1,
              flexShrink: 0,
              position: "relative",
              marginLeft: 28,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, #0062a3 0%, #7c3aed 55%, transparent 100%)",
                opacity: 0.2,
              }}
            />
          </div>

          <div style={{ flex: 1, paddingLeft: 0 }}>
            {experiences.map((exp, index) => {
              const pal = p(exp.company);
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 0,
                    marginBottom: index < experiences.length - 1 ? "2rem" : 0,
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      flexShrink: 0,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginLeft: -28,
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.06 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 22,
                      }}
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: 14,
                        background: exp.logo ? "#ffffff" : pal.light,
                        border: `1.5px solid ${pal.border}`,
                        boxShadow: `0 2px 16px ${pal.accent}18`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: exp.logo ? "7px 9px" : 0,
                        position: "relative",
                        zIndex: 2,
                        flexShrink: 0,
                      }}
                    >
                      {exp.logo ? (
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            width: 22,
                            height: 22,
                            borderRadius: "50%",
                            background: `linear-gradient(135deg, ${pal.accent}, ${pal.accent}88)`,
                          }}
                        />
                      )}

                      {exp.current && (
                        <motion.div
                          animate={{
                            scale: [1, 1.35, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 2.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          style={{
                            position: "absolute",
                            inset: -4,
                            borderRadius: 18,
                            border: `2px solid ${pal.accent}`,
                            pointerEvents: "none",
                          }}
                        />
                      )}
                    </motion.div>

                    {exp.current && (
                      <div
                        style={{
                          marginTop: 6,
                          background: pal.accent,
                          color: "#fff",
                          fontSize: "0.58rem",
                          fontWeight: 800,
                          letterSpacing: "0.06em",
                          padding: "2px 8px",
                          borderRadius: 999,
                          boxShadow: `0 2px 8px ${pal.accent}55`,
                        }}
                      >
                        NOW
                      </div>
                    )}
                  </div>

                  <motion.div
                    whileHover={{
                      y: -2,
                      boxShadow: `0 12px 40px ${pal.accent}14`,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 26 }}
                    style={{
                      flex: 1,
                      marginLeft: "1.5rem",
                      background: "#ffffff",
                      border: `1px solid ${pal.border}`,
                      borderRadius: 20,
                      overflow: "hidden",
                      boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                      transition: "border-color 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        pal.accent + "55";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        pal.border;
                    }}
                  >
                    <div
                      style={{
                        height: 3,
                        background: `linear-gradient(90deg, ${pal.accent}, ${pal.accent}33, transparent)`,
                      }}
                    />

                    <div style={{ padding: "1.35rem 1.6rem 1.5rem" }}>
                      {/* top row: role + period badge */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          gap: "1rem",
                          flexWrap: "wrap",
                          marginBottom: "0.4rem",
                        }}
                      >
                        <Title
                          order={4}
                          style={{
                            color: "#0f172a",
                            fontWeight: 800,
                            fontSize: "1rem",
                            lineHeight: 1.3,
                            margin: 0,
                          }}
                        >
                          {exp.role}
                        </Title>
                        <Badge
                          variant="light"
                          size="sm"
                          style={{
                            background: pal.light,
                            color: pal.accent,
                            border: `1px solid ${pal.border}`,
                            fontWeight: 700,
                            fontSize: "0.7rem",
                            letterSpacing: "0.02em",
                            flexShrink: 0,
                          }}
                        >
                          {exp.period}
                        </Badge>
                      </div>

                      <Group gap={16} mb="md" wrap="wrap">
                        <Text size="sm" fw={700} style={{ color: pal.accent }}>
                          {exp.company}
                        </Text>
                        {exp.location && (
                          <Group gap={4}>
                            <IconMapPin size={11} color="#94a3b8" />
                            <Text size="xs" c="dimmed">
                              {exp.location}
                            </Text>
                          </Group>
                        )}
                        <Group gap={4}>
                          <IconCalendar size={11} color="#94a3b8" />
                          <Text size="xs" c="dimmed">
                            {exp.period}
                          </Text>
                        </Group>
                      </Group>

                      <div
                        style={{
                          height: 1,
                          background: pal.border,
                          marginBottom: "1rem",
                        }}
                      />

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.55rem",
                        }}
                      >
                        {exp.description.map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -8 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: index * 0.05 + i * 0.04 + 0.1,
                            }}
                            style={{
                              display: "flex",
                              gap: 10,
                              alignItems: "flex-start",
                            }}
                          >
                            <div
                              style={{
                                width: 5,
                                height: 5,
                                borderRadius: "50%",
                                background: pal.accent,
                                flexShrink: 0,
                                marginTop: 7,
                                opacity: 0.75,
                              }}
                            />
                            <Text
                              size="sm"
                              style={{ color: "#475569", lineHeight: 1.7 }}
                            >
                              {item}
                            </Text>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Box>
  );
}
