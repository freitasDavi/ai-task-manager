import { faker } from '@faker-js/faker';
import prisma from './prisma';

async function seedTasks() {

  
  // Create 20 tasks
  await Promise.all(
    Array.from({ length: 20 }).map(async () => {
      const steps = JSON.stringify([
        { step: 1, description: faker.lorem.sentence() },
        { step: 2, description: faker.lorem.sentence() },
        { step: 3, description: faker.lorem.sentence() }
      ]);

      const acceptanceCriteria = JSON.stringify([
        { criterion: 1, description: faker.lorem.sentence() },
        { criterion: 2, description: faker.lorem.sentence() }
      ]);

      const suggestedTests = JSON.stringify([
        { test: 1, description: faker.lorem.sentence() },
        { test: 2, description: faker.lorem.sentence() }
      ]);

      const chatHistory = JSON.stringify([
        { role: 'user', content: faker.lorem.paragraph() },
        { role: 'assistant', content: faker.lorem.paragraph() }
      ]);

      return prisma.task.create({
        data: {
          title: faker.lorem.sentence(),
          description: faker.lorem.paragraphs(2),
          steps,
          estimated_time: `${faker.number.int({ min: 1, max: 8 })} hours`,
          implementation_suggestion: faker.lorem.paragraphs(1),
          acceptance_criteria: acceptanceCriteria,
          suggested_tests: suggestedTests,
          content: faker.lorem.paragraphs(3),
          chat_history: chatHistory
        },
      });
    })
  );

  console.log('Task seed data created successfully!');
}

async function main() {
  await prisma.post.deleteMany();
  await prisma.task.deleteMany();
  await prisma.user.deleteMany();
  // Create 20 users
  const users = await Promise.all(
    Array.from({ length: 20 }).map(async () => {
      return prisma.user.create({
        data: {
          email: faker.internet.email(),
          name: faker.person.fullName(),
          age: faker.number.int({ min: 18, max: 80 }),
        },
      });
    })
  );

  // Create 60 posts (3 per user)
  await Promise.all(
    users.flatMap((user) =>
      Array.from({ length: 3 }).map(() => 
        prisma.post.create({
          data: {
            title: faker.lorem.sentence(),
            content: faker.lorem.paragraphs(2),
            published: faker.datatype.boolean(),
            author_id: user.id,
          },
        })
      )
    )
  );

  // Seed tasks
  await seedTasks();

  console.log('All seed data created successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 