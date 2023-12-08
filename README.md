# Genius AI Platform

Welcome to Genius, the AI-powered platform designed to assist you in various aspects of life. 
<div align="left">
  <img height="400" src="https://res.cloudinary.com/dvlinx4rz/image/upload/v1701969686/AI-SAAS_omk503.png"  />
</div>
Genius offers a range of capabilities across different sections:

## Conversation
Engage in conversation, ask questions, and receive prompt answers. Utilize this feature to interact with an AI assistant capable of understanding and responding to your queries, providing insights, and engaging in discussions.

## Image Generation
Create images based on your descriptions or preferences. Describe the visuals you want to see, and let the AI generate images accordingly. Experiment with different descriptions to witness diverse image outputs.

## Video Generation
Describe what you envision and witness the final result. Craft your vision through descriptions, and the AI will generate a video based on your input. Explore the possibilities of turning ideas into visual content.

## Music Generation
Explore your musical side—compose, play guitar, bass, or describe the tunes you want to hear. Engage with AI to create music or describe melodies, allowing the platform to generate musical compositions based on your input.

## Code Generation
Discover the potential of AI in coding—could this replace developers? Who knows? Let's find out! Utilize this feature to experiment with AI-generated code snippets or explore how AI interprets and generates code based on your descriptions. 

---

## Pricing and Subscriptions

Genius offers a trial experience with **5 free attempts** for each feature. Afterward, users have the option to subscribe monthly for unlimited access to the application's functionalities.

### Subscription Details
- **Trial Period:** Experience Genius with 5 free attempts per feature.
- **Monthly Subscription:** Gain unlimited access upon subscription.

### Payment Information
The payment system is currently in the testing phase, allowing users to explore the full potential of Genius without charges. Any inquiries or questions regarding payments can be directed to our manager by clicking on the button in the bottom right corner. Our manager is available to respond promptly and provide informative assistance.

Feel free to explore the trial version and discover the capabilities of Genius!

---
  
 ## Technologies Used

- React
- Tailwind CSS
- Next.js
- Prisma
- MongoDB
- Clerk
- Shadcn/ui
- Stripe
- Replicate AI
- Open AI
- Crisp
- Vercel

## Installation and Setup

### Cloning the repository

```shell
git clone https://github.com/TaurusVB/AI-SAAS.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=

REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=

STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Start the app

```shell
npm run dev
```
