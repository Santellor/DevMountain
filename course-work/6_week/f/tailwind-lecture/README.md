This repo is an alternative to the bootstrap lecture in unit 6 of the legacy course. 

## Go through slides about CSS frameworks

Why CSS frameworks are better. 

## Why Tailwind? 

Pros and cons of component libraries like Bootstrap:
 - Efficiency and consistency. Having everyone use prebuilt components and/or grids is faster to develop and ensures things will look consistent throughout the site. 
 - You are limited to the options in the library and the perscribed uses for those components. 

### Popularity:
- Fast growing and one of the most popular styling libraries for React
- Excellent documentation

### Benefits: 
- __Consistency and reusability__. Because you're using predefined utility classes, styling stays consistent between different developers. 
- __Customizability__. Even though you're staying consistent with prebuilt utility classes, you have full customization of how you implement them. Meaning you're never limited by pre-determined options in a component library. 
- __Scalability and performance__. Tailwind is highly performant and only loads CSS that is actually being used in your HTML, reducing load times considerably. It also scales extremely well because of the atomic nature (meaning that the utility classes are at the very root of each element, we're building with the smallest pieces first). 
- __Responsive oriented__. Tailwind makes responsive design incredibly easy and intuitive. 
- __Faster development__. Writing inline classes is counter intuitive at first, but once you get used to it it's a significantly faster way to style. 
- __Component driven__. DRY is a core concept of CSS, because it's so easy to repeat yourself when styling. This is still true in Tailwind, but the atomic nature of the utility classes lends itself really well to effectively building reusable components. 


## Installing Tailwind

Follow the docs for installation and setup instructions. 

### Tailwind config file

`content`. The config file is setup to find any JS or TS files in the `src` folder and apply any class found in them. 

`theme`. We'll use this later to define custom utility classes for our app. 

There are other config options, such as `plugins`, but we're not going to go into them here as they're more advanced topics. 

## Using Tailwind utility classes

How to use the classes. 

Finding what you need in the docs.

Cheat sheet.

Extension. 

### How does tailwind work? 

Tailwind is designed around pre-built `utility classes`. These classes are written directly in your JSX in React components. 

But wait, isn't inline CSS super annoying and inefficient? Generally, yes. But tailwind is booming in popularity because of the following reasons:
- Using prebuilt classnames is much more readable and condensed than inline CSS
- Tailwind is highly consistent because every developer is using the same utility classes
- Along with being efficient and consistent, Tailwind is highly customizable and allows you as the developer to maintain full control of your styling. 

Demonstrate styling using Tailwind classes. 

## Creating Custom Classes
Adding in our custom colors to config file. Demo extending colors vs replacing the default options.

## Responsive Design
Using the premade breakpoints.

### Hamburger menu
