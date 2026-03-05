import { Container, Title, Box, Paper, SimpleGrid, Text, Badge, Group, ThemeIcon } from '@mantine/core';
import {
  IconSchool,
  IconCertificate,
  IconUsers,
  IconTrophy,
  IconLanguage,
} from '@tabler/icons-react';
import { GlitchText } from './GlitchText';

export function Education() {
  return (
    <Box
      id="education"
      style={{
        padding: '80px 0',
        background: 'linear-gradient(160deg, #faf5ff 0%, #f0f9ff 50%, #f5f0ff 100%)',
      }}
    >
      <Container size="lg">
        <Box style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <Title order={2} style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, display: 'inline-block' }}>
            <GlitchText text="Education & Leadership" style={{ background: 'linear-gradient(135deg, #0062a3, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.01em' }} />
          </Title>
        </Box>

        <Paper
          shadow="sm"
          radius="xl"
          p="xl"
          mb="xl"
          style={{
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer',
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(0, 136, 204, 0.1)',
            boxShadow: '0 4px 24px rgba(0, 98, 163, 0.07)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 16px 40px rgba(0, 98, 163, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 24px rgba(0, 98, 163, 0.07)';
          }}
        >
          <Group mb="md">
            <ThemeIcon
              size={60}
              radius="md"
              variant="gradient"
              gradient={{ from: 'cyan', to: 'blue', deg: 45 }}
            >
              <IconSchool size={32} />
            </ThemeIcon>
            <div>
              <Title order={3} size="h3">
                Bachelor's Degree in Computer Engineering
              </Title>
              <Text size="lg" c="dimmed">
                University of Damascus
              </Text>
            </div>
          </Group>

          <Group mb="md">
            <Badge
              variant="gradient"
              gradient={{ from: 'cyan', to: 'blue', deg: 45 }}
              size="lg"
            >
              09/2019 – 11/2024
            </Badge>
            <Badge
              variant="gradient"
              gradient={{ from: 'violet', to: 'grape', deg: 45 }}
              size="lg"
            >
              GPA: 82%
            </Badge>
          </Group>

          <Text size="md" style={{ color: '#4a5568', lineHeight: 1.7 }}>
            <strong>Major:</strong> Software Engineering & Information Systems
          </Text>
        </Paper>

        <Title order={3} mb="lg" ta="center" style={{
          background: 'linear-gradient(135deg, #0062a3, #0088cc)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 700,
        }}>
          Certifications
        </Title>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg" mb="xl">
          <Paper
            shadow="sm"
            radius="xl"
            p="lg"
            style={{
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              background: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(147, 51, 234, 0.1)',
              boxShadow: '0 4px 16px rgba(109, 40, 217, 0.06)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(109, 40, 217, 0.14)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(109, 40, 217, 0.06)';
            }}
          >
            <Group>
              <ThemeIcon
                size={50}
                radius="md"
                variant="gradient"
                gradient={{ from: 'violet', to: 'grape', deg: 45 }}
              >
                <IconLanguage size={26} />
              </ThemeIcon>
              <div>
                <Title order={4} size="h5">
                  Oxford C1 English Certification
                </Title>
                <Text size="sm" c="dimmed">
                  Advanced Proficiency
                </Text>
              </div>
            </Group>
          </Paper>

          <Paper
            shadow="sm"
            radius="xl"
            p="lg"
            style={{
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              background: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(0, 136, 204, 0.1)',
              boxShadow: '0 4px 16px rgba(0, 98, 163, 0.06)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 98, 163, 0.14)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 98, 163, 0.06)';
            }}
          >
            <Group>
              <ThemeIcon
                size={50}
                radius="md"
                variant="gradient"
                gradient={{ from: 'cyan', to: 'blue', deg: 45 }}
              >
                <IconCertificate size={26} />
              </ThemeIcon>
              <div>
                <Title order={4} size="h5">
                  GDSC Leadership Training
                </Title>
                <Text size="sm" c="dimmed">
                  Google Developer Students Club
                </Text>
              </div>
            </Group>
          </Paper>
        </SimpleGrid>

        <Title order={3} mb="lg" ta="center" style={{
          background: 'linear-gradient(135deg, #7c3aed, #9333ea)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 700,
        }}>
          Volunteering & Leadership
        </Title>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
          <Paper
            shadow="sm"
            radius="xl"
            p="xl"
            style={{
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              background: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(10px)',
              borderLeft: '3px solid #00a1e6',
              border: '1px solid rgba(0, 161, 230, 0.15)',
              boxShadow: '0 4px 20px rgba(0, 98, 163, 0.07)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 16px 40px rgba(0, 98, 163, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 98, 163, 0.07)';
            }}
          >
            <Group mb="md">
              <ThemeIcon
                size={50}
                radius="md"
                variant="gradient"
                gradient={{ from: 'cyan', to: 'blue', deg: 45 }}
              >
                <IconTrophy size={26} />
              </ThemeIcon>
              <div>
                <Title order={4} size="h5">
                  Head of Flutter Team
                </Title>
                <Badge variant="light" color="cyan" size="sm">
                  09/2022 – 08/2024
                </Badge>
              </div>
            </Group>
            <Text size="sm" c="dimmed" style={{ lineHeight: 1.6 }}>
              Led a team of Flutter developers at Google Developer Students Club - Future Academy, Egypt.
              Fostered innovation and collaboration in developing applications.
            </Text>
          </Paper>

          <Paper
            shadow="sm"
            radius="xl"
            p="xl"
            style={{
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              background: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(147, 51, 234, 0.15)',
              boxShadow: '0 4px 20px rgba(109, 40, 217, 0.07)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 16px 40px rgba(109, 40, 217, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(109, 40, 217, 0.07)';
            }}
          >
            <Group mb="md">
              <ThemeIcon
                size={50}
                radius="md"
                variant="gradient"
                gradient={{ from: 'violet', to: 'grape', deg: 45 }}
              >
                <IconUsers size={26} />
              </ThemeIcon>
              <div>
                <Title order={4} size="h5">
                  Flutter Core Team Member
                </Title>
                <Badge variant="light" color="violet" size="sm">
                  09/2022 – 08/2024
                </Badge>
              </div>
            </Group>
            <Text size="sm" c="dimmed" style={{ lineHeight: 1.6 }}>
              Contributed to developing Flutter applications for community projects at Google Developer Students
              Club - Sohag University, Egypt.
            </Text>
          </Paper>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
