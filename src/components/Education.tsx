import { Container, Title, Box, Paper, SimpleGrid, Text, Badge, Group, ThemeIcon } from '@mantine/core';
import {
  IconSchool,
  IconCertificate,
  IconUsers,
  IconTrophy,
  IconLanguage,
} from '@tabler/icons-react';

export function Education() {
  return (
    <Box
      id="education"
      style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e0f7ff 50%, #f3e8ff 100%)',
      }}
    >
      <Container size="lg">
        <Title
          order={2}
          style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '3rem',
            background: 'linear-gradient(45deg, #0088cc, #9333ea)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Education & Leadership
        </Title>

        <Paper
          shadow="lg"
          radius="lg"
          p="xl"
          mb="xl"
          style={{
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer',
            backgroundColor: '#ffffff',
            border: '1px solid #e0e0e0',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.02)';
            e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 161, 230, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
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

        <Title order={3} mb="lg" ta="center" style={{ color: '#0088cc' }}>
          Certifications
        </Title>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg" mb="xl">
          <Paper
            shadow="md"
            radius="lg"
            p="lg"
            style={{
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
              border: '1px solid #e0e0e0',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
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
            shadow="md"
            radius="lg"
            p="lg"
            style={{
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
              border: '1px solid #e0e0e0',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
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

        <Title order={3} mb="lg" ta="center" style={{ color: '#9333ea' }}>
          Volunteering & Leadership
        </Title>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
          <Paper
            shadow="lg"
            radius="lg"
            p="xl"
            style={{
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
              backgroundColor: '#ffffff',
              border: '2px solid #00a1e6',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
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
            shadow="lg"
            radius="lg"
            p="xl"
            style={{
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
              backgroundColor: '#ffffff',
              border: '2px solid #9333ea',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
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
