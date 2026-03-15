---
title: 'Ponova by OTP Bank — Dealer CRM'
description: 'CRM cabinet for car dealers and resellers integrated with OTP Bank. Phone-based auth, role management, vehicle listings, and in-app credit application flow.'
thumbnail: '/images/services/panova-thumbnail.png'
coverImage: '/images/services/panova-background.jpg'
mainImage: '/images/services/panova-main.png'
badge: 'Commercial'
featured: true
techStack: ['React', 'TypeScript', 'TanStack Query', 'Tailwind', 'shadcn/ui']
liveUrl: 'https://cabinet.ponova.com.ua'
codeUrl: ''
---

### Project Overview

Ponova is a CRM web cabinet for the Ukrainian automotive market, built in partnership with OTP Bank. It serves two types of users: individual entrepreneurs who resell cars privately, and car dealerships with full teams of managers.

The system handles the full dealer workflow — from account registration and team management to vehicle listings and issuing car loans directly through OTP Bank without leaving the platform.

### Auth Flow

Authentication is passwordless — users register and log in via phone number and SMS confirmation code. Upon first login the user completes a profile setup choosing their account type: private seller or dealer. The backend issues a Laravel Sanctum Bearer token used for all subsequent requests.

### User Roles & Team Management

Dealers can operate as a team. The account owner can invite managers, assigning them a `manager` role under their dealership. Each manager accesses the same inventory and client data within the owner's account scope, while permissions are scoped by role.

### Key Features

- Phone + SMS authentication with rate-limited resend (3 attempts / 2 min)
- Two account types: private seller and dealer with named company and city
- Owner can add and manage team members with role-based access
- Vehicle catalog management — add, edit, and track car listings
- OTP Bank integration — submit credit applications for buyers directly from the cabinet
- Profile completion flow for new users after first login
- Fully responsive UI built with shadcn/ui components

### Tech Stack

React with TypeScript for a type-safe component architecture. TanStack Query handles all server state, caching, and background refetching. Tailwind CSS with shadcn/ui for a clean, accessible interface. API communication follows Bearer token auth with structured JSON error handling.
