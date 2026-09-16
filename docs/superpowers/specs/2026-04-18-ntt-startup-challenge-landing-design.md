# NTT Startup Challenge Landing Page Design

Date: 2026-04-18
Workspace: `/Users/mm/Documents/landing-nttstartupchalenge`
Design Surface: Paper first, then implementation in Next.js

## Goal

Create a focused landing page for `NTT Startup Challenge` with a premium corporate feel. The page should highlight the event title immediately, use a video-based hero background, provide a countdown to the event date, briefly explain the event, and repeat the primary actions clearly.

This design is intentionally minimal. It should avoid feature creep and keep the experience centered on:

- strong first impression
- clear event identity
- simple information flow
- two primary calls to action: `Info Event` and `Register Now`

## Constraints And Decisions

- Work in the `landing-nttstartupchalenge` workspace
- Design first in Paper
- Future implementation target is Next.js
- Visual tone: dark corporate event landing
- Reference visual language from `/Users/mm/Documents/ntt-startupchallange`
- Hero title: `NTT Startup Challenge`
- No supporting hero subtitle or eyebrow text
- Hero CTA buttons are visual only for now
- Countdown target: `1 May 2026, 00:00 WIB`
- Use `Plus Jakarta Sans` across the entire page
- Main sections only:
  - Hero
  - Countdown
  - About Us
  - Closing CTA

## Reference Visual Direction

The reference project uses a dark presentation with NTT blues, deep navy backgrounds, bold uppercase typography, and strong CTA contrast. The landing page should inherit that tone without copying the source page one-to-one.

Core colors to reuse:

- Primary blue: `#256fb8`
- Deep blue: `#003087`
- Dark navy: `#0A1428`
- Darker surface navy: `#050C1F`
- Text on dark surfaces: near-white

Visual principles:

- dark-first across all sections
- premium and official rather than playful
- restrained use of color with focused blue accents
- strong contrast for readability over video
- clean spacing with generous breathing room
- minimal copy and clear visual hierarchy
- bold uppercase display typography in key headings

## Recommended Design Approach

Chosen approach: `Dark Event Spotlight`

Why this approach:

- fits the elegant corporate direction best
- works naturally with a full-screen hero video
- gives the title strong focus without needing extra content
- supports a small number of sections without feeling empty

Rejected alternatives:

- `Immersive Boardroom`: visually strong, but too dramatic for a simple landing page
- `Clean Corporate Brief`: safe and readable, but reduces the impact of the hero video

## Page Structure

### 1. Hero

Purpose:
Establish event identity immediately and create a premium first impression.

Layout:

- full-screen hero
- background video fills the entire hero area
- dark navy overlay above the video for contrast
- centered or slightly left-centered title block
- two CTA buttons under the title

Content:

- Heading: `NTT Startup Challenge`
- CTA 1: `Info Event`
- CTA 2: `Register Now`

Styling notes:

- title should be large, bold, uppercase, and highly legible
- overlay should be dark enough that video motion never harms readability
- buttons should feel polished and official, matching the dark CTA style from the reference
- `Register Now` should be the primary filled button
- `Info Event` should be the secondary outlined or lighter button

### 2. Countdown

Purpose:
Introduce urgency and provide a clear event timeline cue.

Layout:

- section directly after hero
- contained panel or card presentation
- centered heading and countdown grid

Content:

- Small heading: `Event Countdown`
- Countdown target: `1 May 2026, 00:00 WIB`
- Units: days, hours, minutes, seconds

Styling notes:

- use a clean dark panel treatment with subtle border contrast
- numbers should be prominent and easy to scan
- labels should remain secondary and understated

### 3. About Us

Purpose:
Explain the event briefly without turning the page into a long information site.

Layout:

- two-column desktop layout
- left column for heading
- right column for short paragraph copy

Content direction:

The copy should be inspired by the existing `ntt-startupchallange` project and rewritten into a shorter landing-page version. The paragraph should position the program as a platform that connects startups with opportunity, collaboration, and growth within the NTT ecosystem.

Draft copy intent:

`NTT Startup Challenge is a platform that brings together innovation, collaboration, and growth opportunities for promising startups. Through this initiative, NTT opens the door for founders to connect with industry insight, strategic networks, and a broader innovation ecosystem.`

Styling notes:

- avoid dense text blocks
- keep line length comfortable
- preserve a premium event-brand feel through spacing and typography

### 4. Closing CTA

Purpose:
Repeat the primary action after the user has consumed the page.

Layout:

- distinct section near the bottom
- higher contrast than About Us
- centered call-to-action block

Content:

- short action-focused heading
- repeated buttons:
  - `Info Event`
  - `Register Now`

Styling notes:

- should feel like a refined closing invitation, not a hard sales block
- can use a darker surface with subtle border or glow treatment

## Paper Artboard Recommendation

Start with one desktop artboard for the initial design pass.

Recommended artboard:

- Desktop: `1440 x 900` minimum visible frame
- Extend vertically to fit all four sections in one landing-page flow

Composition notes:

- hero occupies the first full viewport
- countdown sits as a clearly separated second band
- about section uses quieter spacing and lighter density
- closing CTA restores emphasis before the end of the page

## Typography Direction

Typography should communicate authority and clarity.

Guidance:

- use `Plus Jakarta Sans` across all headings, labels, buttons, and body copy
- hero and section headlines should be bold, uppercase, and compact
- body copy should stay neutral and readable
- prioritize contrast, spacing, and hierarchy over decorative type choices

## Motion And Media Guidance

The background video should support the title, not compete with it.

Requirements:

- smooth loop
- no abrupt cuts
- moderate visual activity
- works well under a dark overlay
- remains readable when paused on any frame

Recommended asset structure for future Next.js implementation:

- `/Users/mm/Documents/landing-nttstartupchalenge/public/videos/hero/ntt-startup-challenge-hero.mp4`
- optional fallback: `/Users/mm/Documents/landing-nttstartupchalenge/public/videos/hero/ntt-startup-challenge-hero.webm`

## Future Next.js Page Structure

This is not implementation yet, but the design assumes a simple file structure when development begins.

Likely structure:

- main entry: `src/app/page.jsx` or `src/app/page.tsx`
- hero video assets from `public/videos/hero`
- reusable sections can later be split into:
  - hero section
  - countdown section
  - about section
  - closing cta section

## Interaction Behavior

Initial design scope is visual only.

For now:

- CTA buttons do not need final links
- countdown is conceptually defined but not yet implemented
- navigation, forms, and additional sections are out of scope

When implemented later:

- `Info Event` may link to a dedicated event information page or on-page section
- `Register Now` may link to a registration page or external form

## Error Handling And Edge Cases

These are design-level expectations for the future implementation.

- hero layout must remain readable if the video fails to load
- fallback should support a poster image or dark background treatment
- countdown should degrade gracefully when JavaScript is unavailable or the event date passes
- CTA buttons should still look intentional when link targets are not yet active during design review

## Testing Expectations

Once implementation begins, validate at minimum:

- readability over the hero video
- layout balance on desktop
- responsive behavior on tablet and mobile
- countdown date correctness for `1 May 2026, 00:00 WIB`
- CTA prominence and visual hierarchy

## Out Of Scope

The following are intentionally excluded from this design:

- speaker lists
- partner logos
- agenda breakdown
- FAQ
- registration form
- animations beyond basic page polish
- full content expansion from the reference site

## Final Design Summary

The landing page should feel formal, bold, dark, and concise. It uses a full-screen corporate video hero, a clear countdown, a short About Us explanation, and a repeated CTA block. The visual system should inherit NTT's blue and navy identity from the reference project while staying simpler and more focused than the full reference site, with `Plus Jakarta Sans` used consistently throughout.
