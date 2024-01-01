# Flow Brain
Welcome to our Intelligent Note-Taking App, a powerful tool that leverages OpenAI, Pinacone, Next.js, Shadcn UI, and Clerk to provide a seamless and intelligent note-taking experience.

## Features

- Integrated with OpenAI, enabling you to interact with AI for enhanced note-taking.
- Used Pinacone for the vector embedding
- Used Next JS for optimal performance with server-side rendering.
- Utilized Prisma ORM for seamless database interactions, coupled with MongoDB as the underlying database.
- Users can add, edit, and delete the notes.
- Used the Clerk for the seamless authentication.

## Installation

1. Clone the repository:
```bash
git clone https://github.com/sudip57/ai-note-app.git 
```
2. Change to the project directory:
```bash
cd ai-note-app
```
3. Install the dependencies:
```bash
npm install
```
4. Configure API keys and database connection:
- Open the `.env.local` file and add your OpenAI, Clerk, and MongoDB connection details:
```bash
DATABASE_URL
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY
NEXT_PUBLIC_CLERK_SIGN_IN_URL
NEXT_PUBLIC_CLERK_SIGN_UP_URL 
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL 
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL 
OPENAI_API_KEY 
PINECONE_API_KEY
```
5. Start the development server:
```bash
npm run dev
```
6. Open your web browser and visit http://localhost:3000 to see the app in action.


## Screenshots
- Add Note
![flowbrainadd](https://github.com/sudip57/ai-note-app/assets/79646606/1e078e93-5853-41f7-af01-43cd85624bb3)

- Edit Note
![flowbrainedit](https://github.com/sudip57/ai-note-app/assets/79646606/f8e2c8f0-4b98-4af9-809f-6936495e3538)

- Interacting with OpenAI integrated chatbot
  ![flowbite](https://github.com/sudip57/ai-note-app/assets/79646606/a58ad128-8241-4229-beb2-e66bdccd6f1a)

## Technologies Used
- Next JS
- Typescript
- Prisma
- MongoDB
- Tailwind CSS
