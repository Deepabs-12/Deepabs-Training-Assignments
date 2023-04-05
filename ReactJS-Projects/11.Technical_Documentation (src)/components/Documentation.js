import React, { useState } from 'react';


const Documentation = () => {
  const [selectedTopic, setSelectedTopic] = useState('');

  const topics = [
    {
      name: 'HTML',
      description:
        'HTML stands for Hyper Text Markup Language, which is the standard markup language for creating web pages.HTML consists of a series of elements.HTML elements tell the browser how to display the content.HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.',
    },
    {
      name: 'CSS',
      description:
        'CSS stands for Cascading Style Sheets, which is a style sheet language used for describing the look and formatting of a document written in HTML.CSS saves a lot of work. It can control the layout of multiple web pages all at once.External stylesheets are stored in CSS files.A CSS rule consists of a selector and a declaration block.The selector points to the HTML element you want to style.The declaration block contains one or more declarations separated by semicolons.Each declaration includes a CSS property name and a value, separated by a colon.Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.',
    },
    {
      name: 'JavaScript',
      description:
        'JavaScript is a programming language used to create interactive effects within web browsers.One of many JavaScript HTML methods is getElementById(). JavaScript and Java are completely different languages, both in concept and design.In HTML, JavaScript code is inserted between <script> and </script> tags. A JavaScript function is a block of JavaScript code, that can be executed when "called" for.You can place any number of scripts in an HTML document.Scripts can be placed in the <body>, or in the <head> section of an HTML page, or in both.',
    },
    {
      name: 'ReactJS',
      description:
        'ReactJS is a JavaScript library used for building user interfaces or UI components.The React documentation assumes some familiarity with programming in the JavaScript language.React creates a VIRTUAL DOM in memory.React finds out what changes have been made, and changes only what needs to be changed.Current version of React.JS is V18.0.0 (April 2022).React.JS was first used in 2011 for Facebook.Facebook Software Engineer, Jordan Walke, created it.Current version of create-react-app is v5.0.1 (April 2022).create-react-app includes built tools such as webpack, Babel, and ESLint.',
    },
  ];

  const handleTopicClick = (name) => {
    setSelectedTopic(name);
  };

  return (
    <div className="documentation">
      <div className="topics">
        {topics.map((topic) => (
          <button
            key={topic.name}
            onClick={() => handleTopicClick(topic.name)}
            className={selectedTopic === topic.name ? 'active' : ''}
          >
            {topic.name}
          </button>
        ))}
      </div>
      <div className="description">
        {selectedTopic && (
          <>
            <h2>{selectedTopic}</h2>
            <p>
              {topics.find((topic) => topic.name === selectedTopic).description}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Documentation;
