# Youtube Video Search App

A simple app for searching videos from youtube. Basically, you type something and the app brings the videos related to that.
It was written in React and Redux.

### Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

[Node - Click to download](https://nodejs.org/en/)

After downloading Node, download Typescript with npm (node package manager):

```
npm install -g typescript
``` 

To use this app, you need to create an API key for using youtube API. To do that, access this turorial:
[Get a key from youtube API] (https://developers.google.com/youtube/v3/getting-started?hl=pt-br)

After creating your API Key, you need to add in the index.js file:

``` typescript
// Your Youtube API Key goes here
const YOUTUBE_API_KEY = "";

```
#### Downloading this repository
Download this repo using the ```git clone``` command:

```
> git clone https://github.com/Rphmelo/Youtube-video-search-app.git
```

### Installing

A step by step series of examples that tell you how to get a development env running

Install the dependencies

```
npm install
```

After installing the dependencies, the given command will run the app:

```
npm start
```

## Built With

* [React](https://reactjs.org/) 
* [Redux](https://redux.js.org/) 
* [Typescript](https://www.typescriptlang.org/) 

## Authors

* **Raphael de Melo Silva** - *Initial work* - [Rphmelo](https://github.com/Rphmelo)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
