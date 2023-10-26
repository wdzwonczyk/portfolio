---
title: RawShare
publishDate: 2023-05-05 00:00:00
img: /portfolio/assets/rawshare/rs-list-home-page2.png
img_alt: RawShare mobile web application
imgLogo: /portfolio/assets/logo/rs-logo.png
imgLogoAlt: RawShare logo
metaTitle: RawShare - Share Food Locally | Web App Case Study
metaDescription: |
  Explore RawShare, a web app designed to help users share their food locally. Discover how strong research and a well-defined design system led to an intuitive user experience. See the mockups, code snippets, and the evolution of the RawShare app in this comprehensive case study.
productType: Mobile App
roles:
  - UX/UI designer
  - Front-end developer
  - Back-end developer
tools:
  - Figma
  - FigJam
  - JavaScript
  - PHP
  - MySQL
  - Notion
devices:
  - mobile (iOS)

exploreLink: https://www.figma.com/file/BocF8eNzCFYOvj8lMDFt0I/Mockups?node-id=2003%3A14726&t=oQjitJCWdZyhCI4Y-1
exploreText: Explore the RawShare app mockups in Figma
githubRepoLink: https://github.com/Wojo3214/foodwaste-app
---

RawShare is a web app created by a group of three people for a school project. Its purpose is to allow users to share their food with other people in their area. The app is built based on strong research, including desk and field research, focus groups, surveys, and interviews with people interested in preventing food waste. Thanks to the collected information and data, we came to the conclusion that people are not fond of surprise elements (such as in TooGoodToGo) and are willing to share their food with others in their area without any extra costs.

<div class="py-2 px-4 mt-4 rounded-md bg-blue-100">
  <p>I am exicted to announce that app's design has been updated. <a href="#rawshare-20">Click here</a> to find out more about RawShare 2.0.</p>
</div>

## Main idea

The main idea of this app is to allow people to share their leftovers with others. Using a map, the user can easily locate a food item and send a request to the owner to book it. After that, the user has to pick up the food from the owner by scanning the QR code generated automatically for each request.

## Methodology

![Rawshare's research](/portfolio/assets/rawshare/rs-research.jpg)

For this project, we employed a comprehensive user research methodology to gather valuable insights from a diverse range of sources, including:

- **User Interviews:** We conducted in-depth interviews with a wide spectrum of participants, including regular individuals, administrators of food-wasting groups on social media, and representatives from local restaurants and cafes. These interviews provided us with a holistic view of user behaviors and pain points.
- **Focus Groups:** Organized focus group sessions allowed us to facilitate open discussions and brainstorming, uncovering collective insights and uncovering valuable perspectives from various regular individuals.
- **Surveys:** A structured survey was distributed to a broader audience, collecting quantitative data to identify trends, preferences, and behaviors related to food waste.
- **Competitor Research:** In-depth analysis of competitors and similar platforms allowed us to identify industry best practices, differentiate our solution, and adapt strategies based on market trends.
- **Mind-Mapping:** Utilizing mind-mapping techniques, we visually organized and synthesized research findings, enabling us to identify patterns, connections, and potential design opportunities.
- **Personas:** We developed detailed user personas to humanize our target audience, helping us make design decisions that align with their needs and motivations.

## Key insights
From our extensive research, we derived the following key insights, which informed our design process:

- **Diverse User Perspectives:** Interviews with regular individuals, group administrators, and industry representatives provided a multifaceted understanding of the food-waste landscape, highlighting varying motivations, challenges, and behaviors.
- **User Pain Points:** Through surveys and focus groups, we identified common pain points, such as confusion about food disposal guidelines and the need for a centralized platform to combat food waste effectively.
- **Behavioral Trends:** Our research illuminated behavioral trends, including the willingness of users to engage with a food-sharing platform and their preferences regarding user interface design and functionality.
- **Persona Alignment:** User personas helped us align design decisions with specific user needs and motivations, ensuring a user-centric approach throughout the project.
- **Competitive Insights:** Competitor research guided our strategic approach, allowing us to capitalize on industry best practices while introducing innovative features to differentiate our platform.

<div class="py-2 px-4 mt-4 rounded-md bg-blue-100">
  <p>This comprehensive research approach and resulting insights were instrumental in shaping our design solutions for this project. While I can't disclose specific data or sensitive details, I am more than willing to discuss the research process and insights in greater detail during an interview or meeting.</p>
</div>


## Design system

Design systems are essential these days. They improve the design process workflow and communication between designers and developers, and they allow for consistency throughout the entire solution. Keeping this in mind, we decided to create our own design system based on the components in Figma.

As shown in the picture below, we have three interconnected files: *Mockups*, *Components* and *Foundation*. In the *Foundation* file, you can find information about the colors, fonts, and spacing we decided to use.

![Rawshare's design system foundation example](/portfolio/assets/rawshare/rs-ds-foundation.png)

The design system is too vast to cover in just a few screens, so let's use the button component as an example.

![Rawshare's design system components example](/portfolio/assets/rawshare/rs-ds-components.png)

## Mockups

The app has been divided into four main sections:
- Main/Home Page
- Booked/Shared products Page
- Add new item Page
- Book item Page

In the first section, users can check food items in their area using a map. In addition, there is an option to check all products in a list view for those who prefer a more organized way of searching for information.

The *Booked/Shared* page contains a list of users' requests for booking attractive products, as well as requests from other users who would like to get some from an owner. Thanks to using a segment, users can switch between orders easily without putting in any extra effort. Also, under each order, there is a button displayed for activating the pick-up process 20 minutes before the set pick-up time.

In the *Adding new item* process, users have to choose an interesting item and click a button. After that, they will be redirected to the basket page where they can add additional items from the owner of the item they chose. This allows them to pick up more food items at the same time. Finally, users must choose a day and time when they can pick up the products. If the provided data does not match the owner's preferences, users will receive a specific message immediately.

During the *Booking* process, users select an item and click a button, which takes them to the basket page. Here, they can add more items from the same item owner, enabling them to purchase multiple food items at once. Finally, users choose a day and time to pick up the items. If the chosen date and time don't match the owner's preferences, users receive a message notifying them.

![Example of RawShare mockups](/portfolio/assets/rawshare/rs-mockups.jpg)

## Final product

![Mockups of Start and Home page](/portfolio/assets/rawshare/rs-mockups-start-home.jpg)

![Mockups of Orders and Product Item page](/portfolio/assets/rawshare/rs-mockups-orders-profile.jpg)
               
## Code

Lastly, I would like to say a few words about our code. Firstly, our app is created in JavaScript (front-end), PHP (back-end), and connected to a database (MySQL). Thanks to that, we were able to create a full-stack solution with authorization.

In this place, I will focus on the piece of code that gets data from the database on the Home Screen. First of all, we create a function called <code>getFoodProducts()</code> and put an authorized user's ID from the localStorage into the variable. Then we create an object called the user with this ID. After that, we fetch data from the food products.php file and send a GET variable called action with the value <code>getFoodProducts()</code> by the method POST and convert the user object into a JSON string.

Later, in a const data variable we get data sent from the database and display its content in HTML by using a for of loop.

![Example of front-end code snippet from RawShare mobile web app](/portfolio/assets/rawshare/rs-code-frontend.png)

Let's take a look at how this code allows us to retrieve data from the database in JavaScript. First and foremost, we need to enable sessions and include the database connection, which is located in another file called *mysql.php*. After that, we check if the GET variable exists and, if so, we check its value. We then decode the sent object as a JSON string and assign it to a variable named <code>$id</code>.

Once we have decoded the data, we can create a query that will display all items except those belonging to authorized users. We are now ready to send the request to the database and read the results using a while loop. It's important to note that each result row is added to an array called "data," which is then transferred to the "response" array and encoded. This ensures that the data we receive from the database can be easily read in JavaScript.

![Example of back-end code snippet from RawShare mobile web app](/portfolio/assets/rawshare/rs-code-backend.png)
            
## RawShare 2.0

Since the project hand-in, the app's design and the entire design system have been updated. Thanks to these changes, the app can now provide our users with an even better experience. With a sleek and modern interface, improved navigation, and new features, the RawShare app offers a seamless and intuitive user journey.

![Example of mockups that represents RawShare v.2](/portfolio/assets/rawshare/rs-mockups2.png)

## Design system 2.0

The RawShare design system has been rebuilt from scratch once again. The biggest change is the way in which all foundation information is displayed. Currently, the information is shown and structured in a user-friendly manner for both designers and developers.

![Example of new Design System that presents a Foundation section](/portfolio/assets/rawshare/rs-ds-foundation2.png)

![Example of new Design System that presents a Components section](/portfolio/assets/rawshare/rs-ds-components2.png)


## Mockups 2.0

Similar to the Design System and Components Library, the mockups have undergone an overhaul as well. All of them have been created from scratch once again, and their structure has been improved for better usability. In addition to the structural aspect, the mockups have a new look. Thanks to design changes and improvements, the app now looks cleaner, more modern, and minimalistic, while maintaining its main functionalities and flow, providing the best user experience.

![RawShare app before and after redesigning - Start page](/portfolio/assets/rawshare/rs-start-page-comparison.jpg)

![RawShare app before and after redesigning - Home page](/portfolio/assets/rawshare/rs-home-page-comparison.jpg)

![RawShare app before and after redesigning - Product item page](/portfolio/assets/rawshare/rs-product-item-comparison.jpg)

![RawShare app before and after redesigning - Orders page](/portfolio/assets/rawshare/rs-booked-comparison.jpg)

Of course, the presented images may not show every detail, flow, and aspect of the app. That's why we invite you to visit our <a href="https://www.figma.com/file/BocF8eNzCFYOvj8lMDFt0I/Mockups?node-id=2003%3A14726&t=oQjitJCWdZyhCI4Y-1" class="prototyp" target="_blank">Figma file</a> and check out the entire project there.
