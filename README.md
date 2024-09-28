**Deployed URL :** [https://cloudsek-assignment-alpha.vercel.app/](https://cloudsek-assignment-alpha.vercel.app/)

**Screenshots of Web View**

![Web View Screenshot](https://i.postimg.cc/XvxynTbQ/Cloud-SEK-Assignment.png)

![Web View Screenshot](https://i.postimg.cc/DwTg0k9T/Cloud-SEK-Assignment-1.png)

**Screenshot of Mobile View**

![Web View Screenshot](https://i.postimg.cc/bwpx80nY/Whats-App-Image-2024-09-28-at-8-37-31-AM.jpg)

## To run the project on your machine, follow the given steps:-

1. **Install Git**: Ensure that Git is installed on your machine. If not, do it by the following link:
   https://git-scm.com/downloads

2. **Open a Terminal or Command Prompt**: Access your terminal (macOS/Linux) or command prompt (Windows). You can also use Git Bash if you’re on Windows.

3. **Navigate to the Desired Directory**: Change to the directory where you want to clone the repository. Use the "cd" command to navigate. For example:

```bash
cd path/to/your/directory
```

4. **Clone the Repository**: Use the `git clone` command followed by the given repository URL:
   https://github.com/apathak2108/the-alter-office-assignment.git

6. **Enter the Project Directory**: After cloning, navigate into the cloned repository's directory by entering given command:
   cd your-repo-name

## Running the Project

After cloning the repository, follow these steps to set up and run the React project locally:

6. **Install Dependencies**: Navigate to the project directory and install the necessary dependencies:

```bash
npm install
```

7. **Start the Development Server**: Run the following command to start the development server:

```bash
npm start
```

Now the project will run on http://localhost:3000

## Additional Information

The tech stack of this project is **React, TypeScript, and Redux**

### Theme

This project uses a custom theme built to maintain consistency in the look and feel of the application across all components. The theme is defined globally and is applied using styled-components. The theme is implemented using **styled-components** and injected into the application via the **ThemeProvider**. 

### Styling

This project uses a combination of styling methods:

- **Styled-Components**: I have used [styled-components](https://styled-components.com/) for component-level styling. It allows writing CSS in JavaScript and ensures styles are scoped to components.

- **Vanilla CSS**: Some global styles and layout-related CSS are written using traditional CSS. This is used for styles that apply across multiple components or for legacy styles.


### State Management

- **Redux**: The application uses [Redux](https://redux.js.org/) for state management. Redux is set up in the `src/redux` directory, with reducers combined in `rootReducer.js`.

- **Actions and Reducers**: Defined in the `src/redux` directory. Each module has its own slice.

- **Usage**: Components use `useDispatch` and `useSelector` hooks from `react-redux`.
