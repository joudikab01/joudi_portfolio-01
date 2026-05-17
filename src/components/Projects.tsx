import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Container,
  Title,
  Text,
  Box,
  Badge,
  Grid,
  Card,
  Stack,
  Group,
  List,
  ThemeIcon,
  Flex,
  Button,
  Avatar,
  Image,
  Divider,
} from "@mantine/core";
import {
  IconSparkles,
  IconCalendar,
  IconBrandGooglePlay,
  IconBrandApple,
  IconChevronDown,
  IconChevronUp,
  IconBriefcase,
  IconMapPin,
  IconArrowUpRight,
} from "@tabler/icons-react";
import type { SubProject } from "../types/portfolio.types";
import { projects, experiences } from "../data/portfolioData";
import { GlitchText } from "./GlitchText";

const LOGO_IMAGES = ["Glovent", "like", "pharaon", "plansters_logo", "Ikoniks", "solunyx_tech_logo", "WeCan", "0future_code_logo", "pyramind logo"];
function isLogoImage(src: string) {
  return LOGO_IMAGES.some((name) => src.includes(name));
}

function getAccent(techs: string[]) {
  const t = techs.join(" ").toLowerCase();
  if (t.includes("flutter") || t.includes("dart"))
    return {
      primary: "#0062a3",
      secondary: "#0096c7",
      glow: "rgba(0,98,163,0.10)",
      border: "rgba(0,98,163,0.15)",
      badgeFrom: "blue",
      badgeTo: "cyan",
    };
  if (t.includes("scrum") || t.includes("agile") || t.includes("jira"))
    return {
      primary: "#7c3aed",
      secondary: "#a855f7",
      glow: "rgba(124,58,237,0.10)",
      border: "rgba(124,58,237,0.15)",
      badgeFrom: "violet",
      badgeTo: "grape",
    };
  return {
    primary: "#0062a3",
    secondary: "#0096c7",
    glow: "rgba(0,98,163,0.10)",
    border: "rgba(0,98,163,0.15)",
    badgeFrom: "blue",
    badgeTo: "cyan",
  };
}

const COMPANY_PALETTE: Record<
  string,
  { accent: string; light: string; border: string; from: string; to: string }
> = {
  Pharaon: {
    accent: "#0062a3",
    light: "rgba(0,98,163,0.07)",
    border: "rgba(0,98,163,0.15)",
    from: "blue",
    to: "cyan",
  },
  Ikoniks: {
    accent: "#7c3aed",
    light: "rgba(124,58,237,0.07)",
    border: "rgba(124,58,237,0.15)",
    from: "violet",
    to: "grape",
  },
  Plansters: {
    accent: "#0096c7",
    light: "rgba(0,150,199,0.07)",
    border: "rgba(0,150,199,0.15)",
    from: "cyan",
    to: "blue",
  },
  Solunyx: {
    accent: "#059669",
    light: "rgba(5,150,105,0.07)",
    border: "rgba(5,150,105,0.15)",
    from: "teal",
    to: "green",
  },
  WeCan: {
    accent: "#d97706",
    light: "rgba(217,119,6,0.07)",
    border: "rgba(217,119,6,0.15)",
    from: "yellow",
    to: "orange",
  },
  "Future Code": {
    accent: "#e11d48",
    light: "rgba(225,29,72,0.07)",
    border: "rgba(225,29,72,0.15)",
    from: "red",
    to: "pink",
  },
};

function getPalette(company: string) {
  return COMPANY_PALETTE[company] ?? COMPANY_PALETTE["Pharaon"];
}

const statusConfig = {
  completed: { label: "Completed", from: "teal", to: "green" },
  "in-progress": { label: "In Progress", from: "yellow", to: "orange" },
};

function SpotlightCard({
  project,
  flip,
}: {
  project: (typeof projects)[0];
  flip?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const accent = getAccent(project.technologies);
  const status = statusConfig[project.status] ?? statusConfig.completed;
  const hasPlayStore = !!project.playStore;
  const hasAppStore = !!project.appStore;
  const hasUrl = !!project.url;

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-60px" }}
    >
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
      >
        <Card
          padding={0}
          radius="xl"
          style={{
            background: "#fff",
            border: `1px solid ${accent.border}`,
            boxShadow: "0 8px 40px rgba(0,98,163,0.08)",
            overflow: "hidden",
            transition: "box-shadow 0.35s ease, border-color 0.35s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              `0 0 40px ${accent.glow}, 0 16px 48px rgba(0,0,0,0.08)`;
            (e.currentTarget as HTMLElement).style.borderColor =
              accent.primary + "55";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 8px 40px rgba(0,98,163,0.08)";
            (e.currentTarget as HTMLElement).style.borderColor = accent.border;
          }}
        >
          <motion.div
            style={{
              height: "3px",
              background: `linear-gradient(90deg, ${accent.primary}, ${accent.secondary}, transparent)`,
            }}
            initial={{ scaleX: 0, transformOrigin: "left" }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
          />

          <Grid gutter={0} style={{ minHeight: "360px" }}>
            <Grid.Col
              span={{ base: 12, md: 5 }}
              order={{ base: 1, md: flip ? 2 : 1 }}
              style={{ position: "relative", minHeight: "260px" }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  overflow: "hidden",
                  background:
                    isLogoImage(project.image) ? "#0d1b2a" : "#f1f5f9",
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: isLogoImage(project.image) ? "contain" : "cover",
                    padding: isLogoImage(project.image) ? "2rem" : 0,
                  }}
                />
                <div
                  style={{ position: "absolute", top: 14, left: 14, zIndex: 3 }}
                >
                  <Badge
                    size="sm"
                    variant="gradient"
                    gradient={{ from: status.from, to: status.to }}
                    style={{
                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {status.label}
                  </Badge>
                </div>
              </div>
            </Grid.Col>

            <Grid.Col
              span={{ base: 12, md: 7 }}
              order={{ base: 2, md: flip ? 1 : 2 }}
            >
              <Stack
                gap="lg"
                p={{ base: "xl", md: "2rem 2.5rem" }}
                style={{ height: "100%", justifyContent: "center" }}
              >
                <Group gap="xs">
                  <IconCalendar
                    size={12}
                    color={accent.primary}
                    style={{ opacity: 0.8 }}
                  />
                  <Text
                    size="xs"
                    c="dimmed"
                    style={{ letterSpacing: "0.03em" }}
                  >
                    {project.period}
                  </Text>
                </Group>

                <div>
                  <Title
                    order={3}
                    style={{
                      color: "#111827",
                      lineHeight: 1.2,
                      fontWeight: 800,
                      fontSize: "clamp(1.2rem, 2vw, 1.55rem)",
                      marginBottom: "0.65rem",
                    }}
                  >
                    {project.title}
                  </Title>
                  <Text size="sm" c="dimmed" style={{ lineHeight: 1.85 }}>
                    {project.description}
                  </Text>
                </div>

                <div>
                  <Group gap="xs" mb="sm" align="center">
                    <Text
                      size="xs"
                      fw={600}
                      style={{
                        color: accent.primary,
                        textTransform: "uppercase",
                        letterSpacing: "0.07em",
                      }}
                    >
                      Key Features
                    </Text>
                    {project.features.length > 4 && (
                      <motion.button
                        onClick={() => setExpanded((v) => !v)}
                        style={{
                          background: `${accent.primary}12`,
                          border: `1px solid ${accent.border}`,
                          borderRadius: "999px",
                          padding: "2px 10px",
                          cursor: "pointer",
                          color: accent.primary,
                          display: "flex",
                          alignItems: "center",
                          gap: "3px",
                          fontSize: "0.7rem",
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {expanded ? (
                          <>
                            <IconChevronUp size={10} /> Less
                          </>
                        ) : (
                          <>
                            <IconChevronDown size={10} /> +
                            {project.features.length - 4} more
                          </>
                        )}
                      </motion.button>
                    )}
                  </Group>

                  <AnimatePresence initial={false}>
                    <List
                      size="sm"
                      spacing={5}
                      icon={
                        <ThemeIcon
                          size={16}
                          radius="xl"
                          variant="light"
                          color={accent.badgeFrom}
                          style={{ marginTop: 1 }}
                        >
                          <IconSparkles size={8} />
                        </ThemeIcon>
                      }
                    >
                      {(expanded
                        ? project.features
                        : project.features.slice(0, 4)
                      ).map((f, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.03 }}
                        >
                          <List.Item>
                            <Text
                              c="dimmed"
                              size="sm"
                              style={{ lineHeight: 1.65 }}
                            >
                              {f}
                            </Text>
                          </List.Item>
                        </motion.div>
                      ))}
                    </List>
                  </AnimatePresence>
                </div>

                <Flex wrap="wrap" gap={6}>
                  {project.technologies.map((tech, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.03 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -2 }}
                    >
                      <Badge
                        variant="light"
                        size="sm"
                        color={accent.badgeFrom}
                        style={{
                          background: `${accent.primary}0f`,
                          color: accent.primary,
                          border: `1px solid ${accent.border}`,
                          fontWeight: 500,
                        }}
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </Flex>

                <Group gap="sm">
                  {hasUrl && (
                    <motion.div
                      whileHover={{ scale: 1.04, y: -2 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <Button
                        size="sm"
                        variant="gradient"
                        gradient={{
                          from: accent.badgeFrom,
                          to: accent.badgeTo,
                        }}
                        leftSection={<IconArrowUpRight size={14} />}
                        component="a"
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ boxShadow: `0 6px 20px ${accent.glow}` }}
                      >
                        Visit Website
                      </Button>
                    </motion.div>
                  )}
                  {hasPlayStore && (
                    <motion.div
                      whileHover={{ scale: 1.04, y: -2 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <Button
                        size="sm"
                        variant="gradient"
                        gradient={{
                          from: accent.badgeFrom,
                          to: accent.badgeTo,
                        }}
                        leftSection={<IconBrandGooglePlay size={14} />}
                        component="a"
                        href={project.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ boxShadow: `0 6px 20px ${accent.glow}` }}
                      >
                        Play Store
                      </Button>
                    </motion.div>
                  )}
                  {hasAppStore && (
                    <motion.div
                      whileHover={{ scale: 1.04, y: -2 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <Button
                        size="sm"
                        variant="light"
                        color={accent.badgeFrom}
                        leftSection={<IconBrandApple size={14} />}
                        component="a"
                        href={project.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        App Store
                      </Button>
                    </motion.div>
                  )}
                </Group>
              </Stack>
            </Grid.Col>
          </Grid>
        </Card>
      </motion.div>
    </motion.div>
  );
}

function GridCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const accent = getAccent(project.technologies);
  const status = statusConfig[project.status] ?? statusConfig.completed;
  const hasPlayStore = !!project.playStore;
  const hasAppStore = !!project.appStore;
  const hasUrl = !!project.url;

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, margin: "-40px" }}
      style={{ height: "100%" }}
    >
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 320, damping: 24 }}
        style={{ height: "100%" }}
      >
        <Card
          padding={0}
          radius="xl"
          style={{
            background: "#fff",
            border: `1px solid ${accent.border}`,
            boxShadow: "0 4px 20px rgba(0,98,163,0.06)",
            overflow: "hidden",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            transition: "box-shadow 0.3s ease, border-color 0.3s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              `0 0 28px ${accent.glow}, 0 12px 36px rgba(0,0,0,0.07)`;
            (e.currentTarget as HTMLElement).style.borderColor =
              accent.primary + "44";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 4px 20px rgba(0,98,163,0.06)";
            (e.currentTarget as HTMLElement).style.borderColor = accent.border;
          }}
        >
          <motion.div
            style={{
              height: "2px",
              background: `linear-gradient(90deg, ${accent.primary}, ${accent.secondary}, transparent)`,
              flexShrink: 0,
            }}
            initial={{ scaleX: 0, transformOrigin: "left" }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: (index % 3) * 0.07 + 0.2 }}
            viewport={{ once: true }}
          />

          <Card.Section
            style={{
              position: "relative",
              overflow: "hidden",
              flexShrink: 0,
              background:
                isLogoImage(project.image) ? "#0d1b2a" : "#f1f5f9",
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              height={190}
              fit={isLogoImage(project.image) ? "contain" : "cover"}
              style={{ padding: isLogoImage(project.image) ? "1.5rem" : 0 }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(255,255,255,0.95) 0%, transparent 50%)",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "absolute", top: 12, left: 12, zIndex: 3 }}>
              <Badge
                size="xs"
                variant="gradient"
                gradient={{ from: status.from, to: status.to }}
              >
                {status.label}
              </Badge>
            </div>
            {(hasPlayStore || hasAppStore || hasUrl) && (
              <motion.a
                href={
                  hasPlayStore
                    ? project.playStore
                    : hasAppStore
                      ? project.appStore
                      : project.url
                }
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  zIndex: 3,
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  background: "rgba(255,255,255,0.92)",
                  backdropFilter: "blur(8px)",
                  border: `1px solid ${accent.primary}55`,
                  borderRadius: "999px",
                  padding: "5px 11px 5px 9px",
                  color: accent.primary,
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "0.7rem",
                  boxShadow: `0 2px 12px rgba(0,0,0,0.12)`,
                  letterSpacing: "0.02em",
                }}
                whileHover={{ scale: 1.06, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconArrowUpRight size={13} />
                {hasPlayStore
                  ? "Play Store"
                  : hasAppStore
                    ? "App Store"
                    : "Visit"}
              </motion.a>
            )}
          </Card.Section>

          <Stack gap="sm" p="lg" style={{ flex: 1 }}>
            <Group gap={5}>
              <IconCalendar
                size={11}
                color={accent.primary}
                style={{ opacity: 0.75 }}
              />
              <Text size="xs" c="dimmed" style={{ letterSpacing: "0.02em" }}>
                {project.period}
              </Text>
            </Group>

            <Title
              order={4}
              style={{
                color: "#111827",
                lineHeight: 1.3,
                fontWeight: 700,
                fontSize: "0.95rem",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {project.title}
            </Title>

            <Text
              c="dimmed"
              size="xs"
              style={{
                lineHeight: 1.75,
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                flex: 1,
              }}
            >
              {project.description}
            </Text>

            <Flex
              wrap="wrap"
              gap={5}
              mt="auto"
              pt="xs"
              style={{ borderTop: `1px solid ${accent.border}` }}
            >
              {project.technologies.slice(0, 4).map((tech, i) => (
                <Badge
                  key={i}
                  variant="light"
                  size="xs"
                  color={accent.badgeFrom}
                  style={{
                    background: `${accent.primary}0d`,
                    color: accent.primary,
                    border: `1px solid ${accent.border}`,
                    fontWeight: 500,
                  }}
                >
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 4 && (
                <Badge variant="light" size="xs" color="gray">
                  +{project.technologies.length - 4}
                </Badge>
              )}
            </Flex>
          </Stack>
        </Card>
      </motion.div>
    </motion.div>
  );
}

function CompanyHeader({
  company,
  groupIndex,
}: {
  company: string;
  groupIndex: number;
}) {
  const palette = getPalette(company);
  const exp = experiences.find((e) => e.companyKey === company);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: groupIndex * 0.04, ease: "easeOut" }}
      viewport={{ once: true, margin: "-60px" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.25rem",
          marginBottom: "2rem",
        }}
      >
        <div
          style={{
            flex: 1,
            height: "1px",
            background: `linear-gradient(to right, ${palette.accent}35, transparent)`,
          }}
        />
        <Badge
          size="md"
          variant="light"
          style={{
            background: palette.light,
            color: palette.accent,
            border: `1px solid ${palette.border}`,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            fontWeight: 700,
            fontSize: "0.68rem",
          }}
        >
          {exp?.role ?? company}
        </Badge>
        <div
          style={{
            flex: 1,
            height: "1px",
            background: `linear-gradient(to left, ${palette.accent}35, transparent)`,
          }}
        />
      </div>

      <Group gap="xl" mb={40} align="flex-start">
        {exp?.logo ? (
          <div
            style={{
              border: `2px solid ${palette.border}`,
              background: "#fff",
              borderRadius: "12px",
              flexShrink: 0,
              padding: "8px 14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: 140,
              minWidth: 60,
              boxShadow: `0 2px 12px ${palette.accent}15`,
            }}
          >
            <img
              src={exp.logo}
              alt={exp.company}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: 44,
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
        ) : (
          <Avatar
            size={60}
            radius="lg"
            style={{
              border: `2px solid ${palette.border}`,
              background: palette.light,
              flexShrink: 0,
            }}
          >
            <IconBriefcase size={26} color={palette.accent} />
          </Avatar>
        )}

        <Stack gap={4}>
          <Title
            order={2}
            style={{
              color: "#111827",
              fontWeight: 900,
              fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
              lineHeight: 1.15,
            }}
          >
            {exp?.company ?? company}
          </Title>
          {exp && (
            <Text
              size="sm"
              style={{ color: palette.accent, fontWeight: 600, opacity: 0.9 }}
            >
              {exp.role}
            </Text>
          )}
          {exp && (
            <Group gap="lg" mt={4} wrap="wrap">
              <Group gap={5}>
                <IconCalendar
                  size={12}
                  color={palette.accent}
                  style={{ opacity: 0.7 }}
                />
                <Text size="xs" c="dimmed">
                  {exp.period}
                </Text>
              </Group>
              {exp.location && (
                <Group gap={5}>
                  <IconMapPin
                    size={12}
                    color={palette.accent}
                    style={{ opacity: 0.7 }}
                  />
                  <Text size="xs" c="dimmed">
                    {exp.location}
                  </Text>
                </Group>
              )}
            </Group>
          )}
        </Stack>
      </Group>
    </motion.div>
  );
}

function SubProjectCard({
  sub,
  palette,
}: {
  sub: SubProject;
  palette: ReturnType<typeof getPalette>;
}) {
  const status = statusConfig[sub.status] ?? statusConfig.completed;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-30px" }}
    >
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 320, damping: 24 }}
      >
        <Card
          padding="md"
          radius="lg"
          style={{
            background: "#fff",
            border: `1px solid ${palette.border}`,
            boxShadow: "0 4px 16px rgba(0,98,163,0.06)",
            transition: "box-shadow 0.3s ease, border-color 0.3s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              `0 0 24px ${palette.accent}18, 0 10px 30px rgba(0,0,0,0.07)`;
            (e.currentTarget as HTMLElement).style.borderColor =
              palette.accent + "44";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 4px 16px rgba(0,98,163,0.06)";
            (e.currentTarget as HTMLElement).style.borderColor = palette.border;
          }}
        >
          <Group justify="space-between" mb="sm" wrap="nowrap">
            <Title
              order={5}
              style={{
                color: "#111827",
                fontWeight: 700,
                fontSize: "0.9rem",
                lineHeight: 1.3,
              }}
            >
              {sub.title}
            </Title>
            <Group gap={6} style={{ flexShrink: 0 }}>
              <Badge
                size="xs"
                variant="gradient"
                gradient={{ from: status.from, to: status.to }}
              >
                {status.label}
              </Badge>
              {sub.url && (
                <motion.a
                  href={sub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: `${palette.accent}14`,
                    border: `1px solid ${palette.border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: palette.accent,
                    textDecoration: "none",
                    flexShrink: 0,
                  }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconArrowUpRight size={12} />
                </motion.a>
              )}
            </Group>
          </Group>

          <Text
            c="dimmed"
            size="xs"
            style={{
              lineHeight: 1.7,
              marginBottom: "0.65rem",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {sub.description}
          </Text>

          <List
            size="xs"
            spacing={3}
            icon={
              <ThemeIcon
                size={14}
                radius="xl"
                variant="light"
                color={palette.from}
                style={{ marginTop: 1 }}
              >
                <IconSparkles size={7} />
              </ThemeIcon>
            }
            mb="sm"
          >
            {sub.features.slice(0, 2).map((f, i) => (
              <List.Item key={i}>
                <Text c="dimmed" size="xs" style={{ lineHeight: 1.6 }}>
                  {f}
                </Text>
              </List.Item>
            ))}
          </List>

          <Flex
            wrap="wrap"
            gap={4}
            pt="xs"
            style={{ borderTop: `1px solid ${palette.border}` }}
          >
            {sub.technologies.map((tech, i) => (
              <Badge
                key={i}
                variant="light"
                size="xs"
                color={palette.from}
                style={{
                  background: `${palette.accent}0d`,
                  color: palette.accent,
                  border: `1px solid ${palette.border}`,
                  fontWeight: 500,
                }}
              >
                {tech}
              </Badge>
            ))}
          </Flex>
        </Card>
      </motion.div>
    </motion.div>
  );
}

function SubProjectsPanel({
  subProjects,
  palette,
  parentTitle,
}: {
  subProjects: SubProject[];
  palette: ReturnType<typeof getPalette>;
  parentTitle: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <Box
        mt="xl"
        p="xl"
        style={{
          background: `${palette.accent}05`,
          border: `1px solid ${palette.border}`,
          borderRadius: "1rem",
        }}
      >
        <Group gap="sm" mb="xl" align="center">
          <div
            style={{
              width: 3,
              height: 20,
              borderRadius: 2,
              background: palette.accent,
            }}
          />
          <Text
            fw={700}
            size="sm"
            style={{
              color: palette.accent,
              textTransform: "uppercase",
              letterSpacing: "0.07em",
            }}
          >
            {parentTitle} — Sub-platforms
          </Text>
          <Badge size="xs" variant="light" color={palette.from}>
            {subProjects.length} platforms
          </Badge>
        </Group>

        <Grid gutter={16}>
          {subProjects.map((sub) => (
            <Grid.Col key={sub.id} span={{ base: 12, sm: 6, lg: 4 }}>
              <SubProjectCard sub={sub} palette={palette} />
            </Grid.Col>
          ))}
        </Grid>
      </Box>
    </motion.div>
  );
}

function CompanyGroup({
  company,
  groupProjects,
  groupIndex,
}: {
  company: string;
  groupProjects: typeof projects;
  groupIndex: number;
}) {
  const palette = getPalette(company);
  const [spotlight, ...rest] = groupProjects;

  return (
    <Box mb={88}>
      <CompanyHeader company={company} groupIndex={groupIndex} />

      <Box mb={28}>
        <SpotlightCard project={spotlight} flip={groupIndex % 2 !== 0} />
        {spotlight.subProjects && spotlight.subProjects.length > 0 && (
          <SubProjectsPanel
            subProjects={spotlight.subProjects}
            palette={palette}
            parentTitle={spotlight.title}
          />
        )}
      </Box>

      {rest.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          viewport={{ once: true }}
        >
          <Grid gutter={20} mt={4}>
            {rest.map((project, i) => (
              <Grid.Col key={project.id} span={{ base: 12, sm: 6, lg: 4 }}>
                <GridCard project={project} index={i} />
              </Grid.Col>
            ))}
          </Grid>
          {rest
            .filter((p) => p.subProjects && p.subProjects.length > 0)
            .map((project) => (
              <SubProjectsPanel
                key={project.id}
                subProjects={project.subProjects!}
                palette={palette}
                parentTitle={project.title}
              />
            ))}
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        viewport={{ once: true }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginTop: "3.5rem",
        }}
      >
        <div
          style={{
            flex: 1,
            height: "1px",
            background: `linear-gradient(to right, transparent, ${palette.accent}20, transparent)`,
          }}
        />
        <Text
          size="xs"
          c="dimmed"
          style={{ whiteSpace: "nowrap", letterSpacing: "0.05em" }}
        >
          {groupProjects.length} project{groupProjects.length !== 1 ? "s" : ""}
        </Text>
        <div
          style={{
            flex: 1,
            height: "1px",
            background: `linear-gradient(to left, transparent, ${palette.accent}20, transparent)`,
          }}
        />
      </motion.div>
    </Box>
  );
}

function buildGroups() {
  const map = new Map<string, typeof projects>();
  for (const p of projects) {
    const list = map.get(p.company) ?? [];
    list.push(p);
    map.set(p.company, list);
  }
  const getLatest = (ps: typeof projects) => {
    const raw = ps[0]?.period?.split(" - ")[0] ?? "";
    const [m, y] = raw.split("/");
    return new Date(Number(y), Number(m) - 1);
  };
  return Array.from(map.entries())
    .map(([company, ps]) => ({ company, projects: ps }))
    .sort((a, b) => {
      if (a.company === "Pharaon") return -1;
      if (b.company === "Pharaon") return 1;
      return getLatest(b.projects).getTime() - getLatest(a.projects).getTime();
    });
}

const companyGroups = buildGroups();

export function Projects() {
  return (
    <Box
      id="projects"
      style={{
        padding: "8rem 0",
        background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(0,98,163,0.04) 0%, transparent 65%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <Container size="lg" style={{ position: "relative" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <Box mb={80} style={{ textAlign: "center" }}>
            <Title
              order={2}
              mb="md"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                fontWeight: 800,
                letterSpacing: "-0.025em",
                display: "inline-block",
              }}
            >
              <GlitchText
                text="Work by Company"
                style={{
                  background: "linear-gradient(135deg, #0062a3, #7c3aed)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "-0.01em",
                }}
              />
            </Title>

            <Text
              c="dimmed"
              size="md"
              maw={500}
              mx="auto"
              style={{ lineHeight: 1.75 }}
            >
              {projects.length} projects across {companyGroups.length} companies
              — organized by the context they were built in
            </Text>

            <Group gap="sm" justify="center" mt={32} wrap="wrap">
              {companyGroups.map(({ company, projects: ps }) => {
                const p = getPalette(company);
                return (
                  <motion.div
                    key={company}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Group
                      gap={6}
                      style={{
                        background: p.light,
                        border: `1px solid ${p.border}`,
                        borderRadius: "999px",
                        padding: "5px 14px",
                      }}
                    >
                      <div
                        style={{
                          width: 7,
                          height: 7,
                          borderRadius: "50%",
                          background: p.accent,
                        }}
                      />
                      <Text
                        size="sm"
                        style={{ color: p.accent, fontWeight: 600 }}
                      >
                        {company}
                      </Text>
                      <Text size="xs" c="dimmed">
                        · {ps.length}
                      </Text>
                    </Group>
                  </motion.div>
                );
              })}
            </Group>
          </Box>
        </motion.div>

        <Divider mb={64} style={{ opacity: 0.3 }} />

        {companyGroups.map(({ company, projects: ps }, i) => (
          <CompanyGroup
            key={company}
            company={company}
            groupProjects={ps}
            groupIndex={i}
          />
        ))}
      </Container>
    </Box>
  );
}
