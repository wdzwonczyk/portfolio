---
title: WatchBuddy
publishDate: 2023-05-06 00:00:00
img: /portfolio/assets/watchbuddy/wb-mockups-preview.png
img_alt: WatchBuddy mobile app
imgLogo: /portfolio/assets/logo/wb-logo.png
imgLogoAlt: WatchBuddy logo
metaTitle: WatchBuddy | Mobile App Case Study
metaDescription: |
  Explore the redesign of the Studiz mobile app case study. Discover how I enhanced the user experience, created a design system, and improved the flow for students. Gain insights into the development process and design decisions for a smarter and more rewarding student experience.
roles:
  - UX/UI Designer
tools:
  - Figma
  - Figma Variables
  - Design System
devices:
  - mobile (iOS)
exploreLink: https://www.figma.com/files/project/90620437/Apartament-Diamond?fuid=905089920007374278
exploreText: Check the project in Figma
---

WatchBuddy is a passion project, a mobile app designed to serve as your personal movie and TV-show recommendation companion. We've all been there, struggling to decide what to watch when we're in the mood for entertainment. This app is here to be the solution you've been seeking, making those indecisive moments a thing of the past.

## Main Idea

The project's inception occurred in June 2023, right after Figma's exciting FigConfig event, where they unveiled a plethora of new features for both designers and developers. This inspired the idea for the project, aiming to provide me with an opportunity to put these new features into practice and expand my knowledge in using them effectively.

## Design Choices

The design concept for the movie recommendation app revolves around simplicity, cleanliness, and user-friendliness. With a focus on iOS, native components, thoughtfully adjusted to suit the app's needs, play a key role in enhancing the overall experience. The color palette was carefully chosen to embody a minimalistic, elegant, and clean style, aligning perfectly with the app's essence.

![WatchBuddy mobile app - design colors foundation](/portfolio/assets/watchbuddy/wb-foundation-colors.jpg)

The primary color, #060606, pairs harmoniously with a white background, exuding a sense of sophistication and simplicity. This combination enhances the app's visual appeal, ensuring a smooth and intuitive navigation experience for users.

As a decor color, #F9C612 serves to captivate users' attention, instilling hope and positivity. This thoughtful choice aims to alleviate the common struggle of choosing a movie, giving users the impression that their movie selection quandaries can be resolved instantly.

Lastly, the color #fff (white) serves as the backdrop, providing a clean canvas that complements the minimalistic design. This neutral white hue ensures that users' focus remains on the movie recommendations and app's content, without any distractions.

![WatchBuddy mobile app - typography foundation](/portfolio/assets/watchbuddy/wb-foundation-typography.jpg)

In terms of typography, a combination of Rubik and Inter was selected. Rubik takes center stage for headers, commanding attention with its stylish and eye-catching appearance. On the other hand, Inter is employed for default text, ensuring seamless readability and effortless scanning. This typographic pairing creates a harmonious balance between aesthetics and usability, allowing users to comfortably browse movie options and reviews.

Overall, the movie recommendation app's design strikes a perfect balance between aesthetics and functionality, providing users with an engaging, intuitive, and visually appealing experience. The careful choice of colors and typography fosters a sense of confidence and enjoyment, making the process of discovering personalized movie recommendations a delightful and rewarding endeavor.

## Design System

Like my recent projects, this one is also built on a Design System comprising two key parts: Foundation and components. In the Foundation file, you'll find information about colors and typography.

![WatchBuddy mobile app - design colors foundation as variables](/portfolio/assets/watchbuddy/wb-foundation-colors-variables.jpg)

Regarding colors, the process of creating and using them has been significantly improved, thanks to Figma's updates released in June 2023. These updates introduced variables, making color management much more efficient and quicker. To optimize the process, I created a new set of local variables named "Primitives," grouping all color shades under categorized color names like brand and grey. Additionally, I established a separate collection called "Tokens," where I tokenized all colors and organized them by their purposes, using semantic naming like "buttons/button-primary."

![WatchBuddy mobile app - typography foundation as local styles](/portfolio/assets/watchbuddy/wb-foundation-typography-local-styles.jpg)

In the typography section, I included examples of used text, added as Local Styles to maintain consistency and coherence.

Unfortunately, the project was created before the option to work on variables for typography became available. However, as soon as Figma releases this feature, I plan to update the project accordingly. In the meantime, I've added typography styles to Figma's Local Styles to ensure a consistent and streamlined approach.

![WatchBuddy mobile app - design system components](/portfolio/assets/watchbuddy/wb-design-system-components.jpg)

When it comes to components, they are thoughtfully categorized into types, such as buttons, cards, and more. Each component possesses its distinct properties and variants, ensuring easy and rapid utilization throughout the design process. This division enhances usability and accelerates workflow, making the design process more efficient and user-friendly.

## Dark Mode

![WatchBuddy mobile app - dark mode](/portfolio/assets/watchbuddy/wb-dark-mode.jpg)

To try how variables work, I decided to create a dark mode for the WatchBuddy app. The way how to create it, is extremely easy. To do this we need to create a new variable mode and adjust colors as a substitute for a light mode. Then the correct mode as to be chosen in canvas and colors will adjust automatically to the mode. 

## Mockups

![WatchBuddy mobile app - mockups](/portfolio/assets/watchbuddy/wb-mockups.jpg)

The Home page features a slider showcasing app-generated movie and TV show recommendations tailored to the user's interests. To avoid overwhelming users, I decided to present just three examples of movies or shows. When users tap on a movie, they can access detailed information, including the description, cast, images, and user reviews. They also have the option to add any movie to their Watch List, which will be accessible in the Profile section.

For more personalized results, users can click on the "Get personalized recommendation" button. This action opens an inline modal where users can set their preferences, such as content type, movie genres, and preferred streaming providers. The use of an inline modal ensures a smooth and familiar experience, akin to using a native mobile app.

The search results are displayed similarly to the Home page, using a slider to present intriguing movie options. Users can choose a movie and explore more details about it.

To access the Profile section, users can click on the user icon on the Home page. The Profile section is presented as a card modal, creating a visually distinct and attention-grabbing interface for the users to interact with while keeping it separated from the underlying app context. This approach ensures a user-friendly and immersive experience.

## Prototype

![WatchBuddy mobile app - prototype](/portfolio/assets/watchbuddy/wb-prototype.jpg)

In terms of the prototype, it's still in the early stages, which brings some limitations in creating a fully animated version. The main challenge arises when using transitions with variables, as it results in instant changes without the possibility of smart animations.

Let's take the Login page as an example. By default, the keyboard is hidden, and clicking on the input should display it. To keep all prototype elements on one canvas, I used a variable named "userNameKeyboard" with a value of "false" (hidden). When the input is clicked, the value changes to "true," revealing the keyboard. However, due to the variable being associated with the keyboard layer, I cannot implement smooth animations, and everything happens instantly.

Despite these limitations, variables open up new possibilities, and improvements are expected in the future. For now, the prototype showcases some impressive functionalities. For instance, the Login form is fully functional, allowing users to type real text into the text fields. Moreover, the form includes validation to ensure that the provided data is correct and meets the app's requirements. These advancements demonstrate the potential of variables and pave the way for even more incredible features in future iterations.

## Conclusions

This project provided me with a chance to explore and use the latest Figma features, helping me improve my skills. By staying up-to-date with these modern design methods, I can now work more efficiently, resulting in better workflows and faster progress on future projects.