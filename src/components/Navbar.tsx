import { useState, useEffect } from "react";
import {
  Container,
  Group,
  Burger,
  Box,
  Drawer,
  Stack,
  Anchor,
} from "@mantine/core";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import { motion, useScroll, useSpring } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#recommendations", label: "Recommendations" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState("Home");
  const [scroll] = useWindowScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    setIsScrolled(scroll.y > 50);

    const sections = links
      .map((link) => link.href.substring(1))
      .filter((id) => id !== "home");
    let foundSection = false;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          const label = links.find(
            (link) => link.href === `#${section}`
          )?.label;
          if (label) {
            setActive(label);
            foundSection = true;
            break;
          }
        }
      }
    }

    if (!foundSection && scroll.y < 200) {
      setActive("Home");
    }
  }, [scroll.y]);

  const handleClick = (label: string, href: string) => {
    setActive(label);
    close();

    const element = document.querySelector(href);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        <Box
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            backgroundColor: isScrolled
              ? "rgba(255, 255, 255, 0.92)"
              : "rgba(255, 255, 255, 0.75)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: isScrolled
              ? "1px solid rgba(0, 136, 204, 0.12)"
              : "1px solid rgba(255, 255, 255, 0.5)",
            boxShadow: isScrolled
              ? "0 4px 24px rgba(0, 0, 0, 0.06)"
              : "none",
            transition: "all 0.4s ease",
          }}
        >
           <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "3px",
              background: "linear-gradient(90deg, #00a1e6, #9333ea)",
              transformOrigin: "0%",
              scaleX,
            }}
          />

          <Container size="xl">
            <Group
              justify="space-between"
              style={{
                height: isScrolled ? "65px" : "70px",
                transition: "height 0.3s ease",
              }}
            >
               <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Anchor
                  href="#home"
                  style={{
                    fontSize: isScrolled ? "1.25rem" : "1.4rem",
                    fontWeight: 800,
                    background: "linear-gradient(135deg, #0062a3, #7c3aed)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textDecoration: "none",
                    letterSpacing: "-0.01em",
                    transition: "all 0.3s ease",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick("Home", "#home");
                  }}
                >
                  Judy Ghiyath
                </Anchor>
              </motion.div>

              {/* Desktop Navigation */}
              <Group gap="md" visibleFrom="sm">
                {links.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Anchor
                      href={link.href}
                      style={{
                        color: active === link.label ? "#0062a3" : "#6b7280",
                        fontSize: "0.9rem",
                        fontWeight: active === link.label ? 600 : 500,
                        textDecoration: "none",
                        padding: "0.5rem 0.75rem",
                        borderRadius: "6px",
                        transition: "all 0.25s ease",
                        backgroundColor: "transparent",
                        border: "none",
                        position: "relative",
                        letterSpacing: "0.01em",
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(link.label, link.href);
                      }}
                      onMouseEnter={(e) => {
                        if (active !== link.label) {
                          e.currentTarget.style.color = "#0062a3";
                          e.currentTarget.style.backgroundColor =
                            "rgba(0, 98, 163, 0.05)";
                          e.currentTarget.style.transform = "translateY(-1px)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (active !== link.label) {
                          e.currentTarget.style.color = "#6b7280";
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.transform = "translateY(0)";
                        }
                      }}
                    >
                      {link.label}
                    </Anchor>
                  </motion.div>
                ))}
              </Group>

              {/* Mobile Burger */}
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Burger
                  opened={opened}
                  onClick={toggle}
                  hiddenFrom="sm"
                  size="md"
                  color="#00a1e6"
                />
              </motion.div>
            </Group>
          </Container>
        </Box>
      </motion.div>

       <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="xl"
        position="right"
        styles={{
          content: {
            background: "linear-gradient(135deg, #e0f7ff 0%, #f3e8ff 100%)",
          },
        }}
      >
        <Stack gap="lg" style={{ marginTop: "2rem" }}>
          {links.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Anchor
                href={link.href}
                style={{
                  color: active === link.label ? "#00a1e6" : "#4a5568",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  padding: "1rem",
                  borderRadius: "12px",
                  textAlign: "center",
                  backgroundColor:
                    active === link.label
                      ? "rgba(0, 161, 230, 0.15)"
                      : "transparent",
                  border: `2px solid ${
                    active === link.label ? "#00a1e6" : "transparent"
                  }`,
                  display: "block",
                  transition: "all 0.3s ease",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.label, link.href);
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(0, 161, 230, 0.1)";
                  e.currentTarget.style.transform = "translateX(10px)";
                }}
                onMouseLeave={(e) => {
                  if (active !== link.label) {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                {link.label}
              </Anchor>
            </motion.div>
          ))}
        </Stack>
      </Drawer>
    </>
  );
}
